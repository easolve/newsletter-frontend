import { redirect } from "next/navigation";
import HistoryTable from "@/features/history-table";
import SubscriberTable from "@/features/subscriber-table";
import { NewsletterStatus } from "@/shared/ui";
import { fetchNewsletter, fetchSubscribers } from "../api";
import Header from "./header";
import ActionsDropdown from "./newsletter/actions-dropdown";
import Preference from "./newsletter/preference";
import TableLayout from "./table-layout";

interface Props {
  params: Promise<{
    info_id: string;
  }>;
}

const NewsletterPage = async ({ params }: Props) => {
  const { info_id } = await params;
  const newsletter = await fetchNewsletter(info_id);
  const subscribers = await fetchSubscribers(info_id);

  if (!newsletter) {
    redirect("/newsletter");
  }

  return (
    <article className="flex flex-col gap-5">
      <Header />
      <section>
        <div className="flex justify-between">
          <span className="flex items-end gap-2">
            <h1 className="text-5xl font-bold">{newsletter.name}</h1>
            <NewsletterStatus isActive={newsletter.is_active} />
          </span>
          <ActionsDropdown />
        </div>
        <p className="mt-1 text-2xl font-light">{newsletter.description}</p>
      </section>
      <div className="flex flex-row gap-5">
        <Preference info={newsletter} />
      </div>
      <TableLayout headerTitle="Subscribers">
        <SubscriberTable subscribers={subscribers} />
      </TableLayout>
      <TableLayout headerTitle="Archive">
        <HistoryTable />
      </TableLayout>
    </article>
  );
};

export default NewsletterPage;
