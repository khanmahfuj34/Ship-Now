"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { shipmentStatsData } from "../../../data/dashboard/dashboard.mock";

export default function ShipmentOverviewChart() {
  const DEFAULT_ACTIVE_INDEX = 4; // May
  const [activeIndex, setActiveIndex] = useState<number>(DEFAULT_ACTIVE_INDEX);

  // Format data values for Recharts
  const formattedData = shipmentStatsData.map((item, index) => {
    // Map June (index 5) to display "Jan" exactly as shown in the Figma reference design
    let displayMonth = item.month;
    if (index === 5) {
      displayMonth = "Jan";
    }
    return {
      ...item,
      displayMonth,
      displayValue: item.value / 1000, // scale to K positioning
    };
  });

  // Custom Bar Shape Renderer to support top lines, circle markers, and dynamic tooltips
  const CustomBar = (props: any) => {
    const { x, y, width, height, index, payload } = props;
    if (height === 0 || width === 0) return null;

    const isActive = index === activeIndex;

    return (
      <g
        onMouseEnter={() => setActiveIndex(index)}
        style={{ cursor: "pointer" }}
      >
        {/* Background rect filled with vertical opacity gradients */}
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={isActive ? "url(#mayPurpleGradient)" : "url(#defaultGrayGradient)"}
        />

        {/* Top Border Line */}
        <line
          x1={x}
          y1={y}
          x2={x + width}
          y2={y}
          stroke="#333333"
          strokeWidth={1.8}
        />

        {/* Centered Circle Dot & Tooltip (Active/Hovered bar only) */}
        {isActive && (
          <g pointerEvents="none">
            <circle
              cx={x + width / 2}
              cy={y}
              r={4}
              fill="#333333"
              stroke="#FFFFFF"
              strokeWidth={1.5}
            />
            {/* Tooltip Box Overlay */}
            <g>
              {/* Rounded rect background */}
              <rect
                x={x + width / 2 - 32}
                y={y - 48}
                width={64}
                height={38}
                rx={10}
                ry={10}
                fill="#E5E0FF"
              />
              {/* Tooltip text: Month 2030 */}
              <text
                x={x + width / 2}
                y={y - 35}
                textAnchor="middle"
                fill="#757575"
                fontSize="8"
                fontWeight="500"
                fontFamily="inherit"
              >
                {payload.month} 2030
              </text>
              {/* Tooltip text: dynamic shipment count */}
              <text
                x={x + width / 2}
                y={y - 20}
                textAnchor="middle"
                fill="#333333"
                fontSize="12"
                fontWeight="800"
                fontFamily="inherit"
              >
                {payload.value.toLocaleString()}
              </text>
            </g>
          </g>
        )}
      </g>
    );
  };

  return (
    <div className="bg-white p-6 rounded-[24px] border border-gray-border/50 shadow-sm flex flex-col select-none h-[380px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#333333] tracking-wide font-sans mb-2">
            Shipment Statistic
          </span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-[#333333] font-heading leading-none">
              4,352
            </span>
            <span className="bg-[#D9F9E7] text-[#007837] text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-0.5 leading-none">
              ↗ +8.7%
            </span>
          </div>
        </div>

        {/* Dropdown */}
        <div className="flex items-center gap-1 px-3 py-1.5 bg-[#F5F5F5] rounded-full cursor-pointer text-xs font-sans text-[#333333] font-bold hover:bg-gray-border/30 transition-colors">
          Last Year
          <svg className="w-3 h-3 text-gray-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 w-full min-h-0 text-[10px] font-sans text-gray-medium mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            margin={{ top: 20, right: 5, left: -25, bottom: 0 }}
            barCategoryGap="4%" // Creates the contiguous wide bar look
            onMouseLeave={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
          >
            <defs>
              {/* Default Gray Gradient */}
              <linearGradient id="defaultGrayGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E0E0E0" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#E0E0E0" stopOpacity={0.0} />
              </linearGradient>
              {/* May Purple Gradient */}
              <linearGradient id="mayPurpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#856DF3" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#856DF3" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5F5F5" />
            <XAxis
              dataKey="displayMonth"
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
            <Bar
              key="shipment-bar"
              dataKey="displayValue"
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
