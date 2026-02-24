"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { caseStudies, platformTabs } from "../../lib/caseStudies";

type PlatformKey = (typeof platformTabs)[number]["key"];

export default function CaseStudiesHub() {
  const [activePlatform, setActivePlatform] = useState<PlatformKey>("zoho");

  const filteredStudies = useMemo(
    () => caseStudies.filter((study) => study.platform === activePlatform),
    [activePlatform]
  );

  return (
    <section className="bg-slate-100 py-14 md:py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">Case Studies</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            Real implementation stories from teams that improved operations with structured Zoho delivery.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {platformTabs.map((tab) => {
            const isActive = tab.key === activePlatform;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActivePlatform(tab.key)}
                className={`rounded-xl px-7 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[#243476] text-white"
                    : "bg-[#dbe9f5] text-slate-700 hover:bg-[#d0e1ef]"
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {filteredStudies.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-lg font-semibold text-slate-900">No case studies published yet for this stack.</p>
            <p className="mt-2 text-sm text-slate-600">Switch to another platform tab to view available stories.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredStudies.map((study) => (
              <article
                key={study.slug}
                className="overflow-hidden rounded-2xl border border-[#2d3e84] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <Link href={`/case-studies/${study.slug}`} className="block">
                  <div className="relative h-52 w-full bg-slate-100">
                    <Image
                      src={study.coverImage}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
                    <p className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">{study.industry}</p>
                  </div>
                </Link>

                <div className="p-5">
                  <h2 className="text-3xl font-semibold leading-tight text-[#22336f]">{study.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{study.summary}</p>
                  <div className="mt-5">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center rounded-lg bg-[#243476] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1a285e]"
                    >
                      Read Case Study
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
