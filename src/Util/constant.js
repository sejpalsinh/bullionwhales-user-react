// export const API_URL = "https://bpapil1.algodelta.com/api/v1";
// export const API_URL = "http://192.168.1.9:3000/api/v4";
export const APP_VERSION = "v0.0.0";
export const is_dev_env = true;
const LIVE_URL = "https://bpapil1.algodelta.com";
const LOCAL_URL = "http://192.168.1.16:3100";
const BASE_URL = is_dev_env ? LOCAL_URL : LIVE_URL;
export const API_URL = BASE_URL + "/api/v4";

// THIS IS USEFULL DON"T REMOVE
// let deploy_data = {};
// const response = await fetch(`${API_URL}${"/admin/getconstants"}`, {
// 	headers: { Authorization: localStorage.getItem("ipo_access_token") },
// });

// let ret_data = await response.json();

// if (ret_data.status) {
// 	deploy_data = ret_data.data;
// }


