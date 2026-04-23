import Accordion from "../ui/Accordion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

const faqItems = [
  {
    id: "faq-crm",
    title: "What CRMs do you work with?",
    content:
      "We primarily implement and support Zoho CRM, but also work with HubSpot, Salesforce, and custom CRMs. As a certified Zoho Premium Partner, Zoho CRM is our core specialisation."
  },
  {
    id: "faq-zoho-one-vs-crm",
    title: "What is the difference between Zoho One and Zoho CRM?",
    content:
      "Zoho CRM is a dedicated sales and customer relationship tool. Zoho One is a full business suite that includes CRM plus 45+ apps — covering finance, HR, marketing, helpdesk, and operations — all under one licence. We help you decide which fits your stage and budget."
  },
  {
    id: "faq-cost",
    title: "How much does Zoho CRM implementation cost?",
    content:
      "Cost depends on the number of modules, integrations, and customisations required. Projects range from a starter CRM setup to a fully automated multi-department rollout. We provide a clear scope and fixed-price quote after a free discovery call — no surprises."
  },
  {
    id: "faq-migration",
    title: "Can you migrate data from Salesforce, HubSpot, or spreadsheets to Zoho?",
    content:
      "Yes. We handle data migration from Salesforce, HubSpot, Pipedrive, Excel, Google Sheets, and other systems into Zoho. We map fields, clean duplicates, and validate the data before go-live."
  },
  {
    id: "faq-countries",
    title: "Do you provide Zoho consulting services outside India?",
    content:
      "Yes. We serve clients across India, USA, UK, UAE, and Australia. All engagements are delivered remotely with flexible working hours to match your timezone."
  },
  {
    id: "faq-timeline",
    title: "How long does a Zoho implementation take?",
    content:
      "A standard Zoho CRM setup typically takes 2–4 weeks. Larger rollouts with Zoho One, custom integrations, or multiple departments take 4–8 weeks. We share a detailed project timeline before work begins."
  },
  {
    id: "faq-training",
    title: "Do you provide Zoho training for our team?",
    content:
      "Yes. Every implementation includes handover training for your team — covering how to use the CRM, manage workflows, and run reports. We also offer follow-up training sessions for new staff."
  },
  {
    id: "faq-whatsapp",
    title: "Can Zoho CRM integrate with WhatsApp, Google Ads, and other tools?",
    content:
      "Yes. We connect Zoho CRM with WhatsApp Business API, Google Ads, Meta Ads, Mailchimp, Shopify, payment gateways, and more — so all customer activity is visible in one place with automations firing across every channel."
  },
  {
    id: "faq-fix",
    title: "Do you fix existing broken Zoho CRM setups?",
    content:
      "Yes. We audit your current Zoho configuration, identify gaps and unused features, and rebuild workflows for better team adoption. Most businesses see immediate improvement in data quality and CRM usage after an audit."
  },
  {
    id: "faq-support",
    title: "Do you offer ongoing Zoho support after implementation?",
    content:
      "Yes. Monthly retainers are available for ongoing optimisation, troubleshooting, new feature rollouts, and system improvements as your business grows."
  },
  {
    id: "faq-workflows",
    title: "Are automated workflows safe for our business data?",
    content:
      "Absolutely. All automation is built on Zoho's enterprise-grade infrastructure with role-based access and audit logs. We follow data privacy best practices and only use secure, approved integration methods."
  }
];

export default function FAQ() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Clear answers before you book a consultation"
          subtitle="Straight answers before you book a consultation."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Accordion items={faqItems} />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Still have questions?
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">Book a Free Consultation</h3>
            <p className="mt-3 text-sm text-slate-600">
              Get a tailored Business Operations plan with clear next steps.
            </p>
            <div className="mt-6">
              <Button href="/book-us">Book a Free Consultation</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
