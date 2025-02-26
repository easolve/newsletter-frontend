import { TimeInput, type TimeInputProps } from "@heroui/react";
import { useState } from "react";
import { useNewsletterFormStore } from "../store/form-data";

type Time = Exclude<TimeInputProps["value"], undefined>;

export const InputSendTime = () => {
  const [value, setValue] = useState<Time>(null);

  const handleChange = (time: Time) => {
    const timeString = time?.toString() || "";
    useNewsletterFormStore.getState().setSendTime(timeString);
    setValue(time);
  };

  return <TimeInput label="Send Time" value={value} onChange={handleChange} />;
};
