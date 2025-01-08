import ProfileInfo from "@/components/profile/profile-info";
import { title } from "@/styles/primitives";
import { clsx } from "@/utils/clsx";

export default function ProfilePage() {
  return (
    <main className="mx-auto h-[calc(100vh_-_64px)] w-full max-w-7xl px-6">
      <div className="flex h-full w-full flex-col items-center space-y-6 rounded-lg p-6">
        <div className="flex w-full flex-col items-start justify-center gap-10 overflow-hidden">
          <h1
            className={title({
              size: "md",
            })}
          >
            Profile
          </h1>
          <ProfileInfo />
        </div>
      </div>
    </main>
  );
}
