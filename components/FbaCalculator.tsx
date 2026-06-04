"use client";

import { useMemo, useState } from "react";

type MarketplaceId = "us" | "uk" | "in";

type Category = {
  name: string;
  rate: number;
  minFee: number;
};

type DefaultValues = {
  price: number;
  cogs: number;
  l: number;
  w: number;
  h: number;
  wt: number;
};

type SizeTierResult = {
  tier: string;
  fee: number;
  dimW: number;
  billW: number;
};

type MarketplaceDef = {
  symbol: string;
  code: "USD" | "GBP" | "INR";
  dimUnit: string;
  wtUnit: string;
  storBlended: number;
  storCuDivisor: number;
  defaultValues: DefaultValues;
  categories: Category[];
  sizeTier: (l: number, w: number, h: number, wt: number) => SizeTierResult;
};

function sortDims(l: number, w: number, h: number) {
  const dims = [l, w, h].sort((a, b) => b - a);
  return { lon: dims[0], med: dims[1], sho: dims[2] };
}

function usSizeTier(l: number, w: number, h: number, wt: number): SizeTierResult {
  const dimW = (l * w * h) / 139;
  const billW = Math.max(wt, dimW);
  const { lon, med, sho } = sortDims(l, w, h);

  if (lon <= 15 && med <= 12 && sho <= 0.75 && wt <= 0.75) {
    return { tier: "Small Standard", fee: 3.22, dimW, billW };
  }

  if (lon <= 18 && med <= 14 && sho <= 8 && wt <= 20) {
    let fee: number;
    if (billW <= 1) fee = 4.75;
    else if (billW <= 2) fee = 5.4;
    else if (billW <= 3) fee = 6.1;
    else fee = 6.1 + (Math.ceil(billW) - 3) * 0.38;
    return { tier: "Large Standard", fee, dimW, billW };
  }

  if (lon <= 60 && med <= 30 && wt <= 70) {
    const fee = 9.73 + Math.max(0, billW - 1) * 0.42;
    return { tier: "Large Bulky", fee, dimW, billW };
  }

  if (billW <= 50) {
    const fee = 26.33 + Math.max(0, billW - 50) * 0.83;
    return { tier: "Extra-Large (≤50 lb)", fee, dimW, billW };
  }
  if (billW <= 70) {
    const fee = 33.39 + Math.max(0, billW - 70) * 0.83;
    return { tier: "Extra-Large (≤70 lb)", fee, dimW, billW };
  }
  const fee = 50.22 + Math.max(0, billW - 150) * 0.83;
  return { tier: "Extra-Large (>70 lb)", fee, dimW, billW };
}

function ukSizeTier(l: number, w: number, h: number, wt: number): SizeTierResult {
  const dimW = (l * w * h) / 5000;
  const billW = Math.max(wt, dimW);
  const wtG = wt * 1000;
  const { lon, med, sho } = sortDims(l, w, h);

  if (lon <= 33 && med <= 23 && sho <= 2.5 && wtG <= 100) {
    return { tier: "Small Envelope", fee: 1.71, dimW, billW };
  }
  if (lon <= 33 && med <= 23 && sho <= 2.5 && wtG <= 460) {
    return { tier: "Standard Envelope", fee: 2.23, dimW, billW };
  }
  if (lon <= 33 && med <= 23 && sho <= 3.2 && wtG <= 900) {
    return { tier: "Large Envelope", fee: 2.74, dimW, billW };
  }
  if (lon <= 35 && med <= 25 && sho <= 12 && wt <= 1) {
    return { tier: "Small Parcel", fee: 3.0, dimW, billW };
  }
  if (lon <= 45 && med <= 34 && sho <= 26 && wt <= 12) {
    const fee = 3.74 + Math.max(0, billW - 1) * 0.38;
    return { tier: "Standard Parcel", fee, dimW, billW };
  }
  if (lon <= 61 && med <= 46 && sho <= 46 && wt <= 23) {
    const fee = 5.21 + Math.max(0, billW - 2) * 0.4;
    return { tier: "Large Parcel", fee, dimW, billW };
  }
  const fee = 10.19 + Math.max(0, billW - 2) * 0.55;
  return { tier: "Extra-Large", fee, dimW, billW };
}

