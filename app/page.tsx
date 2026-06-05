import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import FaqJsonLd from "@/components/FaqJsonLd";
import { homeFaqs } from "@/components/faq-data";
import HeroDashboard from "@/components/HeroDashboard";
import ReconciliationDashboard from "@/components/ReconciliationDashboard";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://www.leviathansellers.com/";
const title = "Amazon FBA Reimbursement Recovery Service";
const description =
  "Recover lost Amazon FBA reimbursements with expert daily auditing, manual claim filing, and manufacturing cost documentation. Serving FBA sellers in US, UK, India and Canada. 96% approval rate. Free audit — no obligation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "amazon fba reimbursement recovery",
    "fba reimbursement service",
    "amazon fba reconciliation service",
    "amazon reimbursement 2025",
    "fba 60 day claim window",
    "amazon manufacturing cost reimbursement",
    "fba lost inventory reimbursement",
    "amazon fba reimbursement india",
    "amazon fba reimbursement uk",
    "amazon seller reimbursement service",
    "fba missing inventory claim",
    "amazon fba audit free",
    "fba account management",
    "amazon product research service",
    "amazon fba expert",
  ],
  alternates: {
    canonical: "https://www.leviathansellers.com",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Leviathan Sellers",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leviathan Sellers — Amazon FBA Reimbursement Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const trustStats = [
  { value: "Daily", label: "Audit frequency" },
  { value: "96%", label: "Claim approval rate" },
  { value: "$130–$500", label: "Monthly recovery per client" },
  { value: "60-day", label: "Window tracked, every claim" },
];

const problemCards = [
  {
    icon: "📦",
    title: "Lost inventory goes unclaimed",
    body: "Amazon's fulfillment centres process millions of transactions daily. At that scale, lost and damaged units slip through — and Amazon only fixes them if you identify and claim them within 60 days.",
    stat: "1–3% of annual revenue",
    statLabel: "lost by average FBA sellers",
  },
  {
    icon: "⏱",
    title: "The 60-day window closes fast",
    body: "From January 2025, Amazon cut the claim filing window from 18 months to just 60 days. Every day without an audit, older discrepancies expire permanently — regardless of claim validity.",
    stat: "60 days",
    statLabel: "maximum claim window since Jan 2025",
  },
  {
    icon: "💸",
    title: "Manufacturing cost — not selling price",
    body: "Since March 2025, Amazon reimburses at production cost, not selling price. Without accurate COGS documentation filed with each claim, sellers routinely receive 20–50% less than they're owed.",
    stat: "20–50%",
    statLabel: "underpaid without proper documentation",
  },
];

const howSteps = [
  {
    step: "1",
    title: "Free Audit",
    body: "Grant read-only Seller Central access. We audit your full transaction history and identify every reimbursable discrepancy within 48–72 hours — completely free.",
  },
  {
    step: "2",
    title: "We File Claims",
    body: "Every valid claim is filed individually with tailored manufacturing-cost documentation — fully compliant with Amazon's 2025–2026 policy. No bulk automation.",
  },
  {
    step: "3",
    title: "You Get Paid",
    body: "Amazon processes approved claims directly into your account. You receive monthly statements showing every claim filed, approved, and denied — with appeals on all denials.",
  },
];

const serviceCards = [
  {
    icon: "💰",
    title: "FBA Reconciliation",
    body: "Daily auditing of every transaction. We identify, document, and manually file every valid claim before the 60-day window expires.",
    href: "/reconciliation",
  },
  {
    icon: "📊",
    title: "FBA Account Management",
    body: "Ongoing account health monitoring, IPI score optimisation, listing management, and performance tracking to keep your metrics green.",
    href: "/fba-management",
  },
  {
    icon: "🔍",
    title: "Product Research",
    body: "Data-driven product discovery using demand analysis, competition assessment, and margin modelling across US, UK, and India marketplaces.",
    href: "/product-research",
  },
];

