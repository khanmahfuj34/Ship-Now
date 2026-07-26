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
import { profitStatsData } from "../../../data/dashboard/dashboard.mock";

export default function DeliveryPerformanceChart() {
  // Map values to K format for display positioning
  const formattedData = profitStatsData.map((item) => ({
    ...item,
    displayRevenue: item.revenue / 1000,
    displayCost: item.cost / 1000,
  }));

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none h-[380px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col">
          <span className="text-xs text-gray-medium font-semibold tracking-wide font-sans mb-1">
            Profit Summary
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-dark font-heading leading-none">
              $624,550
            </span>
            <span className="bg-[#D9F9E7] text-[#007837] text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 leading-none">
              <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
              </svg>
              5.62%
            </span>
          </div>
        </div>

        {/* Dropdown */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-light border border-gray-border rounded-xl cursor-pointer text-xs font-sans text-dark font-bold hover:bg-gray-border/20 transition-colors">
          Last 8 Months
          <svg className="w-3.5 h-3.5 text-gray-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 justify-end mb-4 text-[10px] font-sans font-semibold text-gray-medium">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand" />
          Revenue
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-dark" />
          Cost
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 w-full min-h-0 text-[10px] font-sans text-gray-medium mt-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
            barGap={4}
            barSize={7}
          >
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
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={(v) => `$${v}K`}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white border border-gray-border p-2.5 rounded-xl shadow-lg flex flex-col gap-1.5 font-sans z-50">
                      <span className="text-[10px] font-semibold text-gray-medium">
                        {data.month} Stats
                      </span>
                      <div className="flex flex-col gap-0.5 text-xs">
                        <div className="flex items-center gap-4 justify-between">
                          <span className="text-gray-medium font-medium">Revenue:</span>
                          <span className="font-extrabold text-brand">${data.revenue.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-4 justify-between">
                          <span className="text-gray-medium font-medium">Cost:</span>
                          <span className="font-extrabold text-dark">${data.cost.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="displayRevenue" radius={[1.5, 1.5, 0, 0]}>
              {formattedData.map((entry, index) => (
                <Cell
                  key={`cell-rev-${index}`}
                  fill={entry.highlighted ? "#856DF3" : "#856DF3"}
                />
              ))}
            </Bar>
            <Bar dataKey="displayCost" radius={[1.5, 1.5, 0, 0]}>
              {formattedData.map((entry, index) => (
                <Cell
                  key={`cell-cost-${index}`}
                  fill={entry.highlighted ? "#333333" : "#333333"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
