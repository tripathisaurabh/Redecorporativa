import type { Metadata } from "next";
import ServicePage, { ServicePageData } from "../../components/sections/ServicePage";
import { buildCanonical, buildKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Zoho CRM Implementation Partner in India | Setup, Customization & Automation",
  description:
    "Certified Zoho CRM partner in India. We implement, customize, automate, and migrate Zoho CRM for sales teams — flexible hourly, packaged-hour, and project pricing. Book a free consultation.",
  keywords: buildKeywords(
    "Zoho CRM partner India",
    "Zoho CRM implementation India",
    "Zoho CRM consultant",
    "Zoho CRM setup India",
    "Zoho CRM customization",
    "Zoho CRM automation",
    "hire Zoho CRM expert"
  ),
  alternates: { canonical: buildCanonical("/zoho-crm") },
  openGraph: {
    title: "Zoho CRM Implementation Partner in India",
    description:
      "Certified Zoho CRM partner — implementation, customization, automation, and data migration for growing sales teams.",
    url: buildCanonical("/zoho-crm"),
    type: "website"
  }
};

const data: ServicePageData = {
  slug: "zoho-crm",
  eyebrow: "Zoho CRM",
  heading: "Zoho CRM Implementation Partner in India",
  intro:
    "We help sales teams turn Zoho CRM into a predictable, automated pipeline — from first setup to advanced workflows, integrations, and data migration. Certified Zoho partner serving India, US, UK, UAE, and Australia.",
  image: "/products/Zoho-CRM.webp",
  imageAlt: "Zoho CRM implementation partner",
  overview:
    "Most teams buy Zoho CRM and use a fraction of it — leads slip through the cracks, stages are used inconsistently, and reps spend more time on data entry than selling. As a certified Zoho partner, we configure CRM around how your team actually sells, automate the repetitive work, and connect it to the tools you already use, so your pipeline becomes something you can trust and forecast.",
  painPoints: [
    "Leads come in from many channels but live in scattered inboxes and sheets",
    "Pipeline stages mean different things to different reps, so forecasts are unreliable",
    "Follow-ups depend on memory, and warm leads go cold",
    "Reporting takes hours of manual export and cleanup",
    "An earlier Zoho setup was half-finished and the team stopped using it"
  ],
  outcomes: [
    "A single source of truth for every lead, contact, and deal",
    "Automated lead capture, routing, and follow-up reminders",
    "Clean, consistent pipeline stages with accurate forecasting",
    "Live dashboards your team and management actually use",
    "Hands-on training so adoption sticks after go-live"
  ],
  capabilities: [
    {
      title: "CRM Setup & Configuration",
      description:
        "Modules, pipelines, fields, layouts, roles, and permissions configured around your sales process — not a generic template."
    },
    {
      title: "Workflow Automation",
      description:
        "Lead assignment, follow-up sequences, approval flows, and SLA reminders built with Zoho workflows, blueprints, and Deluge."
    },
    {
      title: "Integrations",
      description:
        "Connect Zoho CRM with WhatsApp, Google & Meta Ads, IndiaMART, email, telephony, payment gateways, and the rest of your stack."
    },
    {
      title: "Data Migration",
      description:
        "Move from Salesforce, HubSpot, Pipedrive, Excel, or Google Sheets with field mapping, de-duplication, and validation before go-live."
    },
    {
      title: "Dashboards & Reporting",
      description:
        "Sales funnels, conversion rates, rep performance, and revenue forecasting in dashboards leadership can read at a glance."
    },
    {
      title: "Audit & Rescue",
      description:
        "Already on Zoho but it's not working? We audit your setup, fix gaps, rebuild broken workflows, and drive adoption."
    }
  ],
  faqs: [
    {
      id: "crm-cost",
      title: "How much does Zoho CRM implementation cost in India?",
      content:
        "It depends on scope. We offer flexible hourly consulting, discounted packaged-hour blocks (50, 100, 200, or 400 hours), and fixed-price project engagements. After a free discovery call we recommend the right model and share a clear quote — no surprises."
    },
    {
      id: "crm-time",
      title: "How long does a Zoho CRM setup take?",
      content:
        "A standard Zoho CRM setup typically takes 2–4 weeks. Larger rollouts with custom automation, multiple teams, or several integrations usually take 4–8 weeks. We share a detailed timeline before any work begins."
    },
    {
      id: "crm-migrate",
      title: "Can you migrate our data from Salesforce, HubSpot, or spreadsheets?",
      content:
        "Yes. We migrate from Salesforce, HubSpot, Pipedrive, Excel, Google Sheets, and other systems into Zoho CRM. We map fields, clean duplicates, and validate everything before go-live so nothing is lost."
    },
    {
      id: "crm-whatsapp",
      title: "Can Zoho CRM integrate with WhatsApp and our ad platforms?",
      content:
        "Yes. We connect Zoho CRM with the WhatsApp Business API, Google Ads, Meta Ads, IndiaMART, Mailchimp, payment gateways, and more, so every lead and conversation is captured in one place with automations firing across channels."
    },
    {
      id: "crm-fix",
      title: "We already have Zoho CRM but it's a mess. Can you fix it?",
      content:
        "Absolutely. We audit your current configuration, identify unused features and broken workflows, and rebuild the setup for adoption. Most teams see an immediate jump in data quality and CRM usage after an audit."
    },
    {
      id: "crm-training",
      title: "Do you train our team?",
      content:
        "Every implementation includes handover training covering daily use, workflows, and reporting. Follow-up sessions and ongoing support retainers are available for new staff and continued optimization."
    },
    {
      id: "crm-outside-india",
      title: "Do you work with clients outside India?",
      content:
        "Yes. We serve clients across India, the USA, UK, UAE, and Australia. Engagements are delivered remotely with flexible hours to match your timezone."
    }
  ],
  serviceType: "Zoho CRM Implementation",
  serviceDescription:
    "Zoho CRM implementation, customization, workflow automation, integration, and data migration by a certified Zoho partner."
};

export default function ZohoCrmPage() {
  return <ServicePage data={data} />;
}
