"use client";

import { useState } from "react";
import { Sidebar } from "./dashboard/Sidebar";
import { TopBar } from "./dashboard/TopBar";
import { OverviewPage } from "./dashboard/OverviewPage";
import { CustomersPage } from "./dashboard/CustomersPage";
import { ProductsPage } from "./dashboard/ProductsPage";
import { SegmentsPage } from "./dashboard/SegmentsPage";
// import { AdminPage } from "./dashboard/AdminPage";

export default function ZohoAnalyticsDashboard() {
  const [page, setPage] = useState("overview");

  return (
    <div
      style={{
        background: "radial-gradient(circle at top, #020617 0, #020617 40%, #020617 100%)",
        minHeight: "100vh",
        display: "flex"
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Sidebar active={page} setActive={setPage} />
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}
      >
        <TopBar page={page} />
        <main style={{ flex: 1, overflowY: "auto" }}>
          {page === "overview" && <OverviewPage />}
          {page === "customers" && <CustomersPage />}
          {page === "products" && <ProductsPage />}
          {page === "segments" && <SegmentsPage />}
          {page === "admin" && <AdminPage />}
        </main>
      </div>
    </div>
  );
}

