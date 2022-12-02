import Link from "next/link";
import Swal from "sweetalert2";
import Head from 'next/head';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { userService } from "../../services";
import Layout1 from "../../components/Layout1";
export default function Registrasi() {
	const router = useRouter();

	useEffect(() => {
		// redirect to home if already logged in
		if (userService.userValue) {
			router.push("/beranda");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// form validation rules
	const validationSchema = Yup.object().shape({
		full_name: Yup.string().required("Nama lengkap tidak boleh kosong"),
		user_name: Yup.string().required("Username tidak boleh kosong")
			.test({
				skipAbsent: true,
				test(value, ctx) {
					if (value.includes(" ")) {
						return ctx.createError({ message: 'Username tidak boleh ada spasi' })
					}
					return true
				}
			}),
		email: Yup.string()
			.email("Alamat email tidak valid")
			.required("Email tidak boleh kosong"),
		password: Yup.string()
			.required("Kata sandi tidak boleh kosong")
			.min(8, "Panjang minimal 8 karakter"),
		phone_number: Yup.string()
			.required("Nomor Whatsapp tidak boleh kosong")
			.test({
				skipAbsent: true,
				test(value, ctx) {
					if (!value.startsWith('+62')) {
						return ctx.createError({ message: 'Nomor whatsapp tidak valid, contoh:+628xxx' })
					}
					if (value.length < 12) {
						return ctx.createError({ message: 'Nomor whatsapp tidak valid' })
					}
					return true
				}
			}),
		gender: Yup.string().required("Jenis kelamin tidak boleh kosong"),
		address: Yup.string().required("Alamat tidak boleh kosong"),
	});
	const formOptions = { resolver: yupResolver(validationSchema) };

	// get functions to build form with useForm() hook
	const { register, handleSubmit, setError, formState } = useForm(formOptions);
	const { errors } = formState;
	// submit data from form value
	function onSubmit(data) {
		// console.log(data);
		return userService
			.register(data)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Registrasi berhasil silahkan Login",
					confirmButtonColor: "#73a700",
					timer: 2000,
				}).then((result) => {
					if (result.isConfirmed) {
						router.push("/masuk");
					} else if (result.isDenied) {
						router.push("/masuk");
					} else if (result.isDismissed) {
						router.push("/masuk");
					}
				});
			})
			.catch((error) => {
				setError("apiError", { message: error });
			});
	}
	return (
		<>
			<div className="container mt-3 mb-5">
				<Head>
					<title>Registrasi-Dibagiin</title>
				</Head>
				<div className="register-form rounded-2">
					<div className="card-body">
						<h3 className="card-title text-center">Daftar</h3>
						<form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-4">
								<label htmlFor="full_name" className="form-label">
									<i className="fa fa-user"></i> Nama Lengkap
								</label>
								<input
									type="text"
									className={`form-control ${errors.full_name ? "is-invalid" : ""
										}`}
									id="full_name"
									placeholder="Raisa Andriana"
									{...register("full_name")}
								/>
								<div className="invalid-feedback">
									{errors.full_name?.message}
								</div>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="form-label">
								<i className="fa fa-envelope"></i> Email
								</label>
								<input
									type="text"
									className={`form-control ${errors.email ? "is-invalid" : ""}`}
									id="email"
									aria-describedby="emailHelp"
									placeholder="raisa@gmail.com"
									{...register("email")}
								/>
								<div className="invalid-feedback">{errors.email?.message}</div>
							</div>
							<div className="mb-4">
								<label htmlFor="user_name" className="form-label">
								<i className="fa fa-user"></i> Username
								</label>
								<input
									type="username"
									className={`form-control ${errors.user_name ? "is-invalid" : ""
										}`}
									id="user_name"
									aria-describedby="usernameHelp"
									placeholder="raisa6690"
									{...register("user_name")}
								/>
								<div className="invalid-feedback">
									{errors.user_name?.message}
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">
								<i className="fa fa-key"></i> Kata Sandi
								</label>
								<input
									type="password"
									className={`form-control ${errors.password ? "is-invalid" : ""
										}`}
									id="password"
									placeholder="*****"
									autoComplete="on"
									{...register("password")}
								/>
								<div className="invalid-feedback">
									{errors.password?.message}
								</div>
							</div>
							<div className="mb-4  ">
								<label htmlFor="phone_number" className="form-label">
								<i className="fab fa-whatsapp"></i> No. WhatsApp
								</label>
								<input
									type="text"
									className={`form-control ${errors.phone_number ? "is-invalid" : ""
										}`}
									id="phone_number"
									placeholder="+628123468798"
									{...register("phone_number")}
								/>
								<div className="invalid-feedback">
									{errors.phone_number?.message}
								</div>
							</div>
							<div className="mb-4">
								<label htmlFor="gender" className="form-label">
									<i className="fa fa-genderless"></i> Jenis Kelamin
								</label>
								<select
									className={`form-select ${errors.gender ? "is-invalid" : ""}`}
									id="gender"
									aria-label="Default select example"
									{...register("gender")}
								>
									<option value="pria">Pria</option>
									<option value="wanita">Wanita</option>
								</select>
								<div className="invalid-feedback">{errors.gender?.message}</div>
							</div>

							<div className="mb-3">
								<label htmlFor="address" className="form-label">
									<i className="fa fa-map-marker"></i> Alamat
								</label>
								<input
									type="text"
									className={`form-control ${errors.address ? "is-invalid" : ""
										}`}
									id="address"
									placeholder="Jl. Garuda No. 76 Jakarta Selatan"
									{...register("address")}
								/>
								<div className="invalid-feedback">
									{errors.address?.message}
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
									Daftar
								</button>
							</div>
							{errors.apiError && (
								<div className="alert alert-danger mt-3 mb-0">
									{errors.apiError?.message}
								</div>
							)}
							<div className="mt-3">
								<label>
									Sudah punya akun ?{" "}
									<Link href="/masuk" className="link">
										Masuk
									</Link>
								</label>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
Registrasi.getLayout = function getLayout(page) {
	return (
		<Layout1>
			{page}
		</Layout1>
	)
}
