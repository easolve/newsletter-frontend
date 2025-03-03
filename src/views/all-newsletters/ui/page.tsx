import NewsletterTable from "@/features/newsletter-table";
import { fetchNewsletters } from "../api/newsletters";
import Header from "./header";

export default async function ProfilePage() {
  const newsletters = await fetchNewsletters();
  return (
    <div className="flex w-full flex-col gap-5">
      <Header />
      <div>
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Overview</h1>
        <p>
          Easily manage your published newsletters and make edits or new
          releases with ease.
        </p>
      </div>
      <NewsletterTable newsletters={newsletters} />
    </div>
  );
}
