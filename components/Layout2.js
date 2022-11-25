import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/images/logo/logo.png';
import LogoText from '../public/images/logo/logo-text.png';
import { userService } from "../services";

const Header = () => {
	return (
		<header className="fixed-top header">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">

					<Link className="navbar-brand logo" href="/beranda">
						<Image
							src={LogoText}
							width='120'
							className="logo-text"
							alt="logo-text"
						>
						</Image>
					</Link>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse navbar-item" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">

							<li className="nav-item">
								<Link className="nav-link" aria-current="page" href="/beranda">
									<i className="fa fa-home"></i> Beranda
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" aria-current="page" href="/beranda">
									<i className="fa fa-info-circle"></i> Donasi
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" aria-current="page" href="/beranda">
									<i className="fa fa-message"></i> Info
								</Link>
							</li>

						</ul>

						<div className="d-flex">
							<li style={{ listStyle: 'none' }} className="nav-item">
								<button style={{ border: 'none', padding: '6px' }} className="bg-danger text-white" onClick={() => userService.logout()}>
									<i className="fa-solid fa-right-from-bracket"></i> Logout
								</button>
							</li>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

const Footer = () => {
	return (
		<footer >
			<div className="content-footer">
				<div className="logo-footer box-footer">
					<Image
						src={Logo}
						width='100'
						className="logo"
						alt="logo"
					>
					</Image>
				</div>

				<div className="our-service box-footer">
					<h4>Our Service</h4>
					<ul>
						<li>Stuff donation</li>
						<li>Take stuff</li>
						<li>Accept stuff</li>
						<li>About us</li>
					</ul>
				</div>

				<div className="help-center box-footer">
					<h4>Help Center</h4>
					<ul>
						<li>+62 82289675042 (yuda)</li>
						<li>+62 82289675042 (surya)</li>
						<li>+62 82289675042 (arif)</li>
						<li>+62 82289675042 (annas)</li>
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

export default function Layout2({ children }) {
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