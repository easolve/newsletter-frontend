"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { EnvelopeIcon } from "@/shared/ui/icons";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem
          startContent={<EnvelopeIcon height="1rem" width="1rem" />}
        >
          Newsletter
        </BreadcrumbItem>
      </Breadcrumbs>
      <div className="mb-8 mt-4">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">
          Newsletter Management
        </h1>
        <p>
          Easily manage your published newsletters and make edits or new
          releases with ease.
        </p>
      </div>
      {children}
    </>
  );
};

export default Layout;
