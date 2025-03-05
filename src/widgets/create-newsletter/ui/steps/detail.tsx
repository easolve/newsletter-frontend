"use client";

import {
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from "@heroui/react";
import { type TLanguageCode, languages } from "countries-list";
import { ExampleGenerator } from "@/features/generate-example";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { capitalize } from "@/shared/lib";
import { TABLE_FIELDS } from "../../config";
import Example from "./example";

const NewsletterDetail = () => {
  const formData = useNewsletterFormStore.getState();
  const details = {
    ...formData,
    language: languages[formData.language as TLanguageCode].name,
    send_time: formData.send_time.slice(0, 5),
    topics: formData.topics.join(", "),
    sources: formData.sources.join(", "),
  };

  return (
    <div className="container mt-4 flex h-full max-w-7xl flex-col">
      <ExampleGenerator formData={formData} />
      <Tabs aria-label="Newsletter Detail">
        <Tab key="Newsletter-detail" title="Detail">
          <h3 className="mt-4 text-2xl font-semibold">Newsletter Detail</h3>

          <div className="mt-4 flex justify-center">
            <Table aria-label="News detail Table" removeWrapper>
              <TableHeader>
                <TableColumn className="w-1/4 text-small">FIELD</TableColumn>
                <TableColumn className="text-small">DETAIL</TableColumn>
              </TableHeader>
              <TableBody>
                {TABLE_FIELDS.map((key) => (
                  <TableRow key={key}>
                    <TableCell>
                      {key
                        .split("_")
                        .map((s) => capitalize(s))
                        .join(" ")}
                    </TableCell>
                    <TableCell>{details[key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Tab>
        <Tab key="Newsletter-example" title="Example" className="h-full">
          <Example />
        </Tab>
      </Tabs>
    </div>
  );
};

export default NewsletterDetail;
