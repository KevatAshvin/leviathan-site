import FaqSection from "@/components/FaqSection";
import { homeFaqs } from "@/components/faq-data";

export default function FaqAccordion() {
  return <FaqSection idPrefix="home" faqs={homeFaqs} />;
}
