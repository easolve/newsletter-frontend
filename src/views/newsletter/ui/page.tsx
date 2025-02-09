"use client";

import History from "@/views/newsletter/ui/history";
import Newsletter from "@/views/newsletter/ui/newsletter";
import Subscribers from "@/views/newsletter/ui/subscribers";

const NewsletterPage = () => {
  const newsletter: Newsletter = {
    name: "My Newsletter",
    id: "1",
    description: "This is my newsletter",
    send_frequency: "daily",
  };

  return (
    <article className="flex flex-col gap-5">
      <section className="flex gap-5 max-md:flex-col">
        <Newsletter newsletter={newsletter} />
        <Subscribers />
      </section>
      <History />
    </article>
  );
};

export default NewsletterPage;
