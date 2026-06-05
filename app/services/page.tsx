import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const contactEmail = "service@leviathansellers.com";

export const metadata: Metadata = {
  title: "Amazon FBA Services — Reimbursement, Account Management & Research",
  description:
    "Expert Amazon FBA services: reimbursement recovery with manual filing, daily account health management, and data-driven product research. Serving sellers in US, UK, India and Canada. Free audit with no obligation.",
  keywords: [
    "amazon fba services",
    "fba reimbursement recovery service",
    "amazon account management service",
    "amazon product research service",
    "fba seller services uk",
    "amazon fba services india",
    "amazon fba services canada",
    "amazon seller central management",
    "fba reconciliation service",
    "amazon fba expert",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Amazon FBA Services — Reimbursement, Account Management & Research",
    description:
      "Expert Amazon FBA services: reimbursement recovery with manual filing, daily account health management, and data-driven product research. Serving sellers in US, UK, India and Canada. Free audit with no obligation.",
    url: "/services",
    siteName: "Leviathan Sellers",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon FBA Services — Reimbursement, Account Management & Research",
    description:
      "Expert Amazon FBA services: reimbursement recovery with manual filing, daily account health management, and data-driven product research. Serving sellers in US, UK, India and Canada. Free audit with no obligation.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    icon: "💰",
    title: "FBA Reconciliation & Reimbursement Recovery",
    body: "Daily auditing of every Seller Central transaction. We identify, document, and manually file every valid claim before the 60-day window closes — with full manufacturing-cost documentation as required by Amazon's 2025 policy.",
    items: [
      "Lost, damaged & missing inventory claims",
      "Return & reversal discrepancy recovery",
      "Fee overcharge identification & refiling",
      "Inbound shipment shortfall claims",
      "Removal & disposal error recovery",
      "Manufacturing cost documentation",
      "Monthly statements & denial appeals",
    ],
    pricing:
      "ℹ Pricing: 100% performance-based. Commission on recovered amounts only. Free audit with no obligation.",
    href: "/reconciliation",
  },
  {
    icon: "📊",
    title: "FBA Account Management",
    body: "Ongoing account health monitoring, IPI score optimisation, listing management, and performance analytics. We keep your FBA account healthy, compliant, and set up for growth.",
    items: [
      "IPI score monitoring & optimisation (target 550+)",
      "Storage limit management & capacity planning",
      "Listing health & suppression resolution",
      "Inventory replenishment strategy",
      "Account health dashboard & monthly reports",
      "Policy compliance monitoring",
      "New marketplace expansion support",
    ],
    pricing:
      "ℹ Pricing: Monthly retainer based on account size and scope. Contact us for a transparent quote.",
    href: "/fba-management",
  },
  {
    icon: "🔍",
    title: "Amazon Product Research",
    body: "Data-driven product discovery for Amazon US, UK and India. We analyse demand, competition, and margins to identify opportunities where the numbers justify the investment.",
    items: [
      "Keyword demand & trend analysis",
      "Competition depth & BSR assessment",
      "Landed cost & margin modelling",
      "Supplier identification & vetting support",
      "Review gap & differentiation opportunities",
      "US, UK & India marketplace analysis",
      "Launch strategy & keyword targeting",
    ],
    pricing:
      "ℹ Pricing: Per-project or monthly retainer. Contact us for a scope-based quote.",
    href: "/product-research",
  },
];

const steps = [
  {
    icon: "📧",
    title: "Fill in the Audit Form",
    body: "Takes 2 minutes. Tell us about your account and what you need help with.",
  },
  {
    icon: "🔒",
    title: "Grant Read-Only Access",
    body: "Invite Leviathan Sellers as a limited user in Seller Central. We cannot make changes or move funds.",
  },
  {
    icon: "📊",
    title: "Receive Your Audit",
    body: "We analyse your account and deliver a full report showing every recoverable discrepancy within 48-72 hours.",
  },
  {
    icon: "🚀",
    title: "We Start Recovering",
    body: "Upon your approval, we begin filing claims immediately — every day, before the 60-day window expires.",
  },
];

