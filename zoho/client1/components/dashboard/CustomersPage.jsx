"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import {
  Globe,
  AlertCircle,
  Search,
  Filter,
  Download,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Tag,
  Plus,
  Check,
  Send
} from "lucide-react";
import { CUSTOMERS, MONTHLY, PRODUCTS } from "../../lib/dashboard/mock-data";
import { COLORS, fmtCurrency0, segmentColor } from "../../lib/dashboard/utils";

const badge = (label, key) => {
  const color = segmentColor(label);
  return (
    <span
      key={key}
      style={{ background: color + "22", color, border: `1px solid ${color}44` }}
      className="text-xs px-2 py-0.5 rounded-full font-semibold"
    >
      {label}
    </span>
  );
};

function CustomerProfile({ c, onBack }) {
  const monthlyCustomer = MONTHLY.map(m => ({
    ...m,
    rev: Math.floor(m.rev * (0.03 + Math.random() * 0.07))
  }));
  const growth = ((c.revYTD - c.revLY) / c.revLY * 100).toFixed(1);
  const isGrowing = c.revYTD > c.revLY;

  return (
    <div className="p-8">
      <button
        onClick={onBack}
        style={{ color: "#6b7fa3" }}
        className="flex items-center gap-2 text-sm mb-6 hover:text-white transition-colors"
      >
        ← Back to customers
      </button>

      <div
        style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
        className="rounded-2xl p-6 mb-5"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div
              style={{
                width: 52,
                height: 52,
                background: "linear-gradient(135deg,#3b82f6,#10b981)",
                borderRadius: 14
              }}
              className="flex items-center justify-center text-white font-black text-xl"
            >
              {c.name[0]}
            </div>
            <div>
              <div
                style={{
                  color: "#e2e8f0",
                  fontFamily: "'Playfair Display', serif"
                }}
                className="text-xl font-bold"
              >
                {c.name}
              </div>
              <div style={{ color: "#6b7fa3" }} className="text-sm mt-0.5">
                {c.email}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Globe size={12} style={{ color: "#6b7fa3" }} />
                <span style={{ color: "#6b7fa3" }} className="text-xs">
                  {c.location}
                </span>
                <span
                  style={{
                    color: "#3b82f6",
                    background: "#3b82f615",
                    border: "1px solid #3b82f630"
                  }}
                  className="text-xs px-2 py-0.5 rounded-full ml-2 font-semibold"
                >
                  {c.channel}
                </span>
                {c.segment.map(s => badge(s, s))}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div
              style={{ color: "#6b7fa3" }}
              className="text-xs uppercase tracking-wider"
            >
              Lifetime Value
            </div>
            <div
              style={{
                color: "#10b981",
                fontFamily: "'Playfair Display', serif"
              }}
              className="text-3xl font-bold"
            >
              {fmtCurrency0(c.ltv)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-5">
        {[
          {
            label: "Total Orders",
            value: c.orders,
            sub: `${c.ordersYTD} this year · ${c.ordersLY} last year`
          },
          { label: "Avg Order Value", value: fmtCurrency0(c.aov), sub: "Per invoice" },
          {
            label: "Last Order",
            value: c.lastOrder,
            sub: `${c.daysSince} days ago`,
            alert: c.daysSince > 45
          },
          {
            label: "YoY Revenue",
            value: `${isGrowing ? "+" : ""}${growth}%`,
            sub: `${fmtCurrency0(c.revYTD)} this year · ${fmtCurrency0(c.revLY)} last year`,
            up: isGrowing
          },
          {
            label: "Avg Price / Item",
            value: fmtCurrency0(c.avgPrice),
            sub: "Average realized price per unit"
          }
        ].map(item => (
          <div
            key={item.label}
            style={{
              background: "#0d1929",
              border: `1px solid ${item.alert ? "#ef444440" : "#1e2d4a"}`
            }}
            className="rounded-xl p-4"
          >
            <div
              style={{ color: "#6b7fa3" }}
              className="text-xs uppercase tracking-wider mb-1"
            >
              {item.label}
            </div>
            <div
              style={{
                color: item.alert
                  ? "#ef4444"
                  : item.up === false
                  ? "#ef4444"
                  : item.up === true
                  ? "#10b981"
                  : "#e2e8f0"
              }}
              className="text-lg font-bold"
            >
              {item.value}
            </div>
            <div style={{ color: "#6b7fa3" }} className="text-xs mt-0.5">
              {item.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div
          style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
          className="rounded-2xl p-5"
        >
          <div style={{ color: "#e2e8f0" }} className="font-bold mb-4">
            Monthly Revenue Trend
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={monthlyCustomer}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
              <XAxis
                dataKey="m"
                tick={{ fill: "#6b7fa3", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#6b7fa3", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={v => `$${v}`}
              />
              <Tooltip
                contentStyle={{
                  background: "#0a0f1e",
                  border: "1px solid #1e2d4a",
                  borderRadius: 10,
                  color: "#e2e8f0"
                }}
              />
              <Line
                type="monotone"
                dataKey="rev"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
          className="rounded-2xl p-5"
        >
          <div style={{ color: "#e2e8f0" }} className="font-bold mb-4">
            Top Products Purchased
          </div>
          <div className="space-y-3">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <div key={p.name} className="flex items-center gap-3">
                <div
                  style={{
                    width: 28,
                    height: 28,
                    background: COLORS[i] + "22",
                    border: `1px solid ${COLORS[i]}44`,
                    color: COLORS[i]
                  }}
                  className="rounded-lg flex items-center justify-center text-xs font-bold"
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div
                    style={{ color: "#c4d0e8" }}
                    className="text-xs font-semibold"
                  >
                    {p.name}
                  </div>
                  <div style={{ color: "#6b7fa3" }} className="text-xs">
                    {Math.floor(p.qty / 8)} units · {fmtCurrency0(p.revenue / 8)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              borderTop: "1px solid #1e2d4a",
              color: "#f97316"
            }}
            className="mt-4 pt-3 text-xs font-semibold flex items-center gap-2"
          >
            <AlertCircle size={13} /> Never purchased:{" "}
            {c.neverProducts?.join(", ") || "—"}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CustomersPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const filtered = CUSTOMERS.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.includes(search)
  );

  if (selected) return <CustomerProfile c={selected} onBack={() => setSelected(null)} />;

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div
          style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl flex-1 max-w-md"
        >
          <Search size={15} style={{ color: "#6b7fa3" }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search customers..."
            className="bg-transparent outline-none text-sm w-full"
            style={{ color: "#e2e8f0" }}
          />
        </div>
        <button
          style={{
            background: "#0d1929",
            border: "1px solid #1e2d4a",
            color: "#6b7fa3"
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm"
        >
          <Filter size={14} /> Filter
        </button>
        <button
          style={{ background: "#10b981", color: "#fff" }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
        >
          <Download size={14} /> Export CSV
        </button>
      </div>

      <div
        style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
        className="rounded-2xl overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid #1e2d4a" }}>
              {[
                "Customer",
                "Location",
                "LTV",
                "Orders",
                "AOV",
                "Last Order",
                "YoY",
                "Segment",
                ""
              ].map(h => (
                <th
                  key={h}
                  style={{ color: "#6b7fa3" }}
                  className="text-xs uppercase tracking-wider text-left px-5 py-3 font-semibold"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => {
              const growth = ((c.revYTD - c.revLY) / c.revLY * 100).toFixed(0);
              const isUp = c.revYTD > c.revLY;
              return (
                <tr
                  key={c.id}
                  style={{
                    borderBottom: i < filtered.length - 1 ? "1px solid #1e2d4a" : "none"
                  }}
                  className="hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => setSelected(c)}
                >
                  <td className="px-5 py-4">
                    <div
                      style={{ color: "#e2e8f0" }}
                      className="font-semibold text-sm"
                    >
                      {c.name}
                    </div>
                    <div style={{ color: "#6b7fa3" }} className="text-xs">
                      {c.email}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span style={{ color: "#6b7fa3" }} className="text-sm">
                      {c.location}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      style={{ color: "#10b981" }}
                      className="font-bold text-sm"
                    >
                      {fmtCurrency0(c.ltv)}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span style={{ color: "#c4d0e8" }} className="text-sm">
                      {c.orders}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span style={{ color: "#c4d0e8" }} className="text-sm">
                      {fmtCurrency0(c.aov)}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      style={{
                        color: c.daysSince > 45 ? "#ef4444" : "#c4d0e8"
                      }}
                      className="text-sm"
                    >
                      {c.lastOrder}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      style={{ color: isUp ? "#10b981" : "#ef4444" }}
                      className="text-sm font-bold flex items-center gap-1"
                    >
                      {isUp ? <ArrowUp size={13} /> : <ArrowDown size={13} />}
                      {Math.abs(growth)}%
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-1 flex-wrap">
                      {c.segment.slice(0, 2).map(s => badge(s, s))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <ChevronRight size={16} style={{ color: "#6b7fa3" }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

