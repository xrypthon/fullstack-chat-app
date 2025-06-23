import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
