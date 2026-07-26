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
    <div className="flex flex-col gap-6">
      {/* 1. Header Greeting & Controls */}
      <DashboardHeader />

      {/* 2. Top Metrics Cards Row */}
      <DashboardMetrics />

      {/* 3. Main Split-Grid (Left / Right Columns) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        {/* Left Column widgets */}
        <div className="flex flex-col gap-6 min-w-0">
          <ShipmentOverviewChart />
          <ProductCategoriesPanel />
          <LiveTrackingPanel />
          <RecentShipmentsTable />
        </div>

        {/* Right Column widgets */}
        <div className="flex flex-col gap-6 min-w-0">
          <DeliveryPerformanceChart />
          <ShipmentStatusChart />
          <AlertsPanel />
          <ActivityTimeline />
        </div>
      </div>
    </div>
  );
}
