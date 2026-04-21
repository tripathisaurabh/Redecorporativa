"use client";

import { useState } from "react";
import { Plus, Check, Download, Send, Tag } from "lucide-react";
import { SEGMENTS, CUSTOMERS } from "../../lib/dashboard/mock-data";
import { fmtCurrency0, segmentColor } from "../../lib/dashboard/utils";

export function SegmentsPage() {
  const [active, setActive] = useState(null);
  const [exported, setExported] = useState(false);
  const [pushed, setPushed] = useState(false);

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div
            style={{ color: "#e2e8f0" }}
            className="font-bold text-lg"
          >
            Saved Segments
          </div>
          <div style={{ color: "#6b7fa3" }} className="text-xs mt-0.5">
            Auto-refreshed on every sync
          </div>
        </div>
        <button
          style={{
            background: "#10b98120",
            border: "1px solid #10b98140",
            color: "#10b981"
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
        >
          <Plus size={14} /> New Segment
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {SEGMENTS.map(seg => (
          <div
            key={seg.id}
            onClick={() =>
              setActive(active?.id === seg.id ? null : seg)
            }
            style={{
              background: active?.id === seg.id ? seg.color + "15" : "#0d1929",
              border: `1px solid ${
                active?.id === seg.id ? seg.color + "60" : "#1e2d4a"
              }`,
              cursor: "pointer"
            }}
            className="rounded-2xl p-5 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div
                style={{
                  width: 10,
                  height: 10,
                  background: seg.color,
                  borderRadius: 999,
                  marginTop: 4,
                  boxShadow: `0 0 8px ${seg.color}`
                }}
              />
              <span
                style={{
                  color: seg.color,
                  background: seg.color + "20",
                  border: `1px solid ${seg.color}40`
                }}
                className="text-lg font-black px-2 py-0.5 rounded-lg"
              >
                {seg.count}
              </span>
            </div>
            <div
              style={{ color: "#e2e8f0" }}
              className="font-bold text-sm mb-1"
            >
              {seg.name}
            </div>
            <div style={{ color: "#6b7fa3" }} className="text-xs">
              {seg.desc}
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          style={{
            background: "#0d1929",
            border: `1px solid ${active.color}40`
          }}
          className="rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <div
                style={{ color: "#e2e8f0" }}
                className="font-bold text-lg flex items-center gap-2"
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    background: active.color,
                    borderRadius: 999,
                    boxShadow: `0 0 8px ${active.color}`
                  }}
                />
                {active.name}
              </div>
              <div
                style={{ color: "#6b7fa3" }}
                className="text-xs mt-1"
              >
                {active.count} customers · {active.desc}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setExported(true);
                  setTimeout(() => setExported(false), 2000);
                }}
                style={{
                  background: exported ? "#10b98120" : "#0a0f1e",
                  border: `1px solid ${
                    exported ? "#10b98140" : "#1e2d4a"
                  }`,
                  color: exported ? "#10b981" : "#6b7fa3"
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              >
                {exported ? <Check size={14} /> : <Download size={14} />}{" "}
                {exported ? "Exported!" : "Export CSV"}
              </button>
              <button
                onClick={() => {
                  setPushed(true);
                  setTimeout(() => setPushed(false), 2000);
                }}
                style={{
                  background: pushed ? "#3b82f620" : "#0a0f1e",
                  border: `1px solid ${
                    pushed ? "#3b82f640" : "#1e2d4a"
                  }`,
                  color: pushed ? "#3b82f6" : "#6b7fa3"
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              >
                {pushed ? <Check size={14} /> : <Send size={14} />}{" "}
                {pushed ? "Pushed!" : "Push to ActiveCampaign"}
              </button>
              <button
                style={{
                  background: "#0a0f1e",
                  border: "1px solid #1e2d4a",
                  color: "#6b7fa3"
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              >
                <Tag size={14} /> Add Tags
              </button>
            </div>
          </div>

          <div
            style={{ background: "#0a0f1e", border: "1px solid #1e2d4a" }}
            className="rounded-xl overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "1px solid #1e2d4a" }}>
                  {[
                    "Customer",
                    "Location",
                    "LTV",
                    "Last Order",
                    "Top Product"
                  ].map(h => (
                    <th
                      key={h}
                      style={{ color: "#6b7fa3" }}
                      className="text-xs uppercase tracking-wider text-left px-4 py-3 font-semibold"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CUSTOMERS.slice(
                  0,
                  active.count > 6 ? 6 : active.count
                ).map((c, i) => (
                  <tr
                    key={c.id}
                    style={{
                      borderBottom:
                        i < Math.min(active.count, 6) - 1
                          ? "1px solid #1e2d4a"
                          : "none"
                    }}
                  >
                    <td className="px-4 py-3">
                      <div
                        style={{ color: "#e2e8f0" }}
                        className="text-sm font-semibold"
                      >
                        {c.name}
                      </div>
                      <div
                        style={{ color: "#6b7fa3" }}
                        className="text-xs"
                      >
                        {c.email}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        style={{ color: "#6b7fa3" }}
                        className="text-sm"
                      >
                        {c.location}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        style={{ color: "#10b981" }}
                        className="font-bold text-sm"
                      >
                        {fmtCurrency0(c.ltv)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        style={{
                          color: c.daysSince > 45 ? "#ef4444" : "#c4d0e8"
                        }}
                        className="text-sm"
                      >
                        {c.lastOrder}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        style={{ color: "#c4d0e8" }}
                        className="text-sm"
                      >
                        {c.topProduct}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Segment Builder */}
      <div
        style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
        className="rounded-2xl p-6"
      >
        <div style={{ color: "#e2e8f0" }} className="font-bold mb-1">
          Segment Builder
        </div>
        <div style={{ color: "#6b7fa3" }} className="text-xs mb-4">
          Combine filters to create custom segments
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            "Bought Product A not B",
            "No order in 30/60/90 days",
            "Last year, not this year",
            "Top revenue",
            "Declining YoY",
            "Single product only",
            "By location"
          ].map(f => (
            <button
              key={f}
              style={{
                background: "#0a0f1e",
                border: "1px solid #1e2d4a",
                color: "#6b7fa3"
              }}
              className="px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              <Tag size={11} /> {f}
            </button>
          ))}
          <button
            style={{
              background: "#3b82f620",
              border: "1px solid #3b82f640",
              color: "#3b82f6"
            }}
            className="px-3 py-2 rounded-lg text-xs font-semibold"
          >
            + Add Filter
          </button>
        </div>
      </div>
    </div>
  );
}

