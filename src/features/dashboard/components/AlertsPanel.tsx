import React from "react";
import { alertsSummary, alertsList } from "../../../data/dashboard/dashboard.mock";

export default function AlertsPanel() {
  // Map icons based on types
  const getIcon = (type: "document" | "pin" | "cloud") => {
    switch (type) {
      case "document":
        return (
          <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "pin":
        return (
          <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "cloud":
        return (
          <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none w-full h-[520px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-medium font-semibold tracking-wide font-sans mb-1">
            Shipment Alerts
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-dark font-heading leading-none">
              {alertsSummary.totalDelays} Delays
            </span>
            <span className="font-sans text-[10px] text-red-500 font-bold leading-none">
              Requires Attention
            </span>
          </div>
        </div>
        <button className="text-gray-medium hover:text-dark focus:outline-none transition-colors cursor-pointer" aria-label="More options">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Delay Summary Counts */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {alertsSummary.categories.map((cat, index) => (
          <div
            key={cat.title}
            className={`p-3 rounded-xl border flex flex-col items-center text-center justify-center min-w-0 ${
              index === 0
                ? "bg-[#E3DDFF]/40 border-[#856DF3]/20"
                : "bg-gray-light/60 border-gray-border/30"
            }`}
          >
            <span className="font-heading font-extrabold text-lg text-dark leading-none mb-1">
              {cat.count}
            </span>
            <span className="font-sans text-[9px] text-gray-medium font-semibold leading-tight line-clamp-2">
              {cat.title.split(" ")[0]} {cat.title.split(" ")[1] || ""}
            </span>
          </div>
        ))}
      </div>

      {/* List of Alerts */}
      <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3">
        {alertsList.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start justify-between gap-3 p-3 bg-gray-light/35 hover:bg-gray-light/60 border border-gray-border/20 rounded-xl transition-colors font-sans text-xs"
          >
            <div className="flex items-start gap-3 min-w-0">
              {/* Icon Container */}
              <div className="w-8 h-8 rounded-lg bg-[#856DF3]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                {getIcon(alert.iconType)}
              </div>
              
              <div className="flex flex-col leading-tight min-w-0">
                <span className="font-bold text-dark truncate">
                  {alert.title}
                </span>
                <span className="text-[10px] text-gray-medium mt-1 font-medium">
                  ID: <span className="text-dark font-bold">{alert.id}</span> | {alert.type}
                </span>
              </div>
            </div>

            {/* Date */}
            <span className="text-[9px] font-bold text-gray-medium flex-shrink-0 mt-0.5">
              {alert.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
