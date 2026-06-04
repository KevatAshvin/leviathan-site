"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DashboardData {
  meta: {
    generatedAt: string;
    totalSKUs: number;
    dataSpan: string;
    marketplace: string;
    category?: string;
  };
  financials: {
    avgManufacturingCostPerUnit: number;
    avgSellingPricePerUnit: number;
    totalReimbursedValueUSD: number;
    totalGRValueUSD: number;
    totalRecoveredValueUSD: number;
    potentialMissedIfUnmanaged: number;
    currencyNote: string;
  };
  summary: {
    unitsShipped: number;
    unitsReceived: number;
    discrepancy: number;
    customerShipments: number;
    customerReturns: number;
    reimbursedQty: number;
    grQty: number;
    unitsFound: number;
    unitsLost: number;
    unitsDamaged: number;
    unitsDisposed: number;
    warehouseTransfers: number;
    endingWarehouseBalance: number;
  };
  statusBreakdown: {
    reconciledOK: number;
    needToCheck: number;
    systemFlag: number;
    inTransit: number;
  };
  conditionMix: {
    new: number;
    used: number;
    likeNew: number;
    damaged: number;
  };
  yearly: YearRow[];
  monthly: MonthRow[];
}

interface YearRow {
  year: string;
  skus: number;
  shipped: number;
  received: number;
  receiveRate: number;
  reimbursed: number;
  lost: number;
  returns: number;
  found: number;
  reconciledOK: number;
  needToCheck: number;
  systemFlag: number;
  note?: string;
}

interface MonthRow {
  month: string;
  label: string;
  skus: number;
  shipped: number;
  received: number;
  receiveRate: number;
  reimbursed: number;
  lost: number;
  damaged: number;
  returns: number;
  found: number;
  reconciledOK: number;
  needToCheck: number;
  inTransit?: boolean;
}

const BRAND = "#f97316";
const SHIPPED_BAR = "#E2E8F0";
const LINE_COLOR = "#2563EB";
const GRID_COLOR = "rgba(0,0,0,0.06)";
const AXIS_COLOR = "#94A3B8";

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

function pct(n: number, total: number) {
  return ((n / total) * 100).toFixed(1);
}

function ChartTooltip({
  active,
  payload,
  label,
  avgManufacturingCostPerUnit = 3.85,
}: {
  active?: boolean;
  payload?: Array<{ name?: string; value?: number; color?: string; payload?: MonthRow }>;
  label?: string;
  avgManufacturingCostPerUnit?: number;
}) {
  if (!active || !payload?.length) return null;
  const row = payload[0]?.payload as MonthRow | undefined;
  const discrepancy = row ? row.shipped - row.received : 0;

  return (
    <div className="rounded-lg bg-[#0F172A] px-4 py-3 text-sm text-white shadow-xl">
      <p className="mb-2 font-semibold">{label}</p>
      {row && (
        <ul className="space-y-1 text-slate-300">
          <li>Shipped: {fmt(row.shipped)}</li>
          <li>Received: {fmt(row.received)}</li>
          <li>Discrepancy: {fmt(discrepancy)}</li>
          <li>Reimb claims: {fmt(row.reimbursed)}</li>
          <li className="font-semibold text-[#F97316]">
            ≈ ${fmt(Math.round(row.reimbursed * avgManufacturingCostPerUnit))} reimb.
            value
          </li>
          <li>Lost units: {fmt(row.lost)}</li>
          {"receiveRate" in row && (
            <li>Receive rate: {row.receiveRate.toFixed(1)}%</li>
          )}
        </ul>
      )}
    </div>
  );
}

function YearlyTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ name?: string; value?: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg bg-[#0F172A] px-4 py-3 text-sm text-white shadow-xl">
      <p className="mb-2 font-semibold">{label}</p>
      <ul className="space-y-1 text-slate-300">
        {payload.map((entry) => (
          <li key={entry.name}>
            {entry.name}: {fmt(entry.value ?? 0)}
          </li>
        ))}
      </ul>
    </div>
  );
}

