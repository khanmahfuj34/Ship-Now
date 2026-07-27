import React from "react";

interface InvoiceMetricCardProps {
  title: string;
  value: string;
  count: number;
  iconSrc: string;
  iconBg: string; // e.g. "bg-[#E6F0FF]" or "bg-[#F3EFFF]"
}

export default function InvoiceMetricCard({
  title,
  value,
  count,
  iconSrc,
  iconBg,
}: InvoiceMetricCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex items-center gap-4 select-none w-full">
      {/* Icon on Left */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
        <img src={iconSrc} alt={title} className="w-6 h-6 object-contain" />
      </div>

      {/* Text Details on Right */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] font-sans text-gray-medium font-semibold uppercase tracking-wider">
          {title}
        </span>
        <span className="text-2xl font-black text-dark font-heading tracking-tight">
          {value}
        </span>
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-medium font-sans">
          <span>from</span>
          <span className="bg-[#E6F9F0] text-[#00B074] px-1.5 py-0.5 rounded font-bold text-[9px]">
            {count}
          </span>
          <span>Invoices</span>
        </div>
      </div>
    </div>
  );
}
