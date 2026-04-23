import Image from "next/image";
import Container from "../ui/Container";
import Card from "../ui/Card";

const services = [
  {
    title: "Zoho CRM Implementation & Setup",
    description:
      "End-to-end Zoho CRM setup including pipeline design, lead routing, SLA rules, stage-based automations, and team onboarding — built to match your exact sales process.",
    icon: "/icons/operations.svg"
  },
  {
    title: "Workflow Automation & Integration",
    description:
      "Automate repetitive tasks with Zoho workflows, blueprints, and custom functions. Connect WhatsApp, Google Ads, email, payment gateways, and more into a single automated system.",
    icon: "/icons/automation.svg"
  },
  {
    title: "Zoho One & Multi-Product Rollouts",
    description:
      "Implement the full Zoho ecosystem — Zoho One, Zoho Finance Plus, Zoho People Plus, Zoho Books, Zoho Creator — configured to work together across your departments.",
    icon: "/icons/integrations.svg"
  },
  {
    title: "CRM Audit, Migration & Optimisation",
    description:
      "Fix broken Zoho setups, migrate data from Salesforce, HubSpot, or spreadsheets, and rebuild workflows for better adoption. Includes team training and ongoing support retainers.",
    icon: "/icons/analytics.svg"
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Our Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Zoho Consulting & CRM Implementation Services
          </h2>
          <div className="mx-auto mt-3 h-1 w-32 bg-sky-500" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            From initial Zoho CRM setup to full Zoho One rollouts — we design, build, and automate
            the systems that remove manual work and drive predictable growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
