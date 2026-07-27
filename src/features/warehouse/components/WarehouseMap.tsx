import React, { useState } from "react";
import { MapGridSection } from "../types/warehouse.types";

interface WarehouseMapProps {
  sections: MapGridSection[];
}

export default function WarehouseMap({ sections }: WarehouseMapProps) {
  const [activeFloor, setActiveFloor] = useState<number>(1);

  // Filter or alter grids slightly based on floor choice to simulate dynamic rendering
  const getFloorSections = () => {
    if (activeFloor === 1) return sections;
    
    // Simulate floor 2 & 3 variations
    return sections.map((s, idx) => ({
      ...s,
      availableSpace: activeFloor === 2 ? "30/100" : "15/100",
      blocks: s.blocks.map((b, bIdx) => ({
        ...b,
        isFull: (bIdx + activeFloor) % 2 === 0,
      })),
    }));
  };

  const visibleSections = getFloorSections();

  // Helper to split sections for proportional grid layouts on desktop
  const row1Sections = visibleSections.filter((s) => s.category !== "Apparel" && s.category !== "Beauty & Health");
  const apparelSection = visibleSections.find((s) => s.category === "Apparel");
  const beautySection = visibleSections.find((s) => s.category === "Beauty & Health");

  const renderSectionCard = (sect: MapGridSection) => {
    return (
      <div
        key={sect.category}
        className="bg-white border border-gray-border/50 rounded-2xl p-4 flex flex-col justify-between select-none text-left"
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-bold text-dark font-heading">
            {sect.category}
          </span>
        </div>

        {/* Blocks Grid */}
        <div className="flex flex-wrap gap-2 my-4">
          {sect.blocks.map((block) => (
            <div
              key={block.id}
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-bold font-sans transition-all duration-300 ${
                !block.isFull
                  ? "bg-[#EBE7FF] border border-[#DCD6FF] text-brand shadow-sm"
                  : "bg-gray-light border border-gray-border text-gray-medium"
              }`}
            >
              {block.id}
            </div>
          ))}
        </div>

        {/* Space details footer */}
        <div className="text-[9px] text-gray-medium font-semibold">
          <span>Available Space </span>
          <span className="text-dark font-bold">{sect.availableSpace}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-border shadow-sm flex flex-col gap-4 w-full select-none">
      {/* Header with floor tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
        <h2 className="text-xs sm:text-sm font-bold font-heading text-dark tracking-wide uppercase">
          Warehouse Map
        </h2>

        {/* Floor selector tabs */}
        <div className="flex items-center bg-[#F9FAFB] border border-gray-border p-1 rounded-xl w-fit self-start sm:self-auto">
          {[1, 2, 3].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFloor(f)}
              className={`px-4 py-1.5 text-[10px] font-heading font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                activeFloor === f
                  ? "bg-dark text-white shadow-sm"
                  : "text-gray-medium hover:text-dark hover:bg-gray-100"
              }`}
            >
              Floor {f}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map Grids Area */}
      <div className="bg-[#FAF9FF] border border-gray-border/20 rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
        {/* Desktop Layout: Split rows */}
        <div className="hidden lg:flex flex-col gap-4">
          {/* Row 1: Electronics, Home & Kitchen, Automotive, Sports (Grid-cols-4) */}
          <div className="grid grid-cols-4 gap-4">
            {row1Sections.map((sect) => renderSectionCard(sect))}
          </div>

          {/* Row 2: Apparel (takes col-span-8) and Beauty (takes col-span-4) */}
          <div className="grid grid-cols-12 gap-4">
            {apparelSection && (
              <div className="col-span-8">
                {renderSectionCard(apparelSection)}
              </div>
            )}
            {beautySection && (
              <div className="col-span-4">
                {renderSectionCard(beautySection)}
              </div>
            )}
          </div>
        </div>

        {/* Tablet & Mobile Layout: Fluid Wrap */}
        <div className="flex lg:hidden flex-col sm:grid sm:grid-cols-2 gap-4">
          {visibleSections.map((sect) => renderSectionCard(sect))}
        </div>

        {/* Bottom Legend details */}
        <div className="flex items-center gap-4 text-[9px] font-sans font-bold text-gray-medium uppercase mt-2 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-md bg-[#EBE7FF] border border-[#DCD6FF]" />
            <span>Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-md bg-gray-light border border-gray-border" />
            <span>Full</span>
          </div>
        </div>
      </div>
    </div>
  );
}
