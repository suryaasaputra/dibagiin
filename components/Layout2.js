import Link from "next/link";
import { userService } from "../services";
const Header = () => {
	function handleHamburgerButtonClick() {
		const drawer = document.querySelector("#navigationDrawer");
		drawer.classList.toggle("open");
	}
	return (
		<header className="app-bar">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="app-bar__menu">
					<button onClick={handleHamburgerButtonClick} id="hamburgerButton">
						☰
					</button>
				</div>
				<div className="app-bar__brand">
					<Link href="/" className="navbar-brand logo">
						<i className="fas fa-heart"></i> Dibagi<span>.in</span>
					</Link>
				</div>
				<div id="navigationDrawer" className="app-bar__navigation">
					<ul>
						<li>
							<Link href="/beranda">
								<i className="fa fa-home"></i> Beranda
							</Link>
						</li>
						<li>
							<Link href="#">
								<i className="fa fa-info-circle"></i> Donasi
							</Link>
						</li>
						<li>
							<button onClick={() => userService.logout()} className="btn btn-danger">
								<i className="fa-solid fa-right-from-bracket"></i>Logout
							</button>
						</li>

					</ul>
				</div>
			</nav>
		</header >
	);
};

const Footer = () => {
	return (
		<footer >
			<p>
				© 2022 Copyright: Create & Design with <span>&#9829;</span> by Capstone
				Team C22-053
			</p>
		</footer>
	);
};

export default function Layout2({ children }) {
	const handleMainContentClick = () => {
		const drawer = document.querySelector("#navigationDrawer");
		drawer.classList.remove("open");
	};
	return (
		<>
			<Header />
			<main onClick={handleMainContentClick} id="mainContent">
				{children}
			</main>
			<Footer />
		</>
	)
}