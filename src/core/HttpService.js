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
