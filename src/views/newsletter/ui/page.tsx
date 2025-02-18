import HistoryTable from "@/features/history-table";
import SubscriberTable from "@/features/subscriber-table";
import { BookOpenIcon, UsersIcon } from "@/shared/ui/icons";
import Header from "@/views/newsletter/ui/header";
import { fetchNewsletter, fetchSubscribers } from "../api";
import ItemLayout from "./item-layout";
import Newsletter from "./newsletter";

interface Props {
  params: Promise<{
    info_id: string;
  }>;
}

const NewsletterPage = async ({ params }: Props) => {
  const { info_id } = await params;
  const newsletter = await fetchNewsletter(info_id);
  const subscribers = await fetchSubscribers(info_id);

  return (
    <article className="flex flex-col gap-5">
      <Header name={newsletter.name} />
      <section className="flex gap-5 max-md:flex-col">
        <Newsletter newsletter={newsletter} />
        <ItemLayout
          headerTitle="Subscribers"
          headerStartContent={<UsersIcon />}
        >
          <SubscriberTable subscribers={subscribers} />
        </ItemLayout>
      </section>
      <ItemLayout headerTitle="History" headerStartContent={<BookOpenIcon />}>
        <HistoryTable />
      </ItemLayout>
    </article>
  );
};

export default NewsletterPage;