const testimonials = [
  {
    company: "FellowBooks.com",
    category: "Amazon FBA Seller, Books & Media · US",
    rating: 4.5,
    quote:
      "Leviathan Sellers audited our entire Amazon account and found discrepancies we had completely overlooked for months. They handle our ongoing reconciliation and consistently recover $130–$300 every month that would otherwise be lost.",
    sourceLabel: "fellowbooks.com",
    sourceUrl: "https://fellowbooks.com/",
    result: "$130–$300 recovered monthly",
  },
  {
    company: "Golden Books",
    category: "Amazon FBA Seller, Books & Stationery · UK",
    rating: 4.3,
    quote:
      "We were losing money every month to Amazon reimbursement discrepancies we did not even know existed. Leviathan Sellers audited our full account, identified every valid claim, and recovered amounts we had written off completely.",
    result: "$250–$500 monthly recovery",
  },
  {
    company: "Home Utility",
    category: "Amazon Seller, Home & Kitchen · India",
    rating: 4.4,
    quote:
      "Leviathan Sellers set up our entire Amazon account from scratch and made the process completely stress-free. Their pricing strategy guidance helped us position our listings correctly from day one.",
    result: "Account setup & pricing strategy",
  },
];

const organizationReviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Leviathan Sellers",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Organization", name: "FellowBooks.com" },
      reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5" },
      reviewBody:
        "Leviathan Sellers audited our entire Amazon account and found discrepancies we had completely overlooked for months. They handle our ongoing reconciliation and consistently recover $130–$300 every month that would otherwise be lost.",
    },
    {
      "@type": "Review",
      author: { "@type": "Organization", name: "Golden Books" },
      reviewRating: { "@type": "Rating", ratingValue: "4.3", bestRating: "5" },
      reviewBody:
        "We were losing money every month to Amazon reimbursement discrepancies we did not even know existed. Leviathan Sellers audited our full account, identified every valid claim, and recovered amounts we had written off completely.",
    },
    {
      "@type": "Review",
      author: { "@type": "Organization", name: "Home Utility" },
      reviewRating: { "@type": "Rating", ratingValue: "4.4", bestRating: "5" },
      reviewBody:
        "Leviathan Sellers set up our entire Amazon account from scratch and made the process completely stress-free. Their pricing strategy guidance helped us position our listings correctly from day one.",
    },
  ],
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5 text-[#F97316]"
      aria-label={`Rated ${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-lg" aria-hidden="true">
          {i < Math.floor(rating) ? "★" : i < rating ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-1.5 text-sm font-semibold text-[#64748B]">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default async function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationReviewsJsonLd).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FED7AA] bg-[#FFF7ED] px-3 py-1 text-xs font-semibold text-[#EA580C]">
                ⚡ 2025 Policy Update — 60-day claim window now active
              </span>
              <h1
                id="hero-title"
                className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-[#0F172A] lg:text-6xl"
              >
                Recover Every Dollar Amazon Owes You{" "}
                <span className="text-[#F97316]">
                  Before the 60-Day Clock Runs Out.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#475569]">
                Most FBA sellers silently lose 1–3% of annual revenue to
                reimbursable discrepancies they never claim. Amazon&apos;s 2025
                policy changes slashed the claim window to just 60 days and
                switched reimbursements to manufacturing cost — making expert
                daily auditing essential.
              </p>
              <aside className="mt-6 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-4 text-sm text-[#92400E]">
                ⚠️ 2025–2026 Amazon Policy Alert: Reimbursements now paid at
                manufacturing cost, not selling price. Without accurate cost
                documentation filed within 60 days, sellers routinely receive
                20–50% less than they&apos;re legally owed.
              </aside>
              <nav
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                aria-label="Hero calls to action"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F97316] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
                >
                  Get Free Audit <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-7 py-4 text-base font-semibold text-[#374151] transition-colors hover:border-[#F97316] hover:text-[#F97316]"
                >
                  Explore Services <span aria-hidden>→</span>
                </Link>
              </nav>
              <p className="mt-6 text-sm text-[#94A3B8]">
                No upfront fees · Performance-based · 60-day claim expertise
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <HeroDashboard />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats trust bar */}
      <section aria-labelledby="stats-title" className="bg-[#F8F9FA] py-12">
        <h2 id="stats-title" className="sr-only">
          Leviathan Sellers audit statistics
        </h2>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center gap-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:flex lg:flex-row lg:gap-0">
              {trustStats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && (
                    <div
                      className="hidden h-12 w-px bg-[#E2E8F0] lg:block"
                      aria-hidden
                    />
                  )}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#0F172A]">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-[#64748B]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem */}
      <section aria-labelledby="problem-title" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                The problem
              </p>
              <h2
                id="problem-title"
                className="mb-4 text-3xl font-bold text-[#0F172A] lg:text-4xl"
              >
                Most FBA Sellers Are Leaving Money on the Table
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#64748B]">
                Amazon only fixes discrepancies if you identify and claim them
                within 60 days. After that window closes, the money is gone
                permanently.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {problemCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-7">
                  <span className="text-3xl" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[#0F172A]">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#64748B]">
                    {card.body}
                  </p>
                  <p className="mt-5 text-2xl font-bold text-[#F97316]">
                    {card.stat}
                  </p>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    {card.statLabel}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Process
              </p>
              <h2
                id="how-title"
                className="text-3xl font-bold text-[#0F172A] lg:text-4xl"
              >
                How Leviathan Sellers Works
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {howSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 80}>
                <article className="rounded-2xl border border-[#E2E8F0] bg-white p-8">
                  <p className="text-5xl font-bold text-[#F97316]/20">
                    {step.step}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#64748B]">
                    {step.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section aria-labelledby="services-title" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Services
              </p>
              <h2
                id="services-title"
                className="text-3xl font-bold text-[#0F172A] lg:text-4xl"
              >
                Everything Your FBA Account Needs
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceCards.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <article className="group rounded-2xl border border-[#E2E8F0] p-8 transition-all duration-200 hover:border-[#F97316] hover:shadow-lg hover:shadow-orange-50">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF7ED] text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F172A]">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#64748B]">
                    {service.body}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex text-sm font-medium text-[#F97316] transition hover:text-[#EA6D0A]"
                  >
                    Learn more →
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section aria-labelledby="blog-preview-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                  Insights
                </p>
                <h2
                  id="blog-preview-title"
                  className="text-3xl font-bold text-[#0F172A] lg:text-4xl"
                >
                  Learn from our FBA experts
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden shrink-0 items-center gap-1 text-sm font-medium text-[#F97316] transition hover:text-[#EA580C] sm:inline-flex"
              >
                All articles →
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 transition-all duration-200 hover:border-[#F97316] hover:shadow-lg hover:shadow-orange-50"
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
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blog"
                className="text-sm font-medium text-[#F97316] transition hover:text-[#EA580C]"
              >
                View all articles →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dashboard section */}
      <section
        aria-labelledby="real-results-title"
        className="bg-[#F8F9FA] py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Proof
              </p>
              <h2
                id="real-results-title"
                className="mb-4 text-3xl font-bold text-[#0F172A] lg:text-4xl"
              >
                Real results. Real data.
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#64748B]">
                We audit every shipment, track every discrepancy, and file every
                claim before the 60-day window closes. No exceptions. The numbers
                below are what that commitment produces.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ReconciliationDashboard />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-title" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Testimonials
              </p>
              <h2
                id="testimonials-title"
                className="text-3xl font-bold text-[#0F172A] lg:text-4xl"
              >
                What FBA Sellers Say About Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.company} delay={i * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-7">
                  <StarRating rating={t.rating} />
                  <blockquote className="mt-4 flex-1 text-sm leading-7 text-[#64748B]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5">
                    <p className="font-semibold text-[#0F172A]">{t.company}</p>
                    <p className="mt-0.5 text-xs text-[#94A3B8]">
                      {t.category}
                    </p>
                  </div>
                  {"sourceUrl" in t && t.sourceUrl ? (
                    <a
                      href={t.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-xs font-medium text-[#94A3B8] transition hover:text-[#F97316]"
                    >
                      {t.sourceLabel} ↗
                    </a>
                  ) : null}
                  <p className="mt-3 rounded-lg bg-[#FFF7ED] px-3 py-2 text-xs font-semibold text-[#EA580C]">
                    ✓ {t.result}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                FAQ
              </p>
              <h2
                id="faq-title"
                className="text-3xl font-bold text-[#0F172A] lg:text-4xl"
              >
                Common Questions from FBA Sellers
              </h2>
            </div>
            <FaqJsonLd faqs={homeFaqs} />
            <FaqAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-title" className="bg-[#0F172A] py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="cta-title"
              className="text-3xl font-bold text-white lg:text-4xl"
            >
              Find Out What Amazon Owes You
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[#94A3B8]">
              A free, no-obligation audit reveals exactly what&apos;s recoverable
              in your account. Takes minutes to set up. Results within 48–72
              hours. No risk.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
            >
              Get Your Free Audit <span aria-hidden>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
