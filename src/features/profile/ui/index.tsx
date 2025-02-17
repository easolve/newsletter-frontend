"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { logout } from "@/features/profile/api/logout";

interface Props {
  username: string;
}

const Profile = ({ username }: Props) => {
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger className="cursor-pointer">
        <User
          avatarProps={{
            name: username,
          }}
          name={username}
        />
      </DropdownTrigger>
      <DropdownMenu disabledKeys={["profile"]}>
        <DropdownItem
          key="newsletter"
          onPress={() => router.push("/newsletter")}
        >
          Newsletter
        </DropdownItem>
        <DropdownItem key="profile" onPress={() => router.push("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem
          key="logout"
          onPress={() => logout()}
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Profile;
