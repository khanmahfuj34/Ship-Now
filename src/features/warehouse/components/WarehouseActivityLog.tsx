import React from "react";
import { ActivityLog } from "../types/warehouse.types";

interface WarehouseActivityLogProps {
  logs: ActivityLog[];
}

export default function WarehouseActivityLog({ logs }: WarehouseActivityLogProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "receipt":
        return (
          <div className="w-8 h-8 rounded-full bg-[#F3EFFF] flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-[#856DF3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case "add":
        return (
          <div className="w-8 h-8 rounded-full bg-[#E6F9F0] flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-[#00B074]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        );
      case "dispatch":
        return (
          <div className="w-8 h-8 rounded-full bg-[#FFF0F2] flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-[#FF4D6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2a1 1 0 01-1 1H9m4-4h4l4 4v2a1 1 0 01-1 1h-3" />
            </svg>
          </div>
        );
      case "create":
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-gray-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-border shadow-sm flex flex-col gap-4 w-full select-none text-left h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs sm:text-sm font-bold font-heading text-dark tracking-wide uppercase">
          Warehouse Activity Log
        </h2>
        <button className="text-gray-medium hover:text-dark cursor-pointer text-base font-bold leading-none px-1">
          •••
        </button>
      </div>

      {/* Activity Timeline List */}
      <div className="flex flex-col gap-4 mt-2">
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3.5 items-start">
            {/* Visual Type Icon */}
            {getIcon(log.type)}

            {/* Log Details and Time */}
            <div className="flex flex-col gap-1 w-full min-w-0">
              <p className="text-[10px] sm:text-xs leading-normal font-medium font-sans">
                {/* Username */}
                <span className="font-bold text-brand hover:underline cursor-pointer">
                  {log.user}
                </span>
                {/* Action details */}
                <span className="text-gray-medium mx-1">
                  {log.action}
                </span>
                {/* Section location */}
                <span className="font-bold text-dark">
                  {log.detail}
                </span>
              </p>

              {/* Timestamp */}
              <span className="text-[9px] text-gray-medium font-semibold tracking-wide uppercase font-sans">
                {log.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
