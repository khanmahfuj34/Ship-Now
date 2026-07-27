import React, { Suspense } from "react";
import WarehouseScreen from "../../../features/warehouse/components/WarehouseScreen";

export const metadata = {
  title: "Warehouse & Inventory - ShipNow",
  description: "Track storage usage, shelf mapping, product categories, and real-time inventory updates for ShipNow logistics.",
};

export default function WarehousePage() {
  return (
    <Suspense fallback={<div className="p-6 font-sans text-xs text-gray-medium font-bold select-none">Loading Warehouse Dashboard...</div>}>
      <WarehouseScreen />
    </Suspense>
  );
}
