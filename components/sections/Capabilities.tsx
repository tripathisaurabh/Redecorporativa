import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";

const capabilities = [
  {
    title: "Zoho One",
    description: "Run CRM, finance, HR, and marketing from one connected suite.",
    icon: "/produts/Zoho-One-.webp",
    href: "/products#zoho-one"
  },
  {
    title: "Zoho CRM Plus",
    description: "Unify sales, marketing, and support in one customer platform.",
    icon: "/produts/crm-plus-512.png",
    href: "/products#zoho-crm-plus"
  },
  {
    title: "Zoho CRM",
    description: "Track leads, pipelines, and follow-ups with workflow automation.",
    icon: "/produts/Zoho-CRM.webp",
    href: "/products#zoho-crm"
  },
  {
    title: "Zoho Finance Plus",
    description: "Manage accounting, invoices, expenses, and reporting in one place.",
    icon: "/produts/financeplus-512.png",
    href: "/products#zoho-finance-plus"
  },
  {
    title: "Zoho People Plus",
    description: "Automate onboarding, attendance, and performance with connected HR tools.",
    icon: "/produts/zoho-people-plus-e1755504630286.webp",
    href: "/products#zoho-people-plus"
  },
  {
    title: "Zoho Books",
    description: "Simplify bookkeeping, GST, invoicing, and payment tracking.",
    icon: "/produts/zoho-books-logo.webp",
    href: "/products#zoho-books"
  },
  {
    title: "Zoho Marketing Automation",
    description: "Automate campaigns, lead nurturing, and conversion analytics.",
    icon: "/produts/Zoho-marketing-automation.png",
    href: "/products#zoho-marketing-automation"
  },
  {
    title: "Zoho Creator",
    description: "Build low-code business apps and automate custom workflows.",
    icon: "/produts/Zoho-Creator.png",
    href: "/products#zoho-creator"
  }
];

export default function Capabilities() {
  return (
    <section
      className="relative overflow-hidden bg-[#172a66] py-12 md:py-16"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 0%, rgba(255,255,255,0.08), transparent 34%), repeating-radial-gradient(circle at 50% -160px, rgba(150,180,255,0.18) 0 1px, transparent 1px 34px)"
      }}
    >
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Our Capabilities</h2>
          <div className="mx-auto mt-3 h-1 w-32 bg-sky-500" />
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-200 md:text-lg">
            Trusted by businesses across industries, we know what works for your team.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-300 bg-slate-100 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-sky-400 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={64}
                  height={64}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="mt-3 text-center text-xl font-semibold tracking-tight text-[#1b2f67]">
                {item.title}
              </h3>
              <p className="mt-2 text-center text-sm leading-relaxed text-slate-600">{item.description}</p>
              <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wide text-sky-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                View details
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/products" className="bg-black px-7 py-2.5 text-sm text-[black]  focus-visible:ring-black">
          {/* <Button href="/products" className="bg-black px-7 py-2.5 text-sm text-[black] hover:bg-slate-100 focus-visible:ring-black"> */}
            Know More
          </Button>
        </div>
      </Container>
    </section>
  );
}
