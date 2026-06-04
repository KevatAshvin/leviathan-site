import type { Metadata } from "next";
import FbaCalculator from "@/components/FbaCalculator";
import ScrollReveal from "@/components/ScrollReveal";

const title =
  "Free Amazon FBA Calculator 2025 | US, UK & India";
const description =
  "Calculate Amazon FBA fees, referral fees, size tier costs and net profit instantly for Amazon US, UK and India. Updated 2025 fee schedules. Free — no login required.";
const url = "https://leviathansellers.com/fba-calculator";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "amazon fba calculator",
    "amazon seller calculator",
    "fba fee calculator",
    "amazon seller profit calculator",
    "amazon referral fee calculator",
    "fba profit margin",
    "amazon fba fees 2025",
    "leviathansellers",
    "amazon fba calculator uk",
    "amazon fba calculator india",
    "fba size tier calculator",
    "amazon referral fee calculator uk",
    "amazon india fba calculator",
    "fba profit margin calculator",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url,
    siteName: "Leviathan Sellers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Amazon FBA Calculator — US, UK & India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/fba-calculator",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Amazon FBA Profit Calculator — US, UK & India",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Free Amazon FBA calculator supporting US, UK and India marketplaces. Auto size-tier detection, dimensional weight, 2025 fee schedules, PPC modelling, monthly projection. No signup.",
      url,
      featureList: [
        "Amazon US FBA fee calculator",
        "Amazon UK FBA fee calculator (GBP)",
        "Amazon India FBA fee calculator (INR)",
        "Auto size tier detection",
        "Dimensional weight calculation",
        "PPC cost modelling",
        "Monthly revenue projection",
        "Net profit and ROI",
        "2025 fee schedules",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://leviathansellers.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FBA Calculator",
          item: url,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does this FBA calculator support Amazon UK and India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Switch between Amazon US (USD), Amazon UK (GBP), and Amazon India (INR) using the marketplace tabs. Each uses its own 2025 fee schedule, size tier thresholds, dimension units (inches for US, centimetres for UK and India), referral rates, and currency.",
          },
        },
        {
          "@type": "Question",
          name: "How does Amazon calculate FBA fulfillment fees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FBA fees are based on size tier and billable weight — whichever is higher between actual weight and dimensional weight (length × width × height ÷ 139 for US in inches; ÷ 5000 for UK and India in cm). Size tiers range from Small Standard ($3.22) through Large Standard, Large Bulky ($9.73+) and Extra-Large ($26.33+) for US. This calculator detects your tier automatically.",
          },
        },
        {
          "@type": "Question",
          name: "What profit margin should Amazon FBA sellers target?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Target at least 20% net margin after all fees and product cost, before PPC spend. Margins below 15% leave insufficient room for advertising, returns, and fee changes. Use the PPC toggle in this calculator to model your ad spend impact.",
          },
        },
        {
          "@type": "Question",
          name: "What is Amazon's referral fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Amazon referral fee is a percentage of the selling price per sale. US rates: most categories 15%, electronics 8%, personal computers 6%, beauty 17%. UK rates: most categories 15%, electronics 7%. India rates: most categories 9%, electronics 7%, mobile phones 4%, jewellery 20%. This calculator applies the correct rate per marketplace and category.",
          },
        },
      ],
    },
  ],
};

const trustBadges = [
  "US · UK · India Marketplaces",
  "Free - No Sign-Up",
  "Instant Results",
  "Auto Size Tier Detection",
  "2025 Fee Schedules",
];

