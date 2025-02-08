"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@/icons";

const AddButton = () => {
  const router = useRouter();

  return (
    <Button
      color="primary"
      endContent={<PlusIcon />}
      onPress={() => router.push("/create-newsletter")}
    >
      Add New
    </Button>
  );
};

export default AddButton;
