import Image from "next/image";
import type { ReactNode } from "react";
import Container from "../ui/Container";

type Highlight = {
  title: string;
  icon: ReactNode;
};

const highlights: Highlight[] = [
  {
    title: "24*7 Support",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
        <path d="M4 12a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 12v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 12v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    title: "Certified Consultants",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 19a5 5 0 0 1 10 0M11 19a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    title: "Business Centric Solutions",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Power of Team",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
        <circle cx="6.5" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2.5 18a4 4 0 0 1 8 0M8 18a4.5 4.5 0 0 1 9 0M13.5 18a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    title: "Cost Effective",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
        <path d="M4 18h16M6.5 18V9.5l3-2 3 2V18M15.5 18v-6.5l2.5-1.5 2.5 1.5V18" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11.5 12.5c1.5 0 1.5-2.5 0-2.5-1.7 0-1.7 3 0 3 1.5 0 1.5 2.5 0 2.5-1.7 0-1.7-3 0-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#eef4fb] py-14 md:py-20">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Why Zonic Tech</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d2f69] md:text-4xl">
            Why Teams Choose Us for Zoho Work
          </h2>
          <div className="mx-auto mt-3 h-1 w-32 bg-sky-500" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            5 years of certified Zoho experience. We set up, fix, and improve Zoho systems so your
            team gets clear processes and measurable results.
          </p>
        </div>

        {/* Banner image */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
          <div className="relative h-[32vh] w-full sm:h-[36vh] md:h-[42vh]">
            <Image
              src="/produts/bsannercontact.png"
              alt="Team collaborating on Zoho implementation strategy"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 1200px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d2f69]/30 to-transparent" />
          </div>
        </div>

        {/* Highlight cards — 1 col → 2 col → 3 col → 5 col, no orphan on mobile */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center rounded-2xl border border-white bg-white px-4 py-6 text-center shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-[#1d2f69]">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold leading-tight text-[#1d2f69]">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
