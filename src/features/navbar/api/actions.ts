"use server";

import { cookies } from "next/headers";
import { callAPI } from "@/shared/api";

export async function fetchUserEmail(): Promise<string | null> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  if (!accessToken) {
    return null;
  }

  return callAPI.serverSide
    .get("/v1/user")
    .then((res) => {
      const { email }: User = res.data;
      if (!email) {
        return null;
      }
      return email;
    })
    .catch(() => null);
}
