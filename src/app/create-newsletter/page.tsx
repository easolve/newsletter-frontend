import NewsletterWizard from "@/features/create-newsletter/newsletter-wizard";
import { NewsletterDataProvider } from "@/features/create-newsletter/use-newsletter-data";

export default function CreateYourOwnNewsletterPage() {
  return (
    <NewsletterDataProvider>
      <NewsletterWizard />
    </NewsletterDataProvider>
  );
}
