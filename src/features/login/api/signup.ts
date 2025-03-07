"use server";

import { callAPI } from "@/shared/api";

export const signUp = async (
  email: string,
  password: string,
  confirmPassword: string,
): Promise<string> => {
  if (!email || !password || !confirmPassword) {
    return "Email, password, and confirm password are required.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }

  return callAPI.serverSide
    .post("/v1/user/register", {
      username: email,
      password,
    })
    .then(() => "")
    .catch((err) => {
      if (err.response?.status === 422) {
        return "Email is already in use.";
      }

      if (process.env.NODE_ENV === "development") {
        console.error(err.response?.data);
      }

      return "Failed to sign up.";
    });
};
