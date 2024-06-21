import axios from "axios";

const API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;
const BASE_URL = "http://localhost:1337/api/";

export const httpService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const CreateNewResume = (data) =>
  httpService.post("/user-resumes", data);

export const getUserResumes = (userEmail) =>
  httpService.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);

export const getResumeById = (id) => httpService.get("/user-resumes/" + id);
