import type { Metadata } from "next";
import {
  BadgeCheck,
  BarChart3,
  ClipboardList,
  Globe,
  Home,
  Lock,
  Package,
  RefreshCw,
  Rocket,
  Tag,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import FaqJsonLd from "@/components/FaqJsonLd";
import FaqSection from "@/components/FaqSection";
import ScrollReveal from "@/components/ScrollReveal";

const contactEmail = "service@leviathansellers.com";

export const metadata: Metadata = {
  title: "Amazon FBA Account Management Service",
  description:
    "Amazon FBA account management service: daily IPI monitoring, listing-health fixes, storage optimisation and replenishment planning for US, UK and India sellers.",
  alternates: { canonical: "/fba-management" },
  openGraph: {
    title: "Amazon FBA Account Management Service",
    description:
      "Amazon FBA account management service: daily IPI monitoring, listing-health fixes, storage optimisation and replenishment planning for US, UK and India sellers.",
    url: "/fba-management",
    siteName: "Leviathan Sellers",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon FBA Account Management Service",
    description:
      "Amazon FBA account management service: daily IPI monitoring, listing-health fixes, storage optimisation and replenishment planning for US, UK and India sellers.",
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
      name: "FBA Account Management",
      item: "https://www.leviathansellers.com/fba-management",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Amazon FBA Account Management",
  provider: {
    "@type": "Organization",
    name: "Leviathan Sellers",
    url: "https://www.leviathansellers.com",
  },
  description:
    "Daily IPI score monitoring, listing health management, storage optimisation, and inventory replenishment planning for Amazon FBA sellers.",
  areaServed: ["US", "GB", "IN", "CA"],
  serviceType: "Amazon FBA Account Management",
};

const manageCards = [
  {
    icon: BarChart3,
    title: "IPI Score Monitoring",
    body: "We track your Inventory Performance Index daily. Our target is 550+ for every account. When scores drift, we identify the cause and fix it before Amazon restricts your storage capacity.",
  },
  {
    icon: Package,
    title: "Storage Limit Management",
    body: "We plan replenishment cadences and inventory flows to keep your storage utilisation optimal — avoiding both capacity restrictions and unnecessary long-term storage fees.",
  },
  {
    icon: Tag,
    title: "Listing Health & Suppression",
    body: "Suppressed or inactive listings lose sales silently. We monitor every listing daily and resolve suppression issues — incorrect attributes, policy flags, image violations — before they impact revenue.",
  },
  {
    icon: RefreshCw,
    title: "Inventory Replenishment Planning",
    body: "We analyse sell-through rates, lead times, and restock limits to give you data-based replenishment recommendations that prevent stockouts and overstock simultaneously.",
  },
  {
    icon: ClipboardList,
    title: "Account Health Dashboard",
    body: "Monthly reports covering every key metric: IPI trend, storage usage, listing health score, policy compliance status, and reimbursement recovery summary.",
  },
  {
    icon: BadgeCheck,
    title: "Policy Compliance Monitoring",
    body: "Amazon updates its policies frequently. We monitor every policy relevant to your account and alert you before non-compliance becomes a violation.",
  },
];

const ipiThresholds = [
  ["Excellent (550+)", "No restrictions, full storage capacity"],
  ["Good (400–549)", "Monitor closely, no restrictions yet"],
  ["At Risk (350–399)", "Storage surcharges begin"],
  ["Restricted (<350)", "Inventory limits enforced by Amazon"],
];

const processSteps = [
  {
    icon: Lock,
    title: "Read-Only Access",
    body: "Invite Leviathan Sellers as a limited user in Seller Central. We cannot make purchases, change listings, or move funds.",
  },
  {
    icon: BarChart3,
    title: "Account Audit",
    body: "We run a full health review of your account: IPI score, storage, listings, compliance, and reimbursement opportunities.",
  },
  {
    icon: ClipboardList,
    title: "Monthly Management",
    body: "Ongoing daily monitoring with weekly check-ins and a full monthly report on every tracked metric.",
  },
  {
    icon: Rocket,
    title: "Growth Support",
    body: "As your account stabilises, we identify expansion opportunities — new marketplaces, seasonal strategies, product launch timing.",
  },
];

const audienceCards = [
  {
    icon: TrendingUp,
    title: "Growing Sellers",
    body: "You're scaling and need professional account oversight to prevent IPI drops or listing suppressions from blocking growth.",
  },
  {
    icon: Globe,
    title: "Multi-Marketplace Sellers",
    body: "Managing accounts across US, UK, India or Canada simultaneously — each with different metrics and requirements.",
  },
  {
    icon: Home,
    title: "Private Label Brands",
    body: "High SKU counts and seasonal inventory patterns benefit most from daily monitoring and data-driven replenishment.",
  },
];

const managementFaqs = [
  {
    question: "What exactly is covered under FBA account management?",
    answer:
      "Ongoing oversight of Seller Central health signals tied to fulfilment operations: Inventory Performance Index (IPI), inventory ageing and stranded listings, replenishment timing, inbound planning hygiene, catalogue and listing suppression flags surfaced in Account Health where they intersect with FBA, and escalation-ready documentation before issues compound into fee surcharges or stockouts.",
  },
  {
    question: "Is this the same as your reimbursement reconciliation service?",
    answer:
      "No. Reconciliation focuses on recovering money Amazon owes from historical discrepancies. FBA management is forward-looking operational hygiene — inventory placement, replenishment cadence, and health metrics that prevent problems before storage fees erase margin. Many brands run both lanes together.",
  },
  {
    question: "How often do we meet or receive updates?",
    answer:
      "Cadence scales with SKU count and inbound complexity. Typical engagements include weekly or bi-weekly KPI snapshots, prioritized action lists tied to inbound and Buy Box readiness, plus month-end rollup statements you can fold into forecasting.",
  },
  {
    question: "Do you need full account access?",
    answer:
      "We align with whatever access model you approve for your risk posture. Diagnostic workstreams often start with the minimum permissions necessary to analyse inventory pipelines, stranded inventory workflows, fee previews, and case history — extended only when mutually agreed.",
  },
  {
    question: "What marketplaces do you support?",
    answer:
      "We support Amazon sellers active on Amazon.com (US), Amazon.co.uk, Amazon.in, Amazon.ca, and EU marketplaces and Amazon.com.au, with catalogue-specific nuance documented for inbound fees, fulfilment surcharge schedules, and language requirements for Seller Support escalation.",
  },
];

type RelatedPost = { slug: string; category: string; title: string; description: string; readingTime: string; };

const relatedPosts: RelatedPost[] = [
  {
    slug: "how-to-improve-amazon-ipi-score",
    category: "Account Health",
    title: "How to Improve Your Amazon IPI Score in 2025",
    description: "Actionable playbook to raise your Amazon Inventory Performance Index (IPI), protect storage limits, and keep FBA healthy under 2025 policy pressure.",
    readingTime: "14 min read",
  },
  {
    slug: "free-audit-preparation",
    category: "Audit Preparation",
    title: "What to Prepare Before an Amazon FBA Reconciliation Audit",
    description: "Prepare for a free Amazon FBA reconciliation audit with the account details and reports that help identify recoverable revenue.",
    readingTime: "12 min read",
  },
];

export default function FbaManagementPage() {
  return (
    <main className="bg-white text-[#0F172A]">
      <FaqJsonLd faqs={managementFaqs} />
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
      <section aria-labelledby="fba-mgmt-title" className="bg-white py-20 lg:py-28">
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
                <li className="text-[#0F172A]">FBA Account Management</li>
              </ol>
            </nav>
            <h1
              id="fba-mgmt-title"
              className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              FBA Account Management — Keep Your Amazon Account Healthy & Growing
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#475569]">
              IPI score, account health, storage limits, and listing suppression can
              silently erode margin and block growth. Leviathan Sellers monitors every
              metric daily so problems are fixed before Amazon restricts your account.
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

      {/* Alert */}
      <section aria-labelledby="fba-alert-title" className="bg-white pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="fba-alert-title" className="sr-only">
              IPI score alert
            </h2>
            <aside className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-5 text-sm leading-relaxed text-[#92400E]">
              <p className="font-semibold">
                ⚠️ Low IPI scores trigger storage restrictions and can freeze your
                ability to send inventory. Leviathan Sellers monitors and optimises your
                IPI score daily.
              </p>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* What we manage — problem-style cards on grey */}
      <section aria-labelledby="manage-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="manage-title"
              className="max-w-3xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              What We Manage
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {manageCards.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-colors hover:border-[#F97316]">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-[#0F172A]">
                    <item.icon
                      className="h-5 w-5 shrink-0 text-[#F97316]"
                      aria-hidden="true"
                    />
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#64748B]">{item.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* IPI section */}
      <section aria-labelledby="ipi-title" className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <ScrollReveal>
            <article>
              <h2
                id="ipi-title"
                className="max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                A Low IPI Score Costs You More Than Storage Restrictions
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#475569]">
                Below 400 IPI, Amazon charges excess storage fees, restricts how much
                inventory you can send, and can eventually suspend FBA privileges.
                Most sellers only notice when a shipment is rejected or storage
                surcharges appear on their invoice — by then, the damage is already
                done.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                Daily monitoring catches score drift early. We identify the root
                cause — excess aged inventory, stranded units, slow sell-through — and
                fix it before Amazon enforces limits on your account.
              </p>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <aside className="self-start rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#0F172A]">IPI Thresholds</h3>
              <dl className="mt-6 space-y-4">
                {ipiThresholds.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 border-b border-[#E2E8F0] pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                  >
                    <dt className="text-sm font-semibold text-[#F97316]">{label}</dt>
                    <dd className="text-sm text-[#64748B] sm:text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </ScrollReveal>
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
                How We Work
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
                  <h3 className="mt-4 flex items-center gap-2 text-lg font-semibold text-[#0F172A]">
                    <step.icon
                      className="h-5 w-5 shrink-0 text-[#F97316]"
                      aria-hidden="true"
                    />
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{step.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
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
              Who This Is For
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audienceCards.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-colors hover:border-[#F97316]">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-[#0F172A]">
                    <item.icon
                      className="h-5 w-5 shrink-0 text-[#F97316]"
                      aria-hidden="true"
                    />
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#64748B]">{item.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep content / guide */}
      <section aria-labelledby="mgmt-guide-title" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <article className="space-y-12">
              <section className="space-y-5">
                <h2
                  id="mgmt-guide-title"
                  className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
                >
                  What an Amazon FBA Account Management Service Actually Does
                </h2>
                <p className="text-base leading-8 text-[#374151]">
                  Running a healthy FBA account is not a single task — it is a
                  continuous loop of small decisions that compound. Most sellers
                  lose money not to one catastrophic mistake but to dozens of quiet
                  ones: a listing that gets suppressed on a Tuesday and is not
                  noticed until sales drop the following week; an IPI score that
                  drifts from 480 to 390 over a quarter and triggers storage
                  restrictions right before peak season; a restock recommendation
                  ignored until the bestseller goes out of stock and loses its
                  ranking. An Amazon FBA account management service exists to close
                  that loop — to watch the metrics that move silently and act on
                  them before they cost you sales or surcharges.
                </p>
                <p className="text-base leading-8 text-[#374151]">
                  Our approach is daily, not periodic. Amazon&apos;s systems update
                  constantly, and the difference between catching a suppressed
                  listing on day one versus day eight is real revenue. We track your
                  Inventory Performance Index, storage utilisation against your
                  limits, listing health and suppression flags, stranded inventory,
                  and policy notifications — then translate each signal into a
                  prioritised, plain-English action list rather than a dashboard you
                  have to interpret yourself.
                </p>
              </section>

              <section className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                  IPI, Storage Limits and the Cost of Drift
                </h2>
                <p className="text-base leading-8 text-[#374151]">
                  The Inventory Performance Index is the metric Amazon uses to decide
                  how much inventory you are allowed to send. Let it fall and you
                  face two penalties at once: excess-storage surcharges on the
                  inventory you already hold, and restock limits that cap your
                  ability to bring in more — often at the worst possible moment.
                  The levers that move IPI are knowable: sell-through rate, stranded
                  inventory percentage, excess-inventory ratio, and in-stock rate.
                  Managing them is a matter of cadence and attention, which is
                  exactly what a dedicated service provides. Our companion guide on{" "}
                  <Link href="/blog/how-to-improve-amazon-ipi-score" className="font-medium text-[#F97316] hover:text-[#EA580C]">
                    how to improve your Amazon IPI score
                  </Link>{" "}
                  breaks down each lever in detail.
                </p>
                <p className="text-base leading-8 text-[#374151]">
                  Replenishment is where good management pays for itself. Send too
                  much and you bleed storage fees and drag IPI down; send too little
                  and you stock out, lose ranking, and hand sales to competitors. We
                  model sell-through, supplier lead times, and restock limits to keep
                  you in the narrow band that avoids both failure modes. Before you
                  commit a purchase order, you can validate any SKU&apos;s economics
                  in our{" "}
                  <Link href="/fba-calculator" className="font-medium text-[#F97316] hover:text-[#EA580C]">
                    free Amazon FBA calculator
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                  How Account Management Fits With Reconciliation and Research
                </h2>
                <p className="text-base leading-8 text-[#374151]">
                  Account management is forward-looking; it prevents problems. But
                  operational hygiene alone does not recover the money Amazon already
                  owes you from lost, damaged, or mis-fee&apos;d units — that is the
                  job of our{" "}
                  <Link href="/reconciliation" className="font-medium text-[#F97316] hover:text-[#EA580C]">
                    FBA reconciliation and reimbursement recovery service
                  </Link>
                  , and most brands run both lanes together because clean books make
                  your IPI levers trustworthy. When you are ready to add new SKUs to
                  a healthy account, our{" "}
                  <Link href="/product-research" className="font-medium text-[#F97316] hover:text-[#EA580C]">
                    Amazon product research service
                  </Link>{" "}
                  finds products with margins that survive Amazon&apos;s 2025–2026
                  fee structure — so growth strengthens the account rather than
                  straining it.
                </p>
              </section>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section aria-labelledby="pricing-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <article className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-8 text-center">
              <h2
                id="pricing-title"
                className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                Transparent Monthly Retainer
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#475569]">
                FBA Account Management is priced as a monthly retainer based on account
                size, number of active SKUs, and marketplaces covered. There are no
                hidden fees or performance commissions on this service — you get full
                management at a fixed, agreed monthly cost.
              </p>
              <nav
                className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
                aria-label="FBA management pricing calls to action"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
                >
                  Get a Quote →
                </Link>
                <Link
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-7 py-4 font-semibold text-[#374151] transition-colors hover:border-[#F97316]"
                >
                  ✉ {contactEmail}
                </Link>
              </nav>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="fba-mgmt-related-title" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2
              id="fba-mgmt-related-title"
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
      <section aria-labelledby="mgmt-faq-title" className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              FAQ
            </p>
            <h2
              id="mgmt-faq-title"
              className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              FBA Account Management FAQ
            </h2>
            <div className="mt-8">
              <FaqSection idPrefix="fba-management" faqs={managementFaqs} />
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
              Start With a Free Account Audit
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
              We review your IPI score, storage usage, listing health, and compliance
              status — then show you exactly what needs attention. No obligation, no
              credit card required.
            </p>
            <nav
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
              aria-label="FBA management calls to action"
            >
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