const differentiators = [
  {
    icon: "👥",
    title: "Personal Service, Not Automation",
    body: "Every account managed personally. No bulk automation, no bot-filed claims, no generic recommendations.",
  },
  {
    icon: "🌍",
    title: "US, UK and India Expertise",
    body: "We understand specific requirements of each Amazon marketplace. India-based sellers expanding internationally and international sellers entering Amazon India are both types of clients we have supported.",
  },
  {
    icon: "✅",
    title: "100% Amazon Terms Compliant",
    body: "Every action fully compliant with Amazon's current terms. No grey-hat methods, banned tools, or approaches that create account risk.",
  },
];

const comparisonRows = [
  ["Manufacturing cost documentation", "✓ Every claim", "✘ Not included", "Manual effort required"],
  ["Audit frequency", "Daily", "Weekly or less", "When you remember"],
  ["Denial appeals", "✓ Included", "✘ Limited or none", "Manual only"],
  ["60-day window compliance", "✓ Guaranteed", "Partial — often misses", "✘ Frequently missed"],
  ["Amazon TOS risk", "✓ Zero", "Some risk (bulk filing)", "Low"],
  ["Claim approval rate", "✓ 96%+", "~60%", "Varies widely"],
  ["Pricing model", "Performance-based only", "Monthly subscription", "Your time cost"],
  ["US, UK & India support", "✓ All three", "US primarily", "Depends on your knowledge"],
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-xs font-bold text-white">
      ✓
    </span>
  );
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.leviathansellers.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.leviathansellers.com/services" },
  ],
};

const servicesListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Amazon FBA Services by Leviathan Sellers",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "FBA Reconciliation & Reimbursement Recovery",
        url: "https://www.leviathansellers.com/reconciliation",
        description: "Daily Amazon FBA reconciliation with manual expert claim filing within the 60-day window.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "FBA Account Management",
        url: "https://www.leviathansellers.com/fba-management",
        description: "Daily IPI monitoring, listing health management, storage optimisation and inventory planning.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Amazon Product Research",
        url: "https://www.leviathansellers.com/product-research",
        description: "Data-driven product research for Amazon US, UK and India with margin modelling.",
      },
    },
  ],
};

type RelatedPost = { slug: string; category: string; title: string; description: string; readingTime: string; };

