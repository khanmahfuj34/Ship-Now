import { Suspense } from "react";
import ShipmentsScreen from "../../../features/shipments/ShipmentsScreen";

export default function ShipmentsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm font-sans text-gray-medium">Loading Shipments...</div>}>
      <ShipmentsScreen />
    </Suspense>
  );
}
