import { Button } from "@heroui/react";
import { useCallback, useContext, useState } from "react";
import { useNewsletterStore } from "@/entities/newsletter";
import { useExampleStore } from "@/features/generate-example";
import { saveArchive, sendArchive } from "../../api/generate";
import { historyContext } from "../../store/history";

interface Props {
  onClose: () => void;
}

const GenerateButtons = ({ onClose }: Props) => {
  const { reload } = useContext(historyContext);
  const { regenerate } = useExampleStore.getState();
  const isGenerating = useExampleStore((state) => state.content === null);
  const noContent = useExampleStore((state) => !state.content || !state.title);
  const [isSaving, setIsSaving] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onSave = useCallback(async () => {
    setIsSaving(true);
    const id = useNewsletterStore.getState().id;
    const data = useExampleStore.getState();
    const response = await saveArchive(id, data);
    if (response) {
      reload();
      alert("Newsletter saved successfully");
      onClose();
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
      reload();
      alert("Newsletter sent successfully");
      onClose();
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
