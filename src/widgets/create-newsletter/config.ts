import React from "react";
import NewsletterDetail from "./ui/steps/detail";
import NewsletterFormat from "./ui/steps/format";
import NewsletterPreference from "./ui/steps/preference";
import NewsletterSource from "./ui/steps/source";
import NewsletterTopic from "./ui/steps/topic";

type ValidationState = Record<
  keyof Omit<Newsletter.Base, "is_active">,
  boolean
>;

interface NewsletterStep {
  label: string;
  description?: string;
  StepComponent: React.FC;
  validator?: (data: ValidationState) => boolean;
  nextButtonLabelGetter?: (data: ValidationState) => string;
}

export const STEPS: NewsletterStep[] = [
  {
    label: "Preference",
    description: "First, enter the details of your newsletter.",
    StepComponent: NewsletterPreference,
    validator: (state) =>
      state.send_time &&
      state.send_frequency &&
      state.name &&
      state.description &&
      state.language,
  },
  {
    label: "Topic",
    description: "Select topics you are interested in.",
    StepComponent: NewsletterTopic,
    validator: (state) => state.topics,
  },
  {
    label: "Source",
    description: "Select sources you want to receive news from.",
    StepComponent: NewsletterSource,
    validator: (state) => state.sources,
  },
  {
    label: "Format",
    description: "Select the format / style of the newsletter.",
    StepComponent: NewsletterFormat,
    nextButtonLabelGetter: (state) => (state.custom_prompt ? "Next" : "Skip"),
  },
  {
    label: "Almost Done...",
    // description: "Lastly, enter the details of your newsletter.",
    StepComponent: NewsletterDetail,
    nextButtonLabelGetter: (data) => "Save",
  },
];

export const TABLE_FIELDS: (keyof Newsletter.Base)[] = [
  "name",
  "description",
  "language",
  "send_frequency",
  "send_time",
  "topics",
  "sources",
  "custom_prompt",
];
