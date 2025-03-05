import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Spinner,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import { use, useCallback, useEffect, useRef, useState } from "react";
import {
  createNewsletterTask,
  getGeneratedArchive,
  saveArchive,
  sendArchive,
} from "@/shared/ui/drawer/api";

interface GenerateProps {
  infoId: number;
}

const Generate = ({ infoId }: GenerateProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [historyId, setHistoryId] = useState(0);

  const handleGenerate = useCallback(async () => {
    setIsLoading(true);
    try {
      const ret = await createNewsletterTask({
        topics: ["technology", "business", "entertainment"],
        sources: ["techcrunch", "wired", "cnn"],
      });

      const taskID = ret.task_id;
      let data = null;
      let retryCount = 0;
      const maxRetries = 30;
      const pollingInterval = 3000;

      // Poll until we get the generated content or hit max retries
      async function pollExample() {
        const data = await getGeneratedArchive(taskID);
        if (!data) return;

        if (data?.status === "pending") {
          setTimeout(pollExample, 3000);
        } else if (data.content) {
          setTitle(data.title);
          setContent(data.content);
          setHistoryId(data.history_id);
        }
      }
      pollExample();

      if (!data && retryCount >= maxRetries) {
        console.error("Generation timed out after maximum retries");
      }
    } catch (error) {
      console.error("Failed to generate newsletter:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      handleGenerate();
    }
  }, [isOpen, handleGenerate]);

  return (
    <>
      <Button className="w-full" color="primary" onPress={onOpen}>
        Generate
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "h-full max-h-[calc(100vh-2rem)]",
          backdrop: "bg-black bg-opacity-80",
        }}
        placement="right"
        size="5xl"
        hideCloseButton
        isDismissable={false}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Tooltip content="Close" isDisabled={false}>
                    <Button
                      isIconOnly
                      className="text-default-400"
                      size="sm"
                      variant="light"
                      onPress={onClose}
                    >
                      <svg
                        fill="none"
                        height="20"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                      </svg>
                    </Button>
                  </Tooltip>
                  <Button
                    variant="flat"
                    size="sm"
                    isDisabled={isLoading}
                    onPress={() => {
                      handleGenerate();
                    }}
                  >
                    Regenerate
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    color="primary"
                    variant="flat"
                    size="sm"
                    isDisabled={isLoading}
                    onPress={async () => {
                      if (!content || !title) {
                        alert("Please generate the newsletter first");
                      }
                      const ret = await saveArchive(infoId, {
                        status: "STANDBY",
                        title,
                        content,
                      });
                      setHistoryId(ret.history_id);
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    color="primary"
                    size="sm"
                    isDisabled={isLoading}
                    onPress={async () => {
                      if (!content || !title) {
                        alert("Please generate the newsletter first");
                      }
                      const ret = await saveArchive(infoId, {
                        status: "STANDBY",
                        title,
                        content,
                      });
                      setHistoryId(ret.history_id);
                      sendArchive({
                        history_id: ret.history_id,
                        info_id: infoId,
                      });
                    }}
                  >
                    Send
                  </Button>
                </div>
              </DrawerHeader>
              <DrawerBody className="relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/50">
                    <Spinner size="lg" />
                  </div>
                )}
                <Input
                  isDisabled={isLoading}
                  labelPlacement="outside"
                  value={title}
                  placeholder="Your generated newsletter title will appear here..."
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                  isDisabled={isLoading}
                  labelPlacement="outside"
                  placeholder="Your generated newsletter content will appear here..."
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </DrawerBody>
              <DrawerFooter></DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Generate;
