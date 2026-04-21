import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";

export const MONTHLY = [
  { m: "Jul", rev: 42300, orders: 38 },
  { m: "Aug", rev: 51200, orders: 46 },
  { m: "Sep", rev: 47800, orders: 41 },
  { m: "Oct", rev: 63100, orders: 57 },
  { m: "Nov", rev: 71400, orders: 63 },
  { m: "Dec", rev: 88200, orders: 79 },
  { m: "Jan", rev: 54300, orders: 49 },
  { m: "Feb", rev: 61700, orders: 55 },
  { m: "Mar", rev: 79400, orders: 71 },
  { m: "Apr", rev: 85100, orders: 76 },
  { m: "May", rev: 92600, orders: 84 },
  { m: "Jun", rev: 103200, orders: 93 }
];

export const CUSTOMERS = [
  {
    id: 1,
    name: "Harvest & Bloom Co.",
    email: "orders@harvestandbloom.com",
    location: "Portland, OR",
    ltv: 48320,
    orders: 34,
    aov: 1421,
    avgPrice: 47,
    lastOrder: "3 days ago",
    daysSince: 3,
    revYTD: 18400,
    revLY: 14200,
    ordersYTD: 12,
    ordersLY: 9,
    channel: "Shopify",
    topProduct: "Cold Brew Concentrate",
    neverProducts: ["Matcha Powder", "Decaf Colombia"],
    segment: ["VIP", "At Risk"]
  },
  {
    id: 2,
    name: "Mesa Verde Roasters",
    email: "buy@mesaverde.com",
    location: "Tucson, AZ",
    ltv: 37150,
    orders: 28,
    aov: 1327,
    avgPrice: 44,
    lastOrder: "12 days ago",
    daysSince: 12,
    revYTD: 14100,
    revLY: 16800,
    ordersYTD: 9,
    ordersLY: 12,
    channel: "Manual",
    topProduct: "Single Origin Ethiopia",
    neverProducts: ["Cold Brew Concentrate", "Matcha Powder"],
    segment: ["Declining"]
  },
  {
    id: 3,
    name: "Blue Pebble Café",
    email: "info@bluepebble.co",
    location: "Austin, TX",
    ltv: 29840,
    orders: 22,
    aov: 1356,
    avgPrice: 42,
    lastOrder: "67 days ago",
    daysSince: 67,
    revYTD: 4200,
    revLY: 13400,
    ordersYTD: 3,
    ordersLY: 10,
    channel: "Shopify",
    topProduct: "House Blend Beans",
    neverProducts: ["Cold Brew Concentrate", "Matcha Powder"],
    segment: ["Lapsed", "Win-Back"]
  },
  {
    id: 4,
    name: "Northshore Provisions",
    email: "purchasing@northshore.com",
    location: "Seattle, WA",
    ltv: 61700,
    orders: 47,
    aov: 1313,
    avgPrice: 46,
    lastOrder: "1 day ago",
    daysSince: 1,
    revYTD: 22300,
    revLY: 19100,
    ordersYTD: 17,
    ordersLY: 14,
    channel: "Shopify",
    topProduct: "Espresso Blend",
    neverProducts: ["Matcha Powder"],
    segment: ["VIP", "Growing"]
  },
  {
    id: 5,
    name: "Copper & Grain",
    email: "hello@copperandgrain.com",
    location: "Denver, CO",
    ltv: 14200,
    orders: 11,
    aov: 1291,
    avgPrice: 39,
    lastOrder: "38 days ago",
    daysSince: 38,
    revYTD: 5100,
    revLY: 3800,
    ordersYTD: 4,
    ordersLY: 3,
    channel: "Manual",
    topProduct: "Decaf Colombia",
    neverProducts: ["Matcha Powder", "Cold Brew Concentrate"],
    segment: ["New"]
  },
  {
    id: 6,
    name: "Waverly Market",
    email: "orders@waverlymarket.net",
    location: "Chicago, IL",
    ltv: 52100,
    orders: 39,
    aov: 1336,
    avgPrice: 45,
    lastOrder: "5 days ago",
    daysSince: 5,
    revYTD: 19800,
    revLY: 17200,
    ordersYTD: 14,
    ordersLY: 12,
    channel: "Shopify",
    topProduct: "Cold Brew Concentrate",
    neverProducts: ["Matcha Powder"],
    segment: ["VIP"]
  }
];

