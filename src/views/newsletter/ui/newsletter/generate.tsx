import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";

const Generate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        placement="bottom"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader></DrawerHeader>
              <DrawerBody></DrawerBody>
              <DrawerFooter></DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Generate;
