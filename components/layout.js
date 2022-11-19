import Link from "next/link";

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
							<Link href="/">
								<i className="fa fa-home"></i> Beranda
							</Link>
						</li>
						<li>
							<Link href="/#about">
								<i className="fa fa-info-circle"></i> Tentang
							</Link>
						</li>
						<li>
							<Link href="/masuk">
								<i className="fa fa-sign-in"></i> Masuk
							</Link>
						</li>
						<li>
							<Link href="/registrasi">
								<i className="fa fa-user-plus"></i> Daftar
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

const Footer = () => {
	return (
		<footer>
			<p>
				© 2022 Copyright: Create & Design with <span>&#9829;</span> by Capstone
				Team C22-053
			</p>
		</footer>
	);
};

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
