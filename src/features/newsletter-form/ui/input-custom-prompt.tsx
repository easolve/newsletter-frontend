import { Textarea } from "@heroui/react";
import { useNewsletterFormStore } from "../store/form-data";

interface Props {
  className?: string;
}

const InputCustomPrompt = ({ className }: Props) => {
  const custom_prompt = useNewsletterFormStore((state) => state.custom_prompt);
  const setCustomPrompt = useNewsletterFormStore(
    (state) => state.setCustomPrompt,
  );

  return (
    <Textarea
      className={className}
      minRows={12}
      maxRows={12}
      label="Prompt"
      value={custom_prompt}
      onValueChange={setCustomPrompt}
    />
  );
};

export default InputCustomPrompt;
