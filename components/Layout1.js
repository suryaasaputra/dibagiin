import Link from "next/link";

const Header = () => {
	return (
		<header className="fixed-top header">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

              <Link className="navbar-brand logo" href="/"><i className="fas fa-heart">
				</i> Dibagi<span>.in</span>
			  </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse navbar-item" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" href="/">
						<i className="fa fa-home"></i> Beranda
					</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="#about">
						<i className="fa fa-info-circle"></i> Tentang
					</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="#our-team">
						<i className="fa fa-user"></i> Team
					</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="#gallery">
						<i className="fa fa-image"></i> Gallery
					</Link>
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
			<p>
				© 2022 Copyright: Create & Design with <span>&#9829;</span> by Capstone
				Team C22-053
			</p>
		</footer>
	);
};

// const Layout1 = ({ children }) => {
// 	return (
// 		<>
// 			<Header />
// 			{children}
// 			<Footer />
// 		</>
// 	);
// };

// export default Layout1;

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
