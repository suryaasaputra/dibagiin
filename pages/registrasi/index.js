import Link from "next/link";
import Swal from "sweetalert2";
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
		full_name: Yup.string().required("Full Name is required"),
		user_name: Yup.string().required("Username is required"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string()
			.required("Password is required")
			.min(8, "Minimal 8 character"),
		phone_number: Yup.string()
			.required("Phone Number is required")
			.min(10, "Invalid phone number"),
		gender: Yup.string().required("Gender is required"),
		address: Yup.string().required("Address is required"),
	});
	const formOptions = { resolver: yupResolver(validationSchema) };

	// get functions to build form with useForm() hook
	const { register, handleSubmit, setError, formState } = useForm(formOptions);
	const { errors } = formState;
	// submit data from form value
	function onSubmit(data) {
		return userService
			.register(data)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Registrasi berhasil silahkan Login",
					confirmButtonColor: "#73a700",
					timer: 1000,
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
				<div className="card register-form">
					<div className="card-body">
						<h2 className="card-title text-center">Daftar</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-4">
								<label htmlFor="full_name" className="form-label">
									Nama Lengkap*
								</label>
								<input
									type="text"
									className={`form-control ${errors.full_name ? "is-invalid" : ""
										}`}
									id="full_name"
									placeholder="Jhon Doe"
									{...register("full_name")}
								/>
								<div className="invalid-feedback">
									{errors.full_name?.message}
								</div>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="form-label">
									Email*
								</label>
								<input
									type="text"
									className={`form-control ${errors.email ? "is-invalid" : ""}`}
									id="email"
									aria-describedby="emailHelp"
									placeholder="you@email.com"
									{...register("email")}
								/>
								<div className="invalid-feedback">{errors.email?.message}</div>
							</div>
							<div className="mb-4">
								<label htmlFor="user_name" className="form-label">
									Username*
								</label>
								<input
									type="username"
									className={`form-control ${errors.user_name ? "is-invalid" : ""
										}`}
									id="user_name"
									aria-describedby="usernameHelp"
									placeholder="Username"
									{...register("user_name")}
								/>
								<div className="invalid-feedback">
									{errors.user_name?.message}
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Password*
								</label>
								<input
									type="password"
									className={`form-control ${errors.password ? "is-invalid" : ""
										}`}
									id="password"
									placeholder="*****"
									{...register("password")}
								/>
								<div className="invalid-feedback">
									{errors.password?.message}
								</div>
							</div>
							<div className="mb-4  ">
								<label htmlFor="phone_number" className="form-label">
									No. WhatsApp*
								</label>
								<input
									type="text"
									className={`form-control ${errors.phone_number ? "is-invalid" : ""
										}`}
									id="phone_number"
									placeholder="08123468798"
									{...register("phone_number")}
								/>
								<div className="invalid-feedback">
									{errors.phone_number?.message}
								</div>
							</div>
							<div className="mb-4">
								<label htmlFor="gender" className="form-label">
									Jenis Kelamin*
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
									Alamat*
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
