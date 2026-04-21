export const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6", "#ef4444", "#06b6d4"];

export const fmtCurrency0 = n =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(n);

export const segmentColor = segment =>
  segment === "VIP"
    ? "#f59e0b"
    : segment === "At Risk" || segment === "Lapsed"
    ? "#ef4444"
    : segment === "Declining"
    ? "#f97316"
    : segment === "Growing"
    ? "#10b981"
    : "#8b5cf6";

