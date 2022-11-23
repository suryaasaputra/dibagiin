// import { userService } from "../../services";
import Layout2 from "../../components/Layout2";
export default function Beranda() {
	return (
		<>
			<div className="container mt-5">
				<h3 className=" m-auto p-5">Ini beranda</h3>
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
