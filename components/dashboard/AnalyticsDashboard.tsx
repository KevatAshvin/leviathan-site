"use client";

import {
  AlertTriangle,
  BarChart3,
  ClipboardCheck,
  LayoutDashboard,
  Menu,
  Package,
  PanelLeftClose,
  RefreshCw,
  Shield,
  Truck,
  Waves,
  X,
} from "lucide-react";
import { useState } from "react";

import {
  auditLedger,
  kpiTotals,
  navItems,
  type NavItemKey,
} from "@/components/dashboard/dashboard-data";

import {
  OperationalVolumeChart,
  VerificationStatusChart,
} from "@/components/dashboard/DashboardCharts";

function formatInt(n: number) {
  return n.toLocaleString("en-US");
}

function KPIIcon({
  iconKey,
  className,
}: {
  iconKey: "truck" | "check" | "return" | "alert";
  className?: string;
}) {
  const common = className ?? "h-6 w-6";
  switch (iconKey) {
    case "truck":
      return <Truck className={common} aria-hidden />;
    case "check":
      return <ClipboardCheck className={common} aria-hidden />;
    case "return":
      return <RefreshCw className={common} aria-hidden />;
    default:
      return <AlertTriangle className={common} aria-hidden />;
  }
}

function NavIcon({ iconKey }: { iconKey: "layout" | "flow" | "audit" }) {
  switch (iconKey) {
    case "layout":
      return <LayoutDashboard className="h-4 w-4 shrink-0" aria-hidden />;
    case "flow":
      return <Waves className="h-4 w-4 shrink-0" aria-hidden />;
    default:
      return <BarChart3 className="h-4 w-4 shrink-0" aria-hidden />;
  }
}

function severityBadge(severity: (typeof auditLedger)[0]["severity"]) {
  switch (severity) {
    case "High Risk":
      return "bg-rose-500/15 text-rose-300 ring-rose-400/35";
    case "Medium Risk":
      return "bg-amber-500/15 text-amber-300 ring-amber-400/35";
    default:
      return "bg-emerald-500/12 text-emerald-300 ring-emerald-400/35";
  }
}

