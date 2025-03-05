import { TLanguageCode } from "countries-list";

export const transformNewsletter = (
  newsletter: Newsletter.Primitive,
): Newsletter.Info => {
  const info = {
    ...newsletter,
    language: newsletter.language.toLowerCase() as TLanguageCode,
    send_time: newsletter.send_time.slice(0, 5),
  };

  if (process.env.NODE_ENV === "development") {
    info.subscribers_count = Math.floor(Math.random() * 10);
    info.last_send_status = "SENT";
  }

  return info;
};
