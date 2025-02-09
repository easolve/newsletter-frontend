"use client";

import { Button, Chip, Input } from "@heroui/react";
import type {
  ChangeEvent,
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
} from "react";
import { useCallback, useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface Props {
  addList: string[];
  setAddList: Dispatch<SetStateAction<string[]>>;
}

const EnterManually = ({ addList, setAddList }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const removeFromList = useCallback((email: string) => {
    setAddList((prev) => prev.filter((item) => item !== email));
  }, []);

  const addToList = useCallback(
    (email: string) => {
      if (!EMAIL_REGEX.test(email)) {
        setErrorMessage("Please check the email format.");
        return;
      }
      if (addList.includes(email)) {
        setErrorMessage("Email already added.");
        return;
      }
      setErrorMessage("");
      setAddList((prev) => [...prev, email]);
      setInputValue("");
    },
    [addList],
  );

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key !== "Enter") {
        return;
      }
      const email = e.currentTarget.value.trim();
      addToList(email);
    },
    [addList],
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
      <Button onPress={() => addToList(inputValue)}>Add</Button>
      <div className="col-span-2 flex flex-wrap gap-1">
        {addList.map((email) => (
          <Chip key={email} onClose={() => removeFromList(email)}>
            {email}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default EnterManually;
