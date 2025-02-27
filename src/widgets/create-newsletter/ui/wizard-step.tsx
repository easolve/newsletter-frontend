"use client";

import { useStepStore } from "@/widgets/create-newsletter/store/step";
import { STEPS } from "../config";

const WizardStep = () => {
  const step = useStepStore((state) => state.step);
  const { StepComponent } = STEPS[step];

  return <StepComponent />;
};

export default WizardStep;