const blogHighlights: RelatedPost[] = [
  {
    slug: "amazon-fba-reimbursement-policy-2025",
    category: "FBA Policy",
    title: "Amazon FBA Reimbursement Policy Changes 2025",
    description: "Deep dive into the 60-day window, manufacturing-cost documentation, and how to file claims correctly under 2025 rules.",
    readingTime: "15 min read",
  },
  {
    slug: "fba-reimbursement-audit",
    category: "FBA Reimbursements",
    title: "How an FBA Reimbursement Audit Finds Lost Revenue",
    description: "Learn how systematic audits surface missing funds from lost, damaged, and mismanaged inventory.",
    readingTime: "11 min read",
  },
  {
    slug: "how-to-improve-amazon-ipi-score",
    category: "Account Health",
    title: "How to Improve Your Amazon IPI Score in 2025",
    description: "Raise your IPI, protect storage limits, and keep your FBA account healthy under 2025 Amazon policy pressure.",
    readingTime: "14 min read",
  },
  {
    slug: "settlement-reconciliation",
    category: "Settlement Reconciliation",
    title: "Why Amazon Settlement Reconciliation Matters",
    description: "A practical guide to settlement reconciliation — catch fees, credits, reimbursements, and adjustments before they disappear.",
    readingTime: "13 min read",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesListJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-white text-[#0F172A]">
        {/* Hero */}
        <section aria-labelledby="services-hero-title" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <nav aria-label="Breadcrumb" className="text-sm font-medium text-[#64748B]">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="transition hover:text-[#F97316]">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-[#94A3B8]">
                    ›
                  </li>
                  <li className="text-[#0F172A]">Services</li>
                </ol>
              </nav>
              <h1
                id="services-hero-title"
                className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
              >
                Amazon FBA Services. One Expert Team.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#475569]">
                Everything an FBA seller needs to recover reimbursements, protect
                account health, and grow profitably across Amazon marketplaces.
              </p>
              <nav className="mt-9 flex flex-col gap-3 sm:flex-row" aria-label="Services calls to action">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
                >
                  Get Free Audit →
                </Link>
                <Link
                  href="#services-detail"
                  className="inline-flex items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-7 py-4 font-semibold text-[#374151] transition-colors hover:border-[#F97316]"
                >
                  See All Services ↓
                </Link>
              </nav>
            </ScrollReveal>
          </div>
        </section>

        {/* Service cards */}
        <section
          id="services-detail"
          aria-labelledby="services-detail-title"
          className="bg-[#F8F9FA] py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Our Services
              </p>
              <h2
                id="services-detail-title"
                className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                Choose Your Starting Point
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#475569]">
                Each service is designed to work standalone or as part of a complete
                FBA management solution. Most clients start with the free audit.
              </p>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 80}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-colors hover:border-[#F97316]">
                    <div className="flex h-full flex-col p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF7ED] text-2xl">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-[#0F172A]">{service.title}</h3>
                      <p className="mt-4 leading-relaxed text-[#64748B]">
                        {service.body}
                      </p>
                      <ul className="mt-5 space-y-3 text-sm text-[#475569]">
                        {service.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <CheckIcon />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-4 text-sm leading-relaxed text-[#92400E]">
                        {service.pricing}
                      </p>
                      <Link
                        href={service.href}
                        className="mt-6 inline-flex text-sm font-medium text-[#F97316] transition hover:text-[#EA6D0A]"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Getting started timeline */}
        <section aria-labelledby="start-title" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                  Getting Started
                </p>
                <h2
                  id="start-title"
                  className="text-3xl font-bold text-[#0F172A] sm:text-4xl"
                >
                  Getting Started Takes Minutes
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#475569]">
                  Request a free audit and we&apos;ll tell you exactly what&apos;s
                  recoverable in your account — within 48 hours.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
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

        {/* Comparison table */}
        <section aria-labelledby="comparison-title" className="bg-[#F8F9FA] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Comparison
              </p>
              <h2
                id="comparison-title"
                className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                How We Compare to Automated Tools & Self-Filing
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white">
                <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                  <thead className="bg-[#F8F9FA]">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-semibold text-[#0F172A]">
                        Feature
                      </th>
                      <th scope="col" className="bg-[#FFF7ED] px-5 py-4 font-semibold text-[#0F172A]">
                        Leviathan Sellers
                      </th>
                      <th scope="col" className="px-5 py-4 font-semibold text-[#0F172A]">
                        Automated Tools
                      </th>
                      <th scope="col" className="px-5 py-4 font-semibold text-[#0F172A]">
                        Self-Filing
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {comparisonRows.map(([feature, leviathanSellersColumn, automated, self]) => (
                      <tr key={feature}>
                        <th
                          scope="row"
                          className="px-5 py-4 font-semibold text-[#0F172A]"
                        >
                          {feature}
                        </th>
                        <td className="bg-[#FFF7ED] px-5 py-4 font-semibold text-[#EA580C]">
                          {leviathanSellersColumn}
                        </td>
                        <td className="px-5 py-4 text-[#64748B]">{automated}</td>
                        <td className="px-5 py-4 text-[#64748B]">{self}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Differentiators */}
        <section aria-labelledby="why-title" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2
                id="why-title"
                className="max-w-3xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                What Makes Our Amazon FBA Services Different
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item, i) => (
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

        {/* Blog highlights */}
        <section aria-labelledby="services-blog-title" className="bg-[#F8F9FA] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                  Learn
                </p>
                <h2
                  id="services-blog-title"
                  className="text-3xl font-bold text-[#0F172A] lg:text-4xl"
                >
                  Expert FBA insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden shrink-0 text-sm font-medium text-[#F97316] transition hover:text-[#EA580C] sm:inline-flex items-center gap-1"
              >
                All articles →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {blogHighlights.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-200 hover:border-[#F97316] hover:shadow-lg hover:shadow-orange-50"
                >
                  <span className="inline-flex w-fit rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-semibold text-[#EA580C]">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-[#0F172A] transition-colors group-hover:text-[#F97316]">
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

        {/* CTA */}
        <section aria-labelledby="services-cta-title" className="bg-[#0F172A] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2
                id="services-cta-title"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Not Sure Which Service You Need?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
                Start with the free audit. We&apos;ll tell you exactly what&apos;s
                recoverable and which services would make the biggest impact on your
                account.
              </p>
              <nav className="mt-9 flex flex-col justify-center gap-3 sm:flex-row" aria-label="Services page final calls to action">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
                >
                  Get Free Audit
                </Link>
                <Link
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center justify-center rounded-xl border border-[#334155] px-7 py-4 font-semibold text-white transition-colors hover:border-[#F97316]"
                >
                  ✉ Email Us
                </Link>
              </nav>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
