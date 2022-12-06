import Head from 'next/head';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Swal from "sweetalert2";

import { useState } from 'react';
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { donationService } from '../../services';
import DonasiCard from '../../components/DonasiCard';
import Layout2 from "../../components/Layout2";
import SkeletonLoading from "../../components/SkeletonLoading";

const Beranda = () => {
	const API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY
	const [image, setImage] = useState(null);
	const [value, setValue] = useState(null);

	const [createObjectURL, setCreateObjectURL] = useState(null);
	const uploadToClient = (event) => {
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setImage(i);
			setCreateObjectURL(URL.createObjectURL(i));
		};
	};
	const router = useRouter();

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
		// Swal.fire({
		// 	icon: "success",
		// 	title: "Berhasil Membuat Donasi",
		// 	text: JSON.stringify(data),
		// 	confirmButtonColor: "#73a700",
		// 	timer: 2000,
		// })
		// 	.then((result) => {
		// 		if (result.isConfirmed) {
		// 			var myModalEl = document.getElementById('staticBackdrop');
		// 			var modal = bootstrap.Modal.getInstance(myModalEl)
		// 			modal.hide();
		// 		} else if (result.isDenied) {
		// 			var myModalEl = document.getElementById('staticBackdrop');
		// 			var modal = bootstrap.Modal.getInstance(myModalEl)
		// 			modal.hide();
		// 		} else if (result.isDismissed) {
		// 			var myModalEl = document.getElementById('staticBackdrop');
		// 			var modal = bootstrap.Modal.getInstance(myModalEl)
		// 			modal.hide();
		// 		}
		// 	})
		const body = new FormData();
		body.append("donation_photo", image)
		body.append("title", data.title)
		body.append("description", data.description)
		body.append("weight", data.weight)
		body.append("location", data.location)
		return donationService.createDonation(body)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Berhasil Membuat Donasi",
					confirmButtonColor: "#73a700",
					timer: 10000,
				})
					.then((result) => {
						if (result.isConfirmed) {
							router.replace(router.asPath)
						} else if (result.isDenied) {
							router.replace(router.asPath)
						} else if (result.isDismissed) {
							router.replace(router.asPath)
						}
					})
			})
			.catch((error) => {
				setError("apiError", { message: error });
			});
	}






	//fetch donation list
	const { listDonations, isLoading } = donationService.getAllDonation()
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
					{listDonations.data.map((item) => (
						<DonasiCard key={item.id} item={item} />
					))}

				</div>
			</div>


			{/* modal form */}
			<div className="modal fade" id="formDonasi" tabIndex="-1" aria-labelledby="donasiForm" aria-hidden="true">
				<div className="modal-dialog  modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Buat Donasi</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-4">
									<label htmlFor="title" className="form-label">
										Nama Donasi (maksimal 30 karakter)*
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
										Deskripsi*
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
										Berat Barang*
									</label>
									<input
										type="number"
										className={`text-deskripsi form-control ${errors.weight ? "is-invalid" : ""}`}
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
										Foto Barang*
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
										required={true}
									/>
									<div className="invalid-feedback">
										{errors.donation_photo?.message}
									</div>
								</div>

								<div className="mb-4">
									<label htmlFor="location" className="form-label">
										Lokasi*
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
												onChange: setValue,
												placeholder: 'Masukkan Lokasi...',
												className: `${errors.location ? "is-invalid" : ""}`
											}}
										/>}
									/>
									<div className="invalid-feedback">
										{errors.location?.message}
									</div>
								</div>

								<div className="d-grid mt-5">
									<button
										disabled={formState.isSubmitting}
										onClick={() => { setData('location', value?.label) }}
										type="submit"
										className="btn btn-login"
										data-bs-dismiss="modal"
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