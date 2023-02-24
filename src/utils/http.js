import axios from "axios";

axios.defaults.baseURL = "http://164.132.201.41/"; // blackbox

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("session_user_token");

    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      };
    }

    return config;
  }
  // (error) => Promise.reject(error)
);

// axios.interceptors.response.use()

export const secureAxios = axios;
