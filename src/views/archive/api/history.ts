"use server";

import { callAPI } from "@/shared/api";

interface ResponseData {
  history: Newsletter.History[];
}

export const fetchHistory = async (
  id: Newsletter.Info["id"],
): Promise<null | Newsletter.History[]> => {
  if (process.env.NODE_ENV === "development") {
    if (id === "test") {
      return [];
    }
  }

  return callAPI.serverSide
    .get(`/v1/news/history/${id}`)
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      const { history }: ResponseData = res.data;
      return history.sort((a, b) => {
        if (a.created_at < b.created_at) return 1;
        if (a.created_at > b.created_at) return -1;
        return 0;
      });
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response?.data);
      }
      return null;
    });
};
