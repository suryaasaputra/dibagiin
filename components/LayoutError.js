import Link from "next/link";
import Image from 'next/image';
import LogoText from '../public/images/logo/logo-text.png';
import { userService } from "../services";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Header = () => {
	const router = useRouter()
	const validationSchema = Yup.object().shape({
		keyword: Yup.string().required('Email tidak boleh kosong'),
	});
	const formOptions = { resolver: yupResolver(validationSchema) };

	// get functions to build form with useForm() hook
	const { register, handleSubmit, setError, formState } = useForm(formOptions);
	const { errors } = formState;

	function onSubmit({ keyword }) {
		router.push({
			pathname: "/donasi",
			query: { cari: keyword },
		});

	}
	return (
		<header>
			<nav className="navbar navbar-app navbar-expand-lg navbar-dark fixed-top">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						style={{ background: '#888' }}
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#sidebar"
						aria-controls="offcanvasExample"
					>
						<span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
					</button>

					<Link className="navbar-brand logo" href="/beranda">
						<Image
							src={LogoText}
							width='100'
							className="logo-text"
							alt="logo-text"
							loading='eager'
							priority
						>
						</Image>
					</Link>

					<div className="collapse navbar-collapse" id="topNavbar">

						<form onSubmit={handleSubmit(onSubmit)} className="d-flex ms-auto my-3 my-lg-0">
							<div className="input-group">
								<input
									className="form-control search-form"
									id='keyword'
									name='keyword'
									type="search"
									placeholder="Cari barang"
									aria-label="Search"
									{...register('keyword')}
								/>
								<div className="invalid-feedback">{errors.keyword?.message}</div>
								<button disabled={formState.isSubmitting} className="btn ms-1 btn-search" type="submit">
									{formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
									<i className="fas fa-search"></i>
								</button>
							</div>
						</form>

						{/* <ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle ms-2 text-black-50"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<Image
										src={userData.profil_photo_url || "https://storage.googleapis.com/dibagiin-data/profil_photo/default.png"}
										width={30}
										height={30}
										className="logo-text img-fluid"
										alt="profil-photo"
										loading='eager'
										priority
									>
									</Image>
								</a>
								<ul className="dropdown-menu dropdown-menu-end">
									<li><Link className="dropdown-item" href="/profil"><i className="fas fa-user">{userData.full_name}</i></Link></li>
									<li><a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => userService.logout()}><i className="fa-solid fa-right-from-bracket"></i> Keluar</a></li>
								</ul>
							</li>
						</ul> */}

					</div>
				</div>
			</nav>
		</header>
	);
};

const Footer = () => {
	return (
		<footer >
			{/* <div className="content-footer">
				<div className="logo-footer box-footer">
				</div>

				<div className="our-service box-footer">
					<h4>Navigasi</h4>
					<ul>
						<li><Link className="serviceLink" href="/donasi">Tambah Donasi</Link></li>
						<li><Link className="serviceLink" href="/pemberitahuan">Pemberitahuan</Link></li>
						<li><Link className="serviceLink" href="/permintaan/diterima">Permintaan Diterima</Link></li>
						<li><Link className="serviceLink" href="/permintaan/terkirim">Permintaan Terkirim</Link></li>
						<li><Link className="serviceLink" href="/profil">Profil</Link></li>
					</ul>
				</div>

				<div className="help-center box-footer">
					<h4>Pusat Bantuan</h4>
					<ul>
						<li><Link className="helpCenter" href="https://www.instagram.com/yudagrh_/?hl=id">Yuda Anugrah</Link></li>
						<li><Link className="helpCenter" href="https://www.instagram.com/suryaa_saputra/">Surya Maulana Saputra</Link></li>
						<li><Link className="helpCenter" href="https://www.instagram.com/arif_rizqi27/">Arif Rizqi</Link></li>
						<li><Link className="helpCenter" href="https://www.instagram.com/annassetywn/">Annas Setiawan</Link></li>
					</ul>
				</div>

			</div> */}
			<div className="copyright">
				<p className="text-center">Copyright © 2022: Create & Design with <span className="love">&#9829;</span> by <Link className="tim-capstone" href="https://github.com/suryaasaputra/dibagiin">Capstone Team C22-053</Link></p>
			</div>

		</footer>
	);
};

export default function LayoutError({ children }) {
	return (
		<>
			<Header />
			<main id="mainContent">
				{children}
			</main>
			<Footer />
		</>
	)
}