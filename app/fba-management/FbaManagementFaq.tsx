import FaqSection from "@/components/FaqSection";

const faqs = [
  {
    question: "What exactly is covered under FBA account management?",
    answer:
      "Ongoing oversight of Seller Central health signals tied to fulfilment operations: Inventory Performance Index (IPI), inventory ageing and stranded listings, replenishment timing, inbound planning hygiene, catalogue and listing suppression flags surfaced in Account Health where they intersect with FBA, and escalation-ready documentation before issues compound into fee surcharges or stockouts.",
  },
  {
    question: "Is this the same as your reimbursement reconciliation service?",
    answer:
      "No. Reconciliation focuses on recovering money Amazon owes from historical discrepancies. FBA management is forward-looking operational hygiene—inventory placement, replenishment cadence, and health metrics that prevent problems before storage fees erase margin. Many brands run both lanes together.",
  },
  {
    question: "How often do we meet or receive updates?",
    answer:
      "Cadence scales with SKU count and inbound complexity. Typical engagements include weekly or bi-weekly KPI snapshots, prioritized action lists tied to inbound and Buy Box readiness, plus month-end rollup statements you can fold into forecasting.",
  },
  {
    question: "Do you need full account access?",
    answer:
      "We align with whatever access model you approve for your risk posture. Diagnostic workstreams often start with the minimum permissions necessary to analyse inventory pipelines, stranded inventory workflows, fee previews, and case history—extended only when mutually agreed.",
  },
  {
    question: "What marketplaces do you support?",
    answer:
      "We support Amazon sellers active on Amazon.com (US), Amazon.co.uk, Amazon.in, Amazon.ca, and EU marketplaces and Amazon.com.au, with catalogue-specific nuance documented for inbound fees, fulfilment surcharge schedules, and language requirements for Seller Support escalation.",
  },
];

export default function FbaManagementFaq() {
  return <FaqSection idPrefix="fba-management" faqs={faqs} />;
}
