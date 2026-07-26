import React from "react";
import { recentShipmentsData } from "../../../data/dashboard/dashboard.mock";

export default function RecentShipmentsTable() {
  // Return color styling classes based on status string
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-[#D9F9E7] text-[#007837]";
      case "Out for Delivery":
        return "bg-[#E3DDFF] text-[#856DF3]";
      case "Processing":
        return "bg-[#E3EDFF] text-[#235BC2]";
      case "In Transit":
      default:
        return "bg-gray-light text-gray-medium";
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none w-full min-h-[380px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs text-gray-medium font-semibold tracking-wide font-sans">
          Recent Shipment
        </span>
        <button className="text-xs font-sans font-bold text-brand hover:underline cursor-pointer">
          View All
        </button>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left font-sans border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-gray-border/40 text-[10px] font-bold text-gray-medium uppercase tracking-wider h-9">
              <th className="pb-3 pr-4 font-semibold">Shipment ID</th>
              <th className="pb-3 pr-4 font-semibold">Client Name</th>
              <th className="pb-3 pr-4 font-semibold">Carrier</th>
              <th className="pb-3 pr-4 font-semibold">Route</th>
              <th className="pb-3 pr-4 font-semibold">Date</th>
              <th className="pb-3 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-border/30 text-xs">
            {recentShipmentsData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-light/20 transition-colors h-12">
                {/* ID */}
                <td className="font-bold text-dark py-3 pr-4 whitespace-nowrap">
                  {row.id}
                </td>
                
                {/* Client & Category */}
                <td className="py-3 pr-4 whitespace-nowrap">
                  <div className="flex flex-col leading-tight">
                    <span className="font-bold text-dark">{row.company}</span>
                    <span className="text-[10px] text-gray-medium mt-0.5">{row.category}</span>
                  </div>
                </td>
                
                {/* Carrier */}
                <td className="py-3 pr-4 font-semibold text-dark whitespace-nowrap">
                  {row.carrier}
                </td>
                
                {/* Route */}
                <td className="py-3 pr-4 text-gray-medium font-medium whitespace-nowrap">
                  {row.route}
                </td>
                
                {/* Date */}
                <td className="py-3 pr-4 text-gray-medium font-semibold whitespace-nowrap">
                  {row.date}
                </td>
                
                {/* Status Badge */}
                <td className="py-3 text-right whitespace-nowrap">
                  <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold ${getStatusStyle(row.status)}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