function inSizeTier(l: number, w: number, h: number, wt: number): SizeTierResult {
  const dimW = (l * w * h) / 5000;
  const billW = Math.max(wt, dimW);
  const wtG = wt * 1000;
  const { lon, med } = sortDims(l, w, h);

  if (wtG <= 500 && lon <= 30 && med <= 15) {
    return { tier: "Standard 0-500g", fee: 27, dimW, billW };
  }
  if (wt <= 1 && lon <= 45 && med <= 34) {
    return { tier: "Standard 500g-1kg", fee: 37, dimW, billW };
  }
  if (wt <= 2 && lon <= 45 && med <= 34) {
    const fee = 57 + Math.max(0, billW - 1) * 20;
    return { tier: "Standard 1-2kg", fee, dimW, billW };
  }
  if (wt <= 5 && lon <= 72 && med <= 44) {
    const fee = 76 + Math.max(0, billW - 2) * 13;
    return { tier: "Advanced 0-5kg", fee, dimW, billW };
  }
  if (wt <= 12) {
    const fee = 115 + Math.max(0, billW - 5) * 10;
    return { tier: "Advanced 5-12kg", fee, dimW, billW };
  }
  const fee = 195 + Math.max(0, billW - 12) * 8;
  return { tier: "Heavy & Bulky", fee, dimW, billW };
}

const MARKETPLACES: Record<MarketplaceId, MarketplaceDef> = {
  us: {
    symbol: "$",
    code: "USD",
    dimUnit: "in",
    wtUnit: "lb",
    storBlended: 1.63,
    storCuDivisor: 1728,
    defaultValues: { price: 29.99, cogs: 8, l: 10, w: 8, h: 4, wt: 1.5 },
    categories: [
      { name: "Most Categories", rate: 0.15, minFee: 0.3 },
      { name: "Electronics", rate: 0.08, minFee: 0.3 },
      { name: "Cameras & Photo", rate: 0.08, minFee: 0.3 },
      { name: "Personal Computers", rate: 0.06, minFee: 0.3 },
      { name: "Clothing & Accessories", rate: 0.15, minFee: 0.3 },
      { name: "Beauty & Health", rate: 0.17, minFee: 0.3 },
      { name: "Home & Kitchen", rate: 0.15, minFee: 0.3 },
      { name: "Toys & Games", rate: 0.15, minFee: 0.3 },
      { name: "Sports & Outdoors", rate: 0.15, minFee: 0.3 },
      { name: "Books", rate: 0.15, minFee: 0.3 },
      { name: "Pet Supplies", rate: 0.15, minFee: 0.3 },
      { name: "Tools & Home Improvement", rate: 0.15, minFee: 0.3 },
      { name: "Baby Products", rate: 0.15, minFee: 0.3 },
      { name: "Office Products", rate: 0.15, minFee: 0.3 },
      { name: "Automotive", rate: 0.12, minFee: 0.3 },
      { name: "Furniture", rate: 0.15, minFee: 0.3 },
    ],
    sizeTier: usSizeTier,
  },
  uk: {
    symbol: "£",
    code: "GBP",
    dimUnit: "cm",
    wtUnit: "kg",
    storBlended: 0.73,
    storCuDivisor: 28316.8,
    defaultValues: { price: 24.99, cogs: 6.5, l: 25, w: 20, h: 10, wt: 0.7 },
    categories: [
      { name: "Most Categories", rate: 0.15, minFee: 0.25 },
      { name: "Electronics", rate: 0.07, minFee: 0.25 },
      { name: "Cameras & Photo", rate: 0.07, minFee: 0.25 },
      { name: "Personal Computers", rate: 0.07, minFee: 0.25 },
      { name: "Clothing & Accessories", rate: 0.15, minFee: 0.25 },
      { name: "Beauty & Health", rate: 0.15, minFee: 0.25 },
      { name: "Home & Kitchen", rate: 0.15, minFee: 0.25 },
      { name: "Toys & Games", rate: 0.15, minFee: 0.25 },
      { name: "Sports & Outdoors", rate: 0.15, minFee: 0.25 },
      { name: "Books", rate: 0.15, minFee: 0.25 },
      { name: "Pet Supplies", rate: 0.15, minFee: 0.25 },
      { name: "Baby Products", rate: 0.15, minFee: 0.25 },
      { name: "Office Products", rate: 0.15, minFee: 0.25 },
    ],
    sizeTier: ukSizeTier,
  },
  in: {
    symbol: "₹",
    code: "INR",
    dimUnit: "cm",
    wtUnit: "kg",
    storBlended: 30,
    storCuDivisor: 28316.8,
    defaultValues: { price: 1499, cogs: 400, l: 25, w: 20, h: 10, wt: 0.7 },
    categories: [
      { name: "Most Categories", rate: 0.09, minFee: 5 },
      { name: "Electronics", rate: 0.07, minFee: 5 },
      { name: "Mobile Phones", rate: 0.04, minFee: 5 },
      { name: "Clothing & Accessories", rate: 0.15, minFee: 5 },
      { name: "Beauty & Health", rate: 0.09, minFee: 5 },
      { name: "Home & Kitchen", rate: 0.09, minFee: 5 },
      { name: "Toys & Games", rate: 0.09, minFee: 5 },
      { name: "Sports & Outdoors", rate: 0.09, minFee: 5 },
      { name: "Books", rate: 0.15, minFee: 5 },
      { name: "Jewellery", rate: 0.2, minFee: 5 },
      { name: "Grocery & Gourmet", rate: 0.09, minFee: 5 },
      { name: "Pet Supplies", rate: 0.09, minFee: 5 },
      { name: "Baby Products", rate: 0.09, minFee: 5 },
    ],
    sizeTier: inSizeTier,
  },
};

