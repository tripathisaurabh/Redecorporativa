"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

const certifications = [
  { label: "Zoho Partner", src: "/partnership/partner.png" },
  { label: "Zoho Administrator", src: "/partnership/administrator.png" },
  { label: "Zoho Associate", src: "/partnership/associate.png" },
  { label: "Zoho Recruit", src: "/partnership/recruit.png" },
];

const supportPills = [
  "Post-Delivery Support",
  "Flexible Working Hours",
  "Customer First Approach",
  "24x7 Support Available"
];

const coreValues = [
  "Client Success",
  "Innovation",
  "Transparency",
  "Excellence",
];

const stats = [
  { value: "100+", label: "Clients Served" },
  { value: "5+", label: "Years of Experience" },
  { value: "55+", label: "Zoho Products Expertise" },
  { value: "4", label: "Countries Served" },
];

const missionVision = [
  {
    title: "Mission",
    description:
      "We support businesses to enable growth, efficiency, and sustainability by implementing innovative cloud-based IT solutions."
  },
  {
    title: "Vision",
    description: "Enabling growth through digital transformation."
  }
];

const workSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We map your workflows, pain points, and current stack before any implementation begins."
  },
  {
    step: "02",
    title: "Design",
    description: "We shape a practical delivery plan that fits your team, timelines, and growth priorities."
  },
  {
    step: "03",
    title: "Build",
    description: "We configure the systems, automations, and integrations that remove manual work."
  },
  {
    step: "04",
    title: "Launch",
    description: "We test, train, and roll out the new flow so the team can adopt it with confidence."
  },
  {
    step: "05",
    title: "Support",
    description: "We stay available after go-live to refine, troubleshoot, and improve the setup."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[rgba(1,10,52,1)] py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/herobg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,10,52,0.6)] to-[rgba(1,10,52,1)]" />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            About Redecorporativa
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Helping businesses grow with{" "}
            <span className="text-indigo-400">Zoho &amp; Automation</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Redecorporativa is a trusted IT consulting firm offering Zoho CRM, Zoho One, and 55+
            Zoho product solutions — proudly serving clients across India, US, UK, UAE, and Australia.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-us">Get in Touch</Button>
            <Link
              href="/#solutions"
              className="inline-flex h-11 items-center rounded-full border border-slate-500 px-6 text-sm font-medium text-slate-200 transition hover:border-white hover:text-white"
            >
              Explore Solutions
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="border-b border-slate-800 bg-[rgba(1,10,52,0.97)] py-10">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-indigo-400">{s.value}</span>
                <span className="mt-1 text-sm text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About Us */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Who We Are
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                About Us
              </h2>
              {/* <p className="mt-2 text-sm font-medium text-slate-500">
                ISO 9001-2015 &amp; ISO 27001:2022 Certified Company
              </p> */}

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Image
                  src="/partnership/partner.png"
                  alt="Zoho Premium Partner"
                  width={140}
                  height={50}
                  className="h-auto w-32 object-contain"
                />
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Redecorporativa, based in India since 2019, is a trusted IT consulting firm
                offering Zoho CRM, Zoho One, Zoho Creator, and 55+ Zoho product solutions.
                Proudly serving clients across the world, we have delivered projects to businesses
                globally. Our expert team makes digital transformation seamless through Zoho.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We don&apos;t just implement software — we design operational systems that drive revenue,
                reduce manual work, and give leadership the visibility they need to scale with
                confidence.
              </p>

              <div className="mt-8">
                <Button href="/book-us">Get Free Consultation</Button>
              </div>
            </div>

            {/* Right: image with overlay badge */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/What-is-it-like-working-in-IT-e1651761435165.jpg"
                  alt="Redecorporativa IT team at work"
                  width={600}
                  height={420}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-xl bg-indigo-600 px-5 py-4 text-white shadow-lg">
                <p className="text-2xl font-bold">100+</p>
                <p className="text-xs text-indigo-200">Happy Clients Worldwide</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Support Pills */}
      <section className="border-y border-slate-200 bg-white py-6 md:py-8">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {supportPills.map((pill) => (
              <div
                key={pill}
                className="rounded-full bg-sky-100 px-6 py-5 text-center text-base font-semibold text-slate-900 shadow-sm md:text-lg"
              >
                {pill}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Certified Experts
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Verified Zoho Certifications
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {certifications.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-3">
                <Image
                  src={c.src}
                  alt={c.label}
                  width={100}
                  height={100}
                  className="h-20 w-auto object-contain"
                />
                <span className="text-xs text-slate-500">{c.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Core Values */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          backgroundColor: "#f6f9fc",
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(15,23,42,0.06) 0 2px, transparent 2px 20px), repeating-linear-gradient(45deg, rgba(15,23,42,0.04) 0 2px, transparent 2px 18px)",
        }}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Mission + Vision */}
            <div className="space-y-10 text-center lg:text-left">
              {missionVision.map((item) => (
                <div key={item.title}>
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                    {item.title}
                  </h2>
                  <div className="mx-auto mt-3 flex items-center justify-center gap-1 lg:mx-0 lg:justify-start">
                    <span className="h-1 w-6 rounded-full bg-sky-500" />
                    <span className="h-1 w-2 rounded-full bg-sky-400" />
                    <span className="h-1 w-2 rounded-full bg-sky-300" />
                  </div>
                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-600 lg:mx-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Core Values */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Core Values
              </h2>
              <div className="mx-auto mt-3 flex items-center justify-center gap-1 lg:mx-0 lg:justify-start">
                <span className="h-1 w-6 rounded-full bg-sky-500" />
                <span className="h-1 w-2 rounded-full bg-sky-400" />
                <span className="h-1 w-2 rounded-full bg-sky-300" />
              </div>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-600 lg:mx-0">
                We believe in transparency, teamwork, and putting clients first. We work closely with
                every business to deliver solutions that truly make a difference.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {coreValues.map((value) => (
                  <div
                    key={value}
                    className="flex items-center justify-center rounded-xl bg-[#27357c] px-4 py-5 text-center shadow-sm"
                  >
                    <span className="text-sm font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="relative overflow-hidden bg-[#1d2f69] py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.22), transparent 34%), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "auto, 120px 120px, 120px 120px",
            backgroundPosition: "center top, center, center"
          }}
        />
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              How We Work for Our Customers
            </h2>
            <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-sky-400" />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {workSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-lg font-semibold text-[#1d2f69]">
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-20">
        <Container className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to transform your operations?
          </h2>
          <p className="mt-4 max-w-xl text-base text-indigo-100">
            Book a free consultation and get a clear, actionable roadmap tailored to your business.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-us"
              className="inline-flex h-11 items-center rounded-full bg-white px-8 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full border border-indigo-400 px-8 text-sm font-medium text-white transition hover:border-white"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
