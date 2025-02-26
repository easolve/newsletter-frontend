"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useDebouncedCallback from "@/hooks/use-debounced-callback";
import { createSampleNewsletter, saveNewsletter } from "../api/actions";
import {
  type CreateNewsletterState,
  useNewsletterData,
} from "../store/create-data";
import NewsletterDetail from "./steps/detail";
import NewsletterFormat from "./steps/format";
import NewsletterPreference from "./steps/preference";
import NewsletterSource from "./steps/source";
import NewsletterTopic from "./steps/topic";
import WizardStep from "./wizard-step";
import WizardStepButton from "./wizard-step-button";

export interface NewsletterStep {
  label: string;
  description?: string;
  progress?: number;
  component: React.FC;
  validator?: (data: CreateNewsletterState) => boolean;
}

const steps: NewsletterStep[] = [
  {
    label: "Preference",
    description: "First, enter the details of your newsletter.",
    progress: 0,
    component: NewsletterPreference,
    validator: (data) =>
      data.sendTime !== null &&
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
    label: "Almost Done...",
    // description: "Lastly, enter the details of your newsletter.",
    progress: 100,
    component: NewsletterDetail,
  },
];

const NewsletterWizard: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const router = useRouter();

  const topics = useNewsletterData((state) => state.topics);
  const sources = useNewsletterData((state) => state.sources);
  const setExampleId = useNewsletterData((state) => state.setExampleId);
  const setExampleTitle = useNewsletterData((state) => state.setExampleTitle);
  const setExampleContent = useNewsletterData(
    (state) => state.setExampleContent,
  );

  const currentStep = steps[step];

  const debouncedCreateSampleNewsletter = useDebouncedCallback(
    async (topics: string[], sources: string[]) => {
      const id = await createSampleNewsletter(topics, sources);
      if (id) {
        setExampleId(id);
      } else {
        alert("Failed to create sample newsletter");
      }
    },
    2000,
  );

  const goNext = async () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      if (step === steps.length - 2) {
        setExampleTitle(null);
        setExampleContent(null);
        debouncedCreateSampleNewsletter(topics, sources);
      }
    } else {
      const { name, description } = useNewsletterData.getState();
      const errorMessage = await saveNewsletter({
        name,
        description,
        // TODO : Add other fields
      });
      if (!errorMessage) {
        alert("Saved successfully!");
        router.push("/newsletter");
        return;
      }
      alert(errorMessage);
    }
  };

  const goPrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const StepComponent = currentStep.component;

  return (
    <div className="flex h-full w-full flex-col justify-between space-y-6 rounded-lg p-6">
      <WizardStep
        step={step}
        totalSteps={steps.length}
        label={currentStep.label}
        description={currentStep.description}
        progress={currentStep.progress}
      >
        <StepComponent />
      </WizardStep>
      <WizardStepButton
        step={step}
        onPrev={goPrev}
        onNext={goNext}
        onNextLabel={step === steps.length - 1 ? "Save" : "Next"}
        validator={currentStep.validator}
      />
    </div>
  );
};

export default NewsletterWizard;
