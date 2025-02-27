"use client";

import { Progress } from "@heroui/react";
import React from "react";
import { subtitle, title } from "@/styles/primitives";
import { useStepStore } from "@/widgets/create-newsletter/store/step";
import { STEPS } from "../config";

const WizardStep = () => {
  const step = useStepStore((state) => state.step);
  const { label, description, StepComponent } = STEPS[step];
  const progressValue = (step / (STEPS.length - 1)) * 100;

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1
          className={title({
            size: "sm",
          })}
        >
          {label}
        </h1>
        <Progress
          aria-label="Progress bar"
          classNames={{
            base: "max-w-[300px]",
          }}
          value={progressValue}
          showValueLabel={true}
        />
        {description && <p className={subtitle()}>{description}</p>}
      </div>
      <div className="flex h-full flex-col">
        <StepComponent />
      </div>
    </div>
  );
};

export default WizardStep;
