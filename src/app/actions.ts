"use server";

import { callAPI } from "@/shared/api";

export async function fetchUserEmail(): Promise<string | null> {
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
