import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "../../lib/caseStudies";
import Button from "../ui/Button";

const featuredStudies = caseStudies.slice(0, 3);
const trimSummary = (text: string, max = 132) =>
  text.length > max ? `${text.slice(0, max).trimEnd()}...` : text;

export default function CaseStudies() {
  return (
    <section className="bg-[#f3f4fa] py-12 md:py-14">
      <Container>
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#13234d] md:text-4xl">
            Real Results from CRM Implementations
          </h2>
          <div className="mx-auto mt-3 h-1 w-32 bg-sky-500" />
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
            See how teams improved conversion, execution speed, and operational visibility with practical
            automation systems.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredStudies.map((study) => (
            <article
              key={study.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-44 w-full bg-slate-100">
                <Image
                  src={study.coverImage}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-sky-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {study.industry}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold leading-tight text-[#1b2f67]">{study.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{trimSummary(study.summary)}</p>
                <p className="mt-2 text-sm text-slate-700">
                  Key outcome: <span className="font-semibold">{study.outcomes[0]}</span>
                </p>
                <div className="mt-4">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#30449a] to-[#1d2f69] px-4 py-2 text-sm font-semibold text-white hover:from-[#293f93] hover:to-[#17285f]"
                  >
                    Read Case Study
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/case-studies" variant="outline">
            Explore all case studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
