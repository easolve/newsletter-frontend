"use client";

import { Card, CardBody, CardHeader, Divider, Spinner } from "@heroui/react";
import { useEffect, useState } from "react";
import { shallow } from "zustand/vanilla/shallow";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { subtitle } from "@/styles/primitives";
import {
  createSampleNewsletter,
  getSampleNewsletter,
} from "@/widgets/create-newsletter/api/actions";
import { useExampleStore } from "@/widgets/create-newsletter/store/example";

const Example = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id, title, content, setExample, setId, save } = useExampleStore();

  useEffect(() => {
    const formData = useNewsletterFormStore.getState();
    const { language, topics, sources, custom_prompt } =
      useExampleStore.getState();
    if (
      !shallow(language, formData.language) ||
      !shallow(topics, formData.topics) ||
      !shallow(sources, formData.sources) ||
      !shallow(custom_prompt, formData.custom_prompt)
    ) {
      save(formData);
      createSampleNewsletter(formData).then((id) => {
        setId(id);
      });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    let timeout: NodeJS.Timeout;
    const pollExample = async () => {
      if (!id) {
        return;
      }
      const data = await getSampleNewsletter(id);
      if (!data) return;

      if (data?.status === "pending") {
        if (!isCancelled) {
          timeout = setTimeout(pollExample, 3000);
        }
      } else if (!isCancelled && data.content) {
        setExample(data);
      }
    };

    if (id && !content) {
      pollExample();
    }

    return () => {
      isCancelled = true;
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [id, content]);

  if (isLoading || !content) {
    return <Spinner color="primary" label="Generating news sample..." />;
  }

  return (
    <Card classNames={{ base: "w-full" }}>
      <CardHeader>
        <h2 className={subtitle()}>{title}</h2>
      </CardHeader>
      <Divider />
      <CardBody className="max-h-[400px] overflow-y-auto">
        <div className="whitespace-pre-wrap">{content}</div>
      </CardBody>
    </Card>
  );
};

export default Example;
