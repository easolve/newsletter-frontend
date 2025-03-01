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

// 카드 컴포넌트를 모션 컴포넌트로 확장
const MotionCard = motion(Card);

export default function PricingPage() {
  // 각 카드의 호버 상태 관리
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // 카드 애니메이션 변형 설정
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
            여러분의 필요에 맞는 다양한 요금제를 제공합니다. Generletter로 더
            많은 독자와 소통하세요.
          </p>
        </motion.div>

        <div className="mt-8 grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-3 md:gap-6">
          {/* 프리 요금제 */}
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
              <h2 className="text-2xl font-bold">프리 플랜</h2>
              <p className="text-default-500">개인 사용자를 위한 기본 요금제</p>
              <div className="mt-3 flex items-baseline">
                <span className="text-4xl font-bold">무료</span>
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
                  <span className="ml-2">최대 100명의 구독자</span>
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
                  <span className="ml-2">기본 분석 도구</span>
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
                  <span className="ml-2">이메일 템플릿</span>
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
                  <span className="ml-2">고급 분석</span>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="pt-4">
              <Button
                className="w-full transition-transform duration-200 hover:scale-[1.02]"
                color="primary"
                variant="flat"
              >
                시작하기
              </Button>
            </CardFooter>
          </MotionCard>

          {/* 프로 요금제 */}
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
                인기
              </div>
              <h2 className="text-2xl font-bold">프로 플랜</h2>
              <p className="text-default-500">
                성장하는 비즈니스를 위한 요금제
              </p>
              <div className="mt-3 flex items-baseline">
                <span className="text-4xl font-bold">₩19,900</span>
                <span className="ml-1 text-default-500">/월</span>
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
                  <span className="ml-2">무제한 구독자</span>
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
                  <span className="ml-2">고급 분석 도구</span>
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
                  <span className="ml-2">커스텀 템플릿</span>
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
                  <span className="ml-2">우선 지원</span>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="pt-4">
              <Button
                className="w-full transition-all duration-200 hover:scale-[1.03]"
                color="primary"
              >
                지금 구독하기
              </Button>
            </CardFooter>
          </MotionCard>

          {/* 엔터프라이즈 요금제 */}
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
              <h2 className="text-2xl font-bold">엔터프라이즈</h2>
              <p className="text-default-500">
                대규모 기업 및 기관을 위한 요금제
              </p>
              <div className="mt-3 flex items-baseline">
                <span className="text-4xl font-bold">문의</span>
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
                  <span className="ml-2">모든 프로 기능 포함</span>
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
                  <span className="ml-2">전담 계정 관리자</span>
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
                  <span className="ml-2">SSO 통합</span>
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
                  <span className="ml-2">맞춤형 솔루션</span>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="pt-4">
              <Button
                className="w-full transition-transform duration-200 hover:scale-[1.02]"
                color="primary"
                variant="bordered"
              >
                문의하기
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
          <h2 className="mb-4 text-xl font-semibold">자주 묻는 질문</h2>
          <p className="mb-6 text-default-500">
            더 궁금한 점이 있으시면 언제든지{" "}
            <a
              href="#"
              className="text-primary underline transition-colors hover:text-primary-600"
            >
              고객 지원팀
            </a>
            에 문의해 주세요.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
