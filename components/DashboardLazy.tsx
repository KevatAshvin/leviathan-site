"use client";

import dynamic from "next/dynamic";

// Recharts is heavy. Load the full reconciliation dashboard only on the client,
// after initial paint, so it never blocks the homepage's first load.
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

export default function DashboardLazy() {
  return <ReconciliationDashboard />;
}
