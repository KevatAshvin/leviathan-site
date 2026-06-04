"use client";

import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ScrollReveal";

const ReconciliationDashboard = dynamic(
  () => import("@/components/ReconciliationDashboard"),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-96 animate-pulse rounded-2xl bg-[#F8F9FA]"
        aria-hidden
      />
    ),
  },
);

export default function ReconciliationDashboardSection() {
  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Proof
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#0F172A] lg:text-4xl">
              Real results. Real data.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#64748B]">
              Every number below comes from a real client account reconciled by
              Leviathan Sellers — no publisher names, no titles, just the audit
              trail that got their money back.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ReconciliationDashboard />
        </ScrollReveal>
      </div>
    </section>
  );
}
