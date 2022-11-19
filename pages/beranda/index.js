// import { userService } from "../../services";
import Layout2 from "../../components/Layout2";
export default function Beranda() {
	// const logout = () => {
	// 	userService.logout()
	// }
	return (
		<>
			<div className="container">
				<h3 className=" m-auto">Ini beranda</h3>
			</div>

			{/* <button onClick={logout} type="button" class="btn btn-danger"><i class="fa-solid fa-right-from-bracket"></i>Logout</button> */}
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
