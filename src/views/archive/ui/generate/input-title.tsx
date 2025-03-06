import { Input } from "@heroui/react";
import { useExampleStore } from "@/features/generate-example";

const InputTitle = () => {
  const title = useExampleStore((state) => state.title) || "";
  const setTitle = useExampleStore((state) => state.setTitle);

  return (
    <Input
      className="w-full"
      label="Title"
      labelPlacement="outside"
      placeholder="Enter title"
      value={title}
      onValueChange={setTitle}
    />
  );
};

export default InputTitle;
