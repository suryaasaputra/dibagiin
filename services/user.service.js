import { BehaviorSubject } from "rxjs";
import useSWR, { useSWRConfig } from 'swr'
import API_ENDPOINT from "../globals/api-endpoint";
import Router from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { fetchWrapper } from "../helpers/fetch-wrapper";

const cookies = parseCookies()
const userSubject = new BehaviorSubject(
	typeof window !== 'undefined' && JSON.parse(cookies.userCookies ?? false)
);

export const userService = {
	user: userSubject.asObservable(),
	get userValue() {
		// const cookies = parseCookies()
		// const userData = JSON.parse(cookies.userCookies)
		// return { userData }
		return userSubject.value;
	},
	get userData() {
		const cookies = parseCookies()
		const userData = JSON.parse(cookies.userCookies)
		return userData
	},
	register,
	login,
	updateCookie,
	getUser,
	setProfilPhoto,
	editProfile,
	deleteAccount,
	logout,
};

function login(email, password) {
	const endpoint = API_ENDPOINT.login;
	return fetchWrapper.login(endpoint, { email, password }).then((user) => {
		// publish user to subscribers and store in local storage to stay logged in between page refreshes
		userSubject.next(user);
		const cookies = parseCookies()
		// Set
		setCookie(null, "userCookies", JSON.stringify(user.data), {
			maxAge: 30 * 24 * 60 * 60,
			path: "/"
		});
		return user;
	});
}

function updateCookie(user) {
	const cookies = parseCookies();
	destroyCookie(null, "userCookies");
	// Set
	setCookie(null, "userCookies", JSON.stringify(user), {
		maxAge: 30 * 24 * 60 * 60,
		path: "/"
	});
}

function register(user) {
	const endpoint = API_ENDPOINT.register;
	return fetchWrapper.login(endpoint, user).then((response) => {
		return response;
	});
}


function getUser(username) {
	const { mutate } = useSWRConfig()
	const { data, error } = useSWR(`${API_ENDPOINT.user}/${username}`, fetchWrapper.fetcher)

	return {
		user: data,
		mutate: mutate,
		isLoading: !data,
		error: error
	}
	// const endpoint = `${API_ENDPOINT.user}/${username}`
	// return fetchWrapper.get(endpoint).then((response) => {
	// 	return response;
	// });
}


function setProfilPhoto(username, file) {
	const endpoint = `${API_ENDPOINT.user}/${username}/ProfilPhoto`;
	return fetchWrapper.putFileFoto(endpoint, file).then((response) => {
		return response;
	});
}
function editProfile(username, user) {
	const endpoint = `${API_ENDPOINT.user}/${username}`;
	return fetchWrapper.put(endpoint, user).then((response) => {
		return response;
	});
}

function deleteAccount(username) {
	const endpoint = `${API_ENDPOINT.user}/${username}`;
	return fetchWrapper.delete(endpoint).then((response) => {
		return response;
	});
}

function logout() {
	// remove user from local storage, publish null to user subscribers and redirect to login page
	destroyCookie(null, "userCookies");
	userSubject.next(null);
	Router.push("/masuk");
}

