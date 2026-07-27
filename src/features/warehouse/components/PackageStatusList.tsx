import React, { useState } from "react";
import { PackageStatus } from "../types/warehouse.types";

interface PackageStatusListProps {
  packages: PackageStatus[];
}

type FilterStatus = "All" | "Expected" | "Received" | "Sent";

export default function PackageStatusList({ packages }: PackageStatusListProps) {
  const [filter, setFilter] = useState<FilterStatus>("All");

  const statuses: FilterStatus[] = ["All", "Expected", "Received", "Sent"];

  const filteredPackages = packages.filter((pkg) => {
    if (filter === "All") return true;
    return pkg.status === filter;
  });

  const getStatusClass = (status: "Sent" | "Received" | "Expected") => {
    switch (status) {
      case "Sent":
        return "bg-[#F3EFFF] text-[#856DF3]";
      case "Received":
        return "bg-[#E6F9F0] text-[#00B074]";
      case "Expected":
      default:
        return "bg-gray-light text-gray-medium";
    }
  };

  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-border shadow-sm flex flex-col gap-4 w-full select-none text-left">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs sm:text-sm font-bold font-heading text-dark tracking-wide uppercase">
          Package Status
        </h2>
        <button className="text-gray-medium hover:text-dark cursor-pointer text-base font-bold leading-none px-1">
          •••
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center bg-[#F9FAFB] border border-gray-border p-1 rounded-xl w-full justify-between">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`flex-1 text-center py-1.5 text-[10px] font-heading font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
              filter === s
                ? "bg-dark text-white shadow-sm"
                : "text-gray-medium hover:text-dark hover:bg-gray-100"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* List items */}
      <div className="flex flex-col gap-3.5 mt-1">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-6 text-gray-medium text-xs font-sans">
            No packages under &ldquo;{filter}&rdquo;
          </div>
        ) : (
          filteredPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-3 py-1 border-b border-gray-light last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                {/* Package Icon */}
                <div className="w-9 h-9 rounded-xl bg-[#FAF9FF] border border-gray-border flex items-center justify-center text-brand shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                {/* Title and Time */}
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-bold text-dark font-sans hover:underline cursor-pointer">
                    {pkg.id}
                  </span>
                  <span className="text-[9px] text-gray-medium font-semibold mt-0.5">
                    {pkg.time}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <span className={`px-2 py-0.5 rounded-lg text-[9px] font-extrabold tracking-wide font-sans ${getStatusClass(pkg.status)}`}>
                {pkg.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
