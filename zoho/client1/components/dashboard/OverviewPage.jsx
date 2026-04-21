"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import { ArrowDown, ArrowUp } from "lucide-react";
import { KPI, MONTHLY, PRODUCTS } from "../../lib/dashboard/mock-data";
import { COLORS, fmtCurrency0 } from "../../lib/dashboard/utils";

function StatCard({ kpi }) {
  const Icon = kpi.icon;
  return (
    <div
      style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
      className="rounded-2xl p-5 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div
          style={{ background: "#10b98115", border: "1px solid #10b98130" }}
          className="p-2 rounded-lg"
        >
          <Icon size={16} style={{ color: "#10b981" }} />
        </div>
        <span
          style={{
            color: kpi.up ? "#10b981" : "#ef4444",
            background: kpi.up ? "#10b98115" : "#ef444415"
          }}
          className="text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
        >
          {kpi.up ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
          {kpi.delta}
        </span>
      </div>
      <div>
        <div
          style={{ color: "#6b7fa3" }}
          className="text-xs uppercase tracking-wider mb-1"
        >
          {kpi.label} · {kpi.sub}
        </div>
        <div
          style={{ color: "#e2e8f0", fontFamily: "'Playfair Display', serif" }}
          className="text-2xl font-bold"
        >
          {kpi.value}
        </div>
      </div>
    </div>
  );
}

export function OverviewPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-4 gap-4">
        {KPI.map(k => (
          <StatCard key={k.label} kpi={k} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Revenue Trend */}
        <div
          style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
          className="col-span-2 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <div style={{ color: "#e2e8f0" }} className="font-bold">
                Monthly Revenue
              </div>
              <div style={{ color: "#6b7fa3" }} className="text-xs mt-0.5">
                Last 12 months
              </div>
            </div>
            <div
              style={{
                color: "#10b981",
                background: "#10b98115",
                border: "1px solid #10b98130"
              }}
              className="text-xs px-3 py-1 rounded-full font-semibold"
            >
              +18.4% YoY
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={MONTHLY}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
              <XAxis
                dataKey="m"
                tick={{ fill: "#6b7fa3", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#6b7fa3", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={v => `$${v / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  background: "#0a0f1e",
                  border: "1px solid #1e2d4a",
                  borderRadius: 10,
                  color: "#e2e8f0"
                }}
                formatter={v => [`$${v.toLocaleString()}`, "Revenue"]}
              />
              <Area
                type="monotone"
                dataKey="rev"
                stroke="#10b981"
                strokeWidth={2.5}
                fill="url(#revGrad)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products */}
        <div
          style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
          className="rounded-2xl p-6"
        >
          <div style={{ color: "#e2e8f0" }} className="font-bold mb-1">
            Top Products
          </div>
          <div style={{ color: "#6b7fa3" }} className="text-xs mb-4">
            By revenue TTM
          </div>
          <div className="space-y-3">
            {PRODUCTS.slice(0, 5).map((p, i) => (
              <div key={p.name}>
                <div className="flex justify-between mb-1">
                  <span
                    style={{ color: "#c4d0e8" }}
                    className="text-xs font-semibold truncate pr-2"
                  >
                    {p.name}
                  </span>
                  <span style={{ color: "#10b981" }} className="text-xs font-bold">
                    {fmtCurrency0(p.revenue)}
                  </span>
                </div>
                <div
                  style={{ background: "#1e2d4a" }}
                  className="h-1.5 rounded-full overflow-hidden"
                >
                  <div
                    style={{
                      width: `${(p.revenue / PRODUCTS[0].revenue) * 100}%`,
                      background: COLORS[i],
                      borderRadius: 99
                    }}
                    className="h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orders bar */}
      <div
        style={{ background: "#0d1929", border: "1px solid #1e2d4a" }}
        className="rounded-2xl p-6"
      >
        <div style={{ color: "#e2e8f0" }} className="font-bold mb-1">
          Order Volume
        </div>
        <div style={{ color: "#6b7fa3" }} className="text-xs mb-5">
          Monthly orders
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={MONTHLY} barSize={24}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
            <XAxis
              dataKey="m"
              tick={{ fill: "#6b7fa3", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6b7fa3", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#0a0f1e",
                border: "1px solid #1e2d4a",
                borderRadius: 10,
                color: "#e2e8f0"
              }}
            />
            <Bar dataKey="orders" radius={[4, 4, 0, 0]}>
              {MONTHLY.map((_, i) => (
                <Cell key={i} fill={i === MONTHLY.length - 1 ? "#10b981" : "#1e3a5f"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

