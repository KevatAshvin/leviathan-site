import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing Leviathan Sellers' Amazon FBA reconciliation, account management, and product research services, including performance-based pricing.",
  alternates: {
    canonical: "/terms-of-service",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#0F172A]">
          Terms of Service
        </h1>
        <p className="mt-6 leading-8 text-[#374151]">
          Service scope, pricing, and deliverables are agreed in writing with each
          client. Reconciliation fees are performance-based unless otherwise
          specified. Contact service@leviathansellers.com for full contractual terms.
        </p>
      </div>
    </main>
  );
}
