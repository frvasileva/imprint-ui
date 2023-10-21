import axios from "axios";
import { API_BASE_URL } from "./settings";

const axiosClient = axios.create({
  // Configuration
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosClient;
