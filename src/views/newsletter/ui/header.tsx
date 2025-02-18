"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { useRouter } from "next/navigation";
import { EnvelopeIcon } from "@/shared/ui/icons";

const Header = () => {
  const router = useRouter();

  return (
    <Breadcrumbs>
      <BreadcrumbItem
        startContent={<EnvelopeIcon height="1rem" width="1rem" />}
        onPress={() => router.push("/newsletter")}
      >
        Newsletter
      </BreadcrumbItem>
      <BreadcrumbItem>Dashboard</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default Header;
