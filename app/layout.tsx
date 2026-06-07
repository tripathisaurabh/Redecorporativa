import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { defaultMetadata } from "../lib/seo";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="mqZ-JI1GniUckBmMaBB8h5SFCzWv-1Ye7lVoZGx_QD4" />
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
          src="https://salesiq.zohopublic.in/widget?wc=siqc04a77765480c02861c87635eb2f2e19efcb9e472bbb1f621a0e4812994c6129"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
