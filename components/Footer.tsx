"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const contactNumber = "+91 92748 86403";
const whatsappUrl = "https://wa.me/919274886403";
const contactEmail = "hello@leviathansellers.com";
const officeAddress = "K10, Near Genda Circle,\nVadodara, Gujarat 390007, India";

const servicesLinks = [
  { href: "/reconciliation", label: "FBA Reconciliation" },
  { href: "/fba-management", label: "FBA Account Management" },
  { href: "/product-research", label: "Product Research" },
  { href: "/services", label: "All Services" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/fba-calculator", label: "FBA Calculator" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" aria-label="Leviathan Sellers home">
              <Logo dark showText />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Expert Amazon FBA reconciliation, account management, and product
              research for sellers in the US, UK, India, Canada, and global
              marketplaces.
            </p>
            <ul className="mt-5 flex gap-2" aria-label="Social links">
              <li>
                <a
                  href="https://www.linkedin.com/company/leviathansellers/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Leviathan Sellers on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0A66C2] text-white transition hover:opacity-90 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/leviathansellers"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Leviathan Sellers on Twitter/X"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white transition hover:opacity-90 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366] text-white transition hover:opacity-90 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/leviathansellers/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Leviathan Sellers on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition hover:opacity-90 active:scale-95"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer services">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company links">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all transition hover:text-white"
                >
                  {contactEmail}
                </a>
              </li>
              <li>Response within 24 business hours</li>
              <li>Mon–Fri · 9 am – 6 pm IST</li>
              <li>
                <a
                  href={whatsappUrl}
                  className="transition hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: {contactNumber}
                </a>
              </li>
              <li className="whitespace-pre-line">{officeAddress}</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-lg bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#EA6D0A]"
            >
              Free Audit →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>© {currentYear} Leviathan Sellers. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
