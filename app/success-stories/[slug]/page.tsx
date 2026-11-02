import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import { buildCanonical } from "../../../lib/seo";
import { SITE_URL } from "../../../lib/constants";
import {
  successStories,
  clientReviews,
  getStory,
  clientLogos,
  zohoAppLabels,
  tools,
  type SuccessStory
} from "../../../lib/successStories";

const BLUE = "#2C6DAF";
const BLUE_D = "#1F4E7A";
const INK = "#12161B";
const NIGHT = "#0C1724";
const ARCHIVO = "Archivo, Inter, sans-serif";

export function generateStaticParams() {
  return successStories.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getStory(params.slug);
  if (!s) return { title: "Success Story" };
  return {
    title: `${s.name} — ${s.headline}`,
    description: s.summary,
    alternates: { canonical: buildCanonical(`/success-stories/${s.slug}`) },
    openGraph: {
      title: `${s.name} — Client Story`,
      description: s.summary,
      url: `${SITE_URL}/success-stories/${s.slug}`,
      images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: `${s.name} — client story` }]
    }
  };
}

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function Logo({ s }: { s: SuccessStory }) {
  const file = clientLogos[s.slug];
  if (file) {
    return (
      <span className="inline-flex h-[76px] items-center rounded-[14px] border border-slate-200 bg-white px-4 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/success/logos/${file}`} alt={`${s.name} logo`} className="max-h-[56px] w-auto max-w-[220px] object-contain" />
      </span>
    );
  }
  return (
    <span className="grid h-[76px] w-[76px] place-items-center rounded-[14px] border border-slate-200 bg-white text-2xl font-extrabold shadow-sm" style={{ color: BLUE_D, fontFamily: ARCHIVO }}>
      {initials(s.name)}
    </span>
  );
}

