import React from "react";
import { recentActivityData } from "../../../data/dashboard/dashboard.mock";

export default function ActivityTimeline() {
  // Map icons based on types
  const getIcon = (type: "package" | "tag" | "undo" | "check") => {
    switch (type) {
      case "package":
        return (
          <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case "tag":
        return (
          <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "undo":
        return (
          <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        );
      case "check":
        return (
          <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none w-full min-h-[380px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs text-gray-medium font-semibold tracking-wide font-sans">
          Recent Activity
        </span>
        <button className="text-gray-medium hover:text-dark focus:outline-none transition-colors cursor-pointer" aria-label="More options">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Timeline List */}
      <div className="flex-1 flex flex-col justify-between font-sans text-xs">
        {recentActivityData.map((activity, index) => (
          <div key={activity.user + index} className="flex gap-4 relative last:mb-0">
            {/* Timeline Line Connector */}
            {index !== recentActivityData.length - 1 && (
              <div className="absolute left-4 top-8 bottom-0 w-[1.5px] bg-gray-border/50 -translate-x-1/2" />
            )}

            {/* Icon Node */}
            <div className="w-8 h-8 rounded-full bg-[#856DF3]/10 flex items-center justify-center flex-shrink-0 relative z-10">
              {getIcon(activity.iconType)}
            </div>

            {/* Log Details */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 pb-6">
              <div className="flex flex-wrap items-baseline gap-1.5 leading-snug">
                <span className="font-bold text-dark">{activity.user}</span>
                <span className="text-gray-medium font-medium">{activity.text}</span>
              </div>
              
              {/* Time */}
              <span className="text-[10px] font-bold text-gray-medium whitespace-nowrap sm:text-right mt-0.5">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
