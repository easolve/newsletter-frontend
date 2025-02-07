"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const server = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const cookieStore = await cookies();

server.interceptors.request.use((config) => {
  const accessToken = cookieStore.get("access_token")?.value;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
