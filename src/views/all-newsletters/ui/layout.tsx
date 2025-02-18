"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { EnvelopeIcon } from "@/shared/ui/icons";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumbs>
        <BreadcrumbItem
          startContent={<EnvelopeIcon height="1rem" width="1rem" />}
        >
          Newsletter
        </BreadcrumbItem>
      </Breadcrumbs>
      <div>
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Overview</h1>
        <p>
          Easily manage your published newsletters and make edits or new
          releases with ease.
        </p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
