"use server";

import { callAPI } from "@/shared/api";

export const addSubscribers = async (
  id: Newsletter.Info["id"],
  email_list: string[],
): Promise<string> => {
  return callAPI.serverSide
    .post(`/v1/news/subscriber/${id}`, { email_list })
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      return "";
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response.data);
      }
      return "Failed to add subscribers";
    });
};
