"use server";

import { callAPI } from "@/shared/api";

export async function createSampleNewsletter({
  topics,
  sources,
  language,
  custom_prompt,
}: Newsletter.ExampleData): Promise<string | null> {
  return callAPI.serverSide
    .post("/v1/news/letter", { topics, sources, language, custom_prompt })
    .then((res) => {
      const { task_id } = res.data;

      if (process.env.NODE_ENV === "development") {
        console.log("task_id", task_id);
      }

      return task_id;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response?.data);
      }

      return null;
    });
}

export async function getSampleNewsletter(taskId: string) {
  return callAPI.serverSide
    .get(`v1/news/letter/${taskId}`)
    .then((res) => {
      const {} = res.data;
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response?.data);
      }
      return null;
    });
}
