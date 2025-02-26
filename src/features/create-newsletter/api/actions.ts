"use server";

import { cookies } from "next/headers";
import { callAPI } from "@/shared/api";

export interface NewsletterData {
  name: string;
  description: string;
  frequency: string;
  exampleContent: string | null;
  topics: string[];
  sources: string[];
}

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

export async function createSampleNewsletter(
  topics: string[],
  sources: string[],
): Promise<string | null> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    return null;
  }

  const url = new URL("/v1/news/task", process.env.NEXT_PUBLIC_BACKEND_API_URL);

  try {
    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        topics,
        sources,
      }),
      cache: "no-cache",
    });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data.task_id;
  } catch {
    return null;
  }
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
