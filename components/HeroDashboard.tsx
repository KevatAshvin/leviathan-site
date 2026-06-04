"use client";

import dynamic from "next/dynamic";

const ReconciliationDashboard = dynamic(
  () => import("@/components/ReconciliationDashboard"),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-80 animate-pulse rounded-xl bg-[#F8F9FA]"
        aria-hidden
      />
    ),
  },
);

export default function HeroDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xl shadow-black/5">
      <ReconciliationDashboard compact />
    </div>
  );
}
