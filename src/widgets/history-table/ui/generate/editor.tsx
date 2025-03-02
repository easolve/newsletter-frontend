import { Spinner } from "@heroui/react";
import { useExampleStore } from "@/features/generate-example";
import InputContent from "@/widgets/history-table/ui/generate/input-content";
import InputTitle from "@/widgets/history-table/ui/generate/input-title";

const Editor = () => {
  const hasContent = useExampleStore((state) => state.content !== null);

  if (!hasContent) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <Spinner />
        Generating...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <InputTitle />
      <InputContent />
    </div>
  );
};

export default Editor;
