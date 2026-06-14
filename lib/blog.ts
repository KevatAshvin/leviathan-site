import type { ComponentType } from "react";
import AiToolsForAmazonFbaSellers2025, {
  frontmatter as aiToolsForAmazonFbaSellers2025,
} from "@/content/blog/ai-tools-for-amazon-fba-sellers-2025.mdx";
import AmazonFbaReimbursementPolicy2025, {
  frontmatter as amazonFbaReimbursementPolicy2025,
} from "@/content/blog/amazon-fba-reimbursement-policy-2025.mdx";
import FbaReimbursementAudit, {
  frontmatter as fbaReimbursementAudit,
} from "@/content/blog/fba-reimbursement-audit.mdx";
import FbaStorageLimitsIpiRestockStrategy2026, {
  frontmatter as fbaStorageLimitsIpiRestockStrategy2026,
} from "@/content/blog/fba-storage-limits-ipi-restock-strategy-2026.mdx";
import FreeAuditPreparation, {
  frontmatter as freeAuditPreparation,
} from "@/content/blog/free-audit-preparation.mdx";
import HowToImproveAmazonIpiScore, {
  frontmatter as howToImproveAmazonIpiScore,
} from "@/content/blog/how-to-improve-amazon-ipi-score.mdx";
import HowToRecoverAmazonFbaReimbursements2025, {
  frontmatter as howToRecoverAmazonFbaReimbursements2025,
} from "@/content/blog/how-to-recover-amazon-fba-reimbursements-2025.mdx";
import SettlementReconciliation, {
  frontmatter as settlementReconciliation,
} from "@/content/blog/settlement-reconciliation.mdx";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  faqs?: { question: string; answer: string }[];
  Component: ComponentType;
};

const posts: BlogPost[] = [
  {
    slug: "ai-tools-for-amazon-fba-sellers-2025",
    ...aiToolsForAmazonFbaSellers2025,
    Component: AiToolsForAmazonFbaSellers2025,
  },
  {
    slug: "amazon-fba-reimbursement-policy-2025",
    ...amazonFbaReimbursementPolicy2025,
    Component: AmazonFbaReimbursementPolicy2025,
  },
  {
    slug: "how-to-improve-amazon-ipi-score",
    ...howToImproveAmazonIpiScore,
    Component: HowToImproveAmazonIpiScore,
  },
  {
    slug: "how-to-recover-amazon-fba-reimbursements-2025",
    ...howToRecoverAmazonFbaReimbursements2025,
    Component: HowToRecoverAmazonFbaReimbursements2025,
  },
  {
    slug: "fba-storage-limits-ipi-restock-strategy-2026",
    ...fbaStorageLimitsIpiRestockStrategy2026,
    Component: FbaStorageLimitsIpiRestockStrategy2026,
  },
  {
    slug: "fba-reimbursement-audit",
    ...fbaReimbursementAudit,
    Component: FbaReimbursementAudit,
  },
  {
    slug: "settlement-reconciliation",
    ...settlementReconciliation,
    Component: SettlementReconciliation,
  },
  {
    slug: "free-audit-preparation",
    ...freeAuditPreparation,
    Component: FreeAuditPreparation,
  },
].sort(
  (first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime(),
);

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
