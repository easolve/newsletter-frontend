"use client";

import { motion } from "framer-motion";
import NewsletterWizard from "./newsletter-wizard";

export default function CreateYourOwnNewsletterPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex size-full min-h-full flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-4 flex flex-col items-center sm:mt-24"
      >
        <h1 className="text-center text-4xl font-bold sm:text-7xl">
          Experience AI-Powered
        </h1>
        <h1 className="text-center text-4xl font-bold sm:text-7xl">
          Newsletter Creation
        </h1>
        <p className="mb-6 mt-4 max-w-2xl text-sm text-foreground-500 max-sm:text-center sm:mb-12 sm:mt-8 sm:text-lg xl:max-w-3xl">
          Say goodbye to writer’s block and experience the future of automated
          content creation! With our AI-powered newsletter generator, you can
          create high-quality, engaging newsletters in seconds—no writing or
          design skills needed. Simply enter your topic in the form below and
          let AI do the rest. Try it now for free—fast and effortless!
        </p>
      </motion.div>
      <NewsletterWizard />
    </motion.div>
  );
}
