"use server";

import { cookies } from "next/headers";
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
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    return null;
  }

  const url = new URL(
    `/v1/news/example/${taskId}`,
    process.env.NEXT_PUBLIC_BACKEND_API_URL,
  );

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-cache",
    });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch {
    return null;
  }
}
