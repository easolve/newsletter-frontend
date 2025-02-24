"use client";

import { Card, CardBody } from "@heroui/react";
import { type TLanguageCode, languages } from "countries-list";
import { ArrowClockwiseIcon, ClockIcon, LanguageIcon } from "@/shared/ui";
import { capitalize } from "@/utils/capitalize";

const keys = [
  "send_frequency",
  "send_time",
  "language",
] satisfies (keyof Newsletter.Info)[];

type MetaData = Partial<{
  [K in keyof Newsletter.Info]: {
    title: string;
    icon: React.ReactNode;
    format: (value: string) => string;
  };
}>;

const metaData = {
  send_frequency: {
    title: "Frequency",
    icon: <ArrowClockwiseIcon />,
    format: capitalize,
  },
  language: {
    title: "Language",
    icon: <LanguageIcon />,
    format: (code: string) => languages[code as TLanguageCode].name,
  },
  send_time: {
    title: "Send Time",
    icon: <ClockIcon />,
    format: (value) => value, // TODO: format time
  },
} satisfies MetaData;

interface Props {
  info: Newsletter.Info;
}

const Preference = ({ info }: Props) => {
  return keys.map((key) => (
    <Card key={key} shadow="sm" className="w-fit p-1 max-lg:grow">
      <CardBody className="flex flex-row items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-small bg-default-100 text-foreground-500 transition-background">
          {metaData[key].icon}
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold">{metaData[key].title}</div>
          <div className="text-xl font-extralight">
            {metaData[key].format(info[key])}
          </div>
        </div>
      </CardBody>
    </Card>
  ));
};

export default Preference;
