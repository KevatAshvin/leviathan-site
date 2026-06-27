import type { Metadata } from "next";
import {
  BarChart3,
  ClipboardList,
  Factory,
  Globe,
  Search,
  Star,
  Target,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import FaqJsonLd from "@/components/FaqJsonLd";
import FaqSection from "@/components/FaqSection";
import ScrollReveal from "@/components/ScrollReveal";

const contactEmail = "service@leviathansellers.com";

export const metadata: Metadata = {
  title: "Amazon Product Research Service — US, UK & India",
  description:
    "Amazon product research service for US, UK and India: keyword demand, competition depth, margin modelling and supplier vetting. Find winning products with real economics.",
  alternates: { canonical: "/product-research" },
  openGraph: {
    title: "Amazon Product Research Service — US, UK & India",
    description:
      "Amazon product research service for US, UK and India: keyword demand, competition depth, margin modelling and supplier vetting. Find winning products with real economics.",
    url: "/product-research",
    siteName: "Leviathan Sellers",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Product Research Service — US, UK & India",
    description:
      "Amazon product research service for US, UK and India: keyword demand, competition depth, margin modelling and supplier vetting. Find winning products with real economics.",
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
      name: "Product Research",
      item: "https://www.leviathansellers.com/product-research",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Amazon Product Research",
  provider: {
    "@type": "Organization",
    name: "Leviathan Sellers",
    url: "https://www.leviathansellers.com",
  },
  description:
    "Data-driven Amazon product research for US, UK, and India. Keyword demand, competition depth, margin modelling, and supplier identification.",
  areaServed: ["US", "GB", "IN"],
  serviceType: "Amazon Product Research",
};

const productResearchFaqs = [
  {
    question: "How long does Amazon product research take?",
    answer:
      "A focused single-category research project typically takes 5 to 10 business days from criteria brief to final report. Broader multi-category or multi-marketplace mandates run longer because each candidate niche is taken through full demand validation, competition depth analysis, and per-unit margin modelling rather than a quick scrape. We share a shortlist as soon as the first niches clear our screening thresholds so you can start supplier conversations early.",
  },
  {
    question: "What data and tools do you use for Amazon product research?",
    answer:
      "We combine marketplace data — search volume trends, Best Seller Rank distribution, review counts and velocity, price history — with first-principles unit economics. Tool outputs are a starting point, not the answer: every shortlisted product is re-checked manually against landed cost, FBA and referral fees, PPC budget, and seasonality so the recommendation reflects real profit, not an optimistic estimate. You can pressure-test any product yourself in our free Amazon FBA calculator.",
  },
  {
    question: "Do you guarantee a researched product will be profitable?",
    answer:
      "No honest research service can guarantee profit — Amazon is competitive and outcomes depend on your sourcing, pricing, launch budget, and execution. What we guarantee is rigour: we only recommend products where the numbers justify the investment after all costs, we flag the risks we see (patent exposure, single-source supply, fragile or hazmat handling, seasonality), and we model conservatively so you go in with clear eyes rather than hype.",
  },
  {
    question: "Can you research products for Amazon UK and India, not just the US?",
    answer:
      "Yes. We research Amazon US, UK and India and frequently compare the same product across all three. A product with thin margins on Amazon.com can be genuinely profitable on Amazon.co.uk or Amazon.in where competition is shallower and the fee structure differs. We model each marketplace in its own currency and fee schedule so you choose the launch market on evidence, not assumption.",
  },
  {
    question: "Do you help with sourcing and suppliers after the research?",
    answer:
      "Our research includes supplier identification and initial vetting criteria — we shortlist suppliers on Alibaba and direct factory directories and give you the questions and benchmarks to approach sourcing with leverage. Full sourcing negotiation and ongoing account growth can continue under our Amazon FBA account management service once your product is live.",
  },
];

const analyseCards = [
  {
    icon: Search,
    title: "Keyword & Demand Analysis",
    body: "We analyse search volume trends, seasonality, and keyword difficulty to confirm demand is real, growing, and not just a spike.",
  },
  {
    icon: BarChart3,
    title: "Competition Depth Assessment",
    body: "BSR distribution across the top 20 results, review counts and velocity, listing quality gaps — we identify where new entrants can realistically compete.",
  },
  {
    icon: Wallet,
    title: "Landed Cost & Margin Modelling",
    body: "Full P&L per unit: product cost, freight, duties, FBA fees, referral fees, PPC budget. We only recommend products where the margin is real after all costs.",
  },
  {
    icon: Factory,
    title: "Supplier Identification",
    body: "We identify shortlisted suppliers on Alibaba and direct factory directories, and provide initial vetting criteria so you approach sourcing with leverage.",
  },
  {
    icon: Star,
    title: "Review Gap Analysis",
    body: "Low-review competitors with strong BSR signal an opening. We identify categories where quality and service are under-served and a new entrant can win reviews faster.",
  },
  {
    icon: Globe,
    title: "Multi-Marketplace Opportunity",
    body: "A product with thin margins on Amazon US may have strong margins on Amazon UK or India where competition is thinner. We model all three.",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Criteria Brief",
    body: "We start with your budget, supplier access, target categories, and margin requirements. Research is filtered to products that fit your actual constraints.",
  },
  {
    icon: Search,
    title: "Market Scan",
    body: "We run broad keyword and category scans across Amazon US, UK, and India to generate a long list of candidate niches meeting initial demand and competition thresholds.",
  },
  {
    icon: BarChart3,
    title: "Deep Analysis",
    body: "Shortlisted niches go through full P&L modelling, BSR depth analysis, review velocity assessment, and supplier availability checks.",
  },
  {
    icon: ClipboardList,
    title: "Research Report",
    body: "You receive a structured report with shortlisted products, full margin models, risk assessment, and a recommended launch strategy per product.",
  },
];

const warningSigns = [
  "Dominated by brands with 10,000+ reviews",
  "Margin below 20% after all costs and PPC",
  "Highly seasonal with no year-round baseline demand",
  "Fragile, oversized, or hazmat categories",
  "IP-heavy niches with patent risk",
];

const positiveSignals = [
  "Monthly search volume 5,000+ with stable or growing trend",
  "Top 10 sellers have fewer than 500 reviews average",
  "Net margin 25%+ modelled conservatively",
  "Multiple suppliers available, no single-source risk",
  "Room to differentiate on quality, bundling, or branding",
];

const marketplaceCards = [
  {
    icon: "🇺🇸",
    title: "Amazon US",
    body: "The largest marketplace with the most competition — and the most opportunity. We focus on niches where demand justifies the fight for ranking.",
  },
  {
    icon: "🇬🇧",
    title: "Amazon UK",
    body: "Lower competition in most categories compared to US. Many products that are margin-thin on .com are profitable on .co.uk. We model both.",
  },
  {
    icon: "🇮🇳",
    title: "Amazon India",
    body: "A fast-growing market particularly relevant for India-based sellers. We identify products suited to Indian buyer behaviour and the local fee structure.",
  },
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-xs font-bold text-white">
      ✓
    </span>
  );
}

export default function ProductResearchPage() {
  return (
    <main className="bg-white text-[#0F172A]">
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
      <FaqJsonLd faqs={productResearchFaqs} />

      {/* Hero */}
      <section aria-labelledby="research-title" className="bg-white py-20 lg:py-28">
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
                <li className="text-[#0F172A]">Product Research</li>
              </ol>
            </nav>
            <h1
              id="research-title"
              className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              Amazon Product Research — Find Winning Products Before the Competition
              Does
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#475569]">
              Data-driven discovery, demand analysis, competition depth, and margin
              modelling — so you launch products with real economics, not guesswork.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center justify-center rounded-xl bg-[#F97316] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
            >
              Get Free Consultation →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* What we analyse — cards on grey */}
      <section aria-labelledby="analyse-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Analysis
            </p>
            <h2
              id="analyse-title"
              className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              What We Analyse
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {analyseCards.map((item, i) => (
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

      {/* Process timeline */}
      <section aria-labelledby="process-title" className="bg-white py-24">
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
                Our Research Process
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

      {/* Signals */}
      <section aria-labelledby="signals-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="signals-title"
              className="max-w-3xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              What Makes a Good Product
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ScrollReveal delay={80}>
              <article className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-6">
                <h3 className="text-xl font-semibold text-[#0F172A]">⚠️ Warning Signs We Screen Out</h3>
                <ul className="mt-5 space-y-4 text-[#475569]">
                  {warningSigns.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <article className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#0F172A]">✓ Signals We Look For</h3>
                <ul className="mt-5 space-y-4">
                  {positiveSignals.map((item) => (
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

      {/* Marketplaces */}
      <section aria-labelledby="marketplaces-title" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="marketplaces-title"
              className="max-w-3xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              Marketplaces We Cover
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketplaceCards.map((item, i) => (
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

      {/* Deep content / guide */}
      <section aria-labelledby="pr-guide-title" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <article className="space-y-12">
              <section className="space-y-5">
                <h2
                  id="pr-guide-title"
                  className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
                >
                  Why a Data-Driven Amazon Product Research Service Beats Guesswork
                </h2>
                <p className="text-base leading-8 text-[#374151]">
                  Most failed Amazon launches are not failures of effort — they are
                  failures of selection. A seller falls in love with a product,
                  orders 1,000 units, and only afterwards discovers the niche is
                  dominated by brands with 12,000 reviews, the margin evaporates
                  once PPC is layered in, or demand was a seasonal spike that does
                  not repeat. A professional Amazon product research service exists
                  to remove that risk <em>before</em> capital is committed. Instead
                  of chasing trends, we start from your real constraints — budget,
                  supplier access, target categories, and the minimum margin you
                  need — and filter the entire opportunity set down to products
                  where the economics actually work.
                </p>
                <p className="text-base leading-8 text-[#374151]">
                  The discipline matters more in 2025 and 2026 than it did five
                  years ago. Amazon&apos;s fee schedule has grown more complex,
                  storage and placement surcharges punish slow sell-through, and
                  advertising costs have risen across nearly every category. A
                  product that looked viable on a back-of-envelope calculation can
                  quietly lose money once true landed cost, FBA fulfilment fees,
                  referral fees, returns, and ad spend are accounted for. Our
                  research models all of it per unit, so a &ldquo;winner&rdquo; on
                  paper is genuinely a winner in your settlement report.
                </p>
              </section>

              <section className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                  How We Validate Demand, Competition and Margin
                </h2>
                <p className="text-base leading-8 text-[#374151]">
                  <strong>Demand</strong> is validated across time, not in a single
                  snapshot. We look at search volume trend lines and seasonality so
                  a holiday-driven spike is never mistaken for durable, year-round
                  demand. <strong>Competition</strong> is assessed by depth, not
                  just count: how Best Seller Rank is distributed across the top 20
                  listings, how many reviews the leaders hold, how fast new entrants
                  accumulate reviews, and where listing quality is weak enough that
                  a better product photo set, title, and bullet structure could win
                  share. <strong>Margin</strong> is modelled as a full per-unit P&amp;L
                  — product cost, freight, duties, FBA fees, referral fees, and a
                  realistic PPC budget — because a 30% gross margin that becomes 8%
                  after advertising is not a business.
                </p>
                <p className="text-base leading-8 text-[#374151]">
                  We screen <em>out</em> as deliberately as we screen in. Patent and
                  intellectual-property exposure, single-source supply risk, fragile
                  or oversized handling, hazmat gating, and categories already
                  saturated by entrenched brands are all flagged before they cost
                  you a purchase order. The goal is not to hand you the most
                  exciting idea — it is to hand you the most <em>defensible</em> one.
                  You can sanity-check any shortlisted product&apos;s unit economics
                  yourself in our{" "}
                  <Link href="/fba-calculator" className="font-medium text-[#F97316] hover:text-[#EA580C]">
                    free Amazon FBA calculator
                  </Link>
                  , which applies marketplace-accurate 2025–2026 fee schedules for
                  US, UK and India.
                </p>
              </section>

              <section className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                  Research Is the First Step — Then Protect the Margin You Found
                </h2>
                <p className="text-base leading-8 text-[#374151]">
                  Finding a profitable product is only the beginning. Once inventory
                  is live, that margin has to be defended against the two forces
                  that quietly erode it: operational drift and Amazon errors. Slow
                  sell-through and storage surcharges are handled through our{" "}
                  <Link href="/fba-management" className="font-medium text-[#F97316] hover:text-[#EA580C]">
                    Amazon FBA account management service
                  </Link>
                  , which monitors IPI, listing health, and replenishment timing so
                  the SKU you researched does not turn into stranded inventory. Lost,
                  damaged, and mis-fee&apos;d units are recovered through our{" "}
                  <Link href="/reconciliation" className="font-medium text-[#F97316] hover:text-[#EA580C]">
                    FBA reconciliation and reimbursement recovery service
                  </Link>
                  , so the dollars Amazon owes you on the product actually come back.
                  For the wider playbook on how sellers pick winners without
                  surrendering judgement to a tool, read our guide to{" "}
                  <Link href="/blog/ai-tools-for-amazon-fba-sellers-2025" className="font-medium text-[#F97316] hover:text-[#EA580C]">
                    AI tools for Amazon FBA sellers
                  </Link>
                  .
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
                Project-Based or Monthly Retainer
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#475569]">
                Product research is available as a one-time project (ideal for a focused
                product launch) or as an ongoing monthly service for sellers actively
                building their catalogue. Pricing is based on scope — number of
                categories, marketplaces, and depth of analysis required.
              </p>
              <nav
                className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
                aria-label="Product research pricing calls to action"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
                >
                  Discuss Your Project →
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

      {/* FAQ */}
      <section aria-labelledby="research-faq-title" className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              FAQ
            </p>
            <h2
              id="research-faq-title"
              className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
            >
              Amazon Product Research FAQ
            </h2>
            <div className="mt-8">
              <FaqSection idPrefix="product-research" faqs={productResearchFaqs} />
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
              Ready to Find Your Next Winning Product?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
              Tell us your budget, target categories, and margin requirements. We will
              show you where the real opportunities are — with full numbers, not
              hype.
            </p>
            <nav
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
              aria-label="Product research calls to action"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
              >
                Get Free Consultation
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
