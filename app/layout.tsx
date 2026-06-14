import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { defaultMetadata } from "../lib/seo";
import {
  SITE_NAME,
  SITE_URL,
  SITE_EMAIL,
  SITE_PHONE,
  SOCIAL_LINKS
} from "../lib/constants";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = defaultMetadata;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-redecorporativa.png`,
  image: `${SITE_URL}/logo-redecorporativa.png`,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  description:
    "Certified Zoho Partner providing CRM implementation, workflow automation, and business operations consulting.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  },
  areaServed: ["IN", "US", "GB", "AE", "AU"],
  sameAs: SOCIAL_LINKS.map((link) => link.href)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="mqZ-JI1GniUckBmMaBB8h5SFCzWv-1Ye7lVoZGx_QD4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17926414470" strategy="beforeInteractive" />
        <Script
          id="google-tag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17926414470');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Script
          id="zsiq-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`
          }}
        />
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq3c88192900d878cab25700811cb721480e1817e6dc71acd4bec948b90b9a2fbf"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
