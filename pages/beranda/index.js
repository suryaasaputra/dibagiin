// import { userService } from "../../services";
import Layout2 from "../../components/Layout2";
import Image from 'next/image';
export default function Beranda() {
	return (
		<>
			<div className="container mt-5">
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
