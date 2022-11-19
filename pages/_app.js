import "../styles/main.scss";
import "../styles/responsive.scss";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { userService } from "../services";

function MyApp({ Component, pageProps }) {
	const handleMainContentClick = () => {
		const drawer = document.querySelector("#navigationDrawer");
		drawer.classList.remove("open");
	};

	const router = useRouter();
	const [authorized, setAuthorized] = useState(false);
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle");
		// run auth check on initial load
		authCheck(router.asPath);

		// set authorized to false to hide page content while changing routes
		const hideContent = () => setAuthorized(false);
		router.events.on("routeChangeStart", hideContent);

		// run auth check on route change
		router.events.on("routeChangeComplete", authCheck);

		// unsubscribe from events in useEffect return function
		return () => {
			router.events.off("routeChangeStart", hideContent);
			router.events.off("routeChangeComplete", authCheck);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function authCheck(url) {
		// redirect to login page if accessing a private page and not logged in
		const publicPaths = ["/masuk", "/registrasi", "/", "/#about"];
		const path = url.split("?")[0];
		if (!userService.userValue && !publicPaths.includes(path)) {
			setAuthorized(false);
			router.push({
				pathname: "/masuk",
				query: { returnUrl: router.asPath },
			});
		} else {
			setAuthorized(true);
		}
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
				/>
			</Head>
			<Layout>
				<main onClick={handleMainContentClick} id="mainContent">
					{authorized && <Component {...pageProps} />}
				</main>
			</Layout>
		</>
	);
}

export default MyApp;
