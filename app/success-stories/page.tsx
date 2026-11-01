import type { Metadata } from "next";
import Script from "next/script";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_URL } from "../../lib/constants";
import {
  successStories,
  clientReviews,
  successStats,
  clientLogos,
  zohoAppLabels
} from "../../lib/successStories";

export const metadata: Metadata = {
  title: "Success Stories — Client Zoho Projects",
  description:
    "Real Zoho and custom-app projects delivered by Redecorporativa — CAFM, CRM, Creator apps, automation and integrations for clients across India, the USA, UK, Australia, the Middle East and more.",
  keywords: buildKeywords(
    "Zoho case studies",
    "Zoho success stories",
    "Zoho implementation examples",
    "Zoho Creator project examples",
    "Zoho CRM client results"
  ),
  alternates: { canonical: buildCanonical("/success-stories") },
  openGraph: {
    title: "Success Stories — Client Zoho Projects | Redecorporativa",
    description: "Real businesses running on systems we built — CAFM, CRM, Creator apps, automation and integrations.",
    url: `${SITE_URL}/success-stories`,
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Redecorporativa success stories" }]
  },
  twitter: {
    title: "Success Stories — Client Zoho Projects | Redecorporativa",
    description: "Real businesses running on systems we built.",
    images: [`${SITE_URL}/hero.png`]
  }
};

const BLUE = "#2C6DAF";
const INK = "#12161B";
const NIGHT = "#0C1724";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Redecorporativa — client success stories",
  itemListElement: successStories.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${s.name} — ${s.headline}`
  }))
};

function ClientLogo({ slug, name }: { slug: string; name: string }) {
  const file = clientLogos[slug];
  if (file) {
    return (
      <span className="inline-flex h-[60px] items-center rounded-xl border border-slate-200 bg-white px-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/success/logos/${file}`}
          alt={`${name} logo`}
          className="max-h-11 w-auto max-w-[150px] object-contain"
        />
      </span>
    );
  }
  return (
    <span
      className="grid h-[60px] w-[60px] place-items-center rounded-xl border border-slate-200 bg-white text-lg font-bold"
      style={{ color: "#1F4E7A", fontFamily: "Archivo, Inter, sans-serif" }}
    >
      {initials(name)}
    </span>
  );
}

function AppIcons({ keys }: { keys: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {keys.map((k) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={k}
          src={`/success/zoho/${k}.png`}
          alt={zohoAppLabels[k] ?? k}
          title={`Zoho ${zohoAppLabels[k] ?? k}`}
          className="h-7 w-7"
        />
      ))}
    </div>
  );
}

export default function SuccessStoriesPage() {
  return (
    <>
      <Script
        id="success-stories-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@keyframes ss-marq{to{transform:translateX(calc(-50% - 14px))}}" +
            ".ss-track{animation:ss-marq 32s linear infinite}" +
            ".ss-marquee:hover .ss-track{animation-play-state:paused}" +
            "@media (prefers-reduced-motion:reduce){.ss-track{animation:none}}"
        }}
      />

      {/* Hero — light */}
      <section
        className="border-b border-slate-200 py-16 md:py-20"
        style={{
          background:
            "radial-gradient(60% 90% at 95% 0%, rgba(44,109,175,.16), transparent 65%), radial-gradient(45% 60% at 0% 100%, rgba(14,159,90,.08), transparent 65%), linear-gradient(180deg,#F3F7FC,#FFFFFF)"
        }}
      >
        <Container>
          <p
            className="text-xs font-semibold uppercase tracking-[0.12em]"
            style={{ color: BLUE }}
          >
            Success Stories · Zoho delivery
          </p>
          <h1
            className="mt-3 max-w-[20ch] text-4xl font-extrabold tracking-tight md:text-5xl"
            style={{ color: INK }}
          >
            Real businesses, running on systems we built
          </h1>
          <p className="mt-5 max-w-[64ch] text-lg text-slate-600">
            A look at the Zoho and custom-app projects we have delivered — what each client needed,
            what we built, and the apps we connected to make it run.
          </p>

          <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-4" style={{ gap: 1 }}>
            {successStats.map((s) => (
              <div key={s.label} className="bg-white px-5 py-4">
                <p className="text-xl font-bold md:text-2xl" style={{ color: INK, fontFamily: "Archivo, Inter, sans-serif" }}>
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Logo marquee */}
      <section className="bg-white py-12 md:py-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: BLUE }}>
            Selected work
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: INK }}>
            Businesses we have built for
          </h2>
          <div
            className="ss-marquee mt-8 overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
              maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)"
            }}
          >
            <div className="ss-track flex w-max items-center gap-6">
              {[...successStories, ...successStories].map((s, i) => (
                <span
                  key={`${s.slug}-${i}`}
                  className="grid h-[84px] min-w-[180px] place-items-center rounded-2xl border border-slate-200 bg-white px-6 shadow-sm"
                >
                  {clientLogos[s.slug] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`/success/logos/${clientLogos[s.slug]}`}
                      alt={s.name}
                      className="max-h-12 w-auto max-w-[150px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                    />
                  ) : (
                    <span className="text-lg font-bold" style={{ color: "#1F4E7A", fontFamily: "Archivo, Inter, sans-serif" }}>
                      {initials(s.name)}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Client tiles */}
      <section className="bg-white pb-14 md:pb-16">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {successStories.map((s) => (
              <article
                key={s.slug}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2C6DAF] hover:shadow-md"
              >
                <ClientLogo slug={s.slug} name={s.name} />
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider" style={{ color: BLUE }}>
                  {s.industry} · {s.country}
                </p>
                <h3 className="mt-1.5 text-xl font-bold tracking-tight" style={{ color: INK, fontFamily: "Archivo, Inter, sans-serif" }}>
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{s.summary}</p>

                <div className="mt-5">
                  <AppIcons keys={s.zoho} />
                </div>

                <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                  {s.outcomes.slice(0, 2).map((o) => (
                    <div key={o.label} className="border-t-[3px] pt-2" style={{ borderColor: BLUE }}>
                      <dt className="text-xl font-extrabold" style={{ color: INK, fontFamily: "Archivo, Inter, sans-serif" }}>
                        {o.value}
                      </dt>
                      <dd className="mt-1 text-xs text-slate-500">{o.label}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-slate-200 bg-[#F4F7FA] py-14 md:py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: BLUE }}>
            Verified reviews
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: INK }}>
            What clients say about working with us
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {clientReviews.map((r, i) => (
              <figure key={i} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="tracking-widest" style={{ color: "#F2B33B" }}>
                    {"★".repeat(Math.round(r.rating))}
                  </span>
                  <span className="text-sm font-bold" style={{ color: INK, fontFamily: "Archivo, Inter, sans-serif" }}>
                    {r.rating.toFixed(1)}
                  </span>
                  <span className="ml-auto text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#14A800" }}>
                    Upwork · {r.date}
                  </span>
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">{r.project}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Reviews are from Zoho projects delivered by our team, shared verbatim (names kept neutral).
          </p>
        </Container>
      </section>

      {/* CTA — dark accent */}
      <section
        className="py-16 md:py-20"
        style={{
          background: `radial-gradient(50% 120% at 50% 0%, rgba(44,109,175,.4), transparent 70%), ${NIGHT}`
        }}
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Your business could be the next story
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
              Tell us how your team works today. We&apos;ll show you how it can run on Zoho — and what we would build.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="light" className="px-8">
                Book a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