const TAB_IDS: Record<MarketplaceId, string> = {
  us: "fba-tab-us",
  uk: "fba-tab-uk",
  in: "fba-tab-in",
};

function formatMoney(value: number, mkt: MarketplaceDef) {
  const neg = value < 0;
  const abs = Math.abs(value);
  if (mkt.code === "INR") {
    const n = new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(Math.round(abs));
    return `${neg ? "-" : ""}${mkt.symbol}${n}`;
  }
  return `${neg ? "-" : ""}${mkt.symbol}${abs.toFixed(2)}`;
}

function formatMinFee(mkt: MarketplaceDef, minFee: number) {
  if (mkt.code === "INR") {
    return `${mkt.symbol}${Math.round(minFee)}`;
  }
  return `${mkt.symbol}${minFee.toFixed(2)}`;
}

function formatPercent(rate: number) {
  return `${(rate * 100).toFixed(1)}%`;
}

function getVerdict(netProfit: number, margin: number) {
  if (netProfit < 0) {
    return {
      label: "LOSS",
      className: "border-[#FECACA] bg-[#FEF2F2] text-[#DC2626]",
      message:
        "Unprofitable at current inputs. Reduce COGS or increase price.",
    };
  }
  if (netProfit === 0) {
    return {
      label: "BREAK-EVEN",
      className: "border-[#FED7AA] bg-[#FFF7ED] text-[#EA580C]",
      message:
        "Break-even — small fee or price shifts will move you into profit or loss.",
    };
  }
  if (margin < 15) {
    return {
      label: "PROFITABLE",
      className: "border-[#FED7AA] bg-[#FFF7ED] text-[#EA580C]",
      message:
        "Thin margin. Under 15% leaves no room for PPC or fee changes.",
    };
  }
  return {
    label: "PROFITABLE",
    className: "border-[#FED7AA] bg-[#FFF7ED] text-[#EA580C]",
    message:
      "Healthy margin. Factor in PPC budget before ordering.",
  };
}

