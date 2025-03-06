export const getDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const getTime = (date: string) =>
  new Date(date).toLocaleTimeString("en-EN", {
    hour: "2-digit",
    minute: "2-digit",
  });
