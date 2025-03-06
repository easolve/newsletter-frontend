import { useExampleStore } from "@/features/generate-example";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { useRecommendedTopicsStore } from "../store/recommend-topic";
import { useStepStore } from "../store/step";

export const reset = () => {
  useNewsletterFormStore.getState().reset();
  useStepStore.getState().reset();
  useExampleStore.getState().reset();
  useRecommendedTopicsStore.getState().reset();
};
