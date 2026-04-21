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
import { SITE_ADDRESS, SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_URL, SOCIAL_LINKS } from "../lib/constants";

export const metadata: Metadata = {
  title: "Zoho Partner | Business Operations + Workflow Automation",
  description:
    "Zonic Tech Solutions is a certified Zoho Partner helping businesses automate workflows, streamline CRM operations, and scale without manual work. Serving clients in India, US, UK, UAE, and Australia.",
  keywords: buildKeywords(
    "Zoho consulting USA",
    "Zoho partner India",
    "CRM operations services",
    "Automation-driven CRM workflows",
    "Revenue acceleration services",
    "CRM setup and optimization",
    "Zoho implementation partner",
    "business process automation"
  ),
  alternates: {
    canonical: buildCanonical("/")
  },
  openGraph: {
    title: "Zonic Tech Solutions | Zoho Partner & Workflow Automation",
    description:
      "Certified Zoho Partner helping businesses automate workflows, streamline CRM, and scale operations. Serving India, US, UK, UAE & Australia.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Zonic Tech Solutions – Zoho Partner & Workflow Automation"
      }
    ]
  },
  twitter: {
    title: "Zonic Tech Solutions | Zoho Partner & Workflow Automation",
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
    url: `${SITE_URL}/logo_zonic-removebg-preview.png`
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
    "Zonic Tech Solutions is a certified Zoho Premium Partner providing CRM implementation, workflow automation, and business operations consulting to companies across India, US, UK, UAE, and Australia."
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
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily support Zoho CRM but also work with HubSpot, Salesforce, and custom CRMs."
      }
    },
    {
      "@type": "Question",
      name: "How long does implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Business Operations builds are completed in 2–6 weeks depending on integrations."
      }
    },
    {
      "@type": "Question",
      name: "Do you fix existing CRM setups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We review and clean existing CRMs, then redesign workflows for better adoption."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide WhatsApp automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We connect WhatsApp for lead alerts, follow-ups, and reminders."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ongoing optimization and support are available as monthly retainers."
      }
    },
    {
      "@type": "Question",
      name: "Are automated workflows safe for business data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow data privacy best practices and only use approved, secure automation workflows."
      }
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
      <HowItWorks />
      <SmartZohoSolutions />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
    </>
  );
}
