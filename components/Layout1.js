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

							<li className="nav-item ">
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
								<a className="nav-link" href="/#faq">

									<i className="fa fa-question-circle"></i> FAQ
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

							<Link className="nav-link btn-style-second outer-shadow inner-shadow  ms-4" href="/registrasi">
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
					<h4>Navigasi</h4>
					<ul>
						<li><Link className="serviceLink" href="/donasi">Donasi barang</Link></li>
						<li><Link className="serviceLink" href="/pemberitahuan">Pemberitahuan</Link></li>
						<li><Link className="serviceLink" href="/masuk">Masuk</Link></li>
						<li><Link className="serviceLink" href="/registrasi">Daftar</Link></li>
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

			</div>
			<div className="copyright">
				<p className="text-center">Copyright © 2022: Create & Design with <span className="love">&#9829;</span> by <Link className="tim-capstone" href="https://github.com/suryaasaputra/dibagiin">Capstone Team C22-053</Link></p>
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
