import Newsletters from "@/views/mypage/ui/newsletters";
import { fetchUserProfile } from "../api/user-profile";

export default async function ProfilePage() {
  const news = await fetchUserProfile();
  return <Newsletters newsletters={news} />;
}
