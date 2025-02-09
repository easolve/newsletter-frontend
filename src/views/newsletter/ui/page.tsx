import { SubscriberProvider } from "@/providers/subscriber-provider";
import { fetchNewsletter, fetchSubscribers } from "../api/fetch";
import History from "./history";
import Newsletter from "./newsletter";
import Subscribers from "./subscribers";

const NewsletterPage = async () => {
  const newsletter = await fetchNewsletter();
  const subscribers = await fetchSubscribers();

  return (
    <article className="flex flex-col gap-5">
      <section className="flex gap-5 max-md:flex-col">
        <Newsletter newsletter={newsletter} />
        <SubscriberProvider $subscribers={subscribers}>
          <Subscribers />
        </SubscriberProvider>
      </section>
      <History />
    </article>
  );
};

export default NewsletterPage;
