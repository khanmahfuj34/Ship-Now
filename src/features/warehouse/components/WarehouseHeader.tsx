import React from "react";
import { FreightType } from "../types/warehouse.types";

interface WarehouseHeaderProps {
  activeTab: FreightType;
  onTabChange: (tab: FreightType) => void;
}

export default function WarehouseHeader({ activeTab, onTabChange }: WarehouseHeaderProps) {
  const tabs: { type: FreightType; icon: React.ReactNode }[] = [
    {
      type: "Road Freight",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      type: "Rail Freight",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="4" y="3" width="16" height="15" rx="2" />
          <path d="M4 11h16" />
          <path d="M12 3v8" />
          <circle cx="8" cy="15" r="1" />
          <circle cx="16" cy="15" r="1" />
          <path d="m6 22 2-4" />
          <path d="m18 22-2-4" />
        </svg>
      ),
    },
    {
      type: "Ocean Freight",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M2 21h20" />
          <path d="M19.3 14.8C21.1 13.5 22 11.7 22 10V4h-3v3h-4V4h-3v3H8V4H5v6c0 1.7.9 3.5 2.7 4.8L12 18l7.3-3.2z" />
        </svg>
      ),
    },
    {
      type: "Air Freight",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M17.8 19.2 16 11l3.5-3.5C20 7 21 5.5 21 4.5s-1-1-2-1c-1 0-2.5 1-3 1.5L12.5 8.5 4.3 6.7 3 8l6.4 3.6-3.8 3.8-3.4-.6L1 16.2l3.8 2.2 2.2 3.8 1.4-1.2-.6-3.4 3.8-3.8 3.6 6.4 1.3-1.3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full select-none">
      {/* Breadcrumbs and Title */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-dark font-heading">
          Warehouse
        </h1>
        <div className="flex items-center gap-1.5 text-[10px] text-gray-medium font-sans font-bold">
          <span>Dashboard</span>
          <span className="opacity-40">/</span>
          <span className="text-dark">Warehouse</span>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex items-center bg-[#F9FAFB] border border-gray-border p-1.5 rounded-2xl w-fit self-start md:self-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.type;
          return (
            <button
              key={tab.type}
              onClick={() => onTabChange(tab.type)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-heading font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-dark text-white shadow-sm"
                  : "text-gray-medium hover:text-dark hover:bg-gray-100"
              }`}
            >
              {tab.icon}
              {/* Text: Hidden on mobile (except if active), visible on tablet/desktop */}
              <span className={`${isActive ? "inline" : "hidden sm:inline"}`}>
                {tab.type}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