function Node({ keyName }: { keyName: string }) {
  // Zoho app node
  if (zohoAppLabels[keyName]) {
    return (
      <div className="flex min-w-0 items-center gap-3 font-semibold">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/success/zoho/${keyName}.png`} alt="" className="h-[42px] w-[42px] flex-none object-contain" />
        <span className="break-words">Zoho {zohoAppLabels[keyName]}</span>
      </div>
    );
  }
  const t = tools[keyName] ?? { name: keyName };
  return (
    <div className="flex min-w-0 items-center gap-3 font-semibold">
      {t.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={t.icon} alt="" className="h-[42px] w-[42px] flex-none rounded-[10px] border border-slate-200 bg-[#F4F7FA] object-contain p-2" />
      ) : (
        <span className="grid h-[42px] w-[42px] flex-none place-items-center rounded-[10px] text-sm font-bold text-white" style={{ background: t.color ?? "#5A6672", fontFamily: ARCHIVO }}>
          {initials(t.name)}
        </span>
      )}
      <span className="break-words">{t.name}</span>
    </div>
  );
}

export default function SuccessStoryDetail({ params }: { params: { slug: string } }) {
  const s = getStory(params.slug);
  if (!s) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${s.name} — ${s.headline}`,
    description: s.summary,
    about: s.name,
    url: `${SITE_URL}/success-stories/${s.slug}`
  };

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section
        className="border-b border-slate-200 py-14 md:py-16"
        style={{
          background:
            "radial-gradient(60% 90% at 95% 0%, rgba(44,109,175,.16), transparent 65%), radial-gradient(45% 60% at 0% 100%, rgba(14,159,90,.08), transparent 65%), linear-gradient(180deg,#F3F7FC,#FFFFFF)"
        }}
      >
        <Container>
          <Link href="/success-stories" className="text-sm font-medium text-slate-500 hover:text-[#2C6DAF]">
            ← All success stories
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <Logo s={s} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: BLUE }}>
                Client story · {s.industry}
              </p>
              {s.website ? (
                <a href={s.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700 hover:text-[#2C6DAF]">
                  {s.website.split("//").pop()?.replace(/\/$/, "")} ↗
                </a>
              ) : null}
            </div>
          </div>

          <h1 className="mt-8 max-w-[20ch] text-3xl font-extrabold tracking-tight md:text-5xl" style={{ color: INK }}>
            {s.headline}
          </h1>
          <p className="mt-5 max-w-[64ch] text-lg text-slate-600">{s.summary}</p>

          <div className="mt-9 grid grid-cols-2 overflow-hidden rounded-[14px] border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-3" style={{ gap: 1 }}>
            {[
              ["Industry", s.industry],
              ["Country", s.country],
              ["Platform", s.platform]
            ].map(([k, v]) => (
              <div key={k} className="bg-white px-5 py-4">
                <p className="font-bold" style={{ color: INK, fontFamily: ARCHIVO }}>{v}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{k}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we delivered */}
      <section className="border-b border-slate-200 bg-[#F4F7FA] py-14 md:py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: BLUE }}>What we delivered</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: INK }}>{s.deliveredTitle}</h2>

          <div className="mt-9 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {s.delivered.map((d) => (
              <div key={d.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="block h-[3px] w-7 rounded" style={{ background: BLUE }} />
                <h3 className="mb-2 mt-4 text-[18px] font-bold" style={{ color: INK, fontFamily: ARCHIVO }}>{d.title}</h3>
                <p className="text-[15px] text-slate-600">{d.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-[10px]">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Zoho stack</span>
            {s.zoho.map((k) => (
              <span key={k} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white py-[6px] pl-[6px] pr-[14px] text-sm font-semibold">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/success/zoho/${k}.png`} alt="" className="h-[26px] w-[26px]" />
                {zohoAppLabels[k] ?? k}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Screenshots */}
      {s.screens && s.screens.length > 0 && (
        <section className="border-b border-slate-200 bg-white py-14 md:py-16">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: BLUE }}>Screenshots</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: INK }}>
              {s.screensTitle || "What we built"}
            </h2>
            {s.screensNote ? <p className="mt-3 max-w-[66ch] text-[17px] text-slate-600">{s.screensNote}</p> : null}
            <div className="mt-9 grid gap-[22px] md:grid-cols-2">
              {s.screens.map((sh, i) => (
                <figure
                  key={sh.src}
                  className={`rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm ${i === 0 ? "md:col-span-2" : ""}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sh.src} alt={sh.caption} loading="lazy" className="block w-full rounded-[10px] border border-slate-200" />
                  <figcaption className="px-1.5 pb-1 pt-3 text-sm text-slate-600">{sh.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Process flow */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: BLUE }}>Process overview</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: INK }}>
            How the solution runs, end to end
          </h2>
          <p className="mt-3 max-w-[66ch] text-[17px] text-slate-600">
            A simplified view of the workflow we built. Field-level rules, internal data and client-specific logic are kept confidential.
          </p>

          <ol className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {s.flow.map((f, i) => (
              <li key={f.title}>
                <span className="grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white" style={{ background: BLUE, fontFamily: ARCHIVO }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <b className="mb-1.5 mt-4 block text-[17px]" style={{ fontFamily: ARCHIVO }}>{f.title}</b>
                <p className="text-sm text-slate-600">{f.text}</p>
                <div className="mt-3 grid gap-1.5 opacity-50 blur-[2.5px]" aria-hidden>
                  <i className="block h-[7px] w-[86%] rounded bg-slate-300" />
                  <i className="block h-[7px] w-[64%] rounded bg-slate-300" />
                  <i className="block h-[7px] w-[72%] rounded bg-slate-300" />
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#F4F7FA] px-4 py-2 text-[13px] font-semibold text-slate-500">
            <span aria-hidden>🔒</span> Detailed blueprint shared with the client only
          </p>
        </Container>
      </section>

      {/* Integrations */}
      {s.integrations.length > 0 && (
        <section className="border-b border-slate-200 bg-[#F4F7FA] py-14 md:py-16">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: BLUE }}>Integrations</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: INK }}>Systems we connected</h2>
            {s.integrationsNote ? <p className="mt-3 max-w-[66ch] text-[17px] text-slate-600">{s.integrationsNote}</p> : null}

            <div className="mt-9 grid gap-3.5">
              {s.integrations.map((i, idx) => (
                <div key={idx} className="grid items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[minmax(0,1fr)_minmax(130px,1.3fr)_minmax(0,1fr)]">
                  <Node keyName={i.from} />
                  <div className="relative my-2 h-[2px] md:my-0" style={{ background: BLUE }}>
                    <span className="relative -top-[13px] mx-auto inline-block rounded-full border border-slate-200 bg-white px-[10px] py-[2px] text-[12.5px] font-semibold" style={{ color: BLUE_D }}>
                      {i.label}
                      {i.both ? " ⇄" : " →"}
                    </span>
                  </div>
                  <div className="md:justify-self-end md:text-right">
                    <Node keyName={i.to} />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Results */}
      {s.outcomes.length > 0 && (
        <section className="border-b border-slate-200 bg-white py-14 md:py-16">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: BLUE }}>Results</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: INK }}>Where it landed</h2>
            <div className="mt-9 grid grid-cols-2 gap-[18px] lg:grid-cols-4">
              {s.outcomes.map((o) => (
                <div key={o.label} className="border-t-[3px] pt-5" style={{ borderColor: BLUE }}>
                  <b className="block text-[clamp(30px,4vw,44px)] font-extrabold leading-none tracking-tight" style={{ color: INK, fontFamily: ARCHIVO }}>
                    {o.value}
                  </b>
                  <span className="mt-2.5 block text-[15px] text-slate-600">{o.label}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Reviews */}
      <section className="border-b border-slate-200 bg-[#F4F7FA] py-14 md:py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: BLUE }}>Verified reviews</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: INK }}>
            From our Zoho projects
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {clientReviews.map((r, i) => (
              <figure key={i} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="tracking-widest" style={{ color: "#F2B33B" }}>{"★".repeat(Math.round(r.rating))}</span>
                  <span className="text-sm font-bold" style={{ color: INK, fontFamily: ARCHIVO }}>{r.rating.toFixed(1)}</span>
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">{r.project}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: `radial-gradient(50% 120% at 50% 0%, rgba(44,109,175,.4), transparent 70%), ${NIGHT}` }}>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">Have a process like this?</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
              We design and build Zoho systems that match how your team actually works.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="light" className="px-8">Book a Consultation</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