export default function FbaCalculatorPage() {
  return (
    <main className="bg-[#F8F9FA]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <section className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Free tool
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              Free Amazon FBA Calculator — US, UK & India
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              Estimate Amazon FBA fees, referral costs, fulfillment charges, storage
              fees, and true net profit instantly for Amazon US, UK, and India
              marketplaces. Switch between USD, GBP, and INR — the calculator
              automatically detects your size tier, applies dimensional weight, and
              uses marketplace-accurate 2025 fee schedules.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#64748B]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <section className="mt-10">
            <FbaCalculator />
          </section>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <article className="mt-16 max-w-3xl space-y-12 border-t border-[#E2E8F0] pt-12">
            <section className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                How to Use the Amazon FBA Calculator (US, UK & India)
              </h2>
              <p className="text-base leading-8 text-[#374151]">
                Pick your marketplace tab (US, UK, or India) — inputs reset to
                realistic defaults for that region. Dimensions switch automatically:
                inches and pounds for the US marketplace; centimetres and kilograms for
                UK and India. Choose the category closest to your product for referral
                rate and minimum fee, then enter selling price and landed COGS.
                Length, width, height, and weight drive automatic size-tier detection
                and dimensional (volumetric) weight, which Amazon compares to actual
                weight to set billable shipping weight for fulfillment fees.
              </p>
              <p className="text-base leading-8 text-[#374151]">
                Optionally model average days in storage (blended monthly rate) and
                toggle PPC as a percentage of price. Use monthly units for a simple
                revenue and net-profit projection at scale — all totals update live.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                Understanding Amazon FBA Fees
              </h2>
              <p className="text-base leading-8 text-[#374151]">
                Referral fees are marketplace- and category-specific. This calculator
                applies the percentage of selling price versus the marketplace minimum —
                whichever is higher — for each tab&apos;s category list (for example US
                beauty 17% with a $0.30 minimum; UK electronics 7%; India jewellery
                20% with ₹5 minimums).
              </p>
              <p className="text-base leading-8 text-[#374151]">
                Fulfillment fees are derived from automated size tiers and billable
                weight (greater of dimensional or actual weight), not manual entry —
                aligning with how Amazon evaluates FBA pick, pack, and ship charges
                before any peak or low-inventory surcharge overlays.
              </p>
              <p className="text-base leading-8 text-[#374151]">
                Storage is modeled per unit from cubic volume × blended monthly storage
                rate × (average days ÷ 30). Always confirm live rates (seasonal /
                aged-inventory tiers) inside Seller Central before locking in purchase
                orders.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                Amazon FBA Size Tiers Explained (2025)
              </h2>
              <p className="text-base leading-8 text-[#374151]">
                On Amazon US FBA, the smallest standard-band unit that clears the Small
                Standard envelope (compact dimensions and shipping weight ≤ 0.75 lb)
                often lands near the landmark <strong>$3.22</strong> fulfillment fee
                band referenced in Seller Central tier tables — a useful anchor when
                packaging products. Larger parcels graduate to Large Standard bands
                with fees typically starting near <strong>$4.75</strong>, scaling with
                billable weight, then stepping up into Large Bulky (from about{" "}
                <strong>$9.73</strong> plus per-lb increments) and Extra-Large matrices
                (from about <strong>$26.33+</strong> depending on shipment weight).
                UK FBA splits envelope and parcel ladders in centimetres and kilograms,
                capped by an Extra-Large formula; India uses Standard, Advanced, and
                Heavy & Bulky ladders in rupees. In every marketplace, dimensional
                weight can exceed actual weight — if your carton is airy, Amazon bills
                the higher of the two, which silently adds <strong>$3–$5+</strong> per
                unit when you slip into the wrong tier. Leviathan Sellers audits Seller
                Central for referral and FBA fee overcharges daily as part of
                reconciliation — so mismatches between recorded dimensions and
                physical SKU reality get caught before they erode quarters of margin.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                Amazon UK vs US vs India FBA Fees: Key Differences
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white">
                <table className="min-w-[520px] w-full border-collapse text-left text-sm text-[#374151]">
                  <thead className="bg-[#F8F9FA] text-[#0F172A]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Factor</th>
                      <th className="px-4 py-3 font-semibold">US</th>
                      <th className="px-4 py-3 font-semibold">UK</th>
                      <th className="px-4 py-3 font-semibold">India</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] bg-white">
                    <tr>
                      <td className="px-4 py-3 font-medium">Currency</td>
                      <td className="px-4 py-3">USD ($)</td>
                      <td className="px-4 py-3">GBP (£)</td>
                      <td className="px-4 py-3">INR (₹)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Dim / weight units</td>
                      <td className="px-4 py-3">in / lb</td>
                      <td className="px-4 py-3">cm / kg</td>
                      <td className="px-4 py-3">cm / kg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Dimensional divisor</td>
                      <td className="px-4 py-3">139</td>
                      <td className="px-4 py-3">5000</td>
                      <td className="px-4 py-3">5000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Referral anchors</td>
                      <td className="px-4 py-3">Often 15% / elec 8% / PCs 6%</td>
                      <td className="px-4 py-3">Often 15% / elec 7%</td>
                      <td className="px-4 py-3">Often 9% / phones 4% / jewels 20%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">FBA fee ladder</td>
                      <td className="px-4 py-3">Standard → bulky → XL $ bands</td>
                      <td className="px-4 py-3">Envelope → parcel → XL £ bands</td>
                      <td className="px-4 py-3">Standard → advanced → bulky ₹ bands</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Blended storage (/ cu ft eq)</td>
                      <td className="px-4 py-3">~$1.63 illustrative</td>
                      <td className="px-4 py-3">~£0.73 illustrative</td>
                      <td className="px-4 py-3">~₹30 illustrative</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-8 text-[#374151]">
                Numeric examples in this calculator are educational simplifications —
                VAT/GST settlement treatment, lightning deals, and remote fulfillment
                surcharges behave differently per locale. Validate against your live fee
                preview before sourcing.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                How to Calculate Your Amazon FBA Profit Margin
              </h2>
              <p className="text-base leading-8 text-[#374151]">
                Per unit: <strong>Net profit = Selling price − Referral − FBA −
                Storage − PPC − COGS.</strong> Margin % = net ÷ price × 100; ROI %
                = net ÷ COGS × 100. Layer in returns and giveaways separately if your
                category runs hot on refunds.
              </p>
              <p className="text-base leading-8 text-[#374151]">
                Use both metrics when comparing launches: healthy margin protects fee
                change risk; ROI tells you whether the capital trapped in inventory is
                working hard enough versus alternatives.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                FBA vs FBM: Which Is More Profitable?
              </h2>
              <p className="text-base leading-8 text-[#374151]">
                FBA trades operational burden for predictable Prime-eligible fulfillment
                but stacks FBA pick/pack/shipping logic seen in these tiers plus
                storage. FBM preserves control on fulfilment economics for oversized or
                low-velocity catalogs. Many portfolios mix models by SKU cohort.
              </p>
              <p className="text-base leading-8 text-[#374151]">
                Re-run projections per marketplace tab when testing FBA viability before
                you commit container-level MOQs.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                Tips for Improving Your FBA Profit Margins
              </h2>
              <p className="text-base leading-8 text-[#374151]">
                Renegotiate COGS relentlessly — it is multiplicative savings. Compress
                pack dimensions until you confidently sit one tier cheaper on the ladder
                while staying retail-safe. Maintain sell-through cadence so storage
                accruals in this calculator reflect reality rather than optimistic 30-day
                turns when your stock ages 120 days — if it does, reprice, bundle, or
                liquidate strategically.
              </p>
              <p className="text-base leading-8 text-[#374151]">
                Tie pricing tests back to modeled PPC percentages so headline margin
                after ads still clears your hurdle rate.
              </p>
            </section>
          </article>
        </ScrollReveal>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
