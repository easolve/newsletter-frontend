import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
} from "@heroui/react";
import { languages } from "countries-list";
import { useNewsletterFormStore } from "../store/form-data";

const LANGUAGES = Object.entries(languages)
  .map(([code, language]) => ({
    code,
    ...language,
  }))
  .sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

export const SelectLanguage = () => {
  const language = useNewsletterFormStore((state) => state.language);
  const setLanguage = useNewsletterFormStore(
    (state) => state.setLanguage,
  ) as AutocompleteProps["onSelectionChange"];

  return (
    <Autocomplete
      label="Language"
      placeholder="Select language"
      defaultItems={LANGUAGES}
      selectedKey={language}
      onSelectionChange={setLanguage}
    >
      {(language) => (
        <AutocompleteItem key={language.code}>{language.name}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};