function BarRow({
  label,
  pct,
  colorClass,
}: {
  label: string;
  pct: number;
  colorClass: string;
}) {
  const w = Math.min(100, Math.max(0, pct));
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold text-[#64748B]">
        <span>{label}</span>
        <span>{pct.toFixed(1)}%</span>
      </div>
      <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-[#E2E8F0]">
        <div
          className={`h-full rounded-full transition-all ${colorClass}`}
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

export default function FbaCalculator() {
  const [activeMkt, setActiveMkt] = useState<MarketplaceId>("us");
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [price, setPrice] = useState(MARKETPLACES.us.defaultValues.price);
  const [cogs, setCogs] = useState(MARKETPLACES.us.defaultValues.cogs);
  const [l, setL] = useState(MARKETPLACES.us.defaultValues.l);
  const [w, setW] = useState(MARKETPLACES.us.defaultValues.w);
  const [h, setH] = useState(MARKETPLACES.us.defaultValues.h);
  const [wt, setWt] = useState(MARKETPLACES.us.defaultValues.wt);
  const [storageDays, setStorageDays] = useState(0);
  const [ppcEnabled, setPpcEnabled] = useState(false);
  const [ppcPct, setPpcPct] = useState(5);
  const [monthlyUnits, setMonthlyUnits] = useState(100);

  const mkt = MARKETPLACES[activeMkt];

  function applyMarketplaceDefaults(id: MarketplaceId) {
    const d = MARKETPLACES[id].defaultValues;
    setPrice(d.price);
    setCogs(d.cogs);
    setL(d.l);
    setW(d.w);
    setH(d.h);
    setWt(d.wt);
    setCategoryIndex(0);
  }

  function handleTabChange(id: MarketplaceId) {
    setActiveMkt(id);
    applyMarketplaceDefaults(id);
  }

  function handleReset() {
    applyMarketplaceDefaults(activeMkt);
    setStorageDays(0);
    setPpcEnabled(false);
    setPpcPct(5);
    setMonthlyUnits(100);
  }

  const totals = useMemo(() => {
    const cat = mkt.categories[categoryIndex] ?? mkt.categories[0];
    const referralFee = Math.max(price * cat.rate, cat.minFee);
    const sizeTierResult = mkt.sizeTier(l, w, h, wt);
    const fbaFee = sizeTierResult.fee;
    const cuVol = (l * w * h) / mkt.storCuDivisor;
    const storagePerUnit = cuVol * mkt.storBlended * (storageDays / 30);
    const ppcPerUnit = ppcEnabled ? price * (ppcPct / 100) : 0;
    const totalFees = referralFee + fbaFee + storagePerUnit + ppcPerUnit;
    const netProfit = price - cogs - totalFees;
    const margin = price > 0 ? (netProfit / price) * 100 : 0;
    const roi = cogs > 0 ? (netProfit / cogs) * 100 : 0;
    return {
      cat,
      referralFee,
      fbaFee,
      storagePerUnit,
      ppcPerUnit,
      totalFees,
      netProfit,
      margin,
      roi,
      sizeTierResult,
    };
  }, [
    mkt,
    categoryIndex,
    price,
    cogs,
    l,
    w,
    h,
    wt,
    storageDays,
    ppcEnabled,
    ppcPct,
  ]);

  const verdict = getVerdict(totals.netProfit, totals.margin);
  const profitColor = getProfitColor(totals.netProfit);
  const marginColor = getMarginColor(totals.margin);
  const referralPctLabel = formatPercent(totals.cat.rate);

  const barDenom = price > 0 ? price : 1;
  const pctCogs = (cogs / barDenom) * 100;
  const pctRef = (totals.referralFee / barDenom) * 100;
  const pctFba = (totals.fbaFee / barDenom) * 100;
  const pctStor = (totals.storagePerUnit / barDenom) * 100;
  const pctNet = (totals.netProfit / barDenom) * 100;

  const grossRev = price * monthlyUnits;
  const totalAmazonFees = totals.totalFees * monthlyUnits;
  const totalCogs = cogs * monthlyUnits;
  const monthlyNet = totals.netProfit * monthlyUnits;

  return (
    <div className="space-y-8">
      <div
        className="flex flex-wrap gap-2 border-b border-[#E2E8F0] pb-1"
        role="tablist"
        aria-label="Marketplace"
      >
        {(
          [
            ["us", "🇺🇸 Amazon US (USD)"],
            ["uk", "🇬🇧 Amazon UK (GBP)"],
            ["in", "🇮🇳 Amazon India (INR)"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            id={TAB_IDS[id]}
            type="button"
            role="tab"
            aria-selected={activeMkt === id}
            aria-controls="fba-calculator-panel"
            className={`rounded-t-lg px-4 py-2.5 text-sm font-semibold transition ${
              activeMkt === id
                ? "border-b-2 border-[#F97316] bg-[#FFF7ED] text-[#EA580C]"
                : "text-[#64748B] hover:bg-white hover:text-[#0F172A]"
            }`}
            onClick={() => handleTabChange(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <section
        id="fba-calculator-panel"
        role="tabpanel"
        aria-labelledby={TAB_IDS[activeMkt]}
        className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm"
      >
        <div className="border-b border-[#E2E8F0] bg-[#F8F9FA] px-5 py-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F97316]">
                Amazon FBA Workbench
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A]">
                Category-based profit calculator
              </h2>
            </div>
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset calculator to marketplace defaults"
              className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#64748B] transition hover:border-[#F97316] hover:text-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1px_0.92fr]">
          <div className="space-y-5 p-5 sm:p-8">
            <div>
              <label
                htmlFor="fba-category"
                className="text-xs font-semibold uppercase tracking-widest text-[#64748B]"
              >
                Category
              </label>
              <select
                id="fba-category"
                value={categoryIndex}
                onChange={(e) => setCategoryIndex(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-[#E2E8F0] bg-white px-3 py-3 text-sm font-semibold text-[#0F172A] outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
              >
                {mkt.categories.map((c, i) => (
                  <option key={c.name} value={i}>
                    {c.name} — {formatPercent(c.rate)} min{" "}
                    {formatMinFee(mkt, c.minFee)}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label htmlFor="fba-price" className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                  Selling Price
                </span>
                <span className="mt-2 flex items-center rounded-xl border border-[#E2E8F0] bg-white px-3 focus-within:border-[#F97316] focus-within:ring-2 focus-within:ring-orange-100">
                  <span className="font-mono text-[#64748B]">{mkt.symbol}</span>
                  <input
                    id="fba-price"
                    type="number"
                    min={0}
                    step={mkt.code === "INR" ? 1 : 0.01}
                    value={price}
                    onChange={(e) =>
                      setPrice(parseFloat(e.target.value) || 0)
                    }
                    className="min-w-0 flex-1 bg-transparent py-3 pl-2 font-mono text-lg font-bold text-[#0F172A] outline-none"
                  />
                </span>
              </label>
              <label htmlFor="fba-cogs" className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                  Product Cost (COGS)
                </span>
                <span className="mt-2 flex items-center rounded-xl border border-[#E2E8F0] bg-white px-3 focus-within:border-[#F97316] focus-within:ring-2 focus-within:ring-orange-100">
                  <span className="font-mono text-[#64748B]">{mkt.symbol}</span>
                  <input
                    id="fba-cogs"
                    type="number"
                    min={0}
                    step={mkt.code === "INR" ? 1 : 0.01}
                    value={cogs}
                    onChange={(e) => setCogs(parseFloat(e.target.value) || 0)}
                    className="min-w-0 flex-1 bg-transparent py-3 pl-2 font-mono text-lg font-bold text-[#0F172A] outline-none"
                  />
                </span>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <label htmlFor="fba-l" className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                  Length
                </span>
                <span className="mt-2 flex items-center rounded-xl border border-[#E2E8F0] bg-white px-3 focus-within:border-[#F97316] focus-within:ring-2 focus-within:ring-orange-100">
                  <input
                    id="fba-l"
                    type="number"
                    min={0}
                    step={0.01}
                    value={l}
                    onChange={(e) => setL(parseFloat(e.target.value) || 0)}
                    className="min-w-0 flex-1 bg-transparent py-3 font-mono text-lg font-bold text-[#0F172A] outline-none"
                  />
                  <span className="text-xs font-semibold text-[#64748B]">
                    {mkt.dimUnit}
                  </span>
                </span>
              </label>
              <label htmlFor="fba-w" className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                  Width
                </span>
                <span className="mt-2 flex items-center rounded-xl border border-[#E2E8F0] bg-white px-3 focus-within:border-[#F97316] focus-within:ring-2 focus-within:ring-orange-100">
                  <input
                    id="fba-w"
                    type="number"
                    min={0}
                    step={0.01}
                    value={w}
                    onChange={(e) => setW(parseFloat(e.target.value) || 0)}
                    className="min-w-0 flex-1 bg-transparent py-3 font-mono text-lg font-bold text-[#0F172A] outline-none"
                  />
                  <span className="text-xs font-semibold text-[#64748B]">
                    {mkt.dimUnit}
                  </span>
                </span>
              </label>
              <label htmlFor="fba-h" className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                  Height
                </span>
                <span className="mt-2 flex items-center rounded-xl border border-[#E2E8F0] bg-white px-3 focus-within:border-[#F97316] focus-within:ring-2 focus-within:ring-orange-100">
                  <input
                    id="fba-h"
                    type="number"
                    min={0}
                    step={0.01}
                    value={h}
                    onChange={(e) => setH(parseFloat(e.target.value) || 0)}
                    className="min-w-0 flex-1 bg-transparent py-3 font-mono text-lg font-bold text-[#0F172A] outline-none"
                  />
                  <span className="text-xs font-semibold text-[#64748B]">
                    {mkt.dimUnit}
                  </span>
                </span>
              </label>
            </div>

            <label htmlFor="fba-wt" className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                Weight
              </span>
              <span className="mt-2 flex items-center rounded-xl border border-[#E2E8F0] bg-white px-3 focus-within:border-[#F97316] focus-within:ring-2 focus-within:ring-orange-100">
                <input
                  id="fba-wt"
                  type="number"
                  min={0}
                  step={0.01}
                  value={wt}
                  onChange={(e) => setWt(parseFloat(e.target.value) || 0)}
                  className="min-w-0 flex-1 bg-transparent py-3 font-mono text-lg font-bold text-[#0F172A] outline-none"
                />
                <span className="text-xs font-semibold text-[#64748B]">
                  {mkt.wtUnit}
                </span>
              </span>
            </label>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label
                  htmlFor="fba-storage-days"
                  className="text-xs font-semibold uppercase tracking-widest text-[#64748B]"
                >
                  Avg days in FBA
                </label>
                <span className="font-mono text-sm text-[#F97316]">
                  {storageDays} days
                </span>
              </div>
              <input
                id="fba-storage-days"
                type="range"
                min={0}
                max={365}
                value={storageDays}
                onChange={(e) => setStorageDays(Number(e.target.value))}
                className="mt-3 w-full accent-[#F97316]"
                aria-valuemin={0}
                aria-valuemax={365}
                aria-valuenow={storageDays}
              />
              <input
                type="number"
                min={0}
                max={365}
                value={storageDays}
                onChange={(e) =>
                  setStorageDays(
                    Math.min(365, Math.max(0, Number(e.target.value) || 0)),
                  )
                }
                className="mt-2 w-full rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 font-mono text-sm text-[#0F172A] outline-none focus:border-[#F97316]"
                aria-label="Average days in FBA storage (numeric)"
              />
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-4">
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="fba-ppc-toggle"
                  className="text-sm font-semibold text-[#0F172A]"
                >
                  Include PPC / Ad Spend
                </label>
                <button
                  id="fba-ppc-toggle"
                  type="button"
                  role="switch"
                  aria-checked={ppcEnabled}
                  onClick={() => setPpcEnabled((v) => !v)}
                  className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                    ppcEnabled ? "bg-[#F97316]" : "bg-[#CBD5E1]"
                  }`}
                  aria-label="Toggle PPC modelling"
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition ${
                      ppcEnabled ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </div>
              {ppcEnabled ? (
                <label htmlFor="fba-ppc-pct" className="mt-4 block">
                  <span className="text-xs font-semibold text-[#64748B]">
                    PPC % of selling price
                  </span>
                  <input
                    id="fba-ppc-pct"
                    type="number"
                    min={0}
                    max={100}
                    step={0.5}
                    value={ppcPct}
                    onChange={(e) =>
                      setPpcPct(parseFloat(e.target.value) || 0)
                    }
                    className="mt-2 w-full rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 font-mono text-sm text-[#0F172A] outline-none focus:border-[#F97316]"
                  />
                </label>
              ) : null}
            </div>
          </div>

          <div className="hidden bg-[#E2E8F0] md:block" />

          <aside className="space-y-6 border-t border-[#E2E8F0] bg-[#F8F9FA] p-5 sm:p-8 md:border-t-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#F97316]" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                Net profit per unit
              </p>
              <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
                <p
                  className={`font-mono text-4xl font-black tracking-tight sm:text-5xl ${profitColor}`}
                >
                  {formatMoney(totals.netProfit, mkt)}
                </p>
                <span
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-widest ${verdict.className}`}
                >
                  {verdict.label}
                </span>
              </div>
              <p className="mt-4 text-sm text-[#64748B]">{verdict.message}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <p className="text-xs font-semibold uppercase text-[#64748B]">
                  Margin %
                </p>
                <p className={`mt-2 font-mono text-2xl font-black ${marginColor}`}>
                  {totals.margin.toFixed(1)}%
                </p>
              </div>
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <p className="text-xs font-semibold uppercase text-[#64748B]">
                  ROI %
                </p>
                <p
                  className={`mt-2 font-mono text-2xl font-black ${getProfitColor(totals.roi)}`}
                >
                  {totals.roi.toFixed(1)}%
                </p>
              </div>
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <p className="text-xs font-semibold uppercase text-[#64748B]">
                  Size tier
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-[#0F172A]">
                  {totals.sizeTierResult.tier}
                </p>
              </div>
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <p className="text-xs font-semibold uppercase text-[#64748B]">
                  Dim weight
                </p>
                <p className="mt-2 font-mono text-xl font-black text-[#0F172A]">
                  {mkt.code === "USD"
                    ? `${totals.sizeTierResult.dimW.toFixed(2)} lb`
                    : `${totals.sizeTierResult.dimW.toFixed(3)} kg`}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-[#E2E8F0]">
                  <tr>
                    <td className="px-4 py-2.5 text-[#64748B]">Selling price</td>
                    <td className="px-4 py-2.5 text-right font-mono font-bold text-[#0F172A]">
                      {formatMoney(price, mkt)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-[#64748B]">
                      − Referral fee ({referralPctLabel})
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono text-[#DC2626]">
                      −{formatMoney(totals.referralFee, mkt)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-[#64748B]">
                      − FBA fulfillment fee
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono text-[#DC2626]">
                      −{formatMoney(totals.fbaFee, mkt)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-[#64748B]">
                      − Storage fee (per unit)
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono text-[#DC2626]">
                      −{formatMoney(totals.storagePerUnit, mkt)}
                    </td>
                  </tr>
                  {ppcEnabled ? (
                    <tr>
                      <td className="px-4 py-2.5 text-[#64748B]">
                        − PPC / Ad spend
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-[#DC2626]">
                        −{formatMoney(totals.ppcPerUnit, mkt)}
                      </td>
                    </tr>
                  ) : null}
                  <tr>
                    <td className="px-4 py-2.5 text-[#64748B]">
                      − Product cost (COGS)
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono text-[#DC2626]">
                      −{formatMoney(cogs, mkt)}
                    </td>
                  </tr>
                  <tr className="bg-[#F8F9FA]">
                    <td className="px-4 py-3 font-semibold text-[#0F172A]">
                      = Net profit per unit
                    </td>
                    <td
                      className={`px-4 py-3 text-right font-mono text-lg font-black ${profitColor}`}
                    >
                      {formatMoney(totals.netProfit, mkt)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                Revenue split (% of selling price)
              </p>
              <BarRow
                label="Product cost"
                pct={pctCogs}
                colorClass="bg-[#94A3B8]"
              />
              <BarRow
                label="Referral fee"
                pct={pctRef}
                colorClass="bg-[#F97316]"
              />
              <BarRow label="FBA fee" pct={pctFba} colorClass="bg-[#FB923C]" />
              <BarRow
                label="Storage"
                pct={pctStor}
                colorClass="bg-[#FDBA74]"
              />
              <BarRow
                label="Net profit"
                pct={pctNet}
                colorClass={
                  totals.netProfit >= 0 ? "bg-[#F97316]" : "bg-[#DC2626]"
                }
              />
            </div>

            <p className="rounded-xl border border-[#FED7AA] bg-[#FFF7ED] px-4 py-3 text-xs leading-6 text-[#64748B]">
              Estimates use simplified 2025-style fee tables for education.
              Always confirm current size tiers, peak storage, and category
              rates in Seller Central.
            </p>
          </aside>
        </div>
      </section>

      <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-xl font-bold text-[#0F172A]">
            Monthly projection at{" "}
            <label htmlFor="fba-monthly-units" className="sr-only">
              units per month
            </label>
            <input
              id="fba-monthly-units"
              type="number"
              min={0}
              step={1}
              value={monthlyUnits}
              onChange={(e) =>
                setMonthlyUnits(Math.max(0, Math.floor(Number(e.target.value))))
              }
              className="inline-block w-24 rounded-xl border border-[#E2E8F0] px-2 py-1 font-mono text-lg text-[#0F172A] outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
            />{" "}
            units
          </h3>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-4">
            <p className="text-xs font-semibold uppercase text-[#64748B]">
              Gross revenue
            </p>
            <p className="mt-2 font-mono text-xl font-black text-[#0F172A]">
              {formatMoney(grossRev, mkt)}
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-4">
            <p className="text-xs font-semibold uppercase text-[#64748B]">
              Total Amazon fees
            </p>
            <p className="mt-2 font-mono text-xl font-black text-[#DC2626]">
              {formatMoney(totalAmazonFees, mkt)}
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-4">
            <p className="text-xs font-semibold uppercase text-[#64748B]">
              Product cost
            </p>
            <p className="mt-2 font-mono text-xl font-black text-[#0F172A]">
              {formatMoney(totalCogs, mkt)}
            </p>
          </div>
          <div className="rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-4">
            <p className="text-xs font-semibold uppercase text-[#EA580C]">
              Monthly net profit
            </p>
            <p
              className={`mt-2 font-mono text-xl font-black ${
                monthlyNet >= 0 ? "text-[#F97316]" : "text-[#DC2626]"
              }`}
            >
              {formatMoney(monthlyNet, mkt)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function getProfitColor(value: number) {
  if (value > 0) return "text-[#F97316]";
  if (value < 0) return "text-[#DC2626]";
  return "text-[#64748B]";
}

function getMarginColor(value: number) {
  if (value >= 20) return "text-[#F97316]";
  if (value >= 15) return "text-[#EA580C]";
  return "text-[#DC2626]";
}
