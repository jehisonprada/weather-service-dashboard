import axios from "axios";

const REQUEST_TIMEOUT = 5000;

const api = axios.create({
	baseURL: "http://private-4945e-weather34.apiary-proxy.com",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	},
	timeout: REQUEST_TIMEOUT
});

export default api;
