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

export const get = async (url: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  return server.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const post = async <T>(url: string, data: T) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  return server.post(url, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
