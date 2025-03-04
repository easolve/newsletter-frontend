import { Progress } from "@heroui/react";
import { subtitle, title } from "@/shared/ui";
import { STEPS } from "@/widgets/create-newsletter/config";
import { useStepStore } from "@/widgets/create-newsletter/store/step";

const WizardStepHeader = () => {
  const step = useStepStore((state) => state.step);
  const { label, description } = STEPS[step];
  const progressValue = (step / (STEPS.length - 1)) * 100;

  return (
    <>
      <h2
        className={title({
          size: "sm",
        })}
      >
        {label}
      </h2>
      <Progress
        aria-label="Progress bar"
        value={progressValue}
        showValueLabel={true}
      />
      {description && <p className={subtitle()}>{description}</p>}
    </>
  );
};

export default WizardStepHeader;
