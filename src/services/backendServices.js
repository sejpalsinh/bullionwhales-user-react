import { API_URL } from "../Util/constant";

export async function makeGetApiRequest(path) {
	try {
		const response = await fetch(`${API_URL}${path}`, {
			headers: { Authorization: localStorage.getItem("user_access_token") },
		});
		let ret_data = await response.json();
		return ret_data;
	} catch (error) {
		console.error(error);
		return {
			error: {
				title: "Api request error",
				message: "Api request error",
				error: error,
			},
		};
	}
}

export async function makeApiRequest(path, params) {
	try {
		var reqHeader = new Headers();
		reqHeader.append(
			"Authorization",
			localStorage.getItem("user_access_token")
		);
		reqHeader.append("Content-Type", "application/json");
		const response = await fetch(`${API_URL}${path}`, {
			method: "POST",
			body: JSON.stringify(params),
			headers: reqHeader,
			// mode:'no-cors',
			redirect: "follow",
		});
		const rresponse = await response.json();
		if (!rresponse.error) {
			return { result: rresponse };
		} else {
			return { error: rresponse.error.data };
		}
	} catch (error) {
		console.error(error);
		return {
			error: {
				title: "Api request error",
				message: "Api request error",
				error: error,
			},
		};
	}
}