import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/images/logo/logo.png';
import LogoText from '../public/images/logo/logo-text.png';


const Header = () => {
	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">

					<Link className="navbar-brand logo" href="/">
						<Image
							src={LogoText}
							width='120'
							className="logo-text"
							alt="logo-text"
							loading='eager'
							priority
						>
						</Image>
					</Link>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse navbar-item" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">

							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="/">
									<i className="fa fa-home"></i> Beranda
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="/#about">
									<i className="fa fa-info-circle"></i> Tentang
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="/#gallery">
									<i className="fa fa-image"></i> Galeri
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="/#our-team">
									<i className="fa fa-user"></i> Tim Kami
								</a>
							</li>

						</ul>

						<div className="d-flex">
							<Link className="nav-link btn-style outer-shadow inner-shadow hover-in-shadow ms-4" href="/masuk">
								<i className="fa fa-sign-in"></i> Masuk
							</Link>

							<Link className="nav-link btn-style outer-shadow inner-shadow hover-in-shadow ms-4" href="/registrasi">
								<i className="fa fa-user-plus"></i> Daftar
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

const Footer = () => {
	return (
		<footer>
			<div className="content-footer">

				<div className="logo-footer box-footer">
					<Image
						src={Logo}
						width='100'
						className="logo"
						alt="logo"
						loading='eager'
						priority
					>
					</Image>
				</div>

				<div className="our-service box-footer">
					<h4>Layanan Kami</h4>
					<ul>
						<li><Link className="serviceLink" href="#">Donasi barang</Link></li>
						<li><Link className="serviceLink" href="#">Mengambil barang</Link></li>
						<li><Link className="serviceLink" href="#">Menerima barang</Link></li>
						<li><Link className="serviceLink" href="#">Tentang kami</Link></li>
					</ul>
				</div>

				<div className="help-center box-footer">
					<h4>Pusat Bantuan</h4>
					<ul>
						<li><Link className="helpCenter" href="https://wa.me/6282289675042">+62 82289675042 (yuda)</Link></li>
						<li><Link className="helpCenter" href="https://wa.me/6281930924356">+62 81930924356 (surya)</Link></li>
						<li><Link className="helpCenter" href="https://wa.me/6285946362394">+62 85946362394 (arif)</Link></li>
						<li><Link className="helpCenter" href="https://wa.me/6285156555122">+62 85156555122 (annas)</Link></li>
					</ul>
				</div>

				{/* <div className="copyright box-footer">
				<p>© 2022 Copyright: Create & Design with <span>&#9829;</span> by Capstone
				Team C22-053</p>
			</div> */}
			</div>




		</footer>
	);
};


export default function Layout1({ children }) {
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
