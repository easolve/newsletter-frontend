"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { useNewsletterData } from "../use-newsletter-data";

interface NewsletterDetailProps {}

const NewsletterDetail: React.FC<NewsletterDetailProps> = () => {
  const { topics, sources, frequency, sample, name, description } =
    useNewsletterData();

  return (
    <div className="container mx-auto mt-4 flex max-w-7xl flex-grow flex-col">
      <Table aria-label="Example static collection table" isStriped>
        <TableHeader>
          <TableColumn className="w-1/4 text-lg">Item</TableColumn>
          <TableColumn className="text-lg">Detail</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="name">
            <TableCell>Name</TableCell>
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
            <TableCell>{frequency}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-end">
        {sample.length > 0 && sample[0]}
      </div>
    </div>
  );
};

export default NewsletterDetail;
