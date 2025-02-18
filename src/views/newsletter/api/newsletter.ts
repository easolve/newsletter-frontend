import { callAPI } from "@/shared/api";

export const fetchNewsletter = async (
  info_id: string,
): Promise<Newsletter.Info> => {
  return callAPI.serverSide
    .get(`/v1/news/info/${info_id}`)
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      const { news } = res.data;
      return news;
    })
    .catch(() => {
      if (process.env.NODE_ENV === "development") {
        if (info_id === "test") {
          return {
            name: "My Newsletter",
            id: "1",
            description: "This is my newsletter",
            send_frequency: "daily",
          };
        }
      }
    });
};
