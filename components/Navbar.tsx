"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import Button from "./ui/Button";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Zoho Services", href: "/products" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

const serviceMenu = [
  { label: "Zoho CRM", href: "/zoho-crm" },
  { label: "Zoho One", href: "/zoho-one" },
  { label: "Zoho Books", href: "/zoho-books" },
  { label: "Zoho Inventory", href: "/zoho-inventory" },
  { label: "Zoho People", href: "/zoho-people" },
  { label: "Zoho Creator", href: "/zoho-creator" },
  { label: "Business Process Automation", href: "/business-process-automation" },
  { label: "All Products", href: "/products" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const onClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white text-slate-700 shadow-sm">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-slate-900">
          <Image
            src="/logo.png"
            alt="Redecorporativa logo"
            width={160}
            height={40}
            className="h-9 w-auto shrink-0 sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) =>
            item.label === "Zoho Services" ? (
              <div key={item.label} className="group relative">
                <Link href={item.href} className="inline-flex items-center gap-1 hover:text-slate-900">
                  {item.label}
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true" fill="none">
                    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                    {serviceMenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="hover:text-slate-900">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/book-us">Book a Consultation</Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-600 hover:border-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 active:scale-[0.98]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={toggleMenu}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </Container>

      {/* Backdrop — fixed so it covers the full viewport */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/60 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />

      {/* Panel — fixed below the 80px sticky header, always in viewport */}
      <div
        ref={panelRef}
        className={`fixed left-3 right-3 top-[84px] z-50 rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition-all duration-200 md:hidden ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "pointer-events-none opacity-0 -translate-y-2 scale-[0.98]"
        }`}
      >
        <div className="flex flex-col gap-3 text-sm text-slate-700">
          {navItems.map((item, index) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block rounded-lg px-2 py-2 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98]"
                style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
              {item.label === "Zoho Services" && (
                <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-slate-200 pl-3">
                  {serviceMenu
                    .filter((sub) => sub.href !== "/products")
                    .map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="rounded-lg px-2 py-1.5 text-[13px] text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98]"
                        onClick={closeMenu}
                      >
                        {sub.label}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          ))}
          <Button href="/book-us" className="mt-2 w-full active:scale-[0.98]" onClick={closeMenu}>
            Book a Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
