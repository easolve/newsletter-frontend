"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoginTabs from "@/features/login";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import {
  CreateWizardBody,
  CreateWizardButton,
  CreateWizardHeader,
  useStepStore,
} from "@/widgets/create-newsletter";

const NewsletterWizard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    useNewsletterFormStore.getState().reset();
    useStepStore.getState().reset();
    setInitialized(true);
  }, []);

  if (!initialized) {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex h-[75%] min-h-[40rem] w-full shrink-0 justify-center self-center pb-4 sm:pb-7"
      >
        <Card
          className="h-full w-full max-w-2xl sm:p-2 xl:max-w-3xl"
          shadow="sm"
        >
          <CardHeader className="flex flex-col items-start gap-3">
            <CreateWizardHeader />
          </CardHeader>
          <CardBody>
            <CreateWizardBody />
          </CardBody>
          <CardFooter className="justify-between">
            <CreateWizardButton onSave={onOpen} />
          </CardFooter>
        </Card>
      </motion.div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h4 className="pt-4 text-3xl font-bold">Join us to continue</h4>
              </ModalHeader>
              <ModalBody className="pb-4">
                <LoginTabs />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewsletterWizard;
