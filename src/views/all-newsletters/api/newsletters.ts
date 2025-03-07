"use server";

import { callAPI } from "@/shared/api";
import { transformNewsletter } from "@/shared/lib";

interface ResData {
  info: Newsletter.Primitive[];
}

export async function fetchNewsletters(): Promise<Newsletter.Info[]> {
  return callAPI.serverSide
    .get<ResData>("v1/news/info")
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      const { info } = res.data;
      return info.map((item) => transformNewsletter(item));
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err);
      }
      return [];
    });
}
