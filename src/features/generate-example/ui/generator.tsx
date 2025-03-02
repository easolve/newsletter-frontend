import { useEffect } from "react";
import { shallow } from "zustand/vanilla/shallow";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { createSampleNewsletter, getSampleNewsletter } from "../api/actions";
import { useExampleStore } from "../store/example";

const ExampleGenerator = () => {
  const { language, topics, sources, custom_prompt, save, setId, setExample } =
    useExampleStore.getState();
  const id = useExampleStore((state) => state.id);
  const formData = useNewsletterFormStore.getState();

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    let isCancelled = false;
    let timeout: NodeJS.Timeout;
    const pollExample = async () => {
      if (!id) {
        return;
      }
      const data = await getSampleNewsletter(id);
      if (!data || isCancelled) {
        return;
      }
      if (data?.status === "pending") {
        timeout = setTimeout(pollExample, 3000);
      } else if (data?.content) {
        setExample(data);
      }
    };

    const { content } = useExampleStore.getState();
    if (process.env.NODE_ENV === "production") {
      if (id && !content) {
        pollExample();
      }
    }

    return () => {
      isCancelled = true;
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [id]);

  return null;
};

export default ExampleGenerator;
