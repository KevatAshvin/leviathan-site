import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaqJsonLd from "@/components/FaqJsonLd";
import FaqSection from "@/components/FaqSection";
import ScrollReveal from "@/components/ScrollReveal";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Leviathan Sellers",
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [
      { name: "Harishchandra Kevat", url: "https://www.leviathansellers.com/about" },
    ],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { Component } = post;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: "Harishchandra Kevat" },
    publisher: {
      "@type": "Organization",
      name: "Leviathan Sellers",
      url: "https://www.leviathansellers.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
            <ScrollReveal>
              <article>
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-[#F97316] hover:text-[#EA580C]"
                >
                  ← Back to blog
                </Link>
                <header className="mt-8 border-b border-[#E2E8F0] pb-10">
                  <span className="inline-flex rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-semibold text-[#EA580C]">
                    {post.category}
                  </span>
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A]">
                    {post.title}
                  </h1>
                  <p className="mt-5 text-lg leading-8 text-[#374151]">
                    {post.description}
                  </p>
                  <p className="mt-6 text-sm text-[#64748B]">
                    By{" "}
                    <a
                      href="https://www.linkedin.com/company/leviathansellers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#0F172A] hover:text-[#F97316]"
                    >
                      Harishchandra Kevat
                    </a>
                    , Founder, Leviathan Sellers · {formatPostDate(post.date)} ·{" "}
                    {post.readingTime}
                  </p>
                </header>
                <div className="prose prose-slate mt-10 max-w-none [&_a]:text-[#F97316] [&_a]:no-underline hover:[&_a]:text-[#EA580C] [&_h2]:text-[#0F172A] [&_h3]:text-[#0F172A] [&_p]:text-[#374151] [&_li]:text-[#374151]">
                  <Component />
                </div>
                {post.faqs && post.faqs.length > 0 ? (
                  <>
                    <FaqJsonLd faqs={post.faqs} />
                    <section
                      aria-labelledby={`blog-${slug}-faq-title`}
                      className="mt-16 border-t border-[#E2E8F0] pt-10"
                    >
                      <h2
                        id={`blog-${slug}-faq-title`}
                        className="text-2xl font-bold tracking-tight text-[#0F172A]"
                      >
                        Frequently asked questions
                      </h2>
                      <div className="mt-6">
                        <FaqSection idPrefix={`blog-${slug}`} faqs={post.faqs} />
                      </div>
                    </section>
                  </>
                ) : null}
              </article>
            </ScrollReveal>

            <aside>
              <div className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-6 lg:sticky lg:top-24">
                <h2 className="text-lg font-bold text-[#0F172A]">
                  Recover missing Amazon FBA revenue
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  Leviathan Sellers helps Amazon businesses identify reimbursement and
                  reconciliation opportunities with clear audit findings.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C]"
                >
                  Get Free Audit →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
