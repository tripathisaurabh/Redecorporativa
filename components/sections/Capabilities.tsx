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
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Zoho Products We Implement</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">Our Capabilities</h2>
          <div className="mx-auto mt-3 h-1 w-32 bg-sky-500" />
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300 sm:text-base md:text-lg">
            Certified across the full Zoho ecosystem — we implement the products that fit your business, not just the ones we know.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1.5 hover:border-sky-400/50 hover:bg-white/12 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 p-2.5 ring-1 ring-white/20 transition-colors duration-200 group-hover:bg-white/15">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={64}
                  height={64}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <h3 className="mt-3 text-center text-base font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-center text-xs leading-relaxed text-slate-300">{item.description}</p>
              <p className="mt-3 flex items-center justify-center gap-1 text-xs font-semibold text-sky-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                View details <span aria-hidden>→</span>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/products" variant="light" className="px-8 py-3">
            Explore All Zoho Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
