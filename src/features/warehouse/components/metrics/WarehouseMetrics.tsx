import React from "react";
import { WarehouseMetric } from "../../types/warehouse.types";

interface WarehouseMetricsProps {
  metrics: WarehouseMetric[];
}

export default function WarehouseMetrics({ metrics }: WarehouseMetricsProps) {
  return (
    <>
      {metrics.map((metric, idx) => {
        // Parse numbers/units
        const parts = metric.value.split(" ");
        const numericVal = parts[0];
        const unit = parts.slice(1).join(" ");

        return (
          <div
            key={idx}
            className="bg-white p-4 sm:p-5 rounded-3xl border border-gray-border shadow-sm flex flex-col justify-between w-full select-none min-h-[96px] md:min-h-[110px] lg:min-h-0 lg:flex-1"
          >
            {/* Metric Label */}
            <span className="text-[10px] sm:text-xs font-sans font-bold text-gray-medium tracking-wide uppercase">
              {metric.label}
            </span>

            {/* Metric Value & Growth Badge */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mt-2 sm:mt-1">
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black font-heading text-dark tracking-tight">
                  {numericVal}
                </span>
                {unit && (
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-medium font-sans">
                    {unit}
                  </span>
                )}
              </div>

              {/* Growth Badge */}
              <div className="flex items-center bg-[#E6F9F0] text-[#00B074] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[9px] sm:text-[10px] font-extrabold w-fit">
                <span className="mr-0.5 sm:mr-1">↗</span>
                <span>{metric.change}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
