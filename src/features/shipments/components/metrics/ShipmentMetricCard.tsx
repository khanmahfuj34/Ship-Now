import React from "react";

interface ShipmentMetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  type: "total" | "pending" | "delivery" | "completed";
}

export default function ShipmentMetricCard({
  title,
  value,
  change,
  isPositive,
  type,
}: ShipmentMetricCardProps) {
  // Select icon and colors based on card type
  const getIconAndColors = () => {
    switch (type) {
      case "total":
        return {
          bg: "bg-[#EBF3FF] text-[#2F80ED]",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h2m-4-3h4" />
            </svg>
          ),
        };
      case "pending":
        return {
          bg: "bg-[#FFF9EC] text-[#FFA800]",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        };
      case "delivery":
        return {
          bg: "bg-[#F3EFFF] text-[#856DF3]",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          ),
        };
      case "completed":
      default:
        return {
          bg: "bg-[#EBFDF3] text-[#27AE60]",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        };
    }
  };

  const { bg, icon } = getIconAndColors();

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col gap-4 select-none w-full min-w-[200px]">
      {/* Top Header Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bg}`}>
            {icon}
          </div>
          <span className="text-xs font-sans text-gray-medium font-semibold tracking-wide">
            {title}
          </span>
        </div>
        {/* Three dots menu */}
        <button className="text-gray-medium hover:text-dark transition-colors cursor-pointer">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Value & Change Row */}
      <div className="flex items-end justify-between leading-none">
        <span className="text-2xl font-extrabold text-dark font-heading tracking-wide">
          {value}
        </span>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <span className="bg-[#D9F9E7] text-[#007837] text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-0.5 whitespace-nowrap">
              ↗ {change}
            </span>
          ) : (
            <span className="bg-[#FFEBEB] text-[#D32F2F] text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-0.5 whitespace-nowrap">
              ↘ {change}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
