import React from "react";
import { trackingData } from "../../../data/dashboard/dashboard.mock";

export default function LiveTrackingPanel() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none w-full h-[520px]">
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
        {/* Vector Map Roads Background */}
        <svg className="absolute inset-0 w-full h-full text-gray-border/50" fill="none">
          {/* Grid Road Paths */}
          <line x1="0" y1="120" x2="100%" y2="120" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="280" x2="100%" y2="280" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="400" x2="100%" y2="400" stroke="currentColor" strokeWidth="1.5" />
          
          <line x1="100" y1="0" x2="100" y2="100%" stroke="currentColor" strokeWidth="1.5" />
          <line x1="280" y1="0" x2="280" y2="100%" stroke="currentColor" strokeWidth="1.5" />
          <line x1="420" y1="0" x2="420" y2="100%" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Diagonal secondary roads */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />

          {/* Bold Route Path from bottom-left to top-right */}
          <path
            d="M 50 320 Q 150 180, 240 220 T 400 80"
            stroke="#333333"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="1 0"
          />

          {/* Starting point (SF) */}
          <circle cx="50" cy="320" r="6" fill="#007837" stroke="white" strokeWidth="2" />
          
          {/* Destination point (NY) */}
          <circle cx="400" cy="80" r="6" fill="#333333" stroke="white" strokeWidth="2" />

          {/* Courier Pointer on the path (Q curve mid point approx: x=190, y=200) */}
          <g transform="translate(190, 200)">
            <circle cx="0" cy="0" r="13" fill="#856DF3" stroke="white" strokeWidth="2" className="shadow" />
            {/* Arrow path */}
            <path
              d="M -3 3 L 0 -4 L 3 3 L 0 1 Z"
              fill="white"
              transform="rotate(45)"
            />
          </g>
        </svg>

        {/* Top Search Overlay */}
        <div className="absolute top-4 left-4 right-4 max-w-sm flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by Shipping ID..."
              defaultValue={trackingData.shippingId}
              className="w-full bg-white text-dark font-sans placeholder:text-gray-medium text-xs rounded-xl py-2.5 pl-9 pr-3 transition-all border border-gray-border focus:outline-none focus:border-brand shadow-md"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg className="w-3.5 h-3.5 text-gray-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Zoom Controls Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-1.5 shadow-md">
          <button className="w-8 h-8 rounded-lg bg-white text-dark border border-gray-border flex items-center justify-center font-bold text-sm hover:bg-gray-light cursor-pointer active:scale-95 transition-all">
            +
          </button>
          <button className="w-8 h-8 rounded-lg bg-white text-dark border border-gray-border flex items-center justify-center font-bold text-sm hover:bg-gray-light cursor-pointer active:scale-95 transition-all">
            −
          </button>
        </div>

        {/* Bottom Details Drawer Card Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl border border-gray-border shadow-lg flex flex-col gap-3">
          {/* Header row */}
          <div className="flex items-center justify-between gap-2 border-b border-gray-border/40 pb-2">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-sm text-dark leading-none">
                {trackingData.shippingId}
              </span>
              <span className="bg-[#E3EDFF] text-[#235BC2] text-[9px] font-bold px-1.5 py-0.5 rounded leading-none">
                {trackingData.status}
              </span>
            </div>
            
            <div className="flex flex-col items-end text-right leading-tight">
              <span className="font-sans text-[10px] font-bold text-dark">{trackingData.courier}</span>
              <span className="font-sans text-[8px] text-gray-medium">{trackingData.company}</span>
            </div>
          </div>

          {/* Route details row */}
          <div className="flex flex-col gap-2 font-sans text-xs">
            {/* From */}
            <div className="flex items-start gap-2.5">
              <div className="flex flex-col items-center mt-1">
                <span className="w-2 h-2 rounded-full bg-[#007837] flex-shrink-0" />
                <div className="w-[1.5px] h-4 bg-gray-border/60" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-dark text-[10px]">{trackingData.from.city}</span>
                <span className="text-[8px] text-gray-medium mt-0.5">{trackingData.from.date}</span>
              </div>
            </div>

            {/* To */}
            <div className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-dark mt-1 flex-shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-dark text-[10px]">{trackingData.to.city}</span>
                <span className="text-[8px] text-gray-medium mt-0.5">{trackingData.to.date}</span>
              </div>
            </div>
          </div>

          {/* Travel Progress Bar */}
          <div className="flex flex-col gap-1.5 mt-1">
            <div className="flex items-center justify-between text-[9px] font-sans font-bold text-gray-medium leading-none">
              <span>Progress</span>
              <span className="text-brand">{trackingData.progress}%</span>
            </div>
            
            <div className="w-full h-1.5 bg-gray-light border border-gray-border/40 rounded-full overflow-hidden relative">
              <div
                style={{ width: `${trackingData.progress}%` }}
                className="h-full bg-brand rounded-full transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
