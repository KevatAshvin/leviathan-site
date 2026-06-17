import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ReconciliationFaq from "./ReconciliationFaq";

const contactEmail = "service@leviathansellers.com";

export const metadata: Metadata = {
  title: "Amazon FBA Reconciliation & Reimbursement Recovery",
  description:
    "Daily Amazon FBA reconciliation — every valid reimbursement claim filed manually within the 60-day window, with full manufacturing cost documentation. Free audit for US, UK, India and Canada sellers.",
  alternates: { canonical: "/reconciliation" },
  openGraph: {
    title: "Amazon FBA Reconciliation & Reimbursement Recovery",
    description:
      "Daily Amazon FBA reconciliation — every valid reimbursement claim filed manually within the 60-day window, with full manufacturing cost documentation. Free audit for US, UK, India and Canada sellers.",
    url: "/reconciliation",
    siteName: "Leviathan Sellers",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon FBA Reconciliation & Reimbursement Recovery",
    description:
      "Daily Amazon FBA reconciliation — every valid reimbursement claim filed manually within the 60-day window, with full manufacturing cost documentation. Free audit for US, UK, India and Canada sellers.",
    images: ["/og-image.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.leviathansellers.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.leviathansellers.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FBA Reconciliation",
      item: "https://www.leviathansellers.com/reconciliation",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Amazon FBA Reconciliation & Reimbursement Recovery",
  provider: {
    "@type": "Organization",
    name: "Leviathan Sellers",
    url: "https://www.leviathansellers.com",
  },
  description:
    "Daily Amazon FBA reconciliation with manual expert claim filing within the 60-day window. Full manufacturing cost documentation included. Performance-based pricing — pay only when we recover.",
  areaServed: ["US", "GB", "IN", "CA"],
  offers: {
    "@type": "Offer",
    description: "Performance-based — commission on recovered amounts only",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  serviceType: "Amazon FBA Reimbursement Recovery",
};

const problems = [
  {
    icon: "🚫",
    title: "Claims Expire Permanently",
    body: "After 60 days, every unclaimed discrepancy is gone. Amazon will not accept late filings under any circumstances.",
  },
  {
    icon: "📄",
    title: "Documentation Is Now Required",
    body: "Manufacturing cost evidence must be accurate and current. Generic or missing documentation leads to underpayment or outright denial.",
  },
  {
    icon: "🤖",
    title: "Automation Tools Are Increasingly Rejected",
    body: "Bulk-submission bots cannot prepare the tailored documentation Amazon now requires.",
  },
];

const recoveryRows = [
  ["Lost / Missing Inventory", "$200–$1,000"],
  ["Damaged Inventory", "$100–$500"],
  ["Return Discrepancies", "$200–$800"],
  ["Fee Overcharges", "$300–$900"],
  ["Inbound Shortfalls", "$100–$500"],
  ["Disposal / Removal Errors", "$50–$300"],
];

const recoverItems = [
  {
    icon: "🚫",
    title: "Lost Inventory",
    body: "Units checked into an FBA centre but not reflected in inventory. Amazon is responsible for all units received.",
    note: "One of the largest claim categories",
  },
  {
    icon: "🚧",
    title: "Damaged in Warehouse",
    body: "Items damaged by Amazon employees or equipment during storage or fulfillment.",
    note: "Requires documentation of unit value",
  },
  {
    icon: "↩️",
    title: "Return Discrepancies",
    body: "Customer returns not checked back into sellable inventory or not reimbursed.",
    note: "High frequency, lower per-unit value",
  },
  {
    icon: "⚙️",
    title: "Fee Overcharges",
    body: "Wrong weight/dimensions, incorrect category assignment, duplicate fulfillment fee charges.",
    note: "Ongoing — Amazon measurements drift",
  },
  {
    icon: "🚛",
    title: "Inbound Shipment Shortfalls",
    body: "Units tracked to an FBA centre but not checked in correctly during receiving.",
    note: "Common for high-volume shippers",
  },
  {
    icon: "🗑️",
    title: "Removal & Disposal Errors",
    body: "Removal orders not returned correctly, disposal quantities not matching instructions.",
    note: "Often missed in standard audits",
  },
];

const processSteps = [
  {
    icon: "📊",
    title: "Daily Audit",
    body: "Every transaction reviewed daily — shipments, returns, fees, removals, disposals. No discrepancy expires without being identified.",
  },
  {
    icon: "📄",
    title: "Documentation Preparation",
    body: "For each valid claim, we prepare tailored manufacturing-cost documentation and supporting evidence meeting Amazon's 2025 policy requirements exactly.",
  },
  {
    icon: "📤",
    title: "Individual Manual Filing",
    body: "Claims are filed one by one through Amazon's official channels. No bulk automation. Each claim formatted, documented, and submitted individually.",
  },
  {
    icon: "💰",
    title: "Approval & Appeals",
    body: "Approved claims credited directly to your Seller Central account. Denied claims reviewed and re-filed with strengthened evidence. Monthly reports keep you fully informed.",
  },
];

const requirements = [
  {
    title: "60-day window (Jan 2025)",
    body: "Claims must be filed within 60 days of the discrepancy. No exceptions, no appeals after the window closes.",
  },
  {
    title: "Manufacturing cost (Mar 2025)",
    body: "Reimbursements based on your production cost, not selling price. Amazon's internal estimates are used if you don't provide accurate documentation.",
  },
  {
    title: "Stricter documentation",
    body: "Generic templates rejected more frequently. Each claim needs case-specific evidence.",
  },
];

const complianceItems = [
  "Daily auditing ensures no claim reaches day 59 without being filed.",
  "Per-claim cost documentation — accurate, current COGS evidence for every individual claim.",
  "Manual individual filing — every claim through official channels with tailored supporting documentation.",
  "Active denial appeals — denied claims reviewed and re-filed. Most are not permanent.",
];

const resultStats = [
  {
    value: "60",
    label: "Days maximum claim window Amazon enforces",
    detail: "Daily auditing catches every claim in time",
  },
  {
    value: "$130+",
    label: "Minimum monthly recovery for active FBA accounts",
    detail: "Based on client results since 2023",
  },
  {
    value: "5",
    label: "Discrepancy types covered in every audit",
    detail: "Lost, damaged, returns, fees, shipments",
  },
  {
    value: "48h",
    label: "Free audit turnaround — no obligation",
    detail: "Results within 48-72 hours",
  },
];

const audienceCards = [
  {
    icon: "📦",
    title: "You Send 100+ Units to FBA Monthly",
    body: "At this volume, inbound shortfalls and lost inventory become statistically inevitable.",
  },
  {
    icon: "📈",
    title: "You Have Never Run a Full Reconciliation Audit",
    body: "Most sellers who have never audited find 6–18 months of accumulated discrepancies.",
  },
  {
    icon: "⚠️",
    title: "You Are Affected by the 2025 Policy Change",
    body: "If filing claims without accurate manufacturing cost documentation since March 2025, you are receiving 20–50% less than Amazon owes you.",
  },
];

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to start recovering reimbursements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see their first recovered claims within 7 to 14 days of granting read-only Seller Central access. The free audit is completed within 48 hours and shows exactly how much is recoverable before you commit to anything.",
      },
    },
    {
      "@type": "Question",
      name: "What access does Leviathan Sellers need to my Seller Central account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Read-only access only. You invite Leviathan Sellers as a limited user in Seller Central with view-only permissions. We cannot make purchases, change your listings, move funds, or take any action — we can only read transaction data and file reimbursement claims through official Amazon channels.",
      },
    },
    {
      "@type": "Question",
      name: "Does Leviathan Sellers handle manufacturing cost documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Since March 2025 Amazon reimburses at manufacturing cost rather than selling price. We prepare accurate, current cost of goods evidence for every claim. Without this documentation, Amazon uses its own lower internal estimate — typically 30–50% below actual cost — and you lose the difference permanently.",
      },
    },
    {
      "@type": "Question",
      name: "What if Amazon denies a claim Leviathan Sellers filed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All denied claims are reviewed individually. Where the denial is contestable — which is the majority of cases — we re-file with strengthened evidence and a formal appeal. Denial is not the end of the process for us, it is the start of the appeal process.",
      },
    },
    {
      "@type": "Question",
      name: "How much does FBA reconciliation cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100% performance-based. We charge a commission only on amounts we actually recover for you. If we recover nothing, you pay nothing. The initial audit is completely free with no obligation. You only pay when you get paid.",
      },
    },
  ],
};

