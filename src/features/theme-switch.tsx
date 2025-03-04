"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonFilledIcon, SunFilledIcon } from "@/shared/ui";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (theme === "dark") {
    return (
      <Button
        isIconOnly
        size="sm"
        variant="light"
        onPress={() => setTheme("light")}
      >
        <SunFilledIcon className="text-default-500" size={22} />
      </Button>
    );
  }

  return (
    <Button
      isIconOnly
      size="sm"
      variant="light"
      onPress={() => setTheme("dark")}
    >
      <MoonFilledIcon className="text-default-600" size={22} />
    </Button>
  );
};
