import React from "react";
import { Shipment } from "../../types/shipment.types";
import { getStatusLabel } from "../../ShipmentsScreen";
import { CompanyLogo, TransportModeIcon } from "../table/ShipmentTableRow";

interface ShipmentCardProps {
  shipment: Shipment;
}

export default function ShipmentCard({ shipment }: ShipmentCardProps) {
  // Get Grid view status label
  const gridStatus = getStatusLabel(shipment.status, "grid");

  // Get status badge colors
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-[#D9F9E7] text-[#007837]";
      case "Processing":
        return "bg-[#FFF9EC] text-[#FFA800]";
      case "Out for Delivery":
        return "bg-[#FFEBD4] text-[#E28700]";
      case "In Transit":
      default:
        return "bg-[#E3DDFF] text-[#856DF3]";
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col gap-4 select-none w-full hover:shadow-md transition-all duration-200 text-left">
      
      {/* 1. Header Row (Transport icon, ID & Status, and Company details) */}
      <div className="flex items-center justify-between w-full">
        {/* Left side: Transport icon & ID/Status block */}
        <div className="flex items-center gap-3">
          {/* Transport mode grey circle icon */}
          <div className="w-11 h-11 rounded-2xl bg-[#F5F5F5] border border-gray-border/50 text-dark flex items-center justify-center shrink-0">
            <TransportModeIcon mode={shipment.transportMode} />
          </div>

          {/* ID and Status badge */}
          <div className="flex flex-col gap-1.5 leading-tight">
            <span className="font-heading font-extrabold text-[#333333] text-sm tracking-wide leading-none">
              #{shipment.id}
            </span>
            <span
              className={`inline-block px-2 py-0.5 rounded-lg text-[9px] font-extrabold tracking-wide uppercase self-start leading-normal ${getStatusBadgeStyle(
                gridStatus
              )}`}
            >
              {gridStatus}
            </span>
          </div>
        </div>

        {/* Right side: Company Logo and details */}
        <div className="flex items-center gap-2.5">
          <CompanyLogo logoType={shipment.logoType} />
          <div className="flex flex-col leading-tight text-right">
            <span className="font-bold text-dark text-xs">{shipment.company}</span>
            <span className="text-[10px] text-gray-medium font-medium mt-0.5">{shipment.category}</span>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-border/30 w-full" />

      {/* 2. Route Timeline Card Wrapper (in grey block bg-[#F9FAFB]) */}
      <div className="bg-[#F9FAFB] border border-gray-border/50 rounded-xl p-4 relative flex gap-4 my-0.5">
        {/* Vertical line indicator */}
        <div className="flex flex-col items-center select-none shrink-0 w-5 relative">
          {/* Origin Dot */}
          <div className="w-5 h-5 rounded-full bg-[#EBE7FF] border border-[#DCD6FF]/20 flex items-center justify-center shrink-0 z-10">
            <div className="w-2 h-2 rounded-full bg-brand" />
          </div>
          
          {/* Vertical solid line */}
          <div className="absolute top-5 bottom-5 w-[1.5px] bg-[#DCD6FF] z-0" />

          {/* Destination Pin */}
          <div className="w-5 h-5 rounded-full bg-[#EBE7FF] border border-[#DCD6FF]/20 flex items-center justify-center shrink-0 mt-auto z-10">
            <svg className="w-3 h-3 text-brand" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Cities & Dates text details */}
        <div className="flex-1 flex flex-col justify-between min-h-[90px] font-sans text-xs">
          {/* Origin detail */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between leading-none">
              <span className="text-gray-medium font-semibold">Origin</span>
              <span className="font-bold text-dark">{shipment.originCity}</span>
            </div>
            <span className="text-[9px] text-gray-medium font-semibold text-right leading-none mt-1.5">
              {shipment.originDate.split(" - ").join(" – ")}
            </span>
          </div>

          {/* Destination detail */}
          <div className="flex flex-col gap-0.5 mt-auto">
            <div className="flex items-center justify-between leading-none">
              <span className="text-gray-medium font-semibold">Destination</span>
              <span className="font-extrabold text-brand">{shipment.destinationCity}</span>
            </div>
            <span className="text-[9px] text-gray-medium font-semibold text-right leading-none mt-1.5">
              {shipment.destinationDate.split(" - ").join(" – ")}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Footer Row (Progress Bar & Carrier) */}
      <div className="flex flex-col gap-2.5 font-sans text-[10px] w-full mt-0.5">
        {/* Labels Row */}
        <div className="flex items-center justify-between text-gray-medium font-bold uppercase tracking-wider leading-none">
          <span>
            Progres <span className="text-dark font-extrabold">{shipment.progress}%</span>
          </span>
          <span>
            Carriers{" "}
            <span className="text-dark font-extrabold normal-case">
              {shipment.carrier}
            </span>
          </span>
        </div>

        {/* Progress Bar Line */}
        <div className="w-full bg-[#F5F5F5] h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#856DF3] h-full rounded-full transition-all duration-300"
            style={{ width: `${shipment.progress}%` }}
          />
        </div>
      </div>

    </div>
  );
}
