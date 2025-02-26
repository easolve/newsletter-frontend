import { Button } from "@heroui/react";
import React from "react";
import {
  type CreateNewsletterState,
  useNewsletterData,
} from "@/features/newsletter-form";

interface Props {
  step: number;
  onPrev: () => void;
  onNext: () => void;
  onNextLabel?: string;
  validator?: (data: CreateNewsletterState) => boolean;
}

const WizardStepButton = ({
  step,
  onPrev,
  onNext,
  onNextLabel,
  validator,
}: Props) => {
  const data = useNewsletterData();
  const canProceed = validator ? validator(data) : true;

  return (
    <div className="flex w-full items-center justify-between">
      {step > 0 ? <Button onPress={onPrev}>Prev</Button> : <div />}
      <Button
        onPress={onNext}
        color="primary"
        variant="solid"
        isDisabled={!canProceed}
      >
        {onNextLabel}
      </Button>
    </div>
  );
};

export default WizardStepButton;
