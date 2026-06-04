import FaqSection from "@/components/FaqSection";

const faqs = [
  {
    question: "How long does it take to start recovering reimbursements?",
    answer:
      "Most clients see their first recovered claims within 7 to 14 days of granting read-only Seller Central access. The free audit is completed within 48 hours and shows exactly how much is recoverable before you commit to anything.",
  },
  {
    question: "What access does Leviathan Sellers need to my Seller Central account?",
    answer:
      "Read-only access only. You invite Leviathan Sellers as a limited user in Seller Central with view-only permissions. We cannot make purchases, change your listings, move funds, or take any action — we can only read transaction data and file reimbursement claims through official Amazon channels.",
  },
  {
    question: "Does Leviathan Sellers handle manufacturing cost documentation?",
    answer:
      "Yes. Since March 2025 Amazon reimburses at manufacturing cost rather than selling price. We prepare accurate, current cost of goods evidence for every claim. Without this documentation, Amazon uses its own lower internal estimate — typically 30–50% below actual cost — and you lose the difference permanently.",
  },
  {
    question: "What if Amazon denies a claim Leviathan Sellers filed?",
    answer:
      "All denied claims are reviewed individually. Where the denial is contestable — which is the majority of cases — we re-file with strengthened evidence and a formal appeal. Denial is not the end of the process for us, it is the start of the appeal process.",
  },
  {
    question: "How much does FBA reconciliation cost?",
    answer:
      "100% performance-based. We charge a commission only on amounts we actually recover for you. If we recover nothing, you pay nothing. The initial audit is completely free with no obligation. You only pay when you get paid.",
  },
];

export default function ReconciliationFaq() {
  return <FaqSection idPrefix="reconciliation" faqs={faqs} />;
}
