import { Textarea } from "@heroui/react";
import { useExampleStore } from "@/features/generate-example";

const InputContent = () => {
  const content = useExampleStore((state) => state.content) || "";
  const setContent = useExampleStore((state) => state.setContent);

  return (
    <Textarea
      classNames={{
        base: "w-full",
        input: "resize-y min-h-64 md:min-h-96",
      }}
      label="Content"
      labelPlacement="outside"
      placeholder="Enter content"
      value={content}
      onValueChange={setContent}
      disableAutosize
      disableAnimation
    />
  );
};

export default InputContent;
