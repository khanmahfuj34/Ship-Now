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
        <div className="contents md:flex md:flex-col md:gap-6 md:min-w-0 md:col-span-3 lg:col-span-3">
          {/* Metrics Row */}
          <div className="order-0 md:order-none min-w-0 w-full">
            <DashboardMetrics />
          </div>
          
          {/* Row of Charts 1 (Shipment Statistic & Profit Summary) */}
          <div className="contents md:grid md:grid-cols-2 md:gap-6">
            <div className="order-1 md:order-none min-w-0 w-full">
              <ShipmentOverviewChart />
            </div>
            <div className="order-2 md:order-none min-w-0 w-full">
              <DeliveryPerformanceChart />
            </div>
          </div>

          {/* Row of Charts 2 (Product Categories & Live Tracking) */}
          <div className="contents md:grid md:grid-cols-2 md:gap-6">
            <div className="order-4 md:order-none min-w-0 w-full">
              <ProductCategoriesPanel />
            </div>
            <div className="order-5 md:order-none min-w-0 w-full">
              <LiveTrackingPanel />
            </div>
          </div>

          {/* Table Row (Recent Shipments) */}
          <div className="order-7 md:order-none min-w-0 w-full">
            <RecentShipmentsTable />
          </div>
        </div>

        {/* Right Column Area (Column 4) */}
        <div className="contents md:flex md:flex-col md:gap-6 md:min-w-0 md:col-span-1 lg:col-span-1">
          <div className="order-3 md:order-none min-w-0 w-full">
            <ShipmentStatusChart />
          </div>
          <div className="order-6 md:order-none min-w-0 w-full">
            <AlertsPanel />
          </div>
          <div className="order-8 md:order-none min-w-0 w-full">
            <ActivityTimeline />
          </div>
        </div>

      </div>
    </div>
  );
}
