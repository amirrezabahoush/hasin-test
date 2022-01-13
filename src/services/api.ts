import axios, { AxiosRequestConfig, AxiosPromise } from "axios";

const api = ({
	url = "",
	method = "GET",
	responseType = "json",
	headers,
	params,
	data,
	withCredentials = false,
	auth
}: AxiosRequestConfig): AxiosPromise => {	
	return axios({
		baseURL: process.env.REACT_APP_BASE_URL,
		url,
		method: method,
		responseType,
		headers,
		params,
		data,
		withCredentials,
		auth
	});
};

export default api;
