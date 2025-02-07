import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "/client"
    : process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
