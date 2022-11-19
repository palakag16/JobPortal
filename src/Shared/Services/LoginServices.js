import { axiosInstance } from "../axios";

export const verifyCreds = async (creds) => {
    try {
      const { data } = await axiosInstance.post(`/auth/login`, creds);
      return data;
    } catch (e) {
      return {
        error: "Email/Password Invalid",
      };
    }
  };

  export const getJobs = async (pagenum,creds={}) => {
    try {
      const { data } = await axiosInstance.get(`/recruiters/jobs?page=${pagenum}`, creds);
      return data;
    } catch (e) {
      return {
        error: "Something went wrong",
      };
    }
  };

  export const getApplicants = async (id,creds={}) => {
    try {
      const { data } = await axiosInstance.get(`/recruiters/jobs/${id}/candidates`, creds);
      return data;
    } catch (e) {
      return {
        error: "Something went wrong",
      };
    }
  };