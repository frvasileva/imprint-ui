import axios from "axios";

const axiosClient = axios.create({
  // Configuration
  baseURL: "http://23ab-95-43-222-106.ngrok-free.app",
  timeout: 8000,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosClient;
