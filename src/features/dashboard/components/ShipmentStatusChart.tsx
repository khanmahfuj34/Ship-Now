"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { shipmentTypeData } from "../../../data/dashboard/dashboard.mock";

export default function ShipmentStatusChart() {
  const totalShipments = 2500;

  // Custom colors corresponding to freight types
  const COLORS = ["#856DF3", "#757575", "#333333", "#E0E0E0"];

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none h-[380px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-medium font-semibold tracking-wide font-sans">
          Shipment Type
        </span>
        <button className="text-gray-medium hover:text-dark focus:outline-none transition-colors cursor-pointer" aria-label="More options">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Donut Chart Container */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={shipmentTypeData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={2}
              dataKey="percentage"
            >
              {shipmentTypeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Centered Labels */}
        <div className="absolute inset-0 flex flex-col items-center justify-center font-sans">
          <span className="text-[10px] text-gray-medium font-semibold uppercase tracking-wider leading-none mb-1">
            Total Shipment
          </span>
          <span className="text-2xl font-extrabold text-dark font-heading leading-none">
            {totalShipments.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 2x2 Grid Legend */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-3 pt-3 border-t border-gray-border/30">
        {shipmentTypeData.map((item, index) => (
          <div key={item.name} className="flex items-start gap-2.5 min-w-0">
            {/* Percentage Badge */}
            <div
              style={{ backgroundColor: COLORS[index] }}
              className="px-1.5 py-0.5 rounded text-[10px] font-bold text-white leading-none flex-shrink-0 flex items-center justify-center h-5 min-w-[28px]"
            >
              {item.percentage}%
            </div>

            {/* Labels */}
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="font-sans text-[11px] font-bold text-dark truncate">
                {item.name}
              </span>
              <span className="font-sans text-[9px] text-gray-medium truncate">
                {item.count.toLocaleString()} {item.name === "Road Freight" ? "shipment" : "shipments"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
