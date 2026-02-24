"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Container from "../ui/Container";

const testimonials = [
  {
    quote:
      "Their Business Operations plan gave our team instant clarity on follow-ups and pipeline hygiene.",
    name: "Grace",
    role: "Head of Sales",
    company: "Cloudridge",
    avatar: "/testimonials/graces.png"
  },
  {
    quote:
      "We finally have real-time dashboards and AI summaries that leadership actually uses.",
    name: "Marcus Lee",
    role: "Founder",
    company: "Northwind",
    avatar: "/testimonials/marcus-lee.png"
  },
  {
    quote:
      "Integrations and automations removed hours of manual work each week.",
    name: "Anita Rao",
    role: "Operations Lead",
    company: "Brightlane",
    avatar: "/testimonials/anita-rao.png"
  },
  {
    quote:
      "The CRM workflow and SLA setup improved our response quality across sales and support.",
    name: "Samuel Khanna",
    role: "Business Director",
    company: "Finspire",
    avatar: "/testimonials/samuel-khanna.png"
  }
];

const intervalMs = 5500;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useMemo(() => testimonials[activeIndex] ?? testimonials[0], [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-slate-50 py-14 md:py-20" id="customers">
      <Container>
        <div className="text-center">
          {/* <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Testimonials</p> */}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Our Clients Say
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 bg-sky-500" />
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-slate-300 bg-white px-2 text-lg text-[#253877] transition-colors hover:bg-slate-100"
            >
              ‹
            </button>

            <div className="mx-auto text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-[#253877] bg-slate-100 md:h-28 md:w-28">
                <Image
                  src={active.avatar}
                  alt={`${active.name} testimonial profile`}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-xl">
                “{active.quote}”
              </p>
              <p className="mt-4 text-xl font-semibold tracking-wide text-[#1b2f67]">
                {active.name}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {active.role} · {active.company}
              </p>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-slate-300 bg-white px-2 text-lg text-[#253877] transition-colors hover:bg-slate-100"
            >
              ›
            </button>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`border-b-2 pb-1 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-[#253877] text-[#253877]"
                      : "border-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
