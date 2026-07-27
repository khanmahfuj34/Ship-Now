import React, { useState } from "react";
import Link from "next/link";

interface ShipmentToolbarProps {
  view: "table" | "grid";
  search: string;
  onSearchChange: (val: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  dateFilter: string;
  onDateFilterChange: (val: string) => void;
  sortBy: string;
  onSortByChange: (val: string) => void;
  carrierFilter: string;
  onCarrierFilterChange: (val: string) => void;
  transportModeFilter: string;
  onTransportModeFilterChange: (val: string) => void;
}

export default function ShipmentToolbar({
  view,
  search,
  onSearchChange,
  activeTab,
  onTabChange,
  dateFilter,
  onDateFilterChange,
  sortBy,
  onSortByChange,
  carrierFilter,
  onCarrierFilterChange,
  transportModeFilter,
  onTransportModeFilterChange,
}: ShipmentToolbarProps) {
  const [isFilterTrayOpen, setIsFilterTrayOpen] = useState(false);
  const [isTabletSearchOpen, setIsTabletSearchOpen] = useState(false);

  // Tabs are different based on the current view (table vs grid)
  const tabs =
    view === "table"
      ? ["All", "Completed", "Delivery", "Pending"]
      : ["All", "Delivered", "In Transit", "Processing", "Out for Delivery"];

  const carriersList = ["All", "FedEx", "DHL", "UPS", "USPS", "Aramex"];
  const transportModesList = ["All", "air", "road", "ocean", "rail"];

  const hasActiveFilters = carrierFilter !== "All" || transportModeFilter !== "All";

  return (
    <div className="flex flex-col gap-4 w-full select-none">
      {/* 1. Main Toolbar Row (Desktop/Tablet) */}
      <div className="hidden md:flex flex-row md:items-center justify-between gap-3">
        {/* Left Side: Tabs (Visible on Desktop/Tablet) */}
        <div className="hidden md:flex items-center bg-white p-1 rounded-full border border-gray-border/70 select-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-5 py-2 rounded-full font-sans text-xs font-semibold cursor-pointer transition-all duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? "bg-dark text-white shadow-sm"
                  : "bg-transparent text-gray-medium hover:text-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center justify-between md:justify-end gap-2.5 w-full md:w-auto">
          {/* A. Search Input */}
          {/* On Desktop/Mobile: Input is visible. On Tablet: Can toggle view */}
          <div className={`relative ${isTabletSearchOpen ? "flex-1 md:flex-initial" : "hidden md:block"} flex-1 md:w-64`}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder={view === "grid" ? "Search Shipment" : "Search id, company, etc"}
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[#F5F5F5] border border-transparent focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition-all duration-200 rounded-xl py-3 pl-10 pr-4 text-xs text-dark placeholder:text-gray-medium outline-none"
            />
            {/* Close button for tablet search */}
            {isTabletSearchOpen && (
              <button
                onClick={() => {
                  setIsTabletSearchOpen(false);
                  onSearchChange("");
                }}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-medium hover:text-dark cursor-pointer md:hidden"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Tablet-only search trigger button (Hidden when tablet search is open) */}
          {!isTabletSearchOpen && (
            <button
              onClick={() => setIsTabletSearchOpen(true)}
              className="md:hidden hidden sm:flex items-center justify-center w-11 h-11 bg-white hover:bg-gray-light border border-gray-border rounded-xl cursor-pointer text-dark transition-all duration-200"
              title="Search"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}

          {/* B. Filter Button */}
          <button
            onClick={() => setIsFilterTrayOpen(!isFilterTrayOpen)}
            className={`flex items-center justify-center gap-2 px-4 h-11 bg-white border rounded-xl cursor-pointer transition-all duration-200 ${
              isFilterTrayOpen || hasActiveFilters
                ? "border-[#856DF3] text-[#856DF3] font-semibold bg-[#F8F7FF]"
                : "border-gray-border hover:bg-[#F5F5F5] text-dark"
            }`}
            title="Filter panel"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="text-xs hidden md:inline">Filter</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-[#856DF3] animate-pulse"></span>
            )}
          </button>

          {/* C. Date Filter (Table View only) or Sort Dropdown (Grid View only) */}
          {view === "table" ? (
            <div className="relative">
              <select
                value={dateFilter}
                onChange={(e) => onDateFilterChange(e.target.value)}
                className="appearance-none bg-white border border-gray-border hover:border-gray-medium rounded-xl h-11 pl-4 pr-10 text-xs font-semibold text-dark outline-none cursor-pointer transition-all duration-200"
              >
                <option value="This Month">This Month</option>
                <option value="All Time">All Time</option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-medium">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          ) : (
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-medium font-semibold hidden md:inline">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => onSortByChange(e.target.value)}
                className="appearance-none bg-white border border-gray-border hover:border-gray-medium rounded-xl h-11 pl-3.5 md:pl-16 pr-10 text-xs font-semibold text-dark outline-none cursor-pointer transition-all duration-200"
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Company">Company</option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-medium">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 2. Mobile Search & Add Action Row (Only visible on Mobile viewports) */}
      <div className="flex md:hidden items-center gap-2.5 w-full">
        {/* Mobile Search input */}
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder={view === "grid" ? "Search Shipment" : "Search id, company, etc"}
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#F5F5F5] border border-transparent focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition-all duration-200 rounded-xl py-3 pl-10 pr-4 text-xs text-dark placeholder:text-gray-medium outline-none"
          />
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterTrayOpen(!isFilterTrayOpen)}
          className={`flex items-center justify-center w-11 h-11 border rounded-xl cursor-pointer transition-all duration-200 shrink-0 ${
            isFilterTrayOpen || hasActiveFilters
              ? "border-[#856DF3] text-[#856DF3] bg-[#F8F7FF]"
              : "border-gray-border bg-white hover:bg-gray-light text-dark"
          }`}
          title="Filter options"
        >
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>

        {/* Mobile "+" Button */}
        <Link
          href="/shipments/new"
          className="flex items-center justify-center w-11 h-11 bg-dark hover:bg-[#222222] text-white rounded-xl cursor-pointer transition-all duration-200 shrink-0"
          title="Create Shipment"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </Link>
      </div>

      {/* 3. Mobile tabs scroll row (Only visible on Mobile viewports) */}
      <div className="flex md:hidden overflow-x-auto no-scrollbar pb-1">
        <div className="flex items-center bg-white p-1 rounded-full border border-gray-border/70 select-none w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 rounded-full font-sans text-xs font-semibold cursor-pointer transition-all duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? "bg-dark text-white shadow-sm"
                  : "bg-transparent text-gray-medium hover:text-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Collapsible Extra Filters Panel */}
      {isFilterTrayOpen && (
        <div className="bg-[#FAF9FF] p-4 md:p-5 rounded-2xl border border-[#E3DDFF] flex flex-col md:flex-row gap-5 transition-all duration-300">
          {/* Carrier selector */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase font-bold text-gray-medium tracking-wide">
              Carrier
            </span>
            <div className="flex flex-wrap gap-1.5">
              {carriersList.map((c) => (
                <button
                  key={c}
                  onClick={() => onCarrierFilterChange(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    carrierFilter === c
                      ? "bg-[#856DF3] text-white"
                      : "bg-white hover:bg-gray-light border border-gray-border text-dark"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Transport Mode selector */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase font-bold text-gray-medium tracking-wide">
              Transport Mode
            </span>
            <div className="flex flex-wrap gap-1.5">
              {transportModesList.map((m) => (
                <button
                  key={m}
                  onClick={() => onTransportModeFilterChange(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-200 cursor-pointer ${
                    transportModeFilter === m
                      ? "bg-[#856DF3] text-white"
                      : "bg-white hover:bg-gray-light border border-gray-border text-dark"
                  }`}
                >
                  {m === "all" ? "All" : m}
                </button>
              ))}
            </div>
          </div>

          {/* Clear button */}
          {hasActiveFilters && (
            <div className="md:ml-auto flex items-end">
              <button
                onClick={() => {
                  onCarrierFilterChange("All");
                  onTransportModeFilterChange("All");
                }}
                className="text-xs font-bold font-sans text-red-500 hover:text-red-700 cursor-pointer hover:underline py-1.5"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
