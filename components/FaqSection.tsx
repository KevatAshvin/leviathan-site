"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  /** Unique prefix so multiple FAQ sections on one page keep distinct element IDs. */
  idPrefix: string;
  faqs: FaqItem[];
  /** Which item is open on first render. Default 0 (first item open). Use -1 for all closed. */
  defaultOpenIndex?: number;
};

/**
 * Renders an accessible FAQ accordion.
 *
 * FAQPage structured data (schema.org) is emitted separately by the server-side
 * `FaqJsonLd` component so Google can reliably parse it for rich results — the
 * same `faqs` array should drive both, keeping the structured data in sync with
 * what users actually see (a Google requirement — mismatched FAQ schema can
 * trigger a manual action).
 */
export default function FaqSection({
  idPrefix,
  faqs,
  defaultOpenIndex = 0,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="divide-y divide-[#E2E8F0]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `${idPrefix}-faq-button-${index}`;
          const panelId = `${idPrefix}-faq-panel-${index}`;

          return (
            <article key={faq.question} className="border-b border-[#E2E8F0]">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-[#0F172A] transition hover:text-[#F97316]"
                >
                  <span>{faq.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8F9FA] text-lg text-[#64748B]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>
              {isOpen ? (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="pb-5 text-sm leading-7 text-[#64748B]"
                >
                  {faq.answer}
                </div>
              ) : null}
            </article>
          );
        })}
    </div>
  );
}
