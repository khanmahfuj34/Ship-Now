"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Imports of feature components
import DashboardHeader from "../../../features/dashboard/components/DashboardHeader";
import DashboardMetrics from "../../../features/dashboard/components/DashboardMetrics";
import ShipmentOverviewChart from "../../../features/dashboard/components/ShipmentOverviewChart";
import DeliveryPerformanceChart from "../../../features/dashboard/components/DeliveryPerformanceChart";
import ShipmentStatusChart from "../../../features/dashboard/components/ShipmentStatusChart";
import ProductCategoriesPanel from "../../../features/dashboard/components/ProductCategoriesPanel";
import LiveTrackingPanel from "../../../features/dashboard/components/LiveTrackingPanel";
import AlertsPanel from "../../../features/dashboard/components/AlertsPanel";
import RecentShipmentsTable from "../../../features/dashboard/components/RecentShipmentsTable";
import ActivityTimeline from "../../../features/dashboard/components/ActivityTimeline";

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("shipnow_user_email");
      if (!storedEmail) {
        // Redirect to login if session is missing (mock route guard)
        router.push("/auth/login");
      } else {
        setEmail(storedEmail);
      }
    }
  }, [router]);

  if (!email) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F5F7FA] text-gray-medium font-sans font-bold text-xs select-none">
        Checking session...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 select-none">
      {/* 1. Header Greeting & Controls (Spans full page width) */}
      <DashboardHeader />

      {/* 2. Main 2-Column Desktop Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left + Center Area (Columns 1-3) */}
        <div className="lg:col-span-3 flex flex-col gap-6 min-w-0">
          {/* Metrics Row */}
          <DashboardMetrics />
          
          {/* Row of Charts 1 (Shipment Statistic & Profit Summary) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ShipmentOverviewChart />
            <DeliveryPerformanceChart />
          </div>

          {/* Row of Charts 2 (Product Categories & Live Tracking) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductCategoriesPanel />
            <LiveTrackingPanel />
          </div>

          {/* Table Row (Recent Shipments) */}
          <RecentShipmentsTable />
        </div>

        {/* Right Column Area (Column 4) */}
        <div className="lg:col-span-1 flex flex-col gap-6 min-w-0">
          <ShipmentStatusChart />
          <AlertsPanel />
          <ActivityTimeline />
        </div>

      </div>
    </div>
  );
}
