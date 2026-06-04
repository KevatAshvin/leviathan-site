/** Pre-aggregated metrics only — no SKUs, titles, ASINs, or publisher identifiers. */

export const kpiTotals = [
  {
    label: "Total Shipped Qty",
    value: 111_605,
    subtitle: "Aggregated outbound volume",
    iconKey: "truck" as const,
    accentClass: "text-sky-400 shadow-sky-500/20 ring-sky-500/25",
    glowFrom: "from-sky-500/25",
  },
  {
    label: "Receipts Verified",
    value: 104_361,
    subtitle: "Matched against manifests",
    iconKey: "check" as const,
    accentClass: "text-emerald-400 shadow-emerald-500/20 ring-emerald-500/25",
    glowFrom: "from-emerald-500/25",
  },
  {
    label: "Customer Returns",
    value: 4_141,
    subtitle: "Return pipeline volume",
    iconKey: "return" as const,
    accentClass: "text-amber-400 shadow-amber-500/20 ring-amber-500/25",
    glowFrom: "from-amber-500/25",
  },
  {
    label: "Anomalies Detected",
    value: 717,
    subtitle: "Flagged for reconciliation",
    iconKey: "alert" as const,
    accentClass: "text-rose-400 shadow-rose-500/25 ring-rose-500/30",
    glowFrom: "from-rose-500/30",
  },
];

export const volumeChartData = {
  labels: ["Shipped Qty", "Verified Receipts", "Customer Shipments", "Customer Returns"],
  values: [111_605, 104_361, 92_334, 4_141],
};

export const statusChartData = {
  labels: ["OK", "In Transit", "Need to check", "Warehouse Transfers", "Case Raised"],
  values: [7_577, 394, 311, 211, 6],
};

export const auditLedger = [
  {
    event: "Lost Inventory Items",
    impact: "-631 units",
    severity: "High Risk" as const,
    indicator: "Investigation Needed",
  },
  {
    event: "Damaged Items",
    impact: "-65 units",
    severity: "Medium Risk" as const,
    indicator: "Pending Reimbursement",
  },
  {
    event: "Disposed Items",
    impact: "-21 units",
    severity: "Low Risk" as const,
    indicator: "Settled / Auto-Closed",
  },
];

export type NavItemKey = "overview" | "flow" | "audits";

export const navItems: { key: NavItemKey; label: string; iconKey: "layout" | "flow" | "audit" }[] =
  [
    { key: "overview", label: "Overview", iconKey: "layout" },
    { key: "flow", label: "Inventory Flow", iconKey: "flow" },
    { key: "audits", label: "Audits & Status", iconKey: "audit" },
  ];
