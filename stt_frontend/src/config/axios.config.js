import axios from "axios";
import { env } from "./env.config";

// Public Api Instance for unauthenticated requests.
export const publicApi = axios.create({
  baseURL: `${env.API_URL}`, // Base URL from .env
  headers: {
    "Content-Type": "application/json", // default for normal requests
  },
});

publicApi.interceptors.request.use((config) => {
  if(config.data instanceof FormData){
    delete config.headers["Content-Type"]
  }
  return config;
})