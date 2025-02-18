export const fetchNewsletter = async () => {
  if (process.env.NODE_ENV === "development") {
    return {
      name: "My Newsletter",
      id: "1",
      description: "This is my newsletter",
      send_frequency: "daily",
    } as Newsletter.Info;
  }
};
