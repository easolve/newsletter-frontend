import { fetchUserProfile } from "../api/user-profile";
import Newsletters from "./newsletters";

export default async function ProfilePage() {
  const news = await fetchUserProfile();
  return <Newsletters newsletters={news} />;
}
