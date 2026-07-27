"use client";

import React, { useState, useMemo } from "react";
import { mockWarehouseData } from "../../../data/warehous/warehous.mock";
import { FreightType } from "../types/warehouse.types";

import WarehouseHeader from "./WarehouseHeader";
import WarehouseMetrics from "./metrics/WarehouseMetrics";
import WarehouseInventoryChart from "./metrics/WarehouseInventoryChart";
import CapacityUsageDonut from "./metrics/CapacityUsageDonut";
import WarehouseStorageTable from "./table/WarehouseStorageTable";
import PackageStatusList from "./PackageStatusList";
import WarehouseMap from "./WarehouseMap";
import WarehouseActivityLog from "./WarehouseActivityLog";

export default function WarehouseScreen() {
  const [activeTab, setActiveTab] = useState<FreightType>("Road Freight");

  // Retrieve mock data dynamically based on the active freight tab
  const data = useMemo(() => {
    return mockWarehouseData[activeTab];
  }, [activeTab]);

  // Derive donut chart loaded/empty count values dynamically
  const donutStats = useMemo(() => {
    switch (activeTab) {
      case "Rail Freight":
        return { percentage: 48.2, loaded: 48, empty: 52 };
      case "Ocean Freight":
        return { percentage: 85.4, loaded: 85, empty: 15 };
      case "Air Freight":
        return { percentage: 35.8, loaded: 36, empty: 64 };
      case "Road Freight":
      default:
        return { percentage: 62.5, loaded: 40, empty: 24 };
    }
  }, [activeTab]);

  return (
    <div className="w-full flex flex-col gap-6 select-none">
      {/* 1. Header with Title and Tabs */}
      <WarehouseHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 2. Responsive Unified Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full items-stretch">
        
        {/* Row 1 - Left Column: KPI metrics (Row on mobile/tablet, stack on desktop) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-row lg:flex-col gap-4 w-full md:grid md:grid-cols-3 lg:flex">
          <WarehouseMetrics metrics={data.metrics} />
        </div>

        {/* Row 1 - Center Column: Inventory category bar chart */}
        <div className="col-span-1 md:col-span-2 lg:col-span-6 flex">
          <WarehouseInventoryChart items={data.inventory} />
        </div>

        {/* Row 1 - Right Column: Capacity usage donut chart */}
        <div className="col-span-1 md:col-span-1 lg:col-span-3 flex">
          <CapacityUsageDonut
            percentage={donutStats.percentage}
            loadedShelves={donutStats.loaded}
            emptyShelves={donutStats.empty}
          />
        </div>

        {/* Row 2 - Right Column: Package status filtering list */}
        {/* Placed here so on Tablet it is side-by-side with Capacity Usage donut */}
        <div className="col-span-1 md:col-span-1 lg:col-span-4 lg:order-5 flex">
          <PackageStatusList packages={data.packages} />
        </div>

        {/* Row 2 - Left Column: Storage locations list table */}
        <div className="col-span-1 md:col-span-2 lg:col-span-8 lg:order-4 flex">
          <WarehouseStorageTable rows={data.storage} />
        </div>

        {/* Row 3 - Left Column: Storage maps visualization */}
        <div className="col-span-1 md:col-span-2 lg:col-span-8 lg:order-6 flex">
          <WarehouseMap sections={data.map} />
        </div>

        {/* Row 3 - Right Column: Activity Log feed log */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:order-7 flex">
          <WarehouseActivityLog logs={data.activities} />
        </div>

      </div>
    </div>
  );
}
