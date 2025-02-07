import ProfileInfo from "@/features/profile/profile-info";
import { fetchUserProfile } from "../api/user-profile";

export default async function ProfilePage() {
  const news = await fetchUserProfile();
  return (
    <main className="mx-auto h-[calc(100vh_-_64px)] w-full max-w-7xl overflow-y-auto overflow-x-hidden px-6">
      <div className="flex h-full w-full flex-col items-center space-y-6 rounded-lg p-6">
        <div className="flex w-full flex-col items-start justify-center gap-10">
          <ProfileInfo newsArr={news} />
        </div>
      </div>
    </main>
  );
}
