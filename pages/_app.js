import "../styles/main.scss";
import "../styles/responsive.scss";
import Swal from "sweetalert2";
import Head from "next/head";
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
		const publicPaths = ["/masuk", "/registrasi", "/", "/#about", "/#our-team", "/#gallery", "/#faq"];
		const path = url.split("?")[0];
		if (!userService.userValue && !publicPaths.includes(path)) {
			setAuthorized(false);
			Swal.fire({
				icon: "error",
				title: `Silahkan masuk terlebih dahulu untuk melanjutkan`,
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
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			{authorized && getLayout(<Component {...pageProps} />)}
		</>
	);
}
