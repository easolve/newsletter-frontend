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
      if (process.env.NODE_ENV === "development") {
        if (info_id === "test") {
          return [
            { email: "example1@test.com" },
            { email: "example2@test.com" },
            { email: "example3@test.com" },
            { email: "example4@test.com" },
            { email: "example5@test.com" },
            { email: "example6@test.com" },
          ];
        }
      }
    });
};
