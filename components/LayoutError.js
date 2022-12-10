import Link from "next/link";
import Image from 'next/image';
import LogoText from '../public/images/logo/logo-text.png';

const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-app navbar-expand-lg navbar-dark fixed-top">
				<div className="container-fluid">
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