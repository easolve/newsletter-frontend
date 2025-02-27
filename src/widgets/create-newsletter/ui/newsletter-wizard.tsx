"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import WizardStep from "./wizard-step";
import WizardStepButton from "./wizard-step-button";
import WizardStepHeader from "./wizard-step-header";

const NewsletterWizard = () => {
  return (
    <Card className="h-full w-full max-w-2xl sm:p-2 xl:max-w-3xl" shadow="sm">
      <CardHeader className="flex flex-col items-start gap-3">
        <WizardStepHeader />
      </CardHeader>
      <CardBody>
        <WizardStep />
      </CardBody>
      <CardFooter className="justify-between">
        <WizardStepButton />
      </CardFooter>
    </Card>
  );
};

export default NewsletterWizard;
