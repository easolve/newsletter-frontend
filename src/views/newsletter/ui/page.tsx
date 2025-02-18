import HistoryTable from "@/features/history-table";
import SubscriberTable from "@/features/subscriber-table";
import { BookOpenIcon, UsersIcon } from "@/shared/ui/icons";
import Header from "@/views/newsletter/ui/header";
import { fetchNewsletter, fetchSubscribers } from "../api/fetch";
import ItemLayout from "./item-layout";
import Newsletter from "./newsletter";

const NewsletterPage = async () => {
  const newsletter = await fetchNewsletter();
  const subscribers = await fetchSubscribers();

  return (
    <article className="flex flex-col gap-5">
      <Header name={newsletter.name} />
      <section className="flex gap-5 max-md:flex-col">
        <Newsletter newsletter={newsletter} />
        <ItemLayout
          headerTitle="SUBSCRIBERS"
          headerStartContent={<UsersIcon />}
        >
          <SubscriberTable subscribers={subscribers} />
        </ItemLayout>
      </section>
      <ItemLayout headerTitle="HISTORY" headerStartContent={<BookOpenIcon />}>
        <HistoryTable />
      </ItemLayout>
    </article>
  );
};

export default NewsletterPage;
