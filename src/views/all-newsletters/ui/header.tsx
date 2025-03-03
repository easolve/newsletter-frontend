"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { EnvelopeIcon } from "@/shared/ui/icons";

const Header = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem
        startContent={<EnvelopeIcon height="1rem" width="1rem" />}
      >
        Newsletter
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default Header;
