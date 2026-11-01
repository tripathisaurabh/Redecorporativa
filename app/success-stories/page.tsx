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
    "Zoho CRM client results",
    "Zoho projects portfolio"
  ),
  alternates: { canonical: buildCanonical("/success-stories") },
  openGraph: {
    title: "Success Stories — Client Zoho Projects | Redecorporativa",
    description:
      "Real businesses running on systems we built — CAFM, CRM, Creator apps, automation and integrations.",
    url: `${SITE_URL}/success-stories`,
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Redecorporativa success stories" }]
  },
  twitter: {
    title: "Success Stories — Client Zoho Projects | Redecorporativa",
    description: "Real businesses running on systems we built.",
    images: [`${SITE_URL}/hero.png`]
  }
};

function statusTone(status: string) {
  const s = status.toLowerCase();
  if (s.startsWith("live") || s.includes("live in production") || s === "delivered")
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  if (s.includes("in build") || s.includes("in progress"))
    return "bg-amber-50 text-amber-700 ring-amber-200";
  return "bg-slate-100 text-slate-600 ring-slate-200";
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

export default function SuccessStoriesPage() {
  return (
    <>
      <Script
        id="success-stories-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <section
        className="py-14 md:py-20"
        style={{ background: "linear-gradient(160deg, #0b1220 0%, #16213a 55%, #1d2f69 100%)" }}
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">Success Stories</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Real businesses, running on systems we built
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
              A look at the Zoho and custom-app projects we have delivered — what each client needed,
              what we built, and where it stands today. Status is shown honestly: live, delivered, or still in build.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {successStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                <p className="text-2xl font-semibold text-white md:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-slate-300">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client grid */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {successStories.map((s) => (
              <article key={s.slug} className="card flex flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold tracking-tight text-slate-900">{s.name}</h2>
                  <span
                    className={`flex-none rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${statusTone(s.status)}`}
                  >
                    {s.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {s.industry} · {s.country} · {s.platform}
                </p>
                <h3 className="mt-3 text-sm font-semibold text-slate-800">{s.headline}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.summary}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.zoho.map((key) => (
                    <span
                      key={key}
                      className="rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700"
                    >
                      {zohoAppLabels[key] ?? key}
                    </span>
                  ))}
                </div>

                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                  {s.outcomes.slice(0, 2).map((o) => (
                    <div key={o.label}>
                      <dt className="text-base font-semibold text-slate-900">{o.value}</dt>
                      <dd className="text-xs text-slate-500">{o.label}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-slate-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">In their words</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              What clients say
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2 lg:gap-6">
            {clientReviews.map((r, i) => (
              <figure key={i} className="card flex flex-col p-6">
                <div className="flex items-center gap-2 text-amber-500" aria-label={`${r.rating} out of 5`}>
                  {"★★★★★"}
                  <span className="text-sm font-semibold text-slate-700">{r.rating.toFixed(1)}</span>
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs text-slate-500">
                  {r.project} · {r.date}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-14 md:py-20"
        style={{ background: "linear-gradient(135deg, #1d2f69 0%, #13224e 100%)" }}
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Want results like these for your team?
            </h2>
            <p className="mt-3 text-base text-slate-200">
              Tell us what you&apos;re trying to fix. We&apos;ll suggest the right Zoho or custom-app approach — and
              show you how we would build it.
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
