"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import {
  CreateWizardBody,
  CreateWizardButton,
  CreateWizardHeader,
} from "@/widgets/create-newsletter";
import { saveNewsletter } from "../api/save";

const NewsletterWizard = () => {
  const router = useRouter();

  const handleSave = async () => {
    const data = useNewsletterFormStore.getState().getData();
    const errorMessage = await saveNewsletter(data);
    if (!errorMessage) {
      router.push("/newsletters");
      return true;
    }
    alert(errorMessage);
    return false;
  };

  return (
    <Card className="h-full w-full max-w-2xl sm:p-2 xl:max-w-3xl" shadow="sm">
      <CardHeader className="flex flex-col items-start gap-3">
        <CreateWizardHeader />
      </CardHeader>
      <CardBody>
        <CreateWizardBody />
      </CardBody>
      <CardFooter className="justify-between">
        <CreateWizardButton onSave={handleSave} />
      </CardFooter>
    </Card>
  );
};

export default NewsletterWizard;