const INVENTORY_COLORS = [
  "#f97316",
  "#fb923c",
  "#fdba74",
  "#22c55e",
  "#ef4444",
  "#3b82f6",
  "#f59e0b",
  "#94a3b8",
];

const CONDITION_COLORS = ["#f97316", "#fb923c", "#22c55e", "#ef4444"];

type YearFilter = "all" | "2024" | "2025" | "2026";

export default function ReconciliationDashboard({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [view, setView] = useState<"monthly" | "yearly">("monthly");
  const [activeYear, setActiveYear] = useState<YearFilter>("all");
  const animate = true;

  useEffect(() => {
    fetch("/data/dashboard-data.json")
      .then((res) => res.json())
      .then((json: DashboardData) => setData(json))
      .catch(() => setData(null));
  }, []);

  const chartMonthly = useMemo(() => {
    if (!data) return [];
    let rows = data.monthly.filter((m) => !m.inTransit);
    if (activeYear !== "all") {
      rows = rows.filter((m) => m.month.startsWith(activeYear));
    }
    return rows;
  }, [data, activeYear]);

  if (!data) {
    return (
      <div
        className="h-96 animate-pulse rounded-xl bg-[#F8F9FA]"
        aria-hidden
      />
    );
  }

  const { meta, financials, summary, statusBreakdown, conditionMix, yearly } = data;
  const totalSKUs = meta.totalSKUs;
  const reconciledPct = pct(statusBreakdown.reconciledOK, totalSKUs);

  const statusItems = [
    { label: "Reconciled OK", count: statusBreakdown.reconciledOK, color: "#22c55e" },
    { label: "In transit", count: statusBreakdown.inTransit, color: "#3b82f6" },
    { label: "Need to check", count: statusBreakdown.needToCheck, color: "#f59e0b" },
    { label: "System flag", count: statusBreakdown.systemFlag, color: "#ef4444" },
  ];

  const inventoryEvents = [
    { name: "Customer sales", value: summary.customerShipments },
    { name: "Customer returns", value: summary.customerReturns },
    { name: "Units found", value: summary.unitsFound },
    { name: "Reimbursed", value: summary.reimbursedQty },
    { name: "Lost", value: summary.unitsLost },
    { name: "Warehouse transfers", value: summary.warehouseTransfers },
    { name: "Damaged", value: summary.unitsDamaged },
    { name: "Disposed", value: summary.unitsDisposed },
  ];

  const conditionData = [
    { name: "New", value: conditionMix.new },
    { name: "Used", value: conditionMix.used },
    { name: "Like New", value: conditionMix.likeNew },
    { name: "Damaged", value: conditionMix.damaged },
  ];

  const conditionTotal = conditionData.reduce((s, d) => s + d.value, 0);

  return (
    <div className={`${compact ? "space-y-3 p-4 sm:p-5" : "space-y-6"}`}>
      <div
        className={`flex sm:flex-row sm:items-start sm:justify-between ${
          compact ? "items-start justify-between gap-2" : "flex-col gap-4"
        }`}
      >
        <div className="min-w-0">
          <h3
            className={`font-semibold text-[#0F172A] ${
              compact ? "text-xs" : "text-sm"
            }`}
          >
            Live reconciliation data
          </h3>
          <p
            className={`text-[#64748B] ${
              compact
                ? "mt-0.5 whitespace-nowrap text-[10px]"
                : "mt-1 text-xs"
            }`}
          >
            {meta.dataSpan} · {meta.marketplace}
          </p>
        </div>
        <div
          className={
            compact
              ? "flex shrink-0 flex-col items-end gap-1.5"
              : "flex flex-col items-start gap-3 sm:items-end"
          }
        >
          <div className="flex shrink-0 gap-1">
            {(["monthly", "yearly"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={`rounded-full font-semibold capitalize transition ${
                  compact ? "px-2.5 py-0.5 text-[10px]" : "px-4 py-1.5 text-xs"
                } ${
                  view === v
                    ? "bg-[#F97316] text-white"
                    : "border border-[#E2E8F0] bg-[#F8F9FA] text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          {(!compact && view === "monthly") && (
            <div className="flex flex-wrap gap-1.5">
              {(["all", "2024", "2025", "2026"] as const).map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setActiveYear(y)}
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition ${
                    activeYear === y
                      ? "border border-[#FED7AA] bg-[#FFF7ED] text-[#EA580C]"
                      : "border border-[#E2E8F0] bg-[#F8F9FA] text-[#94A3B8] hover:text-[#64748B]"
                  }`}
                >
                  {y === "all" ? "All" : y}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className={`grid ${
          compact ? "grid-cols-3 gap-1.5" : "grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6"
        }`}
      >
        {[
          {
            label: "Units shipped",
            value: fmt(summary.unitsShipped),
            sub: "Over 2-year period",
            highlight: false,
          },
          {
            label: "Claims filed",
            value: fmt(summary.reimbursedQty),
            sub: `+ ${fmt(summary.grQty)} GR claims`,
            highlight: false,
          },
          {
            label: "Units recovered",
            value: fmt(summary.unitsFound),
            sub: "Returned to stock",
            highlight: false,
          },
          {
            label: "Reconciled OK",
            value: `${reconciledPct}%`,
            sub: `${fmt(statusBreakdown.reconciledOK)} of ${fmt(totalSKUs)} SKUs`,
            highlight: false,
          },
          {
            label: "$ Reimbursed",
            value: `$${fmt(financials.totalReimbursedValueUSD)}`,
            sub: "Cash recovered from Amazon",
            highlight: true,
          },
          {
            label: "$ Total recovered",
            value: `$${fmt(financials.totalRecoveredValueUSD)}`,
            sub: "Reimb + units found value",
            highlight: true,
          },
        ].map((card) => (
          <div
            key={card.label}
            className={`min-w-0 overflow-hidden border border-[#E2E8F0] bg-[#F8F9FA] ${
              compact ? "rounded-lg p-2" : "rounded-xl p-3 sm:p-4"
            }`}
          >
            <p
              className={`font-semibold uppercase tracking-wide leading-tight text-[#64748B] ${
                compact ? "text-[8px]" : "text-[10px]"
              }`}
            >
              {card.label}
            </p>
            <p
              className={`font-bold leading-tight ${
                compact ? "mt-1 text-[11px]" : "mt-2 text-sm sm:text-base lg:text-lg"
              } ${card.highlight ? "text-[#F97316]" : "text-[#0F172A]"}`}
            >
              {card.value}
            </p>
            <p
              className={`leading-snug text-[#64748B] ${
                compact ? "mt-0.5 text-[8px] leading-tight" : "mt-0.5 text-[10px]"
              }`}
            >
              {card.sub}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`rounded-xl border border-[#E2E8F0] bg-white ${
          compact ? "p-2" : "p-4 sm:p-5"
        }`}
      >
        <ResponsiveContainer width="100%" height={compact ? 180 : 320}>
          {view === "monthly" ? (
            <ComposedChart
              data={chartMonthly}
              margin={{ top: 8, right: 16, left: 0, bottom: 0 }}
            >
              <CartesianGrid stroke={GRID_COLOR} vertical={false} />
              <XAxis
                dataKey="label"
                tick={{ fill: AXIS_COLOR, fontSize: 10 }}
                axisLine={{ stroke: "#E2E8F0" }}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: AXIS_COLOR, fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => fmt(v)}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[60, 105]}
                tick={{ fill: AXIS_COLOR, fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                content={
                  <ChartTooltip
                    avgManufacturingCostPerUnit={
                      financials.avgManufacturingCostPerUnit
                    }
                  />
                }
              />
              <Legend wrapperStyle={{ color: AXIS_COLOR, fontSize: 11, paddingTop: 8 }} />
              <Bar
                yAxisId="left"
                dataKey="shipped"
                name="Shipped"
                fill={SHIPPED_BAR}
                radius={[3, 3, 0, 0]}
                isAnimationActive={animate}
              />
              <Bar
                yAxisId="left"
                dataKey="received"
                name="Received"
                fill={BRAND}
                radius={[3, 3, 0, 0]}
                isAnimationActive={animate}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="receiveRate"
                name="Receive rate %"
                stroke={LINE_COLOR}
                strokeWidth={2}
                dot={{ r: 3, fill: LINE_COLOR }}
                isAnimationActive={animate}
              />
            </ComposedChart>
          ) : (
            <ComposedChart
              data={yearly}
              margin={{
                top: 8,
                right: compact ? 32 : 16,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid stroke={GRID_COLOR} vertical={false} />
              <XAxis
                dataKey="year"
                tick={{ fill: AXIS_COLOR, fontSize: compact ? 9 : 11 }}
                axisLine={{ stroke: "#E2E8F0" }}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: AXIS_COLOR, fontSize: compact ? 9 : 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => fmt(v)}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: LINE_COLOR, fontSize: compact ? 9 : 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => fmt(v)}
              />
              <Tooltip content={<YearlyTooltip />} />
              <Legend wrapperStyle={{ color: AXIS_COLOR, fontSize: 11, paddingTop: 8 }} />
              <Bar
                yAxisId="left"
                dataKey="shipped"
                name="Shipped"
                fill={SHIPPED_BAR}
                radius={[3, 3, 0, 0]}
                isAnimationActive={animate}
              />
              <Bar
                yAxisId="left"
                dataKey="received"
                name="Received"
                fill={BRAND}
                radius={[3, 3, 0, 0]}
                isAnimationActive={animate}
              />
              <Bar
                yAxisId="right"
                dataKey="reimbursed"
                name="Reimbursed"
                fill={LINE_COLOR}
                radius={[3, 3, 0, 0]}
                isAnimationActive={animate}
              />
            </ComposedChart>
          )}
        </ResponsiveContainer>
        {view === "yearly" && !compact && (
          <p className="mt-3 text-xs text-[#94A3B8]">
            2026 figures are partial — Mar/Apr shipments are in transit.
          </p>
        )}
      </div>

      {/* Dollar Recovery Highlight Banner */}
      {!compact && (
        <div className="rounded-xl border border-[#FED7AA] bg-gradient-to-r from-[#FFF7ED] to-[#FFFBF7] p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                Financial Recovery Summary
              </p>
              <p className="mt-1 text-sm text-[#92400E]">{financials.currencyNote}</p>
            </div>
            <div className="flex flex-wrap gap-4 sm:shrink-0">
              <div className="text-center">
                <p className="text-2xl font-black text-[#F97316]">
                  ${fmt(financials.totalReimbursedValueUSD)}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#92400E]">
                  Amazon reimbursed
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-[#F97316]">
                  ${fmt(financials.totalGRValueUSD)}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#92400E]">
                  Units found value
                </p>
              </div>
              <div className="border-l border-[#FED7AA] pl-4 text-center">
                <p className="text-2xl font-black text-[#DC2626]">
                  ${fmt(financials.potentialMissedIfUnmanaged)}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#92400E]">
                  Would have been lost unmanaged
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!compact && view === "monthly" && (
        <div className="my-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { value: "24 months", label: "monitored" },
            { value: "93 batches", label: "shipments tracked" },
            { value: "Zero", label: "missed 60-day windows" },
            { value: "100%", label: "claim compliance" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#FED7AA] bg-[#FFF7ED] px-4 py-3 text-center"
            >
              <div className="text-base font-bold text-[#EA580C]">{stat.value}</div>
              <div className="mt-0.5 text-xs leading-snug text-[#92400E]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {!compact && financials && (
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg bg-[#FFF7ED] px-4 py-2.5 text-center text-sm">
          <span className="font-semibold text-[#92400E]">This account:</span>
          <span>
            <strong className="text-[#F97316]">
              ${fmt(financials.totalReimbursedValueUSD)}
            </strong>
            <span className="ml-1 text-[#92400E]">reimbursed by Amazon</span>
          </span>
          <span className="text-[#FED7AA]">·</span>
          <span>
            <strong className="text-[#F97316]">
              ${fmt(financials.totalRecoveredValueUSD)}
            </strong>
            <span className="ml-1 text-[#92400E]">total value recovered</span>
          </span>
          <span className="text-[#FED7AA]">·</span>
          <span>
            <strong className="text-[#DC2626]">
              ${fmt(financials.potentialMissedIfUnmanaged)}
            </strong>
            <span className="ml-1 text-[#92400E]">would have been lost</span>
          </span>
        </div>
      )}

      {!compact && (
        <>
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-6">
            <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">
              SKU status breakdown
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statusItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-semibold text-[#0F172A]">
                      {item.label}
                    </span>
                    <span className="text-sm text-[#64748B]">
                      {pct(item.count, totalSKUs)}%
                    </span>
                  </div>
                  <p className="mt-0.5 text-lg font-bold text-[#0F172A]">
                    {fmt(item.count)}
                  </p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#F1F5F9]">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(item.count / totalSKUs) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-6">
              <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">
                Inventory events
              </h4>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={inventoryEvents}
                  layout="vertical"
                  margin={{ top: 0, right: 16, left: 8, bottom: 0 }}
                >
                  <CartesianGrid stroke={GRID_COLOR} horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fill: AXIS_COLOR, fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => fmt(v)}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={120}
                    tick={{ fill: AXIS_COLOR, fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0F172A",
                      border: "none",
                      borderRadius: 8,
                      color: "#fff",
                    }}
                    formatter={(value) => [fmt(Number(value ?? 0)), "Units"]}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} isAnimationActive={animate}>
                    {inventoryEvents.map((_, i) => (
                      <Cell
                        key={i}
                        fill={INVENTORY_COLORS[i % INVENTORY_COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-6">
              <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">
                Condition mix
              </h4>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={conditionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    isAnimationActive={animate}
                  >
                    {conditionData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={CONDITION_COLORS[i % CONDITION_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0F172A",
                      border: "none",
                      borderRadius: 8,
                      color: "#fff",
                    }}
                    formatter={(value, name) => [
                      `${fmt(Number(value ?? 0))} (${pct(Number(value ?? 0), conditionTotal)}%)`,
                      String(name),
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-xs text-[#64748B]">
                {conditionData.map((item, i) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: CONDITION_COLORS[i] }}
                    />
                    {item.name}: {fmt(item.value)} ({pct(item.value, conditionTotal)}%)
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#DC2626]">
                Before (Unmanaged)
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-[#64748B]">
                <li>{fmt(summary.discrepancy)} unit discrepancy — undetected</li>
                <li>{fmt(summary.unitsLost)} lost units — no claims filed</li>
                <li>{fmt(statusBreakdown.needToCheck)} SKUs with unresolved issues</li>
                <li className="font-bold text-[#DC2626]">
                  ${fmt(financials.potentialMissedIfUnmanaged)} lost permanently
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#16A34A]">
                After (Leviathan Sellers)
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-[#64748B]">
                <li>
                  {fmt(summary.discrepancy)} discrepancy — identified &amp; actioned
                </li>
                <li>
                  {fmt(summary.reimbursedQty)} reimbursement claims filed within 60
                  days
                </li>
                <li>{fmt(summary.unitsFound)} units found &amp; returned to stock</li>
                <li>+{fmt(summary.grQty)} GR units recovered on top</li>
                <li className="font-bold text-[#16A34A]">
                  ${fmt(financials.totalRecoveredValueUSD)} total value recovered
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {!compact && (
        <p className="mt-4 text-center text-xs text-[#94A3B8]">
          Dollar estimates based on avg manufacturing cost of $
          {financials.avgManufacturingCostPerUnit}/unit for Amazon reimbursements. Units
          found valued at avg selling price of ${financials.avgSellingPricePerUnit}/unit.
          Actual recovery amounts vary by account, product category, and Amazon&apos;s
          valuation at time of claim.
        </p>
      )}
    </div>
  );
}
