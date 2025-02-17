"use server";

import { cookies } from "next/headers";

export async function fetchUserProfile(): Promise<Newsletter[]> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    return [];
  }

  const url = new URL(
    "/v1/user/news",
    process.env.NEXT_PUBLIC_BACKEND_API_URL,
  );

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store", // `cache: 'no-store'` to ensure we always refetch or handle caching as needed
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data.news ?? [];
  } catch {
    return [];
  }
}
