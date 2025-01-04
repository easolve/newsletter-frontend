"use client";

import React, { useState } from "react";
import NewsletterDetail from "./steps/detail";
import NewsletterFormat from "./steps/format";
import NewsletterPreference from "./steps/preference";
import NewsletterSample from "./steps/sample";
import NewsletterSource from "./steps/source";
import NewsletterTopic from "./steps/topic";
import { useNewsletterData } from "./use-newsletter-data";
import WizardStep from "./wizard-step";

export interface NewsletterStep {
  label: string;
  description?: string;
  progress?: number;
  component: React.FC;
  validator?: (data: {
    topics: string[];
    sources: string[];
    format: string[];
    frequency: string;
    sample: string[];
    name: string;
    description: string;
  }) => boolean;
}

const steps: NewsletterStep[] = [
  {
    label: "Topic",
    description: "Select topics you are interested in.",
    progress: 0,
    component: NewsletterTopic,
    validator: (data) => data.topics.length > 0,
  },
  {
    label: "Source",
    description: "Select sources you want to receive news from.",
    progress: 20,
    component: NewsletterSource,
    validator: (data) => data.sources.length > 0,
  },
  {
    label: "Format",
    description: "Select the format / style of the newsletter.",
    progress: 40,
    component: NewsletterFormat,
    validator: (data) => data.format.length > 0,
  },
  {
    label: "Sample",
    description: "Which sample is your favorite?",
    progress: 60,
    component: NewsletterSample,
    // validator: (data) => data.sample.length > 0,
  },
  {
    label: "Preference",
    description: "Lastly, enter the details of your newsletter.",
    progress: 80,
    component: NewsletterPreference,
    validator: (data) =>
      data.frequency.length > 0 &&
      data.name.length > 0 &&
      data.description.length > 0,
  },
  {
    label: "Done!",
    // description: "Lastly, enter the details of your newsletter.",
    progress: 100,
    component: NewsletterDetail,
  },
];

const NewsletterWizard: React.FC = () => {
  const [step, setStep] = useState(0);

  const { topics, sources, format, frequency, sample, name, description } =
    useNewsletterData();

  const currentData = {
    topics,
    sources,
    format,
    frequency,
    sample,
    name,
    description,
  };

  const currentStep = steps[step];

  const canProceed = currentStep.validator
    ? currentStep.validator(currentData)
    : true;

  const goNext = async () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      alert("Saved successfully!");
    }
  };

  const goPrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const StepComponent = currentStep.component;

  return (
    <WizardStep
      step={step}
      totalSteps={steps.length}
      label={currentStep.label}
      description={currentStep.description}
      progress={currentStep.progress}
      onNext={goNext}
      onPrev={goPrev}
      onNextLabel={step === steps.length - 1 ? "Save" : "Next"}
      canProceed={canProceed}
    >
      <StepComponent />
    </WizardStep>
  );
};

export default NewsletterWizard;
