import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import { useNewsletterStore } from "@/entities/newsletter";
import { ExampleGenerator, useExampleStore } from "@/features/generate-example";
import { PlusIcon } from "@/shared/ui";
import GenerateButtons from "./button";
import Editor from "./editor";

const Icon = () => (
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
);

const Generate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const exampleData = useNewsletterStore.getState();
  const { reset } = useExampleStore.getState();

  const handleOpen = () => {
    reset();
    onOpen();
  };

  return (
    <>
      <Button color="primary" endContent={<PlusIcon />} onPress={handleOpen}>
        Generate
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "data-[placement=right]:md:m-2 data-[placement=left]:md:m-2 md:rounded-medium",
        }}
        placement="right"
        size="3xl"
        hideCloseButton
        isDismissable={false}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex gap-2 border-b border-default-200/50 p-2">
                <Button
                  isIconOnly
                  className="text-default-400"
                  size="sm"
                  variant="light"
                  onPress={onClose}
                >
                  <Icon />
                </Button>
                <GenerateButtons onClose={onClose} />
              </DrawerHeader>
              <DrawerBody className="p-4">
                <ExampleGenerator formData={exampleData} />
                <Editor />
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Generate;
