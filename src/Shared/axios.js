import axios from "axios";
import { getToken, adminInfoRemovalService } from "./Service";

const BASE_URL ="https://jobs-api.squareboat.info/api/v1"
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
    headers: {
      Authorization:  getToken()
    },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 403) {
      adminInfoRemovalService("My-job");
      window.location = "/";
    } else return Promise.reject(error);
  }
);
