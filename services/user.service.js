import { BehaviorSubject } from "rxjs";
import API_ENDPOINT from "../globals/api-endpoint";
import Router from "next/router";

import { fetchWrapper } from "../helpers/fetch-wrapper";

const userSubject = new BehaviorSubject(
	typeof window !== 'undefined' && JSON.parse(localStorage.getItem("user"))
);

export const userService = {
	user: userSubject.asObservable(),
	get userValue() {
		return userSubject.value;
	},
	register,
	login,
	getUser,
	setProfilPhoto,
	editProfile,
	deleteAccount,
	logout,
};

function login(email, password) {
	const endpoint = API_ENDPOINT.login;
	return fetchWrapper.post(endpoint, { email, password }).then((user) => {
		// publish user to subscribers and store in local storage to stay logged in between page refreshes
		userSubject.next(user);
		localStorage.setItem("user", JSON.stringify(user.data));

		return user;
	});
}

function register(user) {
	const endpoint = API_ENDPOINT.register;
	return fetchWrapper.post(endpoint, user).then((response) => {
		return response;
	});
}


function getUser(username) {
	const endpoint = `${API_ENDPOINT.user}/${username}`
	return fetchWrapper.get(endpoint).then((response) => {
		return response;
	});
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
	localStorage.removeItem("user");
	userSubject.next(null);
	Router.push("/masuk");
}

