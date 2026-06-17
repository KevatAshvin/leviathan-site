import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const founderName = "Harishchandra Kevat";
const founderYear = "2023";
const founderCity = "Vadodara";
const founderCountry = "India";
const founderLocation = `${founderCity}, ${founderCountry}`;
const contactEmail = "service@leviathansellers.com";
const contactNumber = "+91 92748 86403";
const whatsappUrl = "https://wa.me/919274886403";
const officeAddress = `K10, Near Genda Circle,
Vadodara, Gujarat 390007, India`;

export const metadata: Metadata = {
  title: "Amazon FBA Experts — Vadodara, India",
  description:
    "Leviathan Sellers is an Amazon FBA services company founded in Vadodara, India. We help sellers in the US, UK, India and Canada recover FBA reimbursements, manage account health, and research winning products — with 100% manual expert filing.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Amazon FBA Experts — Vadodara, India",
    description:
      "Leviathan Sellers is an Amazon FBA services company founded in Vadodara, India. We help sellers in the US, UK, India and Canada recover FBA reimbursements, manage account health, and research winning products — with 100% manual expert filing.",
    url: "/about",
    siteName: "Leviathan Sellers",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon FBA Experts — Vadodara, India",
    description:
      "Leviathan Sellers is an Amazon FBA services company founded in Vadodara, India. We help sellers in the US, UK, India and Canada recover FBA reimbursements, manage account health, and research winning products — with 100% manual expert filing.",
    images: ["/og-image.png"],
  },
};

const glanceItems = [
  ["Founded", `${founderYear}, ${founderCity}`],
  ["Founder", founderName],
  ["Claim Filing", "Manual Only"],
  ["Amazon TOS", "✓ 100% Compliant"],
  ["Audit Frequency", "Daily"],
  ["Cost Documentation", "Every Claim"],
  ["Denial Appeals", "Included"],
  ["Reconciliation Price", "Performance-Based"],
];

const stats = [
  {
    value: "~96%",
    label:
      "Typical claim approval rate on audited client claims, vs ~60% for automated tools",
  },
  {
    value: "60",
    label: "Days — claim window we monitor every single day",
  },
  {
    value: "100%",
    label: "Amazon TOS compliant — zero grey-hat methods, ever",
  },
  {
    value: "48h",
    label: "Free audit turnaround — results, no obligation",
  },
];

const comparisonRows = [
  ["Manufacturing cost documentation", "✓ Every claim", "✘ Not included", "Manual effort required"],
  ["Audit frequency", "Daily", "Weekly or less", "When you remember"],
  ["Denial appeals", "✓ Included", "✘ Limited or none", "Manual only"],
  ["60-day window compliance", "✓ Guaranteed", "Partial — often misses", "✘ Frequently missed"],
  ["Amazon TOS risk", "✓ Zero", "Some risk (bulk filing)", "Low"],
  ["Claim approval rate", "✓ ~96% typical", "~60%", "Varies widely"],
  ["Pricing model", "Performance-based only", "Monthly subscription", "Your time cost"],
  ["US, UK & India support", "✓ All three", "US primarily", "Depends on your knowledge"],
];

