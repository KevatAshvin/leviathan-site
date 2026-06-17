import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "./ContactForm";

const contactEmail = "service@leviathansellers.com";
const contactNumber = "+91 92748 86403";
const whatsappUrl = "https://wa.me/919274886403";
const officeAddress = `K10, Near Genda Circle,
Vadodara, Gujarat 390007, India`;

export const metadata: Metadata = {
  title: "Get Your Free Amazon FBA Audit",
  description:
    "Request a free Amazon FBA account audit. Our expert team reviews your account within 48 hours — no obligation. Sellers in US, UK, India, Canada and EU welcome. WhatsApp available.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Get Your Free Amazon FBA Audit",
    description:
      "Request a free Amazon FBA account audit. Our expert team reviews your account within 48 hours — no obligation. Sellers in US, UK, India, Canada and EU welcome. WhatsApp available.",
    url: "/contact",
    siteName: "Leviathan Sellers",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Free Amazon FBA Audit",
    description:
      "Request a free Amazon FBA account audit. Our expert team reviews your account within 48 hours — no obligation. Sellers in US, UK, India, Canada and EU welcome. WhatsApp available.",
    images: ["/og-image.png"],
  },
};

const contactRows = [
  {
    icon: "✉",
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: "🕐",
    label: "Response Time",
    value: "Within 24 business hours (Mon–Fri)",
  },
  {
    icon: "🌍",
    label: "Marketplaces Covered",
    value:
      "US, UK, India, Canada, Germany, France, Italy, Spain, Australia",
  },
  {
    icon: "📍",
    label: "Office Address",
    value: officeAddress,
  },
  {
    icon: "💬",
    label: "WhatsApp / Contact",
    value: contactNumber,
    href: whatsappUrl,
  },
];

const freeItems = [
  "Full audit of all reimbursable discrepancies",
  "Estimated total recoverable amount",
  "Review of your current IPI score & account health",
  "Personalised action plan & service recommendation",
  "No obligation to continue — ever",
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Leviathan Sellers",
  url: "https://www.leviathansellers.com",
  email: "service@leviathansellers.com",
  telephone: "+919274886403",
  address: {
    "@type": "PostalAddress",
    streetAddress: "K10, Near Genda Circle",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390007",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3072,
    longitude: 73.1812,
  },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "Performance-based",
  description:
    "Expert Amazon FBA reimbursement recovery, account management and product research for sellers in US, UK, India and Canada.",
  areaServed: ["US", "GB", "IN", "CA", "DE", "FR", "AU"],
  knowsAbout: [
    "Amazon FBA Reimbursement Recovery",
    "FBA Reconciliation",
    "IPI Score Optimisation",
    "Amazon Product Research",
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-[#F8F9FA]">
        <section aria-labelledby="contact-title" className="bg-white py-24">
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
                  <li className="text-[#F97316]">Contact</li>
                </ol>
              </nav>
              <h1
                id="contact-title"
                className="mt-6 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
              >
                Get Your Free FBA Account Audit
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#64748B]">
                Fill in the form below and our expert team will review your account
                within 48 hours — completely free and with no obligation.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section aria-labelledby="contact-layout-title" className="py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <aside className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <h2
                    id="contact-layout-title"
                    className="text-2xl font-bold tracking-tight text-[#0F172A]"
                  >
                    Let&apos;s Find What Amazon Owes You
                  </h2>
                  <p className="mt-4 leading-7 text-[#64748B]">
                    Tell us about your account and we&apos;ll run a full free audit
                    and report back within 48-72 hours with a clear picture of
                    what&apos;s recoverable. No credit card. No commitment.
                  </p>
                </aside>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <aside className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <dl className="space-y-5">
                    {contactRows.map((row) => (
                      <div key={row.label} className="flex gap-4">
                        <dt className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED] text-lg">
                          {row.icon}
                        </dt>
                        <dd>
                          <p className="font-semibold text-[#0F172A]">{row.label}</p>
                          {row.href ? (
                            <a
                              href={row.href}
                              className="mt-1 block text-sm leading-6 text-[#64748B] hover:text-[#F97316]"
                              target={row.href.startsWith("http") ? "_blank" : undefined}
                              rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                              {row.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm leading-6 text-[#64748B]">
                              {row.value}
                            </p>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <section
                  aria-labelledby="free-box-title"
                  className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-6"
                >
                  <h3 id="free-box-title" className="text-xl font-bold text-[#0F172A]">
                    What You Get for Free
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[#374151]">
                    {freeItems.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="font-bold text-[#F97316]">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
