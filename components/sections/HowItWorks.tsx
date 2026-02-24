import Container from "../ui/Container";

const steps = [
  {
    title: "Audit",
    description: "Review CRM setup, lead flow, and conversion blockers."
  },
  {
    title: "Blueprint",
    description: "Design the operations system, stages, and automations."
  },
  {
    title: "Build",
    description: "Implement integrations, AI rules, and reporting."
  },
  {
    title: "Optimize",
    description: "Refine performance with weekly reviews and support."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-12 md:py-16" id="process">
      <Container>
        <div className="text-center">
          {/* <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">How It Works</p> */}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            A proven path to predictable CRM performance
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Four focused steps to launch and optimize your business operations stack.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group rounded-2xl border border-slate-300 bg-slate-100 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1b2f67] text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-[#1b2f67]">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
