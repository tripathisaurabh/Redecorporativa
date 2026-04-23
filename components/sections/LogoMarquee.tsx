import Container from "../ui/Container";

const items = [
  "SaaS",
  "Fintech",
  "EdTech",
  "HealthTech",
  "PropTech",
  "B2B",
  "Startups",
  "Scaleups",
  "Enterprises",
  "Agencies",
  "Consulting",
  "Sales Ops",
  "Growth Ops",
  "Support Ops",
  "Field Sales"
];

export default function LogoMarquee() {
  return (
    <section className="border-y border-slate-100 bg-white py-6">
      <Container className="mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted across industries
        </p>
      </Container>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee items-center text-[11px] font-semibold uppercase tracking-widest text-slate-500">
          {[...items, ...items].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-4">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 whitespace-nowrap">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
