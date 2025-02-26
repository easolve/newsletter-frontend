"use server";

import { callAPI } from "@/shared/api";

export const fetchHistory = async (
  id: Newsletter.Info["id"],
): Promise<null | Newsletter.History[]> => {
  return callAPI.serverSide
    .get(`/v1/news/history/${id}`)
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      const { history } = res.data;
      return history;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response?.data);
      }
      return null;
    });
};
