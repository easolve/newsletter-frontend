"use server";

import { callAPI } from "@/shared/api";

interface SaveData {
  title: string | null;
  content: string | null;
}

interface SaveResponse {
  history_id: number;
}

export const saveArchive = async (
  info_id: Newsletter.Info["id"],
  { title, content }: SaveData,
): Promise<SaveResponse | null> => {
  return callAPI.serverSide
    .post(`/v1/news/history/${info_id}`, { title, content, status: "STANDBY" })
    .then((res) => {
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
};

export const sendArchive = async (
  info_id: Newsletter.Info["id"],
  data: SaveData,
) => {
  const response = await saveArchive(info_id, data);
  if (!response) {
    return false;
  }
  const { history_id } = response;

  return callAPI.serverSide
    .post(`/v1/news/mail`, { info_id, history_id })
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      return true;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response.data);
      }
      return false;
    });
};