const values = [
  {
    icon: "🔒",
    title: "Strict Compliance",
    body: "Every action follows Amazon's current TOS exactly. No grey-hat tools, no bulk automation, no shortcuts.",
  },
  {
    icon: "📊",
    title: "Data-Driven Precision",
    body: "Decisions based on transaction data, policy documentation, and Amazon's published standards.",
  },
  {
    icon: "🎯",
    title: "Performance Accountability",
    body: "Reconciliation is 100% performance-based. We are incentivised to maximise your recovery.",
  },
  {
    icon: "📋",
    title: "Full Transparency",
    body: "Monthly statements show every claim filed and its outcome. Nothing hidden.",
  },
  {
    icon: "🌍",
    title: "Global Expertise",
    body: "US, UK, India, Canada, EU — localised documentation, currency-aware claims, marketplace-specific knowledge.",
  },
  {
    icon: "👀",
    title: "Daily Vigilance",
    body: "The 60-day window means every day matters. We audit daily — never weekly.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harishchandra Kevat",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: "Leviathan Sellers",
    url: "https://www.leviathansellers.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/company/leviathansellers/"],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-white text-[#0F172A]">
        {/* Hero */}
        <section aria-labelledby="about-title" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <nav aria-label="Breadcrumb" className="text-sm font-semibold text-[#64748B]">
                <ol className="flex items-center justify-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-[#F97316]">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li className="text-[#F97316]">About</li>
                </ol>
              </nav>
              <h1
                id="about-title"
                className="mx-auto mt-6 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              >
                Real Experts. Real Results. Built for Amazon FBA Sellers.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#64748B]">
                Leviathan Sellers was founded in {founderYear} by {founderName} in{" "}
                {founderCity} — an Amazon FBA practitioner who experienced the
                reimbursement problem firsthand and built the solution they wished
                existed.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Founder */}
        <section aria-labelledby="founder-title" className="bg-[#F8F9FA] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2
                id="founder-title"
                className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                Who Is Behind Leviathan Sellers
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#64748B]">
                We are not a faceless agency. Leviathan Sellers was founded by a
                real person with real Amazon FBA experience — and we want you to know
                exactly who you&apos;re working with.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <article className="mt-10 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-[320px] bg-[#F8F9FA]">
                  <Image
                    src="/images/founder-harishchandra-kevat.png"
                    alt={`${founderName}, founder of Leviathan Sellers Amazon FBA service`}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-[#0F172A]">{founderName}</h3>
                  <p className="mt-2 font-semibold text-[#F97316]">
                    Founder & CEO — Leviathan Sellers
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#64748B]">
                    {founderLocation} · Founded {founderYear}
                  </p>
                  <blockquote className="mt-6 border-l-4 border-[#F97316] bg-[#FFF7ED] px-5 py-4 text-[#374151] italic leading-7">
                    &ldquo;Leviathan Sellers was built specifically for the post-2025
                    landscape. Every process — daily auditing, manufacturing cost
                    documentation, manual individual filing, active denial appeals —
                    was designed from scratch around what Amazon now requires.&rdquo;
                  </blockquote>
                  <p className="mt-6 leading-7 text-[#374151]">
                    I founded Leviathan Sellers in {founderYear} after working
                    closely with Amazon FBA sellers and seeing first-hand how much
                    money was being silently lost to unclaimed reimbursements, fee
                    overcharges, and IPI issues. When Amazon changed its
                    reimbursement policy in 2025 — cutting the claim window from 18
                    months to 60 days and switching to manufacturing cost — most
                    existing tools and services simply weren&apos;t built to handle
                    it correctly.
                  </p>
                  <p className="mt-4 leading-7 text-[#374151]">
                    We work with sellers on Amazon US, UK, India, Canada and EU, and
                    every claim is handled personally with full documentation.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={whatsappUrl}
                      className="inline-flex items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#374151] transition-colors hover:border-[#F97316] hover:text-[#F97316]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      💬 WhatsApp Us
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C]"
                    >
                      Get Free Audit →
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <aside className="mt-6 rounded-2xl border border-[#E2E8F0] bg-white p-6">
                <h3 className="text-xl font-bold text-[#0F172A]">📍 Office Address</h3>
                <address className="mt-4 space-y-2 not-italic text-[#64748B]">
                  <p>{officeAddress}</p>
                  <p>
                    <a href={`mailto:${contactEmail}`} className="hover:text-[#F97316]">
                      {contactEmail}
                    </a>
                  </p>
                  <p>
                    <a href={whatsappUrl} className="hover:text-[#F97316]">
                      WhatsApp / Contact: {contactNumber}
                    </a>
                  </p>
                </address>
              </aside>
            </ScrollReveal>
          </div>
        </section>

        {/* Philosophy / Mission */}
        <section aria-labelledby="mission-title" className="bg-[#F8F9FA] py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
            <ScrollReveal>
              <article>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                  Our philosophy
                </p>
                <h2
                  id="mission-title"
                  className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
                >
                  We Exist to Recover the Money Amazon Owes You.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#374151]">
                  Amazon&apos;s fulfillment system generates discrepancies at scale.
                  At the volume Amazon operates, a fraction of a percent in errors
                  means real money — your money — sitting in Amazon&apos;s account
                  instead of yours.
                </p>
                <p className="mt-4 text-lg leading-8 text-[#374151]">
                  Our mission: identify every discrepancy, file every valid claim
                  before it expires, document every case correctly under the current
                  manufacturing-cost policy, and appeal every denial. No shortcuts.
                  No automation that risks your account.
                </p>
                <p className="mt-4 text-lg leading-8 text-[#374151]">
                  We are an authorised Amazon Selling Partner. Every action we take
                  in your account is fully compliant with Amazon&apos;s current terms.
                  Your account health is never at risk from our work.
                </p>
                <Link
                  href="/reconciliation"
                  className="mt-8 inline-flex text-sm font-semibold text-[#F97316] hover:text-[#EA580C]"
                >
                  How Reconciliation Works →
                </Link>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <aside className="self-start rounded-2xl border border-[#E2E8F0] bg-white p-6">
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Leviathan Sellers at a Glance
                </h3>
                <dl className="mt-6 space-y-4">
                  {glanceItems.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-[#64748B]">{label}</dt>
                      <dd className="text-right font-semibold text-[#0F172A]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 rounded-xl bg-[#FFF7ED] p-4 text-sm leading-6 text-[#64748B]">
                  ℹ You pay only on what we actually recover. Free audit, no
                  obligation.
                </p>
              </aside>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section aria-labelledby="values-title" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                  What we stand for
                </p>
                <h2
                  id="values-title"
                  className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
                >
                  What We Stand For Every Day
                </h2>
              </div>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.slice(0, 4).map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 80}>
                  <article className="h-full rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-6">
                    <h3 className="text-lg font-semibold text-[#0F172A]">
                      <span className="mr-2" aria-hidden="true">{value.icon}</span>
                      {value.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[#64748B]">{value.body}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.slice(4).map((value, i) => (
                <ScrollReveal key={value.title} delay={(i + 4) * 80}>
                  <article className="h-full rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-6">
                    <h3 className="text-lg font-semibold text-[#0F172A]">
                      <span className="mr-2" aria-hidden="true">{value.icon}</span>
                      {value.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[#64748B]">{value.body}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section aria-labelledby="numbers-title" className="bg-[#F8F9FA] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2
                id="numbers-title"
                className="max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                Why Manual Expert Filing Outperforms Automation
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.value} delay={i * 80}>
                  <article className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                    <p className="text-4xl font-bold text-[#F97316]">
                      {stat.value}
                    </p>
                    <h3 className="mt-4 text-base font-medium text-[#374151]">{stat.label}</h3>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section aria-labelledby="comparison-title" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2
                id="comparison-title"
                className="max-w-4xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                How We Compare to Automated Tools & Self-Filing
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E2E8F0]">
                <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                  <thead className="bg-[#F8F9FA]">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-semibold text-[#0F172A]">
                        Feature
                      </th>
                      <th scope="col" className="bg-[#FFF7ED] px-5 py-4 font-semibold text-[#EA580C]">
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
                      <tr key={feature} className="bg-white">
                        <th
                          scope="row"
                          className="px-5 py-4 font-semibold text-[#0F172A]"
                        >
                          {feature}
                        </th>
                        <td className="bg-[#FFF7ED]/50 px-5 py-4 font-semibold text-[#EA580C]">
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

        {/* CTA */}
        <section aria-labelledby="cta-title" className="bg-[#0F172A] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2
                id="cta-title"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Work With a Team That Knows FBA Inside Out
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#94A3B8]">
                Start with the free audit. No risk, no obligation. Know exactly what
                Amazon owes you within 48 hours.
              </p>
              <nav className="mt-9 flex flex-col justify-center gap-3 sm:flex-row" aria-label="About page calls to action">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C]"
                >
                  Get Free Audit →
                </Link>
                <Link
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  ✉ {contactEmail}
                </Link>
              </nav>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
