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
    table: (props) => (
      <div className="mt-6 overflow-x-auto">
        <table
          className="w-full border-collapse text-left text-sm text-[#374151]"
          {...props}
        />
      </div>
    ),
    thead: (props) => <thead className="bg-[#FFF7ED]" {...props} />,
    th: (props) => (
      <th
        className="border border-[#E2E8F0] px-4 py-3 font-semibold text-[#0F172A]"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="border border-[#E2E8F0] px-4 py-3 align-top"
        {...props}
      />
    ),
    hr: (props) => <hr className="my-10 border-t border-[#E2E8F0]" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mt-6 border-l-4 border-[#FED7AA] pl-4 italic text-[#475569]"
        {...props}
      />
    ),
  };
}
