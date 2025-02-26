import { TimeInput } from "@heroui/react";
import { useNewsletterFormStore } from "../store/form-data";

export const InputSendTime = () => {
  const sendTime = useNewsletterFormStore((state) => state.sendTime);
  const setSendTime = useNewsletterFormStore((state) => state.setSendTime);

  return (
    <TimeInput label="Send Time" value={sendTime} onChange={setSendTime} />
  );
};
