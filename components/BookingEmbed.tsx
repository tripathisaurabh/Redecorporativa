"use client";

import { useEffect } from "react";

// Zoho Bookings inline embed (shared meeting scheduler).
const BOOKING_URL =
  "https://intro.zohobookings.in/portal-embed#/redecorp";
const EMBED_SCRIPT = "https://bookings.nimbuspop.com/assets/embed.js";

type BookingsApi = { inlineEmbed: (opts: { url: string; parent: string; height: string }) => void };

export default function BookingEmbed() {
  useEffect(() => {
    const CONTAINER = "#inline-container";

    function render() {
      const el = document.querySelector(CONTAINER) as HTMLElement | null;
      const B = (window as unknown as { Bookings?: BookingsApi }).Bookings;
      if (!el || !B) return;
      if (el.childElementCount > 0) return; // guard against double embed
      B.inlineEmbed({ url: BOOKING_URL, parent: CONTAINER, height: "720px" });
    }

    const existing = document.getElementById("zoho-bookings-embed");
    if (existing) {
      render();
      existing.addEventListener("load", render);
      return;
    }
    const s = document.createElement("script");
    s.id = "zoho-bookings-embed";
    s.src = EMBED_SCRIPT;
    s.async = true;
    s.addEventListener("load", render);
    document.body.appendChild(s);
  }, []);

  return <div id="inline-container" style={{ minHeight: 720, width: "100%" }} />;
}
