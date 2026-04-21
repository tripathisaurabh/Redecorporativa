"use client";

import { Layers, Package, Settings, Users, BarChart2, Zap } from "lucide-react";

export function Sidebar({ active, setActive }) {
  const nav = [
    { id: "overview", icon: BarChart2, label: "Overview" },
    { id: "customers", icon: Users, label: "Customers" },
    { id: "products", icon: Package, label: "Products" },
    { id: "segments", icon: Layers, label: "Segments" },
    { id: "admin", icon: Settings, label: "Admin" }
  ];

  return (
    <aside
      style={{
        background: "#0a0f1e",
        borderRight: "1px solid #1e2d4a",
        width: 220,
        minWidth: 220
      }}
      className="h-screen flex flex-col py-6"
    >
      <div className="px-6 mb-8">
        <div style={{ color: "#10b981" }} className="flex items-center gap-2 mb-1">
          <Zap size={20} fill="#10b981" />
          <span
            className="font-black text-lg tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.5px"
            }}
          >
            Aura
          </span>
        </div>
        <div
          style={{ color: "#3b82f6", fontSize: 10 }}
          className="uppercase tracking-widest font-bold pl-7"
        >
          Analytics
        </div>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {nav.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            style={{
              background: active === id ? "#10b98115" : "transparent",
              color: active === id ? "#10b981" : "#6b7fa3",
              borderLeft: active === id ? "3px solid #10b981" : "3px solid transparent"
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-r text-sm font-semibold transition-all"
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </nav>
      <div className="px-6 mt-4">
        <div
          style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
          className="rounded-xl p-3"
        >
          <div style={{ color: "#6b7fa3" }} className="text-xs mb-1">
            Last sync
          </div>
          <div style={{ color: "#e2e8f0" }} className="text-xs font-semibold">
            Today, 4:12 AM
          </div>
          <div className="flex items-center gap-1 mt-2">
            <div
              className="w-2 h-2 rounded-full bg-green-400"
              style={{ boxShadow: "0 0 6px #10b981" }}
            />
            <span style={{ color: "#10b981" }} className="text-xs">
              Synced · 61 customers
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

