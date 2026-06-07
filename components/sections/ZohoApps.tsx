import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

type ZohoApp = {
  label: string;
  icon: string;
  href: string;
};

// Official Zoho app icons. Apps with a dedicated service page link there;
// the rest link to the full products overview.
const apps: ZohoApp[] = [
  { label: "Zoho CRM", icon: "/zoho-apps/crm.png", href: "/zoho-crm" },
  { label: "Zoho One", icon: "/zoho-apps/one.png", href: "/zoho-one" },
  { label: "Zoho Books", icon: "/zoho-apps/books.png", href: "/zoho-books" },
  { label: "Zoho Creator", icon: "/zoho-apps/creator.png", href: "/zoho-creator" },
  { label: "Zoho People", icon: "/zoho-apps/people.png", href: "/zoho-people" },
  { label: "Zoho Inventory", icon: "/zoho-apps/inventory.png", href: "/zoho-inventory" },
  { label: "Zoho CRM Plus", icon: "/zoho-apps/crm-plus.png", href: "/products" },
  { label: "Zoho Finance Plus", icon: "/zoho-apps/finance-plus.png", href: "/products" },
  { label: "Marketing Automation", icon: "/zoho-apps/marketing-automation.png", href: "/products" },
  { label: "Zoho Desk", icon: "/zoho-apps/desk.png", href: "/products" },
  { label: "Zoho Projects", icon: "/zoho-apps/projects.png", href: "/products" },
  { label: "Zoho Campaigns", icon: "/zoho-apps/campaigns.png", href: "/products" },
  { label: "Zoho Analytics", icon: "/zoho-apps/analytics.png", href: "/products" },
  { label: "Zoho Sign", icon: "/zoho-apps/sign.png", href: "/products" },
  { label: "Zoho Flow", icon: "/zoho-apps/flow.png", href: "/products" },
  { label: "Zoho Bookings", icon: "/zoho-apps/bookings.png", href: "/products" }
];

export default function ZohoApps() {
  return (
    <section className="border-y border-slate-100 bg-white py-16 md:py-20">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            One partner, the whole Zoho suite
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Zoho Apps We Implement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            As a certified Zoho partner, we set up, customise, and connect the Zoho apps your business
            runs on — from CRM and finance to HR, inventory, and automation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {apps.map((app) => (
            <Link
              key={app.label}
              href={app.href}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-center transition-all duration-150 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-sm"
            >
              <Image
                src={app.icon}
                alt={`${app.label} icon`}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="text-xs font-medium leading-tight text-slate-700 group-hover:text-slate-900">
                {app.label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
