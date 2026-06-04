import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: (props) => (
      <h2
        className="mt-10 mb-4 text-2xl font-semibold text-[#0F172A]"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 mb-3 text-xl font-semibold text-[#0F172A]"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mt-5 leading-relaxed text-[#374151]" {...props} />
    ),
    ul: (props) => (
      <ul
        className="mt-5 list-disc space-y-3 pl-6 text-[#374151]"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mt-5 list-decimal space-y-3 pl-6 text-[#374151]"
        {...props}
      />
    ),
    li: (props) => <li className="leading-7" {...props} />,
    strong: (props) => (
      <strong className="font-semibold text-[#0F172A]" {...props} />
    ),
    a: (props) => (
      <a
        className="font-medium text-[#F97316] hover:text-[#EA6D0A]"
        {...props}
      />
    ),
  };
}
