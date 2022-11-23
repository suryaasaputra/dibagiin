import Link from "next/link";
import { userService } from "../services";
const Header = () => {
	return (
		<header className="fixed-top header">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

              <Link className="navbar-brand logo" href="/beranda">
				<i className="fas fa-heart"></i> Dibagi<span>.in</span>
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
				  <li style={{listStyle: 'none'}} className="nav-item">
                    <button style={{border: 'none', padding:'6px'}} className="bg-danger text-white" onClick={() => userService.logout()}>
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
			<p>
				© 2022 Copyright: Create & Design with <span>&#9829;</span> by Capstone
				Team C22-053
			</p>
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