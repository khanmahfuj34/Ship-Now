import React from "react";
import { InventoryItem } from "../../types/warehouse.types";

interface WarehouseInventoryChartProps {
  items: InventoryItem[];
}

export default function WarehouseInventoryChart({ items }: WarehouseInventoryChartProps) {
  // Total packages hardcoded to match Figma
  const totalPackages = 10000;

  // Render striped overlay style if needed
  const getBarStyle = (item: InventoryItem) => {
    if (item.barType === "striped") {
      return {
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 8px, transparent 8px, transparent 16px)",
      };
    }
    return {};
  };

  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-border shadow-sm flex flex-col gap-4 w-full select-none">
      {/* Chart Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs sm:text-sm font-bold font-heading text-dark tracking-wide uppercase">
          Warehouse Inventory
        </h2>
        <button className="text-gray-medium hover:text-dark cursor-pointer text-base font-bold leading-none px-1">
          •••
        </button>
      </div>

      {/* Total Packages Value */}
      <div className="flex items-baseline gap-1.5 -mt-2">
        <span className="text-2xl sm:text-3xl font-black font-heading text-dark tracking-tight">
          {totalPackages.toLocaleString()}
        </span>
        <span className="text-[10px] sm:text-xs font-semibold text-gray-medium font-sans">
          packages
        </span>
      </div>

      {/* Responsive Chart Area */}
      {/* 1. Desktop & Tablet View (Vertical standing columns) */}
      <div className="hidden sm:flex flex-col gap-6 mt-4 w-full">
        {/* Proportional Vertical Bars Container */}
        <div className="flex items-end justify-between h-40 px-2 gap-4 md:gap-6 border-b border-gray-border/20 pb-4">
          {items.map((item, idx) => {
            // Relative height proportion (Electronics 25% takes full 100% of height)
            const maxPercentage = Math.max(...items.map((i) => i.percentage));
            const barHeightPercent = (item.percentage / maxPercentage) * 100;

            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                {/* Visual Column Bar */}
                <div className="w-full bg-[#F5F7FA] rounded-t-xl h-full flex items-end overflow-hidden">
                  <div
                    style={{
                      height: `${barHeightPercent}%`,
                      ...getBarStyle(item),
                    }}
                    className={`w-full rounded-t-xl transition-all duration-500 ease-out ${item.colorClass}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Labels Row below borders */}
        <div className="grid grid-cols-6 gap-2 text-center -mt-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[10px] font-bold text-dark truncate font-sans">
                {item.category}
              </span>
              <span className="text-[9px] text-gray-medium font-semibold">
                {item.percentage}% <span className="opacity-40">•</span> {item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Mobile View (Horizontal progress list bars) */}
      <div className="flex sm:hidden flex-col gap-3.5 mt-2">
        {items.map((item, idx) => {
          return (
            <div key={idx} className="flex items-center justify-between gap-4 py-1.5 border-b border-gray-light last:border-0">
              {/* Progress bar container on left */}
              <div className="flex-1 bg-[#F5F7FA] h-7 rounded-lg overflow-hidden relative">
                <div
                  style={{
                    width: `${item.percentage * 3.5}%`, // Scaled for mobile view
                    maxWidth: "100%",
                    ...getBarStyle(item),
                  }}
                  className={`h-full rounded-lg transition-all duration-500 ${item.colorClass}`}
                />
              </div>

              {/* Text label details on right */}
              <div className="flex flex-col text-right min-w-[120px]">
                <span className="text-[10px] font-bold text-dark font-sans">
                  {item.category}
                </span>
                <span className="text-[9px] text-gray-medium font-semibold mt-0.5">
                  {item.percentage}% <span className="opacity-45">•</span> {item.value.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
