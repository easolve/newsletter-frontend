import { callAPI } from "@/shared/api";

export const fetchSubscribers = async (
  info_id: string,
): Promise<Subscriber[]> => {
  return callAPI.serverSide
    .get(`/v1/news/subscriber/${info_id}`)
    .then((res) => {
      if (process.env.NODE_ENV === "development") {
        console.log(res.data);
      }
      const { subscribers } = res.data;
      return subscribers;
    })
    .catch(() => {
      return [];
    });
};
