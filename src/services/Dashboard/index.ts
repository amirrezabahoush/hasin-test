import api from "../api";

export const getUser = () => {
	return api({
		url: "user/whoAmI",
		method: "GET",
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};
