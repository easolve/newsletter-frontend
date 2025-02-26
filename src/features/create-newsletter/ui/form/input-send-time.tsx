import { TimeInput } from "@heroui/react";
import { useNewsletterData } from "../../store/create-data";

const inputSendTime = () => {
  const sendTime = useNewsletterData((state) => state.sendTime);
  const setSendTime = useNewsletterData((state) => state.setSendTime);

  return (
    <TimeInput label="Send Time" value={sendTime} onChange={setSendTime} />
  );
};

export default inputSendTime;
