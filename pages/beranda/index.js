import Head from 'next/head';
import Image from 'next/image';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import Swal from "sweetalert2";
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { donationService } from '../../services';
import DonasiCard from '../../components/DonasiCard';
import Layout2 from "../../components/Layout2";
import SkeletonLoading from "../../components/SkeletonLoading";
import API_ENDPOINT from '../../globals/api-endpoint';
import empty from '../../public/images/empty.png';


const Beranda = () => {
	const API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY
	const [image, setImage] = useState(null);
	const [value, setValue] = useState(null);
	const [coord, setCoord] = useState({ lat: null, lng: null });

	const [createObjectURL, setCreateObjectURL] = useState(null);
	const uploadToClient = (event) => {
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setImage(i);
			setCreateObjectURL(URL.createObjectURL(i));

		};
	};

	// form validation rules
	const validationSchema = Yup.object().shape({
		title: Yup.string().required("Nama Donasi tidak boleh kosong").max(30, "Maksimal 30 karakter"),
		description: Yup.string().required("Deskripsi tidak boleh kosong"),
		weight: Yup.number().required("Berat tidak boleh kosong"),
		location: Yup.string().required("Lokasi tidak boleh kosong"),
	})
	const formOptions = { resolver: yupResolver(validationSchema) }

	// get functions to build form with useForm() hook
	const { register, resetField, handleSubmit, setError, formState, setValue: setData, control } = useForm(formOptions);
	const { errors } = formState;
	function onSubmit(data) {
		const body = new FormData();
		body.append("donation_photo", image)
		body.append("title", data.title)
		body.append("lat", data.lat)
		body.append("lng", data.lng)
		body.append("description", data.description)
		body.append("weight", data.weight)
		body.append("location", data.location)
		return donationService.createDonation(body)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Berhasil Membuat Donasi",
					confirmButtonColor: "#73a700",
					timer: 2000,
				})
					.then((result) => {
						if (result.isConfirmed) {
							const close = document.getElementById('closeModal');
							close.click()
							resetField("title")
							resetField("description")
							resetField("weight")
							resetField("location")
							resetField("lat")
							resetField("lng")
							const file = document.getElementById('donation_photo');
							file.value = '';
							setCreateObjectURL("")
							setValue(null)
							mutate(`${API_ENDPOINT.donation}`)
						} else if (result.isDenied) {
							const close = document.getElementById('closeModal');
							close.click()
							resetField("title")
							resetField("description")
							resetField("weight")
							resetField("donation_photo")
							resetField("location")
							resetField("lat")
							resetField("lng")
							mutate(`${API_ENDPOINT.donation}`)
							const file = document.getElementById('donation_photo');
							file.value = '';
							setCreateObjectURL("")
							setValue(null)
							mutate(`${API_ENDPOINT.donation}`)
						} else if (result.isDismissed) {
							const close = document.getElementById('closeModal');
							close.click()
							resetField("title")
							resetField("description")
							resetField("weight")
							resetField("donation_photo")
							resetField("location")
							resetField("lat")
							resetField("lng")
							const file = document.getElementById('donation_photo');
							file.value = '';
							setCreateObjectURL("")
							setValue(null)
							mutate(`${API_ENDPOINT.donation}`)
						}
					})
			})
			.catch((error) => {
				setError("apiError", { message: error });
			});
	}
	const setCoordValue = (coord) => {
		setCoord(coord)
	}
	const handleChange = (value) => {
		setValue(value)
		geocodeByAddress(value.value.description)
			.then(results => getLatLng(results[0]))
			.then((r) => {
				setCoordValue(r)
			})
			.catch(error => console.error(error));

	};
	const onClickSubmit = () => {
		setData('location', value?.label)
		setData('lat', coord.lat)
		setData('lng', coord.lng)
	}



	//fetch donation list
	const { listDonations, isLoading, mutate } = donationService.getAllDonation()
	if (isLoading) return (
		<SkeletonLoading />
	)
	if (listDonations.error) {
		return (
			<div className="mt-3 pt-3 beranda">
				<div className="container-fluid">
					{listDonations.message}
				</div>
			</div>
		)
	}
	const donasi = listDonations.data.length
	return (
		<>
			<div className="mt-3 pt-3 beranda">
				<div className="container-fluid pt-2">
					<Head>
						<title>Beranda - Dibagiin</title>
					</Head>

					<div className="row mt-5">
						<div className="col-md-12">
							<button className="btn-style outer-shadow inner-shadow hover-in-shadow" style={{ padding: '10px 12px', border: 'none' }} data-bs-toggle="modal" data-bs-target="#formDonasi">
								<i className='fas fa-plus'></i>	Buat Donasi
							</button>
						</div>
					</div>
					{!donasi && (
						<div className="d-flex flex-column justify-content-center align-items-center">
							<Image
								src={empty}
								width={400}
								alt="Empty"
								className='img-fluid'
								loading='eager'
								priority
							/>
							<h3>Belum ada Donasi</h3>
						</div>
					)
					}
					{listDonations.data.map((item) => (
						<DonasiCard key={item.id} item={item} mutate={mutate} />
					))}

				</div>
			</div>


			{/* modal form */}
			<div className="modal fade" id="formDonasi" tabIndex="-1" aria-labelledby="donasiForm" aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel"><i className='fas fa-plus'></i> Buat Donasi</h1>
							<button type="button" className="btn-close" id="closeModal" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-4">
									<label htmlFor="title" className="form-label">
										<i className='fa fa-book'></i> Nama Donasi (maksimal 30 karakter)
									</label>
									<input
										type="text"
										className={`form-control ${errors.title ? "is-invalid" : ""
											}`}
										id="title"
										name='title'
										placeholder="Sepatu bekas "
										autoComplete='on'
										{...register("title")}
										maxLength="30"
									/>
									<div className="invalid-feedback">
										{errors.title?.message}
									</div>
								</div>
								<div className="mb-4">
									<label htmlFor="description" className="form-label">
										<i className='fa fa-sticky-note'></i> Deskripsi
									</label>
									<textarea
										type="text"
										className={`text-deskripsi form-control ${errors.description ? "is-invalid" : ""}`}
										name="description"
										id="description"
										autoComplete='on'
										placeholder="Sepatu bekas yang masih dalam kondisi baik. Sepatu bekas ini pernah digunakan oleh seseorang sebelumnya, tetapi kami sudah memeriksa kondisinya dan memastikan bahwa sepatu ini masih layak digunakan. Sepatu bekas ini bisa menjadi pilihan yang baik bagi Anda yang ingin menghemat pengeluaran pembelian sepatu baru. Dengan mengambil sepatu bekas ini, Anda juga turut berpartisipasi dalam upaya mengurangi sampah dan mengurangi pengeluaran pembelian sepatu baru."
										{...register("description")}>
									</textarea>
									<div className="invalid-feedback">{errors.description?.message}</div>
								</div>
								<div className="mb-4">
									<label htmlFor="weight" className="form-label">
										<i className="fa-solid fa-weight-scale"></i> Berat Barang
									</label>
									<div className='d-flex justify-content-center align-items-center'>
										<input
											type="number"
											className={`form-control ${errors.weight ? "is-invalid" : ""}`}
											name="weight"
											id="weight"
											width='50'
											autoComplete='on'
											placeholder="100"
											{...register("weight")}
										/>
										<span className='mx-2'>Gram</span>
									</div>
									<div className="invalid-feedback">{errors.weight?.message}</div>
								</div>

								<div className="mb-4">

									<label htmlFor="donation_photo" className="form-label">
										<i className='fa fa-image'></i> Foto Barang
									</label>
									<img src={createObjectURL} className="img-fluid mb-2 foto-barang" />
									<input
										type="file"
										className={`form-control ${errors.donation_photo ? "is-invalid" : ""
											}`}
										id="donation_photo"
										name='donation_photo'
										accept="image/png, image/jpeg, image/jpg"
										onChange={uploadToClient}

									/>
									<div className="invalid-feedback">
										{errors.donation_photo?.message}
									</div>
								</div>

								<div className="mb-4">
									<label htmlFor="location" className="form-label">
										<i className='fa fa-map-marker'></i> Lokasi
									</label>
									<Controller
										name="location"
										control={control}
										rules={{ required: true }}
										render={() => <GooglePlacesAutocomplete
											apiKey={API_KEY}
											apiOptions={{ language: "id" }}
											selectProps={{
												value,
												onChange: handleChange,
												placeholder: 'Masukkan Lokasi...',
												className: `${errors.location ? "is-invalid" : ""} lokasi-form`
											}}
										/>}
									/>
									<input type="hidden" name="lat" id="lat" {...register("lat")}></input>
									<input type="hidden" name="lng" id="lng" {...register("lng")}></input>
									<div className="invalid-feedback">
										{errors.location?.message}
									</div>
								</div>

								<div className="d-grid mt-5">
									<button
										disabled={formState.isSubmitting}
										onClick={onClickSubmit}
										type="submit"
										className="btn btn-login"
									>
										{formState.isSubmitting && (
											<span className="spinner-border spinner-border-sm mr-1"></span>
										)}
										Buat
									</button>
								</div>
								{errors.apiError && (
									<div className="alert alert-danger mt-3 mb-0">
										{errors.apiError?.message}
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
Beranda.getLayout = function getLayout(page) {
	return (
		<Layout2>
			{page}
		</Layout2>
	)
}
// export async function getServerSideProps(ctx) {
// 	// Parse
// 	const cookies = nookies.get(ctx)
// 	const userData = JSON.parse(cookies.userCookies)
// 	const requestOptions = {
// 		method: "GET",
// 		headers: { "Authorization": `Bearer ${userData.token}` }
// 	}
// 	const endpoint = API_ENDPOINT.donation
// 	const res = await fetch(endpoint, requestOptions)
// 	const data = await res.json()
// 	const listDonations = data.data
// 	return {
// 		props: {
// 			listDonations,
// 		},
// 	};
// }

export default Beranda