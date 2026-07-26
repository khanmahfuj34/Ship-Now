"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { shipmentStatsData } from "../../../data/dashboard/dashboard.mock";

export default function ShipmentOverviewChart() {
  // Map values to K format for display positioning
  const formattedData = shipmentStatsData.map((item) => ({
    ...item,
    displayValue: item.value / 1000,
  }));

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none h-[380px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-medium font-semibold tracking-wide font-sans mb-1">
            Shipment Statistic
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-dark font-heading leading-none">
              4,352
            </span>
            <span className="bg-[#D9F9E7] text-[#007837] text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 leading-none">
              <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
              </svg>
              8.7%
            </span>
          </div>
        </div>

        {/* Dropdown */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-light border border-gray-border rounded-xl cursor-pointer text-xs font-sans text-dark font-bold hover:bg-gray-border/20 transition-colors">
          Last Year
          <svg className="w-3.5 h-3.5 text-gray-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 w-full min-h-0 text-[10px] font-sans text-gray-medium mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            margin={{ top: 10, right: 5, left: -25, bottom: 0 }}
            barSize={18}
          >
            <defs>
              <linearGradient id="barPurple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#856DF3" stopOpacity={1} />
                <stop offset="100%" stopColor="#856DF3" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#757575", fontSize: 10, fontWeight: 500 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#757575", fontSize: 10, fontWeight: 500 }}
              domain={[0, 4.8]}
              ticks={[0, 1.2, 2.4, 3.6, 4.8]}
              tickFormatter={(v) => `${v}K`}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white border border-gray-border p-2.5 rounded-xl shadow-lg flex flex-col gap-0.5 select-none font-sans z-50">
                      <span className="text-[10px] font-semibold text-gray-medium">
                        {data.month} 2030
                      </span>
                      <span className="text-xs font-extrabold text-brand">
                        {data.value.toLocaleString()} shipments
                      </span>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="displayValue" radius={[4, 4, 0, 0]}>
              {formattedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.highlighted ? "url(#barPurple)" : "#F0F0F0"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
