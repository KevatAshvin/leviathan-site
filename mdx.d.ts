declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: {
    title: string;
    description: string;
    date: string;
    category: string;
    readingTime: string;
    faqs?: { question: string; answer: string }[];
  };

  const MDXContent: ComponentType;
  export default MDXContent;
}
