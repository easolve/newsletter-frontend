"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { useRouter } from "next/navigation";
import { EnvelopeIcon } from "@/shared/ui/icons";

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  const router = useRouter();

  return (
    <Breadcrumbs>
      <BreadcrumbItem
        startContent={<EnvelopeIcon height="1rem" width="1rem" />}
        onPress={() => router.push("/newsletter")}
      >
        Newsletter
      </BreadcrumbItem>
      <BreadcrumbItem>{name}</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default Header;
