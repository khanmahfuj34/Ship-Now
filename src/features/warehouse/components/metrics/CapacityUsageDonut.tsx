import React from "react";

interface CapacityUsageDonutProps {
  percentage: number; // e.g. 62.5
  loadedShelves?: number;
  emptyShelves?: number;
}

export default function CapacityUsageDonut({
  percentage,
  loadedShelves = 40,
  emptyShelves = 24,
}: CapacityUsageDonutProps) {
  // SVG Circle math: radius = 38, circumference = 2 * pi * r = 238.76
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-border shadow-sm flex flex-col gap-4 w-full select-none">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs sm:text-sm font-bold font-heading text-dark tracking-wide uppercase">
          Capacity Usage
        </h2>
        <button className="text-gray-medium hover:text-dark cursor-pointer text-base font-bold leading-none px-1">
          •••
        </button>
      </div>

      {/* Donut Container */}
      <div className="flex items-center justify-center my-1 relative">
        <svg className="w-36 h-36 md:w-40 md:h-40 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#F0F0F0"
            strokeWidth="8"
          />
          {/* Active colored path */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#856DF3"
            strokeWidth="9"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Center overlay label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
          <span className="text-[10px] sm:text-xs font-semibold text-gray-medium font-sans uppercase tracking-wider mb-1">
            Total Usage
          </span>
          <span className="text-xl sm:text-2xl font-black font-heading text-dark tracking-tight">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Shelves statistics footer */}
      <div className="flex justify-between items-center px-2 mt-2 pt-3 border-t border-gray-border/25 text-left">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-sans font-bold text-gray-medium uppercase tracking-wide">
            Loaded
          </span>
          <span className="text-xs sm:text-sm font-bold text-dark font-heading">
            {loadedShelves} shelves
          </span>
        </div>

        <div className="flex flex-col gap-0.5 text-right">
          <span className="text-[10px] font-sans font-bold text-gray-medium uppercase tracking-wide">
            Empty
          </span>
          <span className="text-xs sm:text-sm font-bold text-dark font-heading">
            {emptyShelves} shelves
          </span>
        </div>
      </div>
    </div>
  );
}
