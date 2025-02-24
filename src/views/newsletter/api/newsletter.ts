import { callAPI } from "@/shared/api";
import { transformNewsletter } from "@/utils/newsletter";

export const fetchNewsletter = async (
  info_id: string,
): Promise<Newsletter.Info | null> => {
  if (process.env.NODE_ENV === "development") {
    if (info_id === "test") {
      return {
        name: "My Newsletter",
        id: "1",
        description: "This is my newsletter",
        send_frequency: "daily",
        is_active: false,
        language: "en",
      };
    }
  }

  return callAPI.serverSide
    .get(`/v1/news/info/${info_id}`)
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      const { news } = res.data;
      return transformNewsletter(news);
    })
    .catch(() => {
      return null;
    });
};