export const PRODUCTS = [
  {
    name: "Cold Brew Concentrate",
    revenue: 88400,
    qty: 312,
    customers: 28,
    repeatRate: 74,
    penetration: 46,
    reorderDays: 21
  },
  {
    name: "Espresso Blend",
    revenue: 72100,
    qty: 268,
    customers: 24,
    repeatRate: 68,
    penetration: 40,
    reorderDays: 18
  },
  {
    name: "Single Origin Ethiopia",
    revenue: 61300,
    qty: 241,
    customers: 21,
    repeatRate: 52,
    penetration: 35,
    reorderDays: 28
  },
  {
    name: "House Blend Beans",
    revenue: 54800,
    qty: 224,
    customers: 19,
    repeatRate: 61,
    penetration: 32,
    reorderDays: 24
  },
  {
    name: "Decaf Colombia",
    revenue: 31200,
    qty: 148,
    customers: 14,
    repeatRate: 43,
    penetration: 23,
    reorderDays: 35
  },
  {
    name: "Matcha Powder",
    revenue: 22700,
    qty: 108,
    customers: 11,
    repeatRate: 38,
    penetration: 18,
    reorderDays: 42
  }
];

export const SEGMENTS = [
  {
    id: 1,
    name: "VIP Customers",
    count: 14,
    desc: "Top 20% by LTV",
    color: "#f59e0b",
    filters: ["top_revenue"]
  },
  {
    id: 2,
    name: "Lapsed 60+ Days",
    count: 8,
    desc: "No order in 60+ days",
    color: "#ef4444",
    filters: ["lapsed_60"]
  },
  {
    id: 3,
    name: "Declining YoY",
    count: 6,
    desc: "Revenue down vs last year",
    color: "#f97316",
    filters: ["declining"]
  },
  {
    id: 4,
    name: "Single Product Only",
    count: 11,
    desc: "Only purchased one product",
    color: "#8b5cf6",
    filters: ["single_product"]
  },
  {
    id: 5,
    name: "No Cold Brew",
    count: 19,
    desc: "Bought Espresso but not Cold Brew",
    color: "#06b6d4",
    filters: ["cross_sell"]
  },
  {
    id: 6,
    name: "Win-Back Targets",
    count: 5,
    desc: "Ordered last year, not this year",
    color: "#ec4899",
    filters: ["win_back"]
  }
];

export const CROSS_SELL = [
  { a: "Espresso Blend", b: "Cold Brew Concentrate", pct: 68 },
  { a: "Single Origin Ethiopia", b: "House Blend Beans", pct: 54 },
  { a: "Cold Brew Concentrate", b: "Matcha Powder", pct: 41 },
  { a: "House Blend Beans", b: "Decaf Colombia", pct: 37 }
];

export const KPI = [
  {
    label: "Total Revenue",
    value: "$841,300",
    delta: "+18.4%",
    up: true,
    icon: DollarSign,
    sub: "TTM"
  },
  {
    label: "Total Orders",
    value: "752",
    delta: "+12.1%",
    up: true,
    icon: ShoppingBag,
    sub: "TTM"
  },
  {
    label: "Avg Order Value",
    value: "$1,119",
    delta: "+5.6%",
    up: true,
    icon: TrendingUp,
    sub: "TTM"
  },
  {
    label: "Active Customers",
    value: "61",
    delta: "-3.2%",
    up: false,
    icon: Users,
    sub: "12 months"
  }
];

