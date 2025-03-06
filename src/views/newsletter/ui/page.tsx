import { redirect } from "next/navigation";
import { NewsletterProvider } from "@/entities/newsletter";
import { NAME } from "@/shared/config";
import { NewsletterStatus } from "@/shared/ui";
import { fetchNewsletter } from "../api";
import ActionsDropdown from "./actions-dropdown";
import Header from "./header";
import ItemLayout from "./item-layout";
import Preference from "./preference";
import Prompt from "./prompt";
import Sources from "./sources";
import Topics from "./topics";

interface Props {
  params: Promise<{
    info_id: string;
  }>;
  subscribers: React.ReactNode;
  archive: React.ReactNode;
}

export const generateMetadata = async ({ params }: Props) => {
  const { info_id } = await params;
  const newsletter = await fetchNewsletter(info_id);

  return {
    title: `Dashboard - ${newsletter?.name} | ${NAME}`,
  };
};

const NewsletterPage = async ({ params, subscribers, archive }: Props) => {
  const { info_id } = await params;
  const newsletter = await fetchNewsletter(info_id);

  if (!newsletter) {
    redirect("/newsletter");
  }

  return (
    <NewsletterProvider info={newsletter}>
      <article className="flex w-full flex-col gap-5">
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
          <Topics topics={newsletter.topics} />
        </section>
        <section className="grid gap-5 lg:grid-cols-[auto,1fr]">
          <div className="flex flex-col gap-5">
            <Preference info={newsletter} />
            <ItemLayout headerTitle="Sources">
              <Sources sources={newsletter.sources} />
            </ItemLayout>
          </div>
          <ItemLayout headerTitle="Prompt">
            <Prompt custom_prompt={newsletter.custom_prompt} />
          </ItemLayout>
        </section>
        <ItemLayout headerTitle="Archive">{archive}</ItemLayout>
        <ItemLayout headerTitle="Subscribers">{subscribers}</ItemLayout>
      </article>
    </NewsletterProvider>
  );
};

export default NewsletterPage;
