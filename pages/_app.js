import "../styles/main.scss";
import "../styles/responsive.scss";
import Head from "next/head";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userService } from "../services";

export default function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page)

	const router = useRouter();
	const [authorized, setAuthorized] = useState(false);
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
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
		const publicPaths = ["/masuk", "/registrasi", "/", "/#about", "/#our-team", "/#gallery"];
		const path = url.split("?")[0];
		if (!userService.userValue && !publicPaths.includes(path)) {
			setAuthorized(false);
			Swal.fire({
				icon: "error",
				title: `Sesi anda telah berakhir, silahkan masuk kembali...`,
				confirmButtonColor: "#73a700",
				timer: 2000,
			})
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
				<meta name="apple-mobile-web-app-title" content="Dibagiin" />
				<meta name="application-name" content="Dibagiin" />
				<meta name="msapplication-TileColor" content="#eff0f4" />
				<meta name="theme-color" content="#eff0f4" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			</Head>
			{authorized && getLayout(<Component {...pageProps} />)}
		</>
	);
}
