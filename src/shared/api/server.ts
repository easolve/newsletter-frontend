"use server";

import axios from "axios";
import { cookies } from "next/headers";

const server = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

server.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default server;
