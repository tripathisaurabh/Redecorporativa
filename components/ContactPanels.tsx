"use client";

import { useState, type ReactNode } from "react";

type Props = { booking: ReactNode; form: ReactNode };

/**
 * Contact page panels.
 * - Desktop (lg+): two columns, both always visible (calendar left, form right).
 * - Mobile: accordion — both collapsed by default; tap "Book a meeting" or
 *   "Fill the form" to expand just that one (keeps the page short, less scrolling).
 * Each embed is rendered once (passed in as a prop) to avoid duplicate DOM ids.
 */
export default function ContactPanels({ booking, form }: Props) {
  const [open, setOpen] = useState<"booking" | "form" | null>(null);

  const icon = (active: boolean) => (
    <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-indigo-50 text-lg leading-none text-indigo-600">
      {active ? "−" : "+"}
    </span>
  );

  return (
    <div className="mx-auto mt-6 grid max-w-6xl items-start gap-4 lg:grid-cols-2 lg:gap-6">
      {/* Book a call */}
      <div className="card p-2 md:p-3">
        <button
          type="button"
          onClick={() => setOpen(open === "booking" ? null : "booking")}
          aria-expanded={open === "booking"}
          className="flex w-full items-center justify-between gap-3 px-2 py-2 text-left lg:hidden"
        >
          <span className="text-base font-semibold text-slate-900">Book a meeting</span>
          {icon(open === "booking")}
        </button>
        <div className="hidden px-2 pt-1 lg:block">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Book a call</p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">Pick a time that works for you</h2>
        </div>
        <div className={`${open === "booking" ? "block" : "hidden"} mt-2 lg:block`}>{booking}</div>
      </div>

      {/* Send a message */}
      <div className="card p-4 md:p-6">
        <button
          type="button"
          onClick={() => setOpen(open === "form" ? null : "form")}
          aria-expanded={open === "form"}
          className="flex w-full items-center justify-between gap-3 text-left lg:hidden"
        >
          <span className="text-base font-semibold text-slate-900">Fill the form</span>
          {icon(open === "form")}
        </button>
        <div className="hidden lg:block">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Send a message</h2>
          <p className="mt-1 text-sm text-slate-600">
            Share your challenge and we&apos;ll get back within one business day.
          </p>
        </div>
        <div className={`${open === "form" ? "block" : "hidden"} mt-4 lg:mt-5 lg:block`}>{form}</div>
      </div>
    </div>
  );
}
