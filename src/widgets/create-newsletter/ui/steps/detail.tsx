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
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { title } from "@/styles/primitives";
import { capitalize } from "@/utils/capitalize";
import { TABLE_FIELDS } from "@/widgets/create-newsletter/config";
import Example from "./example";

const NewsletterDetail = () => {
  const formData = useNewsletterFormStore();
  const details = {
    ...formData,
    send_time: formData.send_time.slice(0, 5),
    topics: formData.topics.join(", "),
    sources: formData.sources.join(", "),
  };

  return (
    <div className="container mt-4 flex h-full max-w-7xl flex-col">
      <Tabs aria-label="Newsletter Detail">
        <Tab key="Newsletter-detail" title="Detail">
          <h1 className={title({ size: "xs", fullWidth: true })}>
            Newsletter Detail
          </h1>

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
          <h1 className={title({ size: "xs", fullWidth: true })}>
            Example Newsletter
          </h1>
          <div className="mt-4 flex h-full justify-center">
            <Example />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default NewsletterDetail;
