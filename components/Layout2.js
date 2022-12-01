import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/images/logo/logo.png';
import LogoText from '../public/images/logo/logo-text.png';
import { userService } from "../services";
import { useEffect, useState } from 'react'

const Header = () => {

	const [userData, setUserData] = useState({})
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))
		setUserData(user)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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

						<form className="d-flex ms-auto my-3 my-lg-0">
							<div className="input-group">
								<input
									className="form-control search-form"
									type="search"
									placeholder="Cari barang"
									aria-label="Search"
								/>
								<button className="btn ms-1 btn-search" type="submit">
									<i className="fas fa-search"></i>
								</button>
							</div>
						</form>

						<ul className="navbar-nav">
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
						</ul>

					</div>
				</div>
			</nav>
		</header>
	);
};

const OffCanvas = () => {
	return (
		<div
			className="offcanvas offcanvas-start sidebar-nav"
			id="sidebar"
		>
			<div className="offcanvas-body p-0">
				<nav className="navbar-dark mt-4">
					<ul className="navbar-nav">

						<li>
							<div className="text-muted small fw-bold text-uppercase px-3">
								Inti
							</div>
						</li>

						<li>
							<Link href="/beranda" className="nav-link px-2 p-3 active text-black-50 fw-bold">
								<span className="me-2"></span>
								<span className="p-3"><i className="fas fa-home"></i> Beranda</span>
							</Link>

							<Link href="/profil" className="nav-link px-2 p-3 active text-black-50 fw-bold">
								<span className="me-2"></span>
								<span className="p-3"><i className="fas fa-user"></i> Profil</span>
							</Link>
						</li>

						<li className="my-4"><hr className="dropdown-divider bg-dark" /></li>

						<li>
							<div className="text-muted small fw-bold text-uppercase px-3">
								Antarmuka
							</div>
						</li>

						<li>
							<Link href="/donasi" className="nav-link px-2 p-3 active text-black-50 fw-bold">
								<span className="me-2"></span>
								<span className="p-3"><i className="fas fa-plus"></i> Donasi</span>
							</Link>
						</li>
						<li>
							<Link href="/pemberitahuan" className="nav-link px-2 p-3 active text-black-50 fw-bold">
								<span className="me-2"></span>
								<span className="p-3 pemberitahuan-btn"><i className="fas fa-bell"></i> Pemberitahuan</span>
							</Link>
						</li>
						<li>
							<Link href="/permintaan/diterima" className="nav-link px-2 p-3 active text-black-50 fw-bold">
								<span className="me-2"></span>
								<span className="p-3"><i className="fa fa-inbox"></i> Permintaan Diterima</span>
							</Link>
						</li>
						<li>
							<Link href="/permintaan/terkirim" className="nav-link px-2 p-3 active text-black-50 fw-bold">
								<span className="me-2"></span>
								<span className="p-3"><i className="fa fa-paper-plane"></i> Permintaan Terkirim</span>
							</Link>
						</li>

						<li>
							<a onClick={() => userService.logout()} style={{ cursor: 'pointer' }} className="nav-link px-2 p-3 active text-black-50 fw-bold">
								<span className="me-2"></span>
								<span className="p-3"><i className="fa-solid fa-right-from-bracket"></i> Keluar</span>
							</a>
						</li>

					</ul>
				</nav>
			</div>
		</div>
	);
}


const Footer = () => {
	return (
		<footer >
			<div className="content-footer">
				<div className="logo-footer box-footer">
				</div>

				<div className="our-service box-footer">
					<h4>Layanan Kami</h4>
					<ul>
						<li>Donasi barang</li>
						<li>Mengambil barang</li>
						<li>Menerima barang</li>
						<li>Tentang kami</li>
					</ul>
				</div>

				<div className="help-center box-footer">
					<h4>Pusat Bantuan</h4>
					<ul>
						<li>+62 82289675042 (yuda)</li>
						<li>+62 82289675042 (surya)</li>
						<li>+62 82289675042 (arif)</li>
						<li>+62 82289675042 (annas)</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default function Layout2({ children }) {
	return (
		<>
			<Header />
			<OffCanvas />
			<main id="mainContent">
				{children}
			</main>
			<Footer />
		</>
	)
}