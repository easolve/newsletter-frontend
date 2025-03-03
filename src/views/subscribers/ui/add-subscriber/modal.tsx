import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useNewsletterStore } from "@/entities/newsletter";
import { PlusIcon } from "@/shared/ui/icons";
import { addSubscribers } from "../../api/add";
import { useAddSubscriberStore } from "../../store/add";
import AddManually from "./add-manually";

const AddSubscriberModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCilckClose = useCallback(() => {
    onClose();
    useAddSubscriberStore.getState().clear();
  }, []);

  const handleClickSave = useCallback(async () => {
    const { id } = useNewsletterStore.getState();
    const { list } = useAddSubscriberStore.getState();
    if (!list.length) {
      return;
    }
    setIsLoading(true);
    const errorMessage = await addSubscribers(id, list);
    if (!errorMessage) {
      setIsLoading(false);
      handleCilckClose();
      router.refresh(); // TODO: rendering optimization
      return;
    }
    alert(errorMessage);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Button color="primary" endContent={<PlusIcon />} onPress={onOpen}>
        Add New
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="py-3">Add Subscriber</ModalHeader>
              <Divider />
              <ModalBody>
                <Tabs disabledKeys={["csv"]} variant="underlined">
                  <Tab key="input" title="Enter Manually">
                    <AddManually />
                  </Tab>
                  <Tab key="csv" title="Upload CSV"></Tab>
                </Tabs>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={handleCilckClose}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={handleClickSave}
                  isLoading={isLoading}
                >
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
