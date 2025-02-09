import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import { PlusIcon } from "@/shared/ui/icons";
import EnterManually from "./enter-manually";

const AddSubscriberModal = () => {
  const [addList, setAddList] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button color="primary" endContent={<PlusIcon />} onPress={onOpen}>
        Add New
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Add Subscriber</ModalHeader>
              <ModalBody>
                <Tabs disabledKeys={["csv"]} variant="underlined">
                  <Tab key="input" title="Enter Manually">
                    <EnterManually addList={addList} setAddList={setAddList} />
                  </Tab>
                  <Tab key="csv" title="Upload CSV"></Tab>
                </Tabs>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSubscriberModal;
