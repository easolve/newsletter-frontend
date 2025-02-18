"use server";

import { callAPI } from "@/shared/api";

export async function fetchNewsletters(): Promise<Newsletter.Info[]> {
  return callAPI.serverSide
    .get("v1/news/info")
    .then((res) => res.data)
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err);
      }
      return [];
    });
}
