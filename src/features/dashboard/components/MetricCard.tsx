import React from "react";
import Image from "next/image";

interface MetricCardProps {
  title: string;
  value: string;
  subValue: string;
  change: string;
  isPositive: boolean;
  iconName: string;
}

export default function MetricCard({
  title,
  value,
  subValue,
  change,
  isPositive,
  iconName,
}: MetricCardProps) {
  // Map icon names to local asset paths
  const iconMap: Record<string, string> = {
    truck: "/icons/Shipments.png",
    performance: "/icons/Analytics.png",
    revenue: "/icons/Invoices & Billing.png",
  };

  const iconSrc = iconMap[iconName] || "/icons/Dashboard.png";

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex items-center justify-between gap-4 select-none">
      <div className="flex flex-col gap-1.5 min-w-0">
        <span className="font-sans text-xs text-gray-medium font-semibold tracking-wide">
          {title}
        </span>
        <div className="flex items-baseline gap-1.5 min-w-0">
          <span className="font-heading font-extrabold text-2xl text-dark leading-none truncate">
            {value}
          </span>
          {subValue && (
            <span className="font-sans text-xs text-gray-medium font-medium leading-none">
              {subValue}
            </span>
          )}
        </div>
        
        {/* Trend Indicator */}
        <div className="flex items-center gap-1 mt-1">
          <span
            className={`flex items-center gap-0.5 font-sans text-[11px] font-bold ${
              isPositive ? "text-[#007837]" : "text-red-500"
            }`}
          >
            {isPositive ? (
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
              </svg>
            ) : (
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
              </svg>
            )}
            {change}
          </span>
          <span className="font-sans text-[10px] text-gray-medium">
            {title === "Revenue" ? "from last month" : "from last week"}
          </span>
        </div>
      </div>

      {/* Purple Icon Container */}
      <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center flex-shrink-0 shadow-sm shadow-brand/10">
        <div className="relative w-5 h-5">
          <Image
            src={iconSrc}
            alt={title}
            fill
            sizes="20px"
            className="object-contain invert brightness-200"
          />
        </div>
      </div>
    </div>
  );
}
