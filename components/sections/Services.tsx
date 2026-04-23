import Image from "next/image";
import Container from "../ui/Container";

const services = [
  {
    title: "Zoho CRM Implementation & Setup",
    description:
      "End-to-end Zoho CRM setup including pipeline design, lead routing, SLA rules, stage-based automations, and team onboarding — built to match your exact sales process.",
    icon: "/icons/operations.svg",
    accent: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Workflow Automation & Integration",
    description:
      "Automate repetitive tasks with Zoho workflows, blueprints, and custom functions. Connect WhatsApp, Google Ads, email, payment gateways, and more into a single automated system.",
    icon: "/icons/automation.svg",
    accent: "from-sky-500 to-sky-600"
  },
  {
    title: "Zoho One & Multi-Product Rollouts",
    description:
      "Implement the full Zoho ecosystem — Zoho One, Zoho Finance Plus, Zoho People Plus, Zoho Books, Zoho Creator — configured to work together across your departments.",
    icon: "/icons/integrations.svg",
    accent: "from-violet-500 to-violet-600"
  },
  {
    title: "CRM Audit, Migration & Optimisation",
    description:
      "Fix broken Zoho setups, migrate data from Salesforce, HubSpot, or spreadsheets, and rebuild workflows for better adoption. Includes team training and ongoing support retainers.",
    icon: "/icons/analytics.svg",
    accent: "from-emerald-500 to-emerald-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <Container>
        <div className="mb-12 text-center">
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
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Top accent line */}
              <div className={`absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${service.accent}`} />
              {/* Icon in gradient container */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} shadow-sm`}>
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={28}
                  height={28}
                  className="h-7 w-7 brightness-0 invert"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