type RelatedPost = { slug: string; category: string; title: string; description: string; readingTime: string; };

const relatedPosts: RelatedPost[] = [
  {
    slug: "amazon-fba-reimbursement-policy-2025",
    category: "FBA Policy",
    title: "Amazon FBA Reimbursement Policy Changes 2025: What Sellers Must Know",
    description: "Deep dive into Amazon's 2025 FBA reimbursement timelines, manufacturing-cost documentation shifts, tooling risks — and how Leviathan Sellers files claims manually.",
    readingTime: "15 min read",
  },
  {
    slug: "fba-reimbursement-audit",
    category: "FBA Reimbursements",
    title: "How an FBA Reimbursement Audit Finds Lost Amazon Revenue",
    description: "Learn how Amazon sellers can use FBA reimbursement audits to identify missing funds from lost, damaged, and mismanaged inventory.",
    readingTime: "11 min read",
  },
  {
    slug: "settlement-reconciliation",
    category: "Settlement Reconciliation",
    title: "Why Amazon Settlement Reconciliation Matters for Sellers",
    description: "A practical guide to Amazon settlement reconciliation and how it helps sellers catch fees, credits, reimbursements, and adjustments.",
    readingTime: "13 min read",
  },
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-xs font-bold text-white">
      ✓
    </span>
  );
}

