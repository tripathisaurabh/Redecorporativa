"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import { Package } from "lucide-react";
import { PRODUCTS, CROSS_SELL } from "../../lib/dashboard/mock-data";
import { COLORS, fmtCurrency0 } from "../../lib/dashboard/utils";

export function ProductsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {PRODUCTS.map((p, i) => (
          <div
            key={p.name}
            style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
            className="rounded-2xl p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: COLORS[i] + "22",
                  border: `1px solid ${COLORS[i]}44`
                }}
                className="rounded-xl flex items-center justify-center"
              >
                <Package size={16} style={{ color: COLORS[i] }} />
              </div>
              <span style={{ color: "#10b981" }} className="text-sm font-bold">
                {fmtCurrency0(p.revenue)}
              </span>
            </div>
            <div
              style={{ color: "#e2e8f0" }}
              className="font-semibold text-sm mb-3"
            >
              {p.name}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Units Sold", value: p.qty },
                { label: "Customers", value: p.customers },
                { label: "Repeat Rate", value: `${p.repeatRate}%` },
                { label: "Penetration", value: `${p.penetration}%` }
              ].map(item => (
                <div
                  key={item.label}
                  style={{ background: "#0a0f1e", border: "1px solid #1e2d4a" }}
                  className="rounded-lg p-2"
                >
                  <div
                    style={{ color: "#6b7fa3" }}
                    className="text-xs"
                  >
                    {item.label}
                  </div>
                  <div
                    style={{ color: "#c4d0e8" }}
                    className="font-bold text-sm"
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{ borderTop: "1px solid #1e2d4a" }}
              className="mt-3 pt-2"
            >
              <div style={{ color: "#6b7fa3" }} className="text-xs">
                Avg reorder:{" "}
                <span
                  style={{ color: "#f59e0b" }}
                  className="font-semibold"
                >
                  {p.reorderDays} days
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
        className="rounded-2xl p-6"
      >
        <div style={{ color: "#e2e8f0" }} className="font-bold mb-1">
          Cross-Sell Relationships
        </div>
        <div style={{ color: "#6b7fa3" }} className="text-xs mb-5">
          Products frequently purchased together
        </div>
        <div className="space-y-3">
          {CROSS_SELL.map((r, i) => (
            <div
              key={i}
              style={{ background: "#0a0f1e", border: "1px solid #1e2d4a" }}
              className="rounded-xl p-4 flex items-center gap-4"
            >
              <div
                style={{
                  background: "#3b82f615",
                  border: "1px solid #3b82f630"
                }}
                className="px-3 py-1.5 rounded-lg"
              >
                <span style={{ color: "#3b82f6" }} className="text-sm font-semibold">
                  {r.a}
                </span>
              </div>
              <div style={{ color: "#6b7fa3" }} className="text-xs">
                + also bought
              </div>
              <div
                style={{
                  background: "#10b98115",
                  border: "1px solid #10b98130"
                }}
                className="px-3 py-1.5 rounded-lg"
              >
                <span style={{ color: "#10b981" }} className="text-sm font-semibold">
                  {r.b}
                </span>
              </div>
              <div className="flex-1" />
              <div
                style={{ background: "#1e2d4a" }}
                className="h-2 rounded-full w-32 overflow-hidden"
              >
                <div
                  style={{
                    width: `${r.pct}%`,
                    background: "linear-gradient(90deg, #3b82f6, #10b981)"
                  }}
                  className="h-full rounded-full"
                />
              </div>
              <span
                style={{ color: "#e2e8f0" }}
                className="text-sm font-bold w-10 text-right"
              >
                {r.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
        className="rounded-2xl p-6"
      >
        <div style={{ color: "#e2e8f0" }} className="font-bold mb-1">
          Revenue by Product
        </div>
        <div style={{ color: "#6b7fa3" }} className="text-xs mb-5">
          TTM performance comparison
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={PRODUCTS} layout="vertical" barSize={18}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" horizontal={false} />
            <XAxis
              type="number"
              tick={{ fill: "#6b7fa3", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={v => `$${v / 1000}k`}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#6b7fa3", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              width={150}
            />
            <Tooltip
              contentStyle={{
                background: "#0a0f1e",
                border: "1px solid #1e2d4a",
                borderRadius: 10,
                color: "#e2e8f0"
              }}
              formatter={v => [fmtCurrency0(v), "Revenue"]}
            />
            <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
              {PRODUCTS.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

