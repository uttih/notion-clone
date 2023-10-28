import axios from "axios";

const BASE_URL = "http://localhost:5000/a@i/v1";
const getToken = () => localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

//APIを叩く前に前処理を行い
axiosClient.interceptors.request.use(async (config) => {
  return {
    config,
    headers: {
      "content-Type": "application/json",
      authorization: `Bearer ${getToken()}`, //リクエストヘッダにJWTを付けてサーバーに渡す
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    throw err.response;
  }
);

export default axiosClient;
