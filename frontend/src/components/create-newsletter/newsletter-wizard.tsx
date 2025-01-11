"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  createSampleNewsletter,
  saveNewsletter,
} from "@/app/create-newsletter/actions";
import NewsletterDetail from "./steps/detail";
import NewsletterFormat from "./steps/format";
import NewsletterPreference from "./steps/preference";
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
    label: "Preference",
    description: "First, enter the details of your newsletter.",
    progress: 0,
    component: NewsletterPreference,
    validator: (data) =>
      data.frequency.length > 0 &&
      data.name.length > 0 &&
      data.description.length > 0,
  },
  {
    label: "Topic",
    description: "Select topics you are interested in.",
    progress: 25,
    component: NewsletterTopic,
    validator: (data) => data.topics.length > 0,
  },
  {
    label: "Source",
    description: "Select sources you want to receive news from.",
    progress: 50,
    component: NewsletterSource,
    validator: (data) => data.sources.length > 0,
  },
  {
    label: "Format",
    description: "Select the format / style of the newsletter.",
    progress: 75,
    component: NewsletterFormat,
    validator: (data) => data.format.length > 0,
  },
  {
    label: "Done!",
    // description: "Lastly, enter the details of your newsletter.",
    progress: 100,
    component: NewsletterDetail,
  },
];

const NewsletterWizard: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const router = useRouter();
  const {
    topics,
    sources,
    format,
    frequency,
    sample,
    setSample,
    name,
    description,
  } = useNewsletterData();

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
      if (step === steps.length - 1) {
        const data = await createSampleNewsletter(topics, sources);
        if (data) {
          setSample([data]);
        }
      }
    } else {
      await saveNewsletter(currentData);
      router.push("/");
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
