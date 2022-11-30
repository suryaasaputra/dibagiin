import Head from 'next/head';
import Link from 'next/link';
import Swal from "sweetalert2";
import nookies from 'nookies'
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from 'next/image';
import { donationService } from '../../services';
import Layout2 from "../../components/Layout2";
import API_ENDPOINT from '../../globals/api-endpoint';

//component donasiCard
const DonasiCard = ({ item }) => {
	const router = useRouter();
	const [errors2, setError2] = useState({});

	function handleOnSubmit(event) {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()

		// Get data from the form.
		const data = {
			donation_id: event.target.donation_id.value,
			message: event.target.message.value,
		}

		// alert(JSON.stringify(data))
		return donationService.requestDonation(data.donation_id, data)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Berhasil Membuat Permintaan",
					confirmButtonColor: "#73a700",
					timer: 2000,
				}).then((result) => {
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
				Swal.fire({
					icon: "error",
					title: error,
					confirmButtonColor: "#E51937",
					timer: 2000,
				}).then((result) => {
					if (result.isConfirmed) {
						router.replace(router.asPath)
					} else if (result.isDenied) {
						router.replace(router.asPath)
					} else if (result.isDismissed) {
						router.replace(router.asPath)
					}
				})
				setError2({ apiError: { message: error } });
			});
	}
	return (
		<div className="row mt-5 p-2">
			<div className="col-md-12 p-4 mb-3 outer-shadow rounded-2">
				<div className='row'>
					<div className='col-md-6 header-card-donasi d-flex align-items-center p-2'>
						<Image
							width={80}
							height={80}
							src={item.donator.profil_photo_url}
							className="img-fluid rounded-circle"
							alt='avatar'
						/>
						<div className='nama-donator ms-2'>
							<div>
								<Link className="nama-donatur-url" href={`/user/${item.donator.user_name}`}><h3>{item.donator.full_name}</h3></Link>
								<p>@{item.donator.user_name}</p>
							</div>

							{/* <p className=''>Pada {item.created_at}</p> */}
						</div>

					</div>
					<div className="col-md-6 date align-self-center">
						<p className='text-end'>Pada : {new Date(item.created_at).toLocaleTimeString('id-ID', {
								day: 'numeric', // numeric, 2-digit
								year: 'numeric', // numeric, 2-digit
								month: 'long', // numeric, 2-digit, long, short, narrow
								hour: 'numeric', // numeric, 2-digit
								minute: '2-digit', // numeric, 2-digit
							})}</p>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6 content-card-donasi p-2 text-center'>
						<Image
							width={350}
							height={350}
							// style={{width: '100%'}}
							src={item.photo_url}
							className="img-fluid rounded-2 img-barang p-1"
							alt="Image Barang"
						/>
					</div>

					<div className='col-md-6 content-card-donasi p-2'>
						<div className='info-content-card-donasi'>
							<h2>Info :</h2>
							<h4>{item.title}</h4>
							<p>Deskripsi : {item.description}</p>
							<p>Lokasi : {item.location}</p>
							<p>Status {item.status}</p>
							{/* <p>Requester {item.requester_id.map((request) => { <li>{request}</li> })}</p> */}

							<a href='#' className='btn-style outer-shadow inner-shadow hover-in-shadow'>Lihat Detail</a>
							<button
								className='btn-style outer-shadow inner-shadow hover-in-shadow ms-2'
								data-bs-toggle="modal"
								data-bs-target={`#formModal${item.id}`}
							>
								Ajukan Permintaan
							</button>
						</div>

					</div>

				</div>

			</div>
			<div className="modal fade" id={`formModal${item.id}`} tabIndex="-1" aria-labelledby="donasiForm" aria-hidden="true">
				<div className="modal-dialog  modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Ambil Donasi</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form onSubmit={handleOnSubmit}>
								<div className="mb-4">
									<label htmlFor="title" className="form-label">
										Pesan*
									</label>
									<input
										type="hidden"
										id="donation_id"
										value={item.id}
										required
									/>
									<input
										type="text"
										className={`form-control ${errors2.title ? "is-invalid" : ""
											}`}
										id="message"
										name='message'
										placeholder="Izinkan saya mengambil donasi nya."
										autoComplete='on'
										required
									/>
									<div className="invalid-feedback">
										{errors2.message?.message}
									</div>
								</div>
								<div className="d-grid mt-5">
									<button
										type="submit"
										className="btn btn-login"
										data-bs-dismiss="modal"

									>
										Kirim Permintaan
									</button>
								</div>
								{errors2.apiError && (
									<div className="alert alert-danger mt-3 mb-0">
										{errors2.apiError?.message}
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div >

	)
}

const Donasi = () => {
	const [image, setImage] = useState(null);
	const [createObjectURL, setCreateObjectURL] = useState(null);
	// useEffect(() => {
	// 	import("jquery")
	// 	import("bootstrap/dist/js/bootstrap")
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);
	const uploadToClient = (event) => {
		console.log(event)
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setImage(i);
			setCreateObjectURL(URL.createObjectURL(i));
		};
	};
	const router = useRouter();

	// form validation rules
	const validationSchema = Yup.object().shape({
		title: Yup.string().required("Nama Donasi tidak boleh kosong"),
		description: Yup.string().required("Deskripsi tidak boleh kosong"),
		location: Yup.string().required("Lokasi tidak boleh kosong"),
	})
	const formOptions = { resolver: yupResolver(validationSchema) }

	// get functions to build form with useForm() hook
	const { register, handleSubmit, setError, formState } = useForm(formOptions);
	const { errors } = formState;

	function onSubmit(data) {
		// Swal.fire({
		// 	icon: "success",
		// 	title: "Berhasil Membuat Donasi",
		// 	text: data,
		// 	confirmButtonColor: "#73a700",
		// 	timer: 2000,
		// })
		// .then((result) => {
		// 	if (result.isConfirmed) {
		// 		$('#formDonasi').modal('hide')
		// 	} else if (result.isDenied) {
		// 		$('#formDonasi').modal('hide')
		// 	} else if (result.isDismissed) {
		// 		$('#formDonasi').modal('hide')
		// 	}
		// })
		const body = new FormData();
		body.append("donation_photo", image)
		body.append("title", data.title)
		body.append("description", data.description)
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
	if (isLoading) return (<div className="mt-3 pt-3 beranda">
		<div className="container-fluid">
			<p>loading...</p>
			<span className="spinner-border spinner-border-sm mr-1"></span>
		</div>
	</div>)
	console.log(listDonations)
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
				<div className="container-fluid">
					<Head>
						<title>Donasi-Dibagiin</title>
					</Head>

					<div className="row mt-5">
						<div className="col-md-12">
							<h4 className="text-black-50">Donasi</h4>
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
										Nama Donasi*
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
									/>
									<div className="invalid-feedback">
										{errors.title?.message}
									</div>
								</div>
								<div className="mb-4">
									<label htmlFor="description" className="form-label">
										Deskripsi*
									</label>
									<input
										type="text"
										className={`form-control ${errors.description ? "is-invalid" : ""}`}
										name="description"
										id="description"
										autoComplete='on'
										placeholder="Sepatu converse  70s White ukuran 41"
										{...register("description")}
									/>
									<div className="invalid-feedback">{errors.description?.message}</div>
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
									/>
									<div className="invalid-feedback">
										{errors.donation_photo?.message}
									</div>
								</div>

								<div className="mb-4">
									<label htmlFor="location" className="form-label">
										Lokasi*
									</label>
									<input
										type="text"
										className={`form-control ${errors.location ? "is-invalid" : ""
											}`}
										id="location"
										name='location'
										autoComplete='on'
										placeholder="Jl. Garuda No. 76 Jakarta Selatan"
										{...register("location")}
									/>
									<div className="invalid-feedback">
										{errors.location?.message}
									</div>
								</div>

								<div className="d-grid mt-5">
									<button
										disabled={formState.isSubmitting}
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
Donasi.getLayout = function getLayout(page) {
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

export default Donasi