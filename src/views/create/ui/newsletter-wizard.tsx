"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex size-full justify-center self-center md:h-[90%]"
    >
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
    </motion.div>
  );
};

export default NewsletterWizard;
