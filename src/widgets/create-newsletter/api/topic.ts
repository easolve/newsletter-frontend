"use server";

import { cookies } from "next/headers";
import { callAPI } from "@/shared/api";

const DEFAULT_TOPICS = [
  "economy",
  "science",
  "health",
  "environment",
  "celebrity",
];

export const getRecommendedTopics = async (): Promise<string[]> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    return DEFAULT_TOPICS;
  }

  return callAPI.serverSide
    .get("/v1/news/topic")
    .then((res) => {
      const { topics } = res.data;
      return topics;
    })
    .catch(() => {
      return DEFAULT_TOPICS;
    });
};
