import Newsletter from "@/views/mypage/ui/newsletter";
import { fetchUserProfile } from "../api/user-profile";

export default async function ProfilePage() {
  const news = await fetchUserProfile();
  return <Newsletter newsletters={news} />;
}
