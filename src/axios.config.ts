import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
});

export default axiosInstance;
