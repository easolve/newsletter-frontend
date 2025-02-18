import NewsletterTable from "@/features/newsletter-table";
import { fetchUserProfile } from "../api/user-profile";
import Layout from "./layout";

export default async function ProfilePage() {
  const newsletters = await fetchUserProfile();
  return (
    <Layout>
      <NewsletterTable newsletters={newsletters} />
    </Layout>
  );
}
