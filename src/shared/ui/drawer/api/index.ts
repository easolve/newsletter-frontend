"use server";

import { callAPI } from "@/shared/api";

interface HistoryRequest {
  status: string;
  title: string;
  content: string;
}

interface SendNewsletter {
  info_id: number;
  history_id: number;
}

interface CreateHistoryData {
  topics: string[];
  sources: string[];
}

interface HistoryResponse {
  status: string;
  title: string;
  content: string;
  history_id: number;
}

export const createNewsletterTask = async (data_input: CreateHistoryData) => {
  return callAPI.serverSide
    .post(`/v1/news/letter`, data_input)
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response);
      }
      return "Failed to regenerate newsletter";
    });
};

export const getGeneratedArchive = async (
  id: string,
): Promise<HistoryResponse> => {
  return callAPI.serverSide
    .get(`/v1/news/letter/${id}`)
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response);
      }
      return "Failed to get newsletter";
    });
};

export const saveArchive = async (
  info_id: number,
  data: HistoryRequest,
): Promise<HistoryResponse> => {
  return callAPI.serverSide
    .post(`/v1/news/history/${info_id}`, data)
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      return res.data;
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response.data);
      }
      return "Failed to save newsletter";
    });
};

export const sendArchive = async (data: SendNewsletter): Promise<void> => {
  return callAPI.serverSide
    .post(`/v1/news/mail`, data)
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
    })
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err.response.data);
      }
      throw new Error("Failed to send newsletter");
    });
};
