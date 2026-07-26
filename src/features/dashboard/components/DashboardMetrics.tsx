import React from "react";
import { metricsData } from "../../../data/dashboard/dashboard.mock";
import MetricCard from "./MetricCard";

export default function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {metricsData.map((metric) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
          subValue={metric.subValue}
          change={metric.change}
          isPositive={metric.isPositive}
          iconName={metric.iconName}
        />
      ))}
    </div>
  );
}
