import { redirect } from "next/navigation";
import {
  HistoryProvider,
  NewsletterProvider,
  fetchHistory,
} from "@/entities/newsletter";
import HistoryTable from "@/features/history-table";
import SubscriberTable from "@/features/subscriber-table";
import { NewsletterStatus } from "@/shared/ui";
import { fetchNewsletter, fetchSubscribers } from "../api";
import Header from "./header";
import ItemLayout from "./item-layout";
import ActionsDropdown from "./newsletter/actions-dropdown";
import Preference from "./newsletter/preference";
import Prompt from "./newsletter/prompt";
import TopicChip from "./newsletter/topic-chip";

interface Props {
  params: Promise<{
    info_id: string;
  }>;
}

const NewsletterPage = async ({ params }: Props) => {
  const { info_id } = await params;
  const newsletter = await fetchNewsletter(info_id);
  const subscribers = await fetchSubscribers(info_id);
  const history = await fetchHistory(info_id);

  if (!newsletter) {
    redirect("/newsletter");
  }

  return (
    <NewsletterProvider id={info_id}>
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
          <div className="mt-2 flex gap-2">
            {newsletter.topics.map((item) => (
              <TopicChip key={item}>{item}</TopicChip>
            ))}
          </div>
        </section>
        <section className="grid gap-5 lg:grid-cols-[auto,1fr]">
          <div className="flex flex-col gap-5">
            <Preference info={newsletter} />
            <ItemLayout headerTitle="Sources"></ItemLayout>
          </div>
          <ItemLayout headerTitle="Prompt">
            <Prompt>{newsletter.custom_prompt}</Prompt>
          </ItemLayout>
        </section>
        <ItemLayout headerTitle="Archive">
          <HistoryProvider history={history}>
            <HistoryTable />
          </HistoryProvider>
        </ItemLayout>
        <ItemLayout headerTitle="Subscribers">
          <SubscriberTable subscribers={subscribers} />
        </ItemLayout>
      </article>
    </NewsletterProvider>
  );
};

export default NewsletterPage;
