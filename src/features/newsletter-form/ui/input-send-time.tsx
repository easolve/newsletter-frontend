import { TimeInput } from "@heroui/react";
import { useNewsletterData } from "../store/form-data";

export const InputSendTime = () => {
  const sendTime = useNewsletterData((state) => state.sendTime);
  const setSendTime = useNewsletterData((state) => state.setSendTime);

  return (
    <TimeInput label="Send Time" value={sendTime} onChange={setSendTime} />
  );
};
