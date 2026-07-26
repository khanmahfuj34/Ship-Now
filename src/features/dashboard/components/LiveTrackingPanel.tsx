import React from "react";
import { trackingData } from "../../../data/dashboard/dashboard.mock";

export default function LiveTrackingPanel() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none w-full h-[380px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-medium font-semibold tracking-wide font-sans">
          Live Tracking
        </span>
        <button className="text-gray-medium hover:text-dark focus:outline-none transition-colors cursor-pointer" aria-label="More options">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Map Canvas relative wrapper */}
      <div className="flex-1 rounded-2xl bg-[#F5F7FA] border border-gray-border/30 overflow-hidden relative shadow-inner">
        {/* Vector Map Roads Background scaled to fit a shorter container */}
        <svg className="absolute inset-0 w-full h-full text-gray-border/50" fill="none">
          {/* Grid Road Paths (re-mapped vertically) */}
          <line x1="0" y1="80" x2="100%" y2="80" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="160" x2="100%" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="240" x2="100%" y2="240" stroke="currentColor" strokeWidth="1.5" />
          
          <line x1="100" y1="0" x2="100" y2="100%" stroke="currentColor" strokeWidth="1.5" />
          <line x1="260" y1="0" x2="260" y2="100%" stroke="currentColor" strokeWidth="1.5" />
          <line x1="400" y1="0" x2="400" y2="100%" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Diagonal secondary roads */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />

          {/* Bold Route Path scaled down */}
          <path
            d="M 50 220 Q 150 120, 240 150 T 400 50"
            stroke="#333333"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="1 0"
          />

          {/* Starting point (SF) */}
          <circle cx="50" cy="220" r="5" fill="#007837" stroke="white" strokeWidth="2" />
          
          {/* Destination point (NY) */}
          <circle cx="400" cy="50" r="5" fill="#333333" stroke="white" strokeWidth="2" />

          {/* Courier Pointer on the path (re-mapped to translate(190, 135)) */}
          <g transform="translate(190, 135)">
            <circle cx="0" cy="0" r="10" fill="#856DF3" stroke="white" strokeWidth="1.8" className="shadow" />
            <path
              d="M -2 2 L 0 -3 L 2 2 L 0 0.7 Z"
              fill="white"
              transform="rotate(45)"
            />
          </g>
        </svg>

        {/* Top Search Overlay */}
        <div className="absolute top-3 left-3 right-3 max-w-xs flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by Shipping ID..."
              defaultValue={trackingData.shippingId}
              className="w-full bg-white text-dark font-sans placeholder:text-gray-medium text-[11px] rounded-xl py-2 pl-8 pr-3 transition-all border border-gray-border focus:outline-none focus:border-brand shadow-md"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-3.5 h-3.5 text-gray-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Zoom Controls Overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-1 shadow-md">
          <button className="w-7 h-7 rounded-lg bg-white text-dark border border-gray-border flex items-center justify-center font-bold text-xs hover:bg-gray-light cursor-pointer active:scale-95 transition-all">
            +
          </button>
          <button className="w-7 h-7 rounded-lg bg-white text-dark border border-gray-border flex items-center justify-center font-bold text-xs hover:bg-gray-light cursor-pointer active:scale-95 transition-all">
            −
          </button>
        </div>

        {/* Bottom Details Drawer Card Overlay (Horizontal compact layout) */}
        <div className="absolute bottom-3 left-3 right-3 bg-white p-3 rounded-xl border border-gray-border shadow-lg flex flex-col gap-2.5 font-sans">
          {/* Header row */}
          <div className="flex items-center justify-between gap-2 border-b border-gray-border/40 pb-2">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-xs text-dark leading-none">
                {trackingData.shippingId}
              </span>
              <span className="bg-[#E3EDFF] text-[#235BC2] text-[9px] font-bold px-1.5 py-0.5 rounded leading-none">
                {trackingData.status}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 text-right leading-none">
              <span className="text-[9px] text-gray-medium font-medium">Courier:</span>
              <span className="text-[10px] font-bold text-dark">{trackingData.courier}</span>
              <span className="text-[8px] text-gray-medium font-semibold">({trackingData.company})</span>
            </div>
          </div>

          {/* Route details & Progress row */}
          <div className="flex flex-col gap-2">
            {/* From & To (Horizontal layout) */}
            <div className="flex items-center justify-between gap-4 text-[10px] leading-none">
              <div className="flex flex-col">
                <span className="font-bold text-dark">{trackingData.from.city.split(",")[0]}</span>
                <span className="text-[8px] text-gray-medium mt-1 font-medium">{trackingData.from.date.split(" - ")[0]}</span>
              </div>
              
              <div className="flex flex-col items-end text-right">
                <span className="font-bold text-dark">{trackingData.to.city.split(",")[0]}</span>
                <span className="text-[8px] text-gray-medium mt-1 font-medium">{trackingData.to.date.split(" - ")[0]}</span>
              </div>
            </div>

            {/* Travel Progress Bar with overlay Courier Vehicle Pointer */}
            <div className="relative mt-1 py-1">
              <div className="w-full h-1.5 bg-gray-light border border-gray-border/20 rounded-full overflow-hidden">
                <div
                  style={{ width: `${trackingData.progress}%` }}
                  className="h-full bg-brand rounded-full"
                />
              </div>
              {/* Floating vehicle icon */}
              <div
                style={{ left: `${trackingData.progress}%` }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-brand border border-white rounded-full flex items-center justify-center shadow"
              >
                <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
