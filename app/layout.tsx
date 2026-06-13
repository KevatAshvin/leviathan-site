import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.leviathansellers.com";
const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";
const contactEmail = "service@leviathansellers.com";
const contactNumber = "+91 92748 86403";
const founderName = "Harishchandra Kevat";
const officeAddress = {
  "@type": "PostalAddress",
  streetAddress: "K10, Near Genda Circle",
  addressLocality: "Vadodara",
  addressRegion: "Gujarat",
  postalCode: "390007",
  addressCountry: "IN",
};
const siteDescription =
  "Expert Amazon FBA reimbursement recovery, account management and product research for sellers in US, UK, India and Canada.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Leviathan Sellers",
  url: siteUrl,
  description:
    "Expert Amazon FBA reconciliation, account management and product research for sellers in US, UK, India, Canada and EU",
  contactPoint: {
    "@type": "ContactPoint",
    email: contactEmail,
    telephone: contactNumber,
    contactType: "customer support",
  },
  areaServed: ["US", "GB", "IN", "CA", "DE", "FR", "AU"],
  sameAs: [
    "https://www.linkedin.com/company/leviathansellers/",
    "https://twitter.com/leviathansellers",
    "https://www.instagram.com/leviathansellers/",
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Leviathan Sellers",
  url: siteUrl,
  email: contactEmail,
  telephone: contactNumber,
  founder: {
    "@type": "Person",
    name: founderName,
    jobTitle: "Founder & CEO",
  },
  address: officeAddress,
  foundingDate: "2023",
  priceRange: "Performance-based (commission on recovery)",
  knowsAbout: [
    "Amazon FBA",
    "FBA Reimbursement Recovery",
    "Amazon Seller Central",
    "FBA Reconciliation",
    "IPI Score Optimisation",
    "Amazon Product Research",
  ],
  openingHours: "Mo-Fr 09:00-18:00",
  areaServed: ["India", "United States", "United Kingdom", "Canada"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Leviathan Sellers",
  url: siteUrl,
  description: siteDescription,
};

const jsonLdSchemas = [
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Leviathan Sellers",
    template: "%s | Leviathan Sellers",
  },
  description: siteDescription,
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "7j-CR0Hddtn0e8M6ktzJoS1q2zlrb9_oaPj1Da3a_a4",
  },
  openGraph: {
    title: "Leviathan Sellers",
    description: siteDescription,
    url: "/",
    siteName: "Leviathan Sellers",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leviathan Sellers",
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`h-full antialiased ${inter.variable}`}>
      <head>
        {jsonLdSchemas.map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        ))}
      </head>
      <body
        className={`min-h-full bg-white text-[#374151] ${inter.variable}`}
        style={{
          fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif",
        }}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex flex-1 flex-col">
            {children}
            <Footer />
          </div>
        </div>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
