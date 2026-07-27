import React from "react";

interface ShipmentViewSwitcherProps {
  currentView: "table" | "grid";
  onViewChange: (view: "table" | "grid") => void;
}

export default function ShipmentViewSwitcher({
  currentView,
  onViewChange,
}: ShipmentViewSwitcherProps) {
  return (
    <div className="flex items-center bg-[#F5F5F5] p-1 rounded-xl border border-[#F0F0F0] select-none">
      {/* Table Option */}
      <button
        onClick={() => onViewChange("table")}
        className={`flex items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
          currentView === "table"
            ? "bg-white text-dark shadow-sm font-semibold"
            : "text-gray-medium hover:text-dark"
        }`}
        title="Table View"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Grid Option */}
      <button
        onClick={() => onViewChange("grid")}
        className={`flex items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
          currentView === "grid"
            ? "bg-white text-dark shadow-sm font-semibold"
            : "text-gray-medium hover:text-dark"
        }`}
        title="Grid View"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      </button>
    </div>
  );
}
