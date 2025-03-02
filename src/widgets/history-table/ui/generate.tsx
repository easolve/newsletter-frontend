import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import { PlusIcon } from "@/shared/ui";

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
  return (
    <>
      <Button color="primary" endContent={<PlusIcon />} onPress={onOpen}>
        Generate
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium",
        }}
        placement="right"
        size="3xl"
        hideCloseButton
        isDismissable={false}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="absolute inset-x-0 top-0 z-50 flex flex-row justify-between gap-2 border-b border-default-200/50 bg-content1/50 px-2 py-2 backdrop-blur-lg backdrop-saturate-150">
                <Button
                  isIconOnly
                  className="text-default-400"
                  size="sm"
                  variant="light"
                  onPress={onClose}
                >
                  <Icon />
                </Button>
              </DrawerHeader>
              <DrawerBody></DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Generate;
