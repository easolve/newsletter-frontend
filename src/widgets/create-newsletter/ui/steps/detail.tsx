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
import Example from "./example";

const NewsletterDetail = () => {
  const { name, description, topics, sources, send_frequency } =
    useNewsletterFormStore();

  return (
    <div className="container mt-4 flex h-full max-w-7xl flex-col">
      <Tabs aria-label="Newsletter Detail">
        <Tab key="Newsletter-detail" title="Detail">
          <h1 className={title({ size: "xs", fullWidth: true })}>
            News Detail
          </h1>

          <div className="mt-4 flex justify-center">
            <Table aria-label="News detail Table" isStriped>
              <TableHeader>
                <TableColumn className="w-1/4 text-lg">Item</TableColumn>
                <TableColumn className="text-lg">Detail</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="name">
                  <TableCell>Newsletter Name</TableCell>
                  <TableCell>{name}</TableCell>
                </TableRow>
                <TableRow key="description">
                  <TableCell>Description</TableCell>
                  <TableCell>{description}</TableCell>
                </TableRow>
                <TableRow key="topics">
                  <TableCell>Topics</TableCell>
                  <TableCell>{topics.join(", ")}</TableCell>
                </TableRow>
                <TableRow key="sources">
                  <TableCell>Sources</TableCell>
                  <TableCell>{sources.join(", ")}</TableCell>
                </TableRow>
                <TableRow key="frequency">
                  <TableCell>Frequency</TableCell>
                  <TableCell>{send_frequency}</TableCell>
                </TableRow>
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
