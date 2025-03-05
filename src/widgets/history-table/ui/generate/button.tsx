import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useNewsletterStore } from "@/entities/newsletter";
import { useExampleStore } from "@/features/generate-example";
import { saveArchive, sendArchive } from "@/widgets/history-table/api/generate";

interface Props {
  onClose: () => void;
}

const GenerateButtons = ({ onClose }: Props) => {
  const { regenerate } = useExampleStore.getState();
  const isGenerating = useExampleStore((state) => state.content === null);
  const noContent = useExampleStore((state) => !state.content || !state.title);
  const [isSaving, setIsSaving] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const onSave = useCallback(async () => {
    setIsSaving(true);
    const id = useNewsletterStore.getState().id;
    const data = useExampleStore.getState();
    const response = await saveArchive(id, data);
    if (response) {
      alert("Newsletter saved successfully");
      onClose();
      router.refresh(); // TODO: rendering optimization
    } else {
      alert("Failed to save newsletter");
      setIsSaving(false);
    }
  }, []);

  const onSend = async () => {
    setIsSending(true);
    const id = useNewsletterStore.getState().id;
    const data = useExampleStore.getState();
    const isSuccess = await sendArchive(id, data);
    if (isSuccess) {
      alert("Newsletter sent successfully");
      onClose();
      router.refresh(); // TODO: rendering optimization
    } else {
      alert("Failed to send newsletter");
      setIsSending(false);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <Button
        variant="flat"
        size="sm"
        onPress={() => regenerate()}
        isDisabled={isGenerating || isSaving || isSending}
      >
        Regenerate
      </Button>
      <span className="flex gap-2">
        <Button
          color="primary"
          variant="flat"
          size="sm"
          isDisabled={isGenerating || noContent || isSaving}
          isLoading={isSending}
          onPress={onSend}
        >
          Send Now
        </Button>
        <Button
          color="primary"
          size="sm"
          onPress={onSave}
          isDisabled={isGenerating || noContent || isSending}
          isLoading={isSaving}
        >
          Save
        </Button>
      </span>
    </div>
  );
};

export default GenerateButtons;
