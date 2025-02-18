import NewsletterTable from "@/features/newsletter-table";
import { fetchNewsletters } from "../api/newsletters";
import Layout from "./layout";

export default async function ProfilePage() {
  const newsletters = await fetchNewsletters();
  return (
    <Layout>
      <NewsletterTable newsletters={newsletters} />
    </Layout>
  );
}
