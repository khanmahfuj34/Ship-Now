import React from "react";
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 select-none">
      {/* Greeting */}
      <div>
        <span className="text-xs font-sans text-gray-medium font-semibold block mb-0.5 tracking-wide">
          Hello John!
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-dark font-heading tracking-tight leading-none">
          Good Morning
        </h1>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* Search Input */}
        <div className="relative flex-1 sm:w-60 md:w-72">
          <input
            type="text"
            placeholder="Search anything"
            className="w-full bg-white text-dark font-sans placeholder:text-gray-medium text-xs rounded-xl py-3 pl-10 pr-4 transition-all duration-200 border border-gray-border focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 shadow-sm"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-medium"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Add New Shipping Link */}
        <Link
          href="/shipments/new"
          className="flex items-center justify-center gap-1.5 py-3 px-4 md:px-5 bg-dark hover:bg-[#222222] active:scale-[0.98] font-heading font-semibold text-xs text-white rounded-xl shadow-sm transition-all cursor-pointer flex-shrink-0"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span className="hidden sm:inline">Add New Shipping</span>
          <span className="sm:hidden">New Shipping</span>
        </Link>
      </div>
    </div>
  );
}
