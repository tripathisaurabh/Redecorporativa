import type { Metadata } from "next";
import Script from "next/script";
import Hero from "../components/sections/Hero";
import LogoMarquee from "../components/sections/LogoMarquee";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import PartnershipShowcase from "../components/sections/PartnershipShowcase";
import Capabilities from "../components/sections/Capabilities";
import Services from "../components/sections/Services";
import SmartZohoSolutions from "../components/sections/SmartZohoSolutions";
import HowItWorks from "../components/sections/HowItWorks";
import CaseStudies from "../components/sections/CaseStudies";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import { buildCanonical, buildKeywords } from "../lib/seo";
import { SITE_ADDRESS, SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_URL, SOCIAL_LINKS } from "../lib/constants";

export const metadata: Metadata = {
  title: "Zoho Consulting & CRM Implementation | Certified Zoho Partner India",
  description:
    "Redecorporativa — certified Zoho Premium Partner since 2019. We implement Zoho CRM, Zoho One, workflow automation, and business operations for growing companies in India, USA, UK, UAE, and Australia. Book a free consultation.",
  keywords: buildKeywords(
    "Zoho consulting India",
    "Zoho CRM implementation service",
    "certified Zoho partner",
    "Zoho One setup India",
    "CRM implementation company India",
    "Zoho automation service",
    "Zoho CRM customization India",
    "business workflow automation"
  ),
  alternates: {
    canonical: buildCanonical("/")
  },
  openGraph: {
    title: "Redecorporativa | Zoho Partner & Workflow Automation",
    description:
      "Certified Zoho Partner helping businesses automate workflows, streamline CRM, and scale operations. Serving India, US, UK, UAE & Australia.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Redecorporativa – Zoho Partner & Workflow Automation"
      }
    ]
  },
  twitter: {
    title: "Redecorporativa | Zoho Partner & Workflow Automation",
    description:
      "Certified Zoho Partner helping businesses automate workflows, streamline CRM, and scale operations.",
    images: [`${SITE_URL}/hero.png`]
  }
};

const areaServed = [
  { "@type": "Country", name: "India" },
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "Australia" }
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-redecorporativa.png`
  },
  image: `${SITE_URL}/hero.png`,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_ADDRESS,
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  },
  areaServed,
  sameAs: SOCIAL_LINKS.map((s) => s.href),
  foundingDate: "2019",
  description:
    "Redecorporativa is a certified Zoho Premium Partner providing CRM implementation, workflow automation, and business operations consulting to companies across India, US, UK, UAE, and Australia."
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/hero.png`,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_ADDRESS,
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  },
  areaServed,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
    bestRating: "5"
  }
};

const crmServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM Implementation & Business Operations Consulting",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME
  },
  areaServed,
  serviceType: "CRM Implementation",
  description:
    "End-to-end Zoho CRM setup, pipeline design, lead automation, and business operations consulting for growing businesses.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book-us`
  }
};

const automationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Workflow Automation Services",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME
  },
  areaServed,
  serviceType: "Workflow Automation",
  description:
    "Custom workflow automation using Zoho, including WhatsApp alerts, lead routing, follow-up sequences, and cross-system integrations.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book-us`
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/case-studies?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What CRMs do you work with?",
      acceptedAnswer: { "@type": "Answer", text: "We primarily implement and support Zoho CRM, but also work with HubSpot, Salesforce, and custom CRMs. As a certified Zoho Premium Partner, Zoho CRM is our core specialisation." }
    },
    {
      "@type": "Question",
      name: "What is the difference between Zoho One and Zoho CRM?",
      acceptedAnswer: { "@type": "Answer", text: "Zoho CRM is a dedicated sales and customer relationship tool. Zoho One is a full business suite that includes CRM plus 45+ apps — covering finance, HR, marketing, helpdesk, and operations — all under one licence. We help you decide which fits your stage and budget." }
    },
    {
      "@type": "Question",
      name: "How much does Zoho CRM implementation cost?",
      acceptedAnswer: { "@type": "Answer", text: "Cost depends on the number of modules, integrations, and customisations required. Projects range from a starter CRM setup to a fully automated multi-department rollout. We provide a clear scope and fixed-price quote after a free discovery call — no surprises." }
    },
    {
      "@type": "Question",
      name: "Can you migrate data from Salesforce, HubSpot, or spreadsheets to Zoho?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We handle data migration from Salesforce, HubSpot, Pipedrive, Excel, Google Sheets, and other systems into Zoho. We map fields, clean duplicates, and validate data before go-live." }
    },
    {
      "@type": "Question",
      name: "Do you provide Zoho consulting services outside India?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We serve clients across India, USA, UK, UAE, and Australia. All engagements are delivered remotely with flexible working hours to match your timezone." }
    },
    {
      "@type": "Question",
      name: "How long does a Zoho implementation take?",
      acceptedAnswer: { "@type": "Answer", text: "A standard Zoho CRM setup typically takes 2–4 weeks. Larger rollouts with Zoho One, custom integrations, or multiple departments take 4–8 weeks. We share a detailed project timeline before work begins." }
    },
    {
      "@type": "Question",
      name: "Do you provide Zoho training for our team?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Every implementation includes handover training covering how to use the CRM, manage workflows, and run reports. We also offer follow-up training sessions for new staff." }
    },
    {
      "@type": "Question",
      name: "Can Zoho CRM integrate with WhatsApp, Google Ads, and other tools?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We connect Zoho CRM with WhatsApp Business API, Google Ads, Meta Ads, Mailchimp, Shopify, payment gateways, and more — so all customer activity is visible in one place with automations firing across every channel." }
    },
    {
      "@type": "Question",
      name: "Do you fix existing broken Zoho CRM setups?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We audit your current Zoho configuration, identify gaps and unused features, and rebuild workflows for better team adoption. Most businesses see immediate improvement in data quality and CRM usage after an audit." }
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing Zoho support after implementation?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Monthly retainers are available for ongoing optimisation, troubleshooting, new feature rollouts, and system improvements as your business grows." }
    },
    {
      "@type": "Question",
      name: "Are automated workflows safe for our business data?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. All automation is built on Zoho's enterprise-grade infrastructure with role-based access and audit logs. We follow data privacy best practices and only use secure, approved integration methods." }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Grace" },
      reviewBody:
        "Their Business Operations plan gave our team instant clarity on follow-ups and pipeline hygiene.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marcus Lee" },
      reviewBody:
        "We finally have real-time dashboards and automated summaries that leadership actually uses.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Anita Rao" },
      reviewBody: "Integrations and automations removed hours of manual work each week.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Samuel Khanna" },
      reviewBody:
        "The CRM workflow and SLA setup improved our response quality across sales and support.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }
    }
  ]
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
            "@graph": [
              websiteSchema,
              organizationSchema,
              localBusinessSchema,
              crmServiceSchema,
              automationServiceSchema,
              faqSchema,
              reviewSchema
            ]
          })
        }}
      />
      <Hero />
      <LogoMarquee />
      <WhyChooseUs />
      <PartnershipShowcase />
      <Capabilities />
      <Services />
      <HowItWorks />
      <SmartZohoSolutions />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
    </>
  );
}
