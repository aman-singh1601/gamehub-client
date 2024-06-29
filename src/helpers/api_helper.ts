import axios from "axios";


//apply base url for axios
export const API_URL = "http://localhost:8000";

const axiosApi = axios.create({
    baseURL: API_URL,
});
let token = localStorage.getItem("access_token") || null;



if(token) axiosApi.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`;

axiosApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export async function get(url: string, config = {}) {
    return await axiosApi
        .get(url, { ...config })
        .then((response) => response.data);
}

export async function post(url: string, data: any, config = {}) {
    return axiosApi
        .post(url, { ...data }, { ...config })
        .then((response) => response.data);
}

export async function put(url: string, data: any, config = {}) {
    return axiosApi
        .put(url, { ...data }, { ...config })
        .then((response) => response.data);
}

export async function del(url: string, config = {}) {
    return await axiosApi
        .delete(url, { ...config })
        .then((response) => response.data);
}