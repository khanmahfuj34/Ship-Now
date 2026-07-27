import React from "react";
import InvoiceMetricCard from "./InvoiceMetricCard";

export default function InvoiceMetrics() {
  const metrics = [
    {
      title: "Paid Invoices",
      value: "$28,890",
      count: 350,
      iconSrc: "/icons/invoices/paid.png",
      iconBg: "bg-[#856DF3]/10", // Fallback padding background if image is transparent
    },
    {
      title: "Unpaid Invoices",
      value: "$16,700",
      count: 120,
      iconSrc: "/icons/invoices/unpaid.png",
      iconBg: "bg-[#856DF3]/10",
    },
    {
      title: "Pending Invoices",
      value: "$8,050",
      count: 80,
      iconSrc: "/icons/invoices/pending.png",
      iconBg: "bg-[#856DF3]/10",
    },
    {
      title: "Overdue Invoices",
      value: "$22,110",
      count: 245,
      iconSrc: "/icons/invoices/overdue.png",
      iconBg: "bg-[#856DF3]/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full select-none">
      {metrics.map((m) => (
        <InvoiceMetricCard
          key={m.title}
          title={m.title}
          value={m.value}
          count={m.count}
          iconSrc={m.iconSrc}
          iconBg={m.iconBg}
        />
      ))}
    </div>
  );
}
