import React, { useState } from "react";

interface InvoiceToolbarProps {
  search: string;
  onSearchChange: (val: string) => void;
  status: string;
  onStatusChange: (val: string) => void;
  sortBy: string;
  onSortByChange: (val: string) => void;
  sortOrder: "asc" | "desc";
  onSortOrderChange: (val: "asc" | "desc") => void;
}

export default function InvoiceToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
}: InvoiceToolbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full select-none">
      {/* Main Toolbar Row */}
      <div className="flex items-center justify-between w-full flex-wrap gap-3">
        {/* Left Side: Title */}
        <h2 className="text-lg font-bold font-heading text-dark tracking-wide">
          Invoices
        </h2>

        {/* Right Side: Search, Filter Settings, and New Invoice Button */}
        <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-end">
          {/* Search Input Container */}
          <div className="relative flex-1 sm:w-60 max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search invoices"
              className="w-full bg-[#F5F5F5] text-dark placeholder:text-gray-medium text-xs font-sans rounded-xl py-2.5 pl-9 pr-4 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>

          {/* Filter Settings Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-200 cursor-pointer ${
              isOpen
                ? "bg-brand/10 border-brand text-brand"
                : "bg-white border-gray-border/50 text-gray-medium hover:text-dark hover:border-gray-medium"
            }`}
            title="Filter Settings"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>

          {/* New Invoice Button */}
          <button
            onClick={() => alert("Create New Invoice feature is coming soon!")}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-dark hover:bg-[#222222] text-white text-xs font-heading font-semibold rounded-xl cursor-pointer transition-all duration-200 active:scale-[0.98]"
          >
            <span className="text-sm font-bold leading-none">+</span>
            <span>New Invoice</span>
          </button>
        </div>
      </div>

      {/* Expanded Filter Panel */}
      {isOpen && (
        <div className="bg-[#FAF9FF] p-4 rounded-2xl border border-gray-border/30 shadow-inner grid grid-cols-1 sm:grid-cols-3 gap-4 w-full animate-fadeIn">
          {/* Status Filter */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-sans font-bold text-gray-medium uppercase tracking-wide">
              Status
            </span>
            <div className="flex gap-2 flex-wrap">
              {["All", "Paid", "Unpaid", "Overdue"].map((st) => (
                <button
                  key={st}
                  onClick={() => onStatusChange(st)}
                  className={`px-3 py-1.5 text-xs font-semibold font-sans rounded-lg transition-colors cursor-pointer ${
                    status === st
                      ? "bg-brand text-white"
                      : "bg-white border border-gray-border/40 text-gray-medium hover:text-dark hover:bg-gray-light"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Sort By Filter */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-sans font-bold text-gray-medium uppercase tracking-wide">
              Sort By
            </span>
            <select
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value)}
              className="bg-white border border-gray-border/40 text-dark font-sans text-xs rounded-lg p-2 outline-none cursor-pointer focus:border-brand"
            >
              <option value="id">Invoice ID</option>
              <option value="company">Company Name</option>
              <option value="date">Due Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          {/* Sort Order Filter */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-sans font-bold text-gray-medium uppercase tracking-wide">
              Direction
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => onSortOrderChange("asc")}
                className={`flex-1 py-1.5 text-xs font-semibold font-sans rounded-lg border transition-colors cursor-pointer ${
                  sortOrder === "asc"
                    ? "bg-brand border-brand text-white"
                    : "bg-white border-gray-border/40 text-gray-medium hover:text-dark"
                }`}
              >
                Ascending
              </button>
              <button
                onClick={() => onSortOrderChange("desc")}
                className={`flex-1 py-1.5 text-xs font-semibold font-sans rounded-lg border transition-colors cursor-pointer ${
                  sortOrder === "desc"
                    ? "bg-brand border-brand text-white"
                    : "bg-white border-gray-border/40 text-gray-medium hover:text-dark"
                }`}
              >
                Descending
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
