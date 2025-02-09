export const fetchNewsletter = async () => {
  if (process.env.NODE_ENV === "development") {
    return {
      name: "My Newsletter",
      id: "1",
      description: "This is my newsletter",
      send_frequency: "daily",
    } as Newsletter;
  }
};

export const fetchSubscribers = async () => {
  if (process.env.NODE_ENV === "development") {
    return [
      { email: "example1@test.com" },
      { email: "example2@test.com" },
      { email: "example3@test.com" },
      { email: "example4@test.com" },
      { email: "example5@test.com" },
      { email: "example6@test.com" },
    ];
  }
};
