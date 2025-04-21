import axios from "axios";
import { store } from "../redux/store";
import { setToken } from "../redux/feature/Token/tokenSlice";
const COMMON_CONFIG = {
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const httpService = axios.create({
  ...COMMON_CONFIG,
});

export const nextHttpService = axios.create({
  ...COMMON_CONFIG,
  withCredentials: true,
});

httpService.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await nextHttpService.post("api/refresh");
        const { accessToken } = response.data;
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        httpService.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        store.dispatch(setToken(accessToken));
        return httpService(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
