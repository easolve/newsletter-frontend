"use client";

import WizardStep from "./wizard-step";
import WizardStepButton from "./wizard-step-button";

const NewsletterWizard = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between space-y-6 rounded-lg p-6">
      <WizardStep />
      <WizardStepButton />
    </div>
  );
};

export default NewsletterWizard;