export default function ReconciliationPage() {
  return (
    <main className="bg-white text-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section aria-labelledby="reconciliation-title" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav aria-label="Breadcrumb" className="text-sm font-medium text-[#64748B]">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-[#F97316]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#94A3B8]">
                  ›
                </li>
                <li>
                  <Link href="/services" className="transition hover:text-[#F97316]">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#94A3B8]">
                  ›
                </li>
                <li className="text-[#0F172A]">FBA Reconciliation</li>
              </ol>
            </nav>
            <h1
              id="reconciliation-title"
              className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              FBA Reconciliation & Reimbursement Recovery
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#475569]">
              Daily auditing of every Amazon transaction. Every valid claim filed
              individually, with manufacturing-cost documentation, before the
              60-day window expires.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center justify-center rounded-xl bg-[#F97316] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
            >
              Get Free Audit →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Policy alert */}
      <section aria-labelledby="reconciliation-alert-title" className="bg-white pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="reconciliation-alert-title" className="sr-only">
              New in 2025 Amazon claim window alert
            </h2>
            <aside className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-5 text-sm leading-relaxed text-[#92400E]">
              <p className="font-semibold">
                ⚠️ New in 2025: Amazon&apos;s 60-day claim window is live. Claims
                older than 60 days are permanently rejected — no exceptions. Daily
                auditing is the only protection.{" "}
                <Link href="/contact" className="font-semibold text-[#F97316] hover:text-[#EA6D0A]">
                  Start your free audit →
                </Link>
              </p>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem */}
      <section aria-labelledby="problem-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <ScrollReveal>
            <article>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                The Problem
              </p>
              <h2
                id="problem-title"
                className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                FBA Discrepancies Are Constant. The Window to Claim Them Is Not.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#475569]">
                Amazon&apos;s warehouses check in billions of units a year. Errors
                happen across every stage — receiving, storage, returns, disposal.
                Most are correctable. But since January 2025, you have exactly 60
                days to identify and file each one.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                Since March 2025, every claim also requires manufacturing cost
                documentation. Without it, Amazon uses its own cost estimate —
                frequently 30–50% below your actual production cost.
              </p>
              <div className="mt-8 grid gap-4">
                {problems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-colors hover:border-[#F97316]"
                  >
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-[#0F172A]">
                      <span>{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#64748B]">{item.body}</p>
                  </article>
                ))}
              </div>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <aside className="self-start rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#0F172A]">
                Typical Monthly Recovery by Category
              </h3>
              <dl className="mt-6 space-y-4">
                {recoveryRows.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-[#64748B]">{label}</dt>
                    <dd className="text-right font-semibold text-[#F97316]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-4 text-sm leading-relaxed text-[#92400E]">
                ℹ Actual amounts depend on account size, category, and volume.
                Free audit reveals your specific recoverable total.
              </p>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* Recover types */}
      <section aria-labelledby="recover-title" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="recover-title"
              className="max-w-3xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              Every Type of FBA Discrepancy — Covered
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recoverItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-colors hover:border-[#F97316]">
                  <h3 className="text-xl font-semibold text-[#0F172A]">
                    <span className="mr-2">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#64748B]">{item.body}</p>
                  <p className="mt-4 text-sm font-semibold text-[#F97316]">
                    {item.note}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section aria-labelledby="process-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Process
              </p>
              <h2
                id="process-title"
                className="text-3xl font-bold text-[#0F172A] sm:text-4xl"
              >
                How We File Every Claim Correctly
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 80}>
                <article className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <p className="text-5xl font-bold text-[#F97316]/20">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">
                    <span className="mr-2">{step.icon}</span>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                    {step.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Policy */}
      <section aria-labelledby="policy-title" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="policy-title"
              className="max-w-3xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              Amazon&apos;s New Rules & How We Handle Them
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ScrollReveal delay={80}>
              <article className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-6">
                <h3 className="text-xl font-semibold text-[#0F172A]">⚠️ The New Requirements</h3>
                <ul className="mt-5 space-y-4 text-[#475569]">
                  {requirements.map((item) => (
                    <li key={item.title}>
                      <strong className="text-[#0F172A]">{item.title}:</strong>{" "}
                      {item.body}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <article className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  ✓ How Leviathan Sellers Complies
                </h3>
                <ul className="mt-5 space-y-4">
                  {complianceItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckIcon />
                      <span className="text-[#475569]">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results stats */}
      <section aria-labelledby="results-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="results-title" className="sr-only">
              FBA reconciliation results
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {resultStats.map((stat) => (
                <article
                  key={stat.value}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-6"
                >
                  <p className="text-4xl font-bold text-[#F97316]">{stat.value}</p>
                  <h3 className="mt-4 text-base font-semibold text-[#0F172A]">{stat.label}</h3>
                  <p className="mt-2 text-sm text-[#64748B]">{stat.detail}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Audience */}
      <section aria-labelledby="who-title" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="who-title"
              className="max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              FBA Reconciliation Is Essential If You Match Any of These
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audienceCards.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-colors hover:border-[#F97316]">
                  <h3 className="text-xl font-semibold text-[#0F172A]">
                    <span className="mr-2">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#64748B]">{item.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section aria-labelledby="pricing-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <article className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-8 text-center">
              <h2
                id="pricing-title"
                className="sr-only"
              >
                FBA reconciliation pricing
              </h2>
              <p className="text-lg leading-relaxed text-[#475569]">
                Performance-based — commission on recovered amounts only. Free audit
                with no obligation. We don&apos;t charge anything unless we recover
                money for you.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="reconciliation-related-title" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2
              id="reconciliation-related-title"
              className="text-2xl font-bold text-[#0F172A]"
            >
              Further reading
            </h2>
            <Link
              href="/blog"
              className="hidden text-sm font-medium text-[#F97316] transition hover:text-[#EA580C] sm:inline-flex items-center gap-1"
            >
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-[#E2E8F0] p-7 transition-all duration-200 hover:border-[#F97316] hover:shadow-lg hover:shadow-orange-50"
              >
                <span className="inline-flex w-fit rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-semibold text-[#EA580C]">
                  {post.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-[#0F172A] transition-colors group-hover:text-[#F97316]">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#64748B] line-clamp-3">
                  {post.description}
                </p>
                <p className="mt-5 text-xs text-[#94A3B8]">{post.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              FAQ
            </p>
            <h2
              id="faq-title"
              className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              FBA Reconciliation FAQ
            </h2>
            <div className="mt-8">
              <ReconciliationFaq />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-title" className="bg-[#0F172A] py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="cta-title"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Start Recovering What Amazon Owes You
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
              Free audit. No credit card. Results within 48 hours. We don&apos;t
              charge anything unless we recover money for you.
            </p>
            <nav className="mt-9 flex flex-col justify-center gap-3 sm:flex-row" aria-label="Reconciliation calls to action">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
              >
                Get Free Account Audit
              </Link>
              <Link
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-xl border border-[#334155] px-7 py-4 font-semibold text-white transition-colors hover:border-[#F97316]"
              >
                ✉ {contactEmail}
              </Link>
            </nav>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
