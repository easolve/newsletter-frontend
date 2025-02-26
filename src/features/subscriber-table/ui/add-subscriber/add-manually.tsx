"use client";

import { Button, Chip, Input } from "@heroui/react";
import type { ChangeEvent, KeyboardEventHandler } from "react";
import { useCallback, useState } from "react";
import { useAddSubscriberStore } from "../../store/add";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const AddManually = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const list = useAddSubscriberStore((s) => s.list);
  const addToList = useAddSubscriberStore((s) => s.addToList);
  const removeFromList = useAddSubscriberStore((s) => s.removeFromList);

  const onAdd = useCallback(
    (email: string) => {
      email = email.trim();
      if (!EMAIL_REGEX.test(email)) {
        setErrorMessage("Please check the email format.");
        return;
      }
      if (list.includes(email)) {
        setErrorMessage("Email already added.");
        return;
      }
      setErrorMessage("");
      addToList(email);
      setInputValue("");
    },
    [list, addToList],
  );

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key !== "Enter") {
        return;
      }
      const email = e.currentTarget.value;
      onAdd(email);
    },
    [onAdd],
  );

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInputValue(value);
    if (!value) {
      setErrorMessage("");
    }
  }, []);

  const handleClear = useCallback(() => {
    setInputValue("");
    setErrorMessage("");
  }, []);

  return (
    <div className="grid min-h-20 grid-cols-[1fr,auto] gap-2 px-3">
      <Input
        variant="bordered"
        placeholder="Enter a email to add"
        value={inputValue}
        onChange={handleInputChange}
        isClearable
        onClear={handleClear}
        onKeyDown={handleKeyDown}
        isInvalid={Boolean(errorMessage)}
        errorMessage={errorMessage}
      />
      <Button variant="flat" color="primary" onPress={() => onAdd(inputValue)}>
        Add
      </Button>
      <div className="col-span-2 flex flex-wrap gap-1">
        {list.map((email) => (
          <Chip key={email} onClose={() => removeFromList(email)}>
            {email}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default AddManually;
