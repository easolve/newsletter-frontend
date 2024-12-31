"use client";

import React, { useState } from "react";
import NewsletterFormat from "./steps/format";
import NewsletterFrequency from "./steps/frequency";
import NewsletterSample from "./steps/sample";
import NewsletterSource from "./steps/source";
import NewsletterTopic from "./steps/topic";
import { useNewsletterData } from "./use-newsletter-data";
import WizardStep from "./wizard-step";

export interface NewsletterStep {
  label: string;
  progress?: number;
  component: React.FC;
  validator?: (data: {
    topics: string[];
    sources: string[];
    format: string[];
    frequency: string;
    sample: string[];
  }) => boolean;
}

const steps: NewsletterStep[] = [
  {
    label: "Topic",
    progress: 0,
    component: NewsletterTopic,
    validator: (data) => data.topics.length > 0,
  },
  {
    label: "Source",
    progress: 20,
    component: NewsletterSource,
    validator: (data) => data.sources.length > 0,
  },
  {
    label: "Format",
    progress: 60,
    component: NewsletterFormat,
    validator: (data) => data.format.length > 0,
  },
  {
    label: "Sample",
    progress: 80,
    component: NewsletterSample,
    // validator: (data) => data.sample.length > 0,
  },
  {
    label: "Frequency",
    progress: 100,
    component: NewsletterFrequency,
    validator: (data) => !!data.frequency,
  },
];

const NewsletterWizard: React.FC = () => {
  const [step, setStep] = useState(0);

  const { topics, sources, format, frequency, sample } = useNewsletterData();

  const currentData = { topics, sources, format, frequency, sample };

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
