import axios, { type AxiosInstance } from "axios";

export const useRequest = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        withCredentials: true
    })
    instance.interceptors.request.use()

    instance.interceptors.response.use()

    return instance
}
