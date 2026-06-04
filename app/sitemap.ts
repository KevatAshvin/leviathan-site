import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leviathansellers.com";

const today = new Date();

const staleLegalDate = new Date("2026-04-01");

type RouteSpec = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  lastModified: Date;
};

const routes: RouteSpec[] = [
  {
    path: "/",
    priority: 1.0,
    changeFrequency: "weekly",
    lastModified: today,
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "weekly",
    lastModified: today,
  },
  {
    path: "/reconciliation",
    priority: 0.9,
    changeFrequency: "weekly",
    lastModified: today,
  },
  {
    path: "/contact",
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: today,
  },
  {
    path: "/fba-management",
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: today,
  },
  {
    path: "/product-research",
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: today,
  },
  {
    path: "/fba-calculator",
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: today,
  },
  {
    path: "/about",
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: today,
  },
  {
    path: "/blog",
    priority: 0.8,
    changeFrequency: "weekly",
    lastModified: today,
  },
  {
    path: "/privacy-policy",
    priority: 0.2,
    changeFrequency: "yearly",
    lastModified: staleLegalDate,
  },
  {
    path: "/terms-of-service",
    priority: 0.2,
    changeFrequency: "yearly",
    lastModified: staleLegalDate,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const blogArticleEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticEntries = routes.map((route) => ({
    url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticEntries, ...blogArticleEntries];
}
