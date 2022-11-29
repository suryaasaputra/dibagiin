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

const Donasi = ({ listDonations }) => {
	const [image, setImage] = useState(null);
	const [createObjectURL, setCreateObjectURL] = useState(null);


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
				setError("apiError", { message: error });
			});
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
							<button className="btn btn-success" style={{ padding: '10px 12px' }} data-bs-toggle="modal" data-bs-target="#formDonasi">
								<i className='fas fa-plus'></i>	Buat Donasi
							</button>
						</div>
					</div>
					{listDonations.map((item) => (
						<div key={item.id} className="row mt-5" id={item.id}>
							<div className="col-md-12">
								<div>
									<Image
										width={30}
										height={30}
										src={item.donator.profil_photo_url}
										className="img-fluid"
										alt='avatar'
									/>
									<Link href={`/user/${item.donator.user_name}`}><h1>{item.donator.full_name}</h1></Link>
									<p>Pada{item.created_at}</p>
								</div>
								<div>
									<h2>{item.title}</h2>
									<p>Status : {item.status}</p>
								</div>
								<div>
									<Image
										width={200}
										height={200}
										src={item.photo_url}
										className="img-fluid"
										alt="Image Barang"
									/>
								</div>
								<div>
									<p>Deskripsi : {item.description}</p>
									<p>Lokasi : {item.location}</p>
								</div>
							</div>
						</div>
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
									<img src={createObjectURL} className="img-fluid mb-2" />
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
Donasi.getLayout = function getLayout(page) {
	return (
		<Layout2>
			{page}
		</Layout2>
	)
}
export async function getServerSideProps(ctx) {
	// Parse
	const cookies = nookies.get(ctx)
	const userData = JSON.parse(cookies.userCookies)
	const requestOptions = {
		method: "GET",
		headers: { "Authorization": `Bearer ${userData.token}` }
	}
	const endpoint = API_ENDPOINT.donation
	const res = await fetch(endpoint, requestOptions)
	const data = await res.json()
	const listDonations = data.data
	return {
		props: {
			listDonations,
		},
	};
}

export default Donasi