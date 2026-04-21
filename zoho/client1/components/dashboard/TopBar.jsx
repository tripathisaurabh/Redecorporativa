"use client";

import { useState } from "react";
import { Bell, RefreshCw } from "lucide-react";

export function TopBar({ page }) {
  const [notif] = useState(3);

  return (
    <header
      style={{ background: "#0d1929", borderBottom: "1px solid #1e2d4a" }}
      className="flex items-center justify-between px-8 py-4"
    >
      <div>
        <h1
          style={{ color: "#e2e8f0", fontFamily: "'Playfair Display', serif" }}
          className="text-xl font-bold capitalize"
        >
          {page}
        </h1>
        <p style={{ color: "#6b7fa3" }} className="text-xs mt-0.5">
          Zoho Invoice · Live Data
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          style={{
            background: "#0a0f1e",
            border: "1px solid #1e2d4a",
            color: "#10b981"
          }}
          className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg font-semibold"
        >
          <RefreshCw size={13} /> Sync Now
        </button>
        <div className="relative">
          <Bell size={18} style={{ color: "#6b7fa3" }} />
          {notif > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {notif}
            </span>
          )}
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            background: "linear-gradient(135deg,#10b981,#3b82f6)",
            borderRadius: 8
          }}
          className="flex items-center justify-center text-white text-xs font-black"
        >
          AD
        </div>
      </div>
    </header>
  );
}

