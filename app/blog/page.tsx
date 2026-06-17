import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Amazon FBA Seller Blog — Reimbursements, IPI & Reconciliation",
  description:
    "Practical guides for Amazon FBA sellers: reimbursement recovery, reconciliation, IPI score improvement, and account health. Updated regularly with 2025–2026 policy changes.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Amazon FBA Seller Blog — Reimbursements, IPI & Reconciliation",
    description:
      "Practical guides for Amazon FBA sellers: reimbursement recovery, reconciliation, IPI score improvement, and account health. Updated regularly with 2025–2026 policy changes.",
    url: "/blog",
    siteName: "Leviathan Sellers",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon FBA Seller Blog — Reimbursements, IPI & Reconciliation",
    description:
      "Practical guides for Amazon FBA sellers: reimbursement recovery, reconciliation, IPI score improvement, and account health. Updated regularly with 2025–2026 policy changes.",
    images: ["/og-image.png"],
  },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="bg-white">
      <section className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Resources
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0F172A] lg:text-5xl">
                Amazon reconciliation insights
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#64748B]">
                Practical articles for Amazon sellers who want cleaner reconciliation,
                stronger reimbursement recovery, and better visibility into FBA revenue.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-colors hover:border-[#F97316]/40">
                  <span className="inline-flex w-fit rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-semibold text-[#EA580C]">
                    {post.category}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-[#0F172A]">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#F97316]">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-[#64748B]">
                    {formatPostDate(post.date)} · {post.readingTime}
                  </p>
                  <p className="mt-4 flex-1 leading-7 text-[#374151]">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-[#F97316] hover:text-[#EA580C]"
                  >
                    Read article →
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <section className="mt-16 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#0F172A]">
                Need help recovering lost revenue?
              </h2>
              <p className="mt-4 max-w-2xl text-[#64748B]">
                Our reconciliation services help identify recoverable Amazon FBA funds
                and explain the issues behind them.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex text-sm font-semibold text-[#F97316] hover:text-[#EA580C]"
              >
                Learn about our services →
              </Link>
            </section>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
