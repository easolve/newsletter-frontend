"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { title } from "@/styles/primitives";

// Extend Card component with motion
const MotionCard = motion(Card);

export default function PricingPage() {
  // Manage hover state for each card
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Card animation variants
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div className="mx-auto h-full w-full max-w-7xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col items-center justify-center gap-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1
            className={title({
              size: "lg",
            })}
          >
            Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-foreground-500">
            We offer a variety of plans to meet your needs. Connect with more
            readers using Generletter.
          </p>
        </motion.div>

        <div className="mt-8 grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-3 md:gap-6">
          {/* Free Plan */}
          <MotionCard
            className={`w-full border-2 transition-colors duration-300 ${
              hoveredCard === 0 ? "border-default-300" : "border-transparent"
            }`}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            custom={0}
            whileHover="hover"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader className="flex flex-col gap-2 pb-6">
              <div className="w-fit rounded-full bg-transparent px-3 py-1 text-xs font-medium text-transparent">
                Placeholder
              </div>
              <h2 className="text-2xl font-bold">Free Plan</h2>
              <p className="text-default-500">
                Basic plan for individual users
              </p>
              <div className="mt-3 flex items-baseline">
                <span className="text-4xl font-bold text-primary-500">
                  Free
                </span>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="py-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Up to 100 subscribers</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Basic analytics tools</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Email templates</span>
                </li>
                <li className="flex items-center text-default-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="ml-2">Advanced analytics</span>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="pt-4">
              <Button
                className="w-full transition-transform duration-200 hover:scale-[1.02]"
                color="primary"
                variant="flat"
              >
                Get Started
              </Button>
            </CardFooter>
          </MotionCard>

          {/* Pro Plan */}
          <MotionCard
            className="w-full border-2 border-primary"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            custom={1}
            whileHover="hover"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader className="flex flex-col gap-2 pb-6">
              <div className="w-fit rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary">
                Popular
              </div>
              <h2 className="text-2xl font-bold">Pro Plan</h2>
              <p className="text-default-500">Plan for growing businesses</p>
              <div className="mt-3 flex items-baseline">
                <span className="text-4xl font-bold text-primary-500">
                  $19.90
                </span>
                <span className="ml-1 text-default-500">/month</span>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="py-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Unlimited subscribers</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Advanced analytics tools</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Custom templates</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Priority support</span>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="pt-4">
              <Button
                className="w-full transition-all duration-200 hover:scale-[1.03]"
                color="primary"
              >
                Subscribe Now
              </Button>
            </CardFooter>
          </MotionCard>

          {/* Enterprise Plan */}
          <MotionCard
            className={`w-full border-2 transition-colors duration-300 ${
              hoveredCard === 2 ? "border-default-300" : "border-transparent"
            }`}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            custom={2}
            whileHover="hover"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader className="flex flex-col gap-2 pb-6">
              <div className="w-fit rounded-full bg-transparent px-3 py-1 text-xs font-medium text-transparent">
                Placeholder
              </div>
              <h2 className="text-2xl font-bold">Enterprise</h2>
              <p className="text-default-500">
                Plan for large companies and organizations
              </p>
              <div className="mt-3 flex items-baseline">
                <span className="text-4xl font-bold text-primary-500">
                  Contact Us
                </span>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="py-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">All Pro features included</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">SSO integration</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Custom solutions</span>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="pt-4">
              <Button
                className="w-full transition-transform duration-200 hover:scale-[1.02]"
                color="primary"
                variant="bordered"
              >
                Contact Us
              </Button>
            </CardFooter>
          </MotionCard>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="mb-6 text-default-500">
            If you have more questions, please feel free to contact our{" "}
            <a
              href="#"
              className="text-primary underline transition-colors hover:text-primary-600"
            >
              customer support team
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
