import React from "react";
import ShipmentMetricCard from "./ShipmentMetricCard";

export default function ShipmentMetrics() {
  const metrics = [
    {
      title: "Total Shipments",
      value: "1,284",
      change: "4.6%",
      isPositive: true,
      type: "total" as const,
    },
    {
      title: "Pending",
      value: "285",
      change: "8.7%",
      isPositive: true,
      type: "pending" as const,
    },
    {
      title: "Delivery",
      value: "594",
      change: "4.2%",
      isPositive: false,
      type: "delivery" as const,
    },
    {
      title: "Completed",
      value: "405",
      change: "3.9%",
      isPositive: true,
      type: "completed" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full select-none">
      {metrics.map((m) => (
        <ShipmentMetricCard
          key={m.title}
          title={m.title}
          value={m.value}
          change={m.change}
          isPositive={m.isPositive}
          type={m.type}
        />
      ))}
    </div>
  );
}
