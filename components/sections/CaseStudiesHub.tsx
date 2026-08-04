"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { caseStudies, type CaseStudy } from "../../lib/caseStudies";

export default function CaseStudiesHub() {
  // Group case studies by industry, preserving first-seen order
  const industries = useMemo(() => {
    const map = new Map<string, CaseStudy[]>();
    for (const study of caseStudies) {
      if (!map.has(study.industry)) map.set(study.industry, []);
      map.get(study.industry)!.push(study);
    }
    return Array.from(map.entries());
  }, []);

  // First industry open by default
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    industries[0] ? { [industries[0][0]]: true } : {}
  );
  const toggle = (industry: string) => setOpen((prev) => ({ ...prev, [industry]: !prev[industry] }));

  return (
    <section className="bg-slate-100 py-14 md:py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">Case Studies</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            Real implementation stories, grouped by industry. Expand an industry to see the clients we&apos;ve
            delivered for.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl space-y-4">
          {industries.map(([industry, studies]) => {
            const isOpen = !!open[industry];
            return (
              <div key={industry} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => toggle(industry)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-[#22336f] md:text-xl">{industry}</h2>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {studies.length} client{studies.length > 1 ? "s" : ""}
                    </p>
                  </div>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#243476] text-white" : ""
                    }`}
                  >
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50/60 p-5 md:p-6">
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {studies.map((study) => (
                        <article
                          key={study.slug}
                          className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <Link href={`/case-studies/${study.slug}`} className="block">
                            <div className="relative h-40 w-full bg-slate-100">
                              <Image
                                src={study.coverImage}
                                alt={study.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                            </div>
                          </Link>
                          <div className="flex flex-1 flex-col p-5">
                            <h3 className="text-lg font-semibold leading-snug text-[#22336f]">{study.title}</h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{study.summary}</p>
                            <div className="mt-4">
                              <Link
                                href={`/case-studies/${study.slug}`}
                                className="inline-flex items-center rounded-lg bg-[#243476] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1a285e]"
                              >
                                Read Case Study
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
