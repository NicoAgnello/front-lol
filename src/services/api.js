import axios from "axios";
import { getToken, clearToken } from "../utils/auth";
import { getDbChoice } from "../utils/dbChoice"; // 👈 sigue igual

// Detecta automáticamente la IP o dominio desde el que se sirve el front
// (funciona tanto en localhost, LAN o dominio)
const currentHost = window.location.hostname;
const baseApiUrl = `http://${currentHost}:3000`; // 👈 Puerto de tu backend Express

const api = axios.create({
  baseURL: baseApiUrl,
});

// 👉 Interceptor de requests: agrega token + ruta /mysql o /mongo
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;

  // 👇 prefijo /mysql o /mongo según elección
  const db = getDbChoice();
  config.baseURL = `${baseApiUrl}/${db}`;

  return config;
});

// 👉 Interceptor de responses: si vence el token, te manda al login
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
