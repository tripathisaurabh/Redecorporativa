import type { Metadata } from "next";
import Script from "next/script";
import Hero from "../components/sections/Hero";
import LogoMarquee from "../components/sections/LogoMarquee";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import PartnershipShowcase from "../components/sections/PartnershipShowcase";
import Capabilities from "../components/sections/Capabilities";
import SmartZohoSolutions from "../components/sections/SmartZohoSolutions";
import HowItWorks from "../components/sections/HowItWorks";
import CaseStudies from "../components/sections/CaseStudies";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import { buildCanonical, buildKeywords } from "../lib/seo";
import { SITE_ADDRESS, SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Business Operations + Workflow Automation",
  description:
    "Business Operations and workflow automation services that improve conversions, reduce manual work, and deliver clear reporting.",
  keywords: buildKeywords(
    "Zoho consulting USA",
    "CRM operations services",
    "Automation-driven CRM workflows",
    "Revenue acceleration services",
    "CRM setup and optimization"
  ),
  alternates: {
    canonical: buildCanonical("/")
  },
  openGraph: {
    title: "Business Operations + Workflow Automation",
    description:
      "Business Operations and workflow automation services that improve conversions, reduce manual work, and deliver clear reporting.",
    url: SITE_URL
  },
  twitter: {
    title: "Business Operations + Workflow Automation",
    description:
      "Business Operations and workflow automation services that improve conversions, reduce manual work, and deliver clear reporting."
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_ADDRESS,
    addressCountry: "IN"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_ADDRESS,
    addressCountry: "IN"
  }
};

const crmServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Operations",
  provider: {
    "@type": "Organization",
    name: SITE_NAME
  },
  areaServed: "IN",
  serviceType: "Business Operations"
};

const automationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Workflow Automation",
  provider: {
    "@type": "Organization",
    name: SITE_NAME
  },
  areaServed: "IN",
  serviceType: "Workflow Automation"
};

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [organizationSchema, localBusinessSchema, crmServiceSchema, automationServiceSchema]
          })
        }}
      />
      <Hero />
      <LogoMarquee />
      <WhyChooseUs />
      <PartnershipShowcase />
      <Capabilities />
      <HowItWorks />
      <SmartZohoSolutions />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
    </>
  );
}
