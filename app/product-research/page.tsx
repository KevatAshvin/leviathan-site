import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const contactEmail = "service@leviathansellers.com";

export const metadata: Metadata = {
  title: "Amazon Product Research Service — US, UK & India",
  description:
    "Data-driven Amazon product research for US, UK, and India marketplaces. Keyword demand analysis, competition depth, margin modelling, and supplier identification. Find winning products before the competition.",
  keywords: [
    "amazon product research service",
    "amazon product research india",
    "amazon fba product research",
    "amazon winning product finder",
    "amazon product research uk",
    "fba product opportunity analysis",
    "amazon niche research service",
    "amazon competition analysis",
    "amazon margin calculator product research",
    "fba product launch research",
    "amazon supplier research",
  ],
  alternates: { canonical: "/product-research" },
  openGraph: {
    title: "Amazon Product Research Service — US, UK & India",
    description:
      "Data-driven Amazon product research for US, UK, and India marketplaces. Keyword demand analysis, competition depth, margin modelling, and supplier identification. Find winning products before the competition.",
    url: "/product-research",
    siteName: "Leviathan Sellers",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Product Research Service — US, UK & India",
    description:
      "Data-driven Amazon product research for US, UK, and India marketplaces. Keyword demand analysis, competition depth, margin modelling, and supplier identification. Find winning products before the competition.",
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

const analyseCards = [
  {
    icon: "🔍",
    title: "Keyword & Demand Analysis",
    body: "We analyse search volume trends, seasonality, and keyword difficulty to confirm demand is real, growing, and not just a spike.",
  },
  {
    icon: "📊",
    title: "Competition Depth Assessment",
    body: "BSR distribution across the top 20 results, review counts and velocity, listing quality gaps — we identify where new entrants can realistically compete.",
  },
  {
    icon: "💰",
    title: "Landed Cost & Margin Modelling",
    body: "Full P&L per unit: product cost, freight, duties, FBA fees, referral fees, PPC budget. We only recommend products where the margin is real after all costs.",
  },
  {
    icon: "🏭",
    title: "Supplier Identification",
    body: "We identify shortlisted suppliers on Alibaba and direct factory directories, and provide initial vetting criteria so you approach sourcing with leverage.",
  },
  {
    icon: "⭐",
    title: "Review Gap Analysis",
    body: "Low-review competitors with strong BSR signal an opening. We identify categories where quality and service are under-served and a new entrant can win reviews faster.",
  },
  {
    icon: "🌍",
    title: "Multi-Marketplace Opportunity",
    body: "A product with thin margins on Amazon US may have strong margins on Amazon UK or India where competition is thinner. We model all three.",
  },
];

const processSteps = [
  {
    icon: "🎯",
    title: "Criteria Brief",
    body: "We start with your budget, supplier access, target categories, and margin requirements. Research is filtered to products that fit your actual constraints.",
  },
  {
    icon: "🔍",
    title: "Market Scan",
    body: "We run broad keyword and category scans across Amazon US, UK, and India to generate a long list of candidate niches meeting initial demand and competition thresholds.",
  },
  {
    icon: "📊",
    title: "Deep Analysis",
    body: "Shortlisted niches go through full P&L modelling, BSR depth analysis, review velocity assessment, and supplier availability checks.",
  },
  {
    icon: "📋",
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
                  <h3 className="text-xl font-semibold text-[#0F172A]">
                    <span className="mr-2">{item.icon}</span>
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
                  <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">
                    <span className="mr-2">{step.icon}</span>
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
