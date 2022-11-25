// import { userService } from "../../services";
import Head from 'next/head';
import Layout2 from "../../components/Layout2";
export default function Beranda() {
	return (
		<>
			<div className="container mt-5">
				<Head>
					<title>Beranda-Dibagiin</title>
				</Head>
				<section className="p-1">
					<h2 className="mt-5">Beranda</h2>
				</section>
			</div>
		</>
	);
}
Beranda.getLayout = function getLayout(page) {
	return (
		<Layout2>
			{page}
		</Layout2>
	)
}
