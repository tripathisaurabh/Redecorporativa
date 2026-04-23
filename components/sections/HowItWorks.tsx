import Container from "../ui/Container";

const steps = [
  {
    title: "Discovery",
    description: "We review your current CRM setup, lead flow, and conversion blockers to map what needs fixing.",
    color: "bg-indigo-600"
  },
  {
    title: "Blueprint",
    description: "We design your operations system — pipeline stages, workflows, automations, and integrations.",
    color: "bg-sky-600"
  },
  {
    title: "Build",
    description: "We implement integrations, automation rules, custom functions, and reporting dashboards.",
    color: "bg-violet-600"
  },
  {
    title: "Optimize",
    description: "We refine performance with post-launch reviews, team training, and ongoing support retainers.",
    color: "bg-emerald-600"
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-14 md:py-20" id="process">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Our Process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            A proven path to predictable CRM performance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            Four focused steps to launch and optimize your business operations stack.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Connector line on desktop */}
          <div className="absolute left-0 right-0 top-[28px] hidden h-px bg-gradient-to-r from-indigo-200 via-sky-300 to-emerald-200 lg:block" aria-hidden="true" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Step number badge */}
                <div className={`relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full ${step.color} text-lg font-bold text-white ring-4 ring-white shadow-md`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
