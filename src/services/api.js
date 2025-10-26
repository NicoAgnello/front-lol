import axios from "axios";
import { getToken, clearToken } from "../utils/auth";
import { getDbChoice } from "../utils/dbChoice"; // 👈 nuevo

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;

  // 👇 prefijo /mysql o /mongo según elección
  const db = getDbChoice();
  config.baseURL = `${import.meta.env.VITE_API_BASE_URL}/${db}`;

  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      clearToken();
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  }
);

export default api;
