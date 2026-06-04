"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";

const servicesLinks = [
  {
    href: "/reconciliation",
    label: "FBA Reconciliation",
    desc: "Recover lost FBA reimbursements",
    icon: "💰",
  },
  {
    href: "/fba-management",
    label: "FBA Account Management",
    desc: "IPI monitoring & listing health",
    icon: "📊",
  },
  {
    href: "/product-research",
    label: "Product Research",
    desc: "Find winning products with data",
    icon: "🔍",
  },
  {
    href: "/services",
    label: "All Services →",
    desc: "See full service overview",
    icon: "📋",
  },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/fba-calculator", label: "FBA Calculator" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const servicesRef = useRef<HTMLLIElement>(null);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const hasActiveService = servicesLinks.some((l) => isActive(pathname, l.href));

  const linkBase =
    "relative rounded-md px-2 py-1.5 text-sm font-medium transition-colors duration-150";

  const linkColor = (href: string) =>
    isActive(pathname, href)
      ? `${linkBase} text-[#F97316]`
      : `${linkBase} text-[#374151] hover:text-[#0F172A]`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-sm">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="shrink-0 transition-opacity duration-150 hover:opacity-80"
            aria-label="Leviathan Sellers home"
          >
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            <li>
              <Link href="/" className={linkColor("/")}>
                Home
              </Link>
            </li>

            <li ref={servicesRef} className="relative">
              <button
                type="button"
                className={`${linkBase} flex items-center gap-1 ${
                  hasActiveService
                    ? "text-[#F97316]"
                    : "text-[#374151] hover:text-[#0F172A]"
                }`}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((v) => !v)}
              >
                Services
                <svg
                  viewBox="0 0 16 16"
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-lg shadow-black/5">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsServicesOpen(false)}
                      className={`flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#FFF7ED] ${
                        isActive(pathname, link.href) ? "bg-[#FFF7ED]" : ""
                      }`}
                    >
                      <span className="mt-0.5 text-xl leading-none">{link.icon}</span>
                      <span>
                        <span
                          className={`block text-sm font-semibold ${
                            isActive(pathname, link.href)
                              ? "text-[#F97316]"
                              : "text-[#0F172A]"
                          }`}
                        >
                          {link.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-[#64748B]">
                          {link.desc}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkColor(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="text-sm font-medium text-[#374151] transition-colors hover:text-[#0F172A]"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#EA6D0A]"
            >
              Free Audit →
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#0F172A] lg:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            <span aria-hidden="true" className="flex h-5 w-5 flex-col justify-center gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                  isMobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                  isMobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-white lg:hidden">
          <div className="flex h-16 items-center justify-between border-b border-[#E2E8F0] px-4">
            <Link href="/" onClick={() => setIsMobileOpen(false)}>
              <Logo />
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#0F172A]"
              aria-label="Close menu"
              onClick={() => setIsMobileOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav aria-label="Mobile navigation">
              <Link
                href="/"
                onClick={() => setIsMobileOpen(false)}
                className={`mb-1 flex items-center rounded-xl px-4 py-3 text-base font-semibold transition ${
                  isActive(pathname, "/")
                    ? "bg-[#FFF7ED] text-[#F97316]"
                    : "text-[#374151] hover:bg-[#F8F9FA]"
                }`}
              >
                Home
              </Link>

              <p className="mb-2 mt-4 px-4 text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
                Services
              </p>
              {servicesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`mb-1 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                    isActive(pathname, link.href)
                      ? "bg-[#FFF7ED] text-[#F97316]"
                      : "text-[#374151] hover:bg-[#F8F9FA]"
                  }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>
                    <span className="block text-sm font-semibold">{link.label}</span>
                    <span className="block text-xs text-[#64748B]">{link.desc}</span>
                  </span>
                </Link>
              ))}

              <p className="mb-2 mt-4 px-4 text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
                Company
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`mb-1 flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive(pathname, link.href)
                      ? "bg-[#FFF7ED] text-[#F97316]"
                      : "text-[#374151] hover:bg-[#F8F9FA]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-[#E2E8F0] px-4 py-5">
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-[#F97316] py-4 text-base font-semibold text-white transition hover:bg-[#EA6D0A]"
            >
              Get Free Audit →
            </Link>
            <p className="mt-3 text-center text-xs text-[#94A3B8]">
              Free · No obligation · Results in 48 hours
            </p>
          </div>
        </div>
      )}
    </>
  );
}
