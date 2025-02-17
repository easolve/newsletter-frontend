import SubscriberTable from "@/features/subscriber-table";
import { UsersIcon } from "@/shared/ui/icons";
import { fetchNewsletter, fetchSubscribers } from "../api/fetch";
import History from "./history";
import ItemLayout from "./item-layout";
import Newsletter from "./newsletter";

const NewsletterPage = async () => {
  const newsletter = await fetchNewsletter();
  const subscribers = await fetchSubscribers();

  return (
    <article className="flex flex-col gap-5">
      <section className="flex gap-5 max-md:flex-col">
        <Newsletter newsletter={newsletter} />
        <ItemLayout
          headerTitle="SUBSCRIBERS"
          headerStartContent={<UsersIcon />}
        >
          <SubscriberTable subscribers={subscribers} />
        </ItemLayout>
      </section>
      <History />
    </article>
  );
};

export default NewsletterPage;
