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
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col gap-4.5 select-none w-full hover:shadow-md transition-all duration-200">
      {/* 1. Header Row (ID, Status, Transport Icon) */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="font-heading font-extrabold text-[#333333] text-sm tracking-wide leading-none">
            #{shipment.id}
          </span>
          <span
            className={`inline-block px-2 py-0.5 rounded-lg text-[9px] font-extrabold tracking-wide uppercase self-start ${getStatusBadgeStyle(
              gridStatus
            )}`}
          >
            {gridStatus}
          </span>
        </div>

        {/* Transport circle icon */}
        <div className="w-9 h-9 rounded-full bg-[#F5F5F5] text-dark flex items-center justify-center">
          <TransportModeIcon mode={shipment.transportMode} />
        </div>
      </div>

      {/* 2. Customer Row */}
      <div className="flex items-center gap-3 border-t border-gray-border/30 pt-3">
        <CompanyLogo logoType={shipment.logoType} />
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-dark text-xs">{shipment.company}</span>
          <span className="text-[10px] text-gray-medium font-medium mt-0.5">{shipment.category}</span>
        </div>
      </div>

      {/* 3. Origin & Destination Route timeline */}
      <div className="relative flex gap-3.5 my-1">
        {/* Vertical line indicator */}
        <div className="flex flex-col items-center select-none shrink-0 w-2.5">
          <div className="w-2.5 h-2.5 rounded-full border-2 border-[#856DF3] bg-white mt-1" />
          <div className="w-0.5 h-10 border-l border-dashed border-[#856DF3]/40 my-1" />
          <div className="w-2.5 h-2.5 rounded-full border-2 border-[#856DF3] bg-[#856DF3] mb-1" />
        </div>

        {/* Cities & Dates layout */}
        <div className="flex-1 flex flex-col gap-3 font-sans">
          {/* Origin */}
          <div className="flex items-start justify-between text-xs leading-none">
            <span className="text-gray-medium font-semibold">Origin</span>
            <div className="flex flex-col items-end gap-1">
              <span className="font-bold text-dark">{shipment.originCity}</span>
              <span className="text-[9px] text-gray-medium font-medium">{shipment.originDate}</span>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-start justify-between text-xs leading-none">
            <span className="text-gray-medium font-semibold">Destination</span>
            <div className="flex flex-col items-end gap-1">
              <span className="font-extrabold text-[#856DF3]">{shipment.destinationCity}</span>
              <span className="text-[9px] text-gray-medium font-medium">{shipment.destinationDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Footer Row (Progress Bar & Carrier) */}
      <div className="flex flex-col gap-2 border-t border-gray-border/30 pt-3 font-sans text-[10px]">
        {/* Labels Row */}
        <div className="flex items-center justify-between text-gray-medium font-bold uppercase tracking-wider leading-none">
          <span>Progres <span className="text-dark font-extrabold">{shipment.progress}%</span></span>
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
