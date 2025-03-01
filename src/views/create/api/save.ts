"use server";

import { callAPI } from "@/shared/api";

export async function saveNewsletter(data: Newsletter.Base): Promise<string> {
  return callAPI.serverSide
    .post("/v1/news/info", data)
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
      return "Failed to save newsletter";
    });
}