function SidebarContent({
  active,
  onSelect,
}: {
  active: NavItemKey;
  onSelect?: (key: NavItemKey) => void;
}) {
  return (
    <>
      <div className="flex items-center gap-3 px-3 py-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 via-slate-900 to-emerald-500/20 shadow-[0_0_28px_-4px_rgba(34,211,238,0.35)] ring-1 ring-cyan-500/30">
          <Package className="h-5 w-5 text-cyan-300" aria-hidden />
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold uppercase tracking-wider text-slate-500">
            Suite
          </p>
          <p className="truncate font-bold tracking-tight text-slate-100">
            LogiTrack AI
          </p>
        </div>
      </div>

      <nav aria-label="Workspace" className="mt-10 flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelect?.(item.key)}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? "bg-white/[0.07] text-white shadow-inner shadow-black/30 ring-1 ring-sky-500/35"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
              }`}
            >
              <NavIcon iconKey={item.iconKey} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl border border-slate-700/80 bg-gradient-to-br from-emerald-500/10 via-slate-900/90 to-slate-950 px-4 py-3 shadow-[0_0_32px_-8px_rgba(16,185,129,0.35)]">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-emerald-300/95">
          <Shield className="h-4 w-4 shrink-0" aria-hidden />
          Data Privacy Shield Active
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
          SKU &amp; ASIN identifiers are never displayed. Charts use pooled
          metrics only.
        </p>
      </div>
    </>
  );
}

type AnalyticsDashboardProps = {
  /** Set true only if this page has no outer fixed navbar (standalone full viewport). Default matches site layout under 4rem navbar. */
  fullViewport?: boolean;
};

export default function AnalyticsDashboard({ fullViewport = false }: AnalyticsDashboardProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [navActive, setNavActive] = useState<NavItemKey>("overview");

  const shellTop = fullViewport ? "top-0" : "top-16";
  const shellHeight = fullViewport ? "min-h-[100dvh]" : "min-h-[calc(100dvh-4rem)]";
  const sideHeight = fullViewport ? "h-full" : "h-[calc(100dvh-4rem)]";

  return (
    <div className={`relative ${shellHeight} w-full bg-slate-900 text-slate-100 antialiased`}>
      {/* Mobile sidebar overlay */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${shellTop} ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 z-[60] flex ${sideHeight} flex-col gap-8 border-r border-slate-800 bg-slate-950/98 p-4 pt-14 shadow-[4px_0_48px_-12px_rgba(15,118,227,0.15)] backdrop-blur-md transition-[transform,width] duration-300 ease-out lg:z-40 lg:pt-4 lg:translate-x-0 ${shellTop} ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-[min(288px,calc(100vw-48px))] ${sidebarCollapsed ? "lg:w-20 lg:px-3" : "lg:w-[260px]"}`}
        aria-label="Primary navigation"
      >
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="absolute right-4 top-24 rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-200 hover:bg-slate-800 lg:hidden"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5 shrink-0" />
        </button>
        {!sidebarCollapsed ? (
          <SidebarContent active={navActive} onSelect={setNavActive} />
        ) : (
          <div className="flex flex-1 flex-col items-center gap-4 pt-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-emerald-500/15 ring-1 ring-cyan-500/35">
              <Package className="h-5 w-5 text-cyan-300" aria-hidden />
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  title={item.label}
                  aria-label={item.label}
                  onClick={() => setNavActive(item.key)}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg transition ${
                    navActive === item.key
                      ? "bg-white/10 text-cyan-300 ring-1 ring-sky-500/40"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <NavIcon iconKey={item.iconKey} />
                </button>
              ))}
            </div>
            <div className="mt-auto rounded-lg bg-emerald-500/15 p-2 ring-1 ring-emerald-500/30">
              <Shield className="mx-auto h-5 w-5 text-emerald-300" aria-hidden />
            </div>
          </div>
        )}
      </aside>

      <div
        className={`transition-[padding] duration-300 ease-out ${
          sidebarCollapsed ? "lg:pl-20" : "lg:pl-[260px]"
        }`}
      >
        <header className="sticky top-0 z-30 border-b border-slate-800/90 bg-slate-900/90 px-4 py-4 shadow-lg shadow-black/20 backdrop-blur-xl sm:px-6 lg:px-8 lg:py-5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="-ml-1 inline-flex rounded-lg border border-slate-700 bg-slate-950 p-2 text-slate-200 hover:bg-slate-800 lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setSidebarCollapsed((c) => !c)}
                className="hidden rounded-lg border border-slate-700/80 bg-slate-950/80 p-2 text-slate-300 hover:border-sky-500/35 hover:bg-slate-900 lg:inline-flex"
                aria-expanded={!sidebarCollapsed}
                aria-label="Toggle sidebar width"
              >
                <PanelLeftClose
                  className={`h-5 w-5 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`}
                />
              </button>
              <div>
                <h1 className="text-xl font-black tracking-tight text-white sm:text-2xl lg:text-[1.65rem]">
                  Analytics Overview
                </h1>
                <p className="mt-0.5 max-w-xl text-xs text-slate-500 sm:text-sm">
                  Macro operational signals — sanitized for privacy-compliant
                  monitoring.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-65" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(34,211,238,0.85)] ring-2 ring-emerald-400/30" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300/95">
                  Live System Status
                </p>
                <p className="text-[11px] text-slate-500">Feeds updating</p>
              </div>
            </div>

          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pb-12">
          <section aria-labelledby="kpi-summary" className="mb-10">
            <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="kpi-summary" className="sr-only">
                KPI summary
              </h2>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-400/95">
                Key performance totals
              </p>
              <span className="text-[11px] text-slate-500">
                Aggregate · no line-item identifiers exposed
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {kpiTotals.map((kpi) => (
                <article
                  key={kpi.label}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br ${kpi.glowFrom} via-slate-950 to-slate-950 p-[1px] shadow-lg shadow-black/40`}
                >
                  <div className="rounded-2xl bg-slate-950/92 p-5 ring-1 ring-slate-800/80 backdrop-blur-sm transition group-hover:ring-slate-700">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/95 shadow-lg ring-2 ${kpi.accentClass}`}
                      >
                        <KPIIcon iconKey={kpi.iconKey} />
                      </div>
                    </div>
                    <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {kpi.label}
                    </p>
                    <p className="mt-2 font-mono text-3xl font-black tabular-nums tracking-tight text-white">
                      {formatInt(kpi.value)}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-500">
                      {kpi.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="charts-heading"
            className="grid gap-6 lg:grid-cols-3 lg:gap-8"
          >
            <div className="lg:col-span-2">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <h3
                  id="charts-heading"
                  className="flex items-center gap-2 text-lg font-bold text-white"
                >
                  <BarChart3 className="h-5 w-5 text-sky-400" aria-hidden />
                  Operational volumes
                </h3>
                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Bar · side by side
                </span>
              </div>
              <div className="h-[340px] rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-inner shadow-black/40 ring-1 ring-white/[0.03] lg:h-[380px]">
                <OperationalVolumeChart />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <LayoutDashboard className="h-5 w-5 text-emerald-400" aria-hidden />
                  Verification statuses
                </h3>
                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Doughnut
                </span>
              </div>
              <div className="flex h-[340px] flex-col rounded-2xl border border-slate-800 bg-slate-950 px-4 pb-6 pt-6 shadow-inner shadow-black/35 ring-1 ring-white/[0.03] lg:h-[380px]">
                <VerificationStatusChart />
              </div>
            </div>
          </section>

          <section
            aria-labelledby="audit-heading"
            className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_0_56px_-20px_rgba(56,189,248,0.18)] ring-1 ring-white/[0.04]"
          >
            <div className="flex flex-col gap-1 border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 id="audit-heading" className="text-lg font-black text-white">
                  Audit anomaly ledger
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Macro events only — SKU-level attribution withheld.
                </p>
              </div>
              <span className="inline-flex items-center rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-amber-200">
                Sensitive · sanitized view
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="px-6 py-4">
                      Event
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Impact
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Severity
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Indicator
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {auditLedger.map((row) => (
                    <tr
                      key={row.event}
                      className="transition hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-5 font-semibold text-slate-100">
                        {row.event}
                      </td>
                      <td className="px-6 py-5 font-mono text-slate-300">
                        {row.impact}
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${severityBadge(row.severity)}`}
                        >
                          {row.severity}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-slate-400">{row.indicator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
