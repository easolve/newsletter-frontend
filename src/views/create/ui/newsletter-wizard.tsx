"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";
import {
  CreateWizardBody,
  CreateWizardButton,
  CreateWizardHeader,
} from "@/widgets/create-newsletter";

const NewsletterWizard = () => {
  const handleSave = async () => {
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
