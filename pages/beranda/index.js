import { userService } from "../../services";
export default function Beranda() {
	const logout = () => {
		userService.logout()
	}
	return (
		<>
			<h3>Ini beranda</h3>
			<button onClick={logout} type="button" class="btn btn-danger"><i class="fa-solid fa-right-from-bracket"></i>Logout</button>
		</>
	);
}
