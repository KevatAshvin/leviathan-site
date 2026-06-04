import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Leviathan Sellers",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#0F172A]">
          Privacy Policy
        </h1>
        <p className="mt-6 leading-8 text-[#374151]">
          We only use contact form details to respond to inquiries and provide
          requested services. We do not sell personal information. For data
          deletion or privacy requests, contact hello@leviathansellers.com.
        </p>
      </div>
    </main>
  );
}
