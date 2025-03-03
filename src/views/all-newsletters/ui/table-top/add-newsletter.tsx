"use client";

import { Button, Drawer, DrawerContent, useDisclosure } from "@heroui/react";
import { PlusIcon } from "@/shared/ui/icons";
import AddNewsletterBody from "@/views/all-newsletters/ui/table-top/add-newsletter-body";

const AddNewsletter = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" endContent={<PlusIcon />} onPress={onOpen}>
        Add New
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "data-[placement=right]:md:m-2 data-[placement=left]:md:m-2 md:rounded-medium",
        }}
        placement="right"
        size="2xl"
      >
        <DrawerContent>
          {(onClose) => <AddNewsletterBody onClose={onClose} />}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddNewsletter;
