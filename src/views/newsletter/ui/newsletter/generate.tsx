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
import { useEffect, useState } from "react";

const Generate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    // Call API to generate newsletter
    setIsLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      handleGenerate();
    }
  }, [isOpen]);

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
                  <Button variant="flat" size="sm" isDisabled={isLoading}>
                    Regenerate
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    color="primary"
                    variant="flat"
                    size="sm"
                    isDisabled={isLoading}
                  >
                    Save
                  </Button>
                  <Button color="primary" size="sm" isDisabled={isLoading}>
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
