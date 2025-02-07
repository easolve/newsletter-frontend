import NewsletterWizard from "@/features/create-newsletter/newsletter-wizard";
import { NewsletterDataProvider } from "@/features/create-newsletter/use-newsletter-data";

export default function CreateYourOwnNewsletterPage() {
  return (
    <main className="mx-auto h-[calc(100vh_-_64px)] w-full max-w-7xl px-6">
      <NewsletterDataProvider>
        <NewsletterWizard />
      </NewsletterDataProvider>
    </main>
  );
}
