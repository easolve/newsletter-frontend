"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { saveNewsletter } from "../api/actions";
import { STEPS } from "../config";
import { useStepStore } from "../store/step";

const WizardStepButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { step, goPrev, goNext } = useStepStore();
  const isFilled = useNewsletterFormStore(
    useShallow((state) => ({
      name: Boolean(state.name),
      description: Boolean(state.description),
      send_frequency: Boolean(state.send_frequency),
      topics: Boolean(state.topics.length),
      sources: Boolean(state.sources.length),
      language: Boolean(state.language),
      send_time: Boolean(state.send_time),
      custom_prompt: Boolean(state.custom_prompt),
    })),
  );

  const validator = useMemo(() => STEPS[step].validator, [step]);
  const canProceed = validator ? validator(isFilled) : true;

  const NextButtonLabel = useMemo(() => {
    const labelGetter = STEPS[step].nextButtonLabelGetter;
    return labelGetter ? labelGetter(isFilled) : "Next";
  }, [step, isFilled.custom_prompt]);

  const save = useCallback(async () => {
    setIsLoading(true);
    const data = useNewsletterFormStore.getState().getData();
    const errorMessage = await saveNewsletter(data);
    if (!errorMessage) {
      router.push("/newsletters");
      return;
    }
    alert(errorMessage);
    setIsLoading(false);
  }, []);

  return (
    <div className="flex w-full items-center justify-between">
      {step > 0 ? <Button onPress={goPrev}>Prev</Button> : <div />}
      <Button
        onPress={step === STEPS.length - 1 ? save : goNext}
        color="primary"
        variant="solid"
        isDisabled={!canProceed}
        isLoading={isLoading}
      >
        {NextButtonLabel}
      </Button>
    </div>
  );
};

export default WizardStepButton;
