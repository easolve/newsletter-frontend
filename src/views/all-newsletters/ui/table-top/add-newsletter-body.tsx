"use client";

import { DrawerBody, DrawerFooter } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import {
  CreateWizardBody,
  CreateWizardButton,
  CreateWizardHeader,
  reset,
} from "@/widgets/create-newsletter";
import { saveNewsletter } from "../../api/save";

interface Props {
  onClose: () => void;
}

const AddNewsletterBody = ({ onClose }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    reset();
    setInitialized(true);
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    const data = useNewsletterFormStore.getState().getData();
    const errorMessage = await saveNewsletter(data);
    if (!errorMessage) {
      alert("Newsletter created successfully");
      onClose();
      router.refresh(); // TODO: rendering optimization
      return;
    }
    alert(errorMessage);
    setIsLoading(false);
  };

  if (!initialized) {
    return null;
  }

  return (
    <>
      <DrawerBody className="pt-6">
        <CreateWizardHeader />
        <CreateWizardBody />
      </DrawerBody>
      <DrawerFooter className="justify-between pb-6">
        <CreateWizardButton onSave={handleSave} isLoading={isLoading} />
      </DrawerFooter>
    </>
  );
};
export default AddNewsletterBody;
