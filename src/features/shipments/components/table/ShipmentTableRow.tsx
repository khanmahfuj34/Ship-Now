import React from "react";
import { Shipment } from "../../types/shipment.types";
import { getStatusLabel } from "../../ShipmentsScreen";

interface ShipmentTableRowProps {
  shipment: Shipment;
  selected: boolean;
  onSelectChange: (checked: boolean) => void;
}

// Reusable high-fidelity company logo component
export function CompanyLogo({ logoType }: { logoType: string }) {
  switch (logoType) {
    case "hex":
      return (
        <div className="w-8 h-8 rounded-lg bg-dark flex items-center justify-center text-white shrink-0">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
          </svg>
        </div>
      );
    case "triangle":
      return (
        <div className="w-8 h-8 rounded-lg bg-[#F3EFFF] flex items-center justify-center text-[#856DF3] shrink-0">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3l10 16H2L12 3z" />
          </svg>
        </div>
      );
    case "house":
      return (
        <div className="w-8 h-8 rounded-lg bg-dark flex items-center justify-center text-white shrink-0">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
      );
    case "ring":
      return (
        <div className="w-8 h-8 rounded-lg bg-[#F8F7FF] border border-[#856DF3]/30 flex items-center justify-center text-[#856DF3] shrink-0">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
      );
    case "star":
      return (
        <div className="w-8 h-8 rounded-lg bg-[#FFF9EC] flex items-center justify-center text-[#FFA800] shrink-0">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      );
    case "diamond":
    default:
      return (
        <div className="w-8 h-8 rounded-lg bg-[#F5F5F5] flex items-center justify-center text-dark shrink-0">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
          </svg>
        </div>
      );
  }
}

// Reusable transport mode icon
export function TransportModeIcon({ mode }: { mode: string }) {
  switch (mode) {
    case "air":
      return (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    case "ocean":
      return (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    case "rail":
      return (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case "road":
    default:
      return (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h2m-4-3h4" />
        </svg>
      );
  }
}

export default function ShipmentTableRow({
  shipment,
  selected,
  onSelectChange,
}: ShipmentTableRowProps) {
  // Map transport mode string to beautiful display label
  const getTransportLabel = (mode: string) => {
    switch (mode) {
      case "air":
        return "Air Freight";
      case "ocean":
        return "Ocean Freight";
      case "rail":
        return "Rail Freight";
      case "road":
      default:
        return "Road Freight";
    }
  };

  // Map Table status label
  const tableStatus = getStatusLabel(shipment.status, "table");

  // Get status pill style
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#27AE60]";
      case "Pending":
        return "bg-[#757575]";
      case "Delivery":
      default:
        return "bg-[#856DF3]";
    }
  };

  return (
    <tr className={`border-b border-gray-border/30 hover:bg-[#FDFDFD] transition-colors h-14 ${selected ? "bg-[#F8F7FF]/30" : ""}`}>
      {/* 0. Checkbox Cell */}
      <td className="w-12 pl-4 py-3 text-left">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => onSelectChange(e.target.checked)}
            className="w-4 h-4 rounded border-gray-medium text-[#856DF3] focus:ring-[#856DF3]/40 cursor-pointer accent-[#856DF3]"
          />
        </label>
      </td>

      {/* 1. Shipping ID */}
      <td className="py-3 pr-4 font-bold text-[#856DF3] text-xs font-sans whitespace-nowrap">
        <div className="flex flex-col leading-tight">
          <span>#{shipment.id}</span>
          <span className="text-[10px] text-gray-medium font-medium mt-0.5 flex items-center gap-1">
            <TransportModeIcon mode={shipment.transportMode} />
            {getTransportLabel(shipment.transportMode)}
          </span>
        </div>
      </td>

      {/* 2. Customer / Company */}
      <td className="py-3 pr-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <CompanyLogo logoType={shipment.logoType} />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-dark text-xs">{shipment.company}</span>
            <span className="text-[10px] text-gray-medium font-medium mt-0.5">{shipment.category}</span>
          </div>
        </div>
      </td>

      {/* 3. Carrier (With responsive nested Category and Weight columns on smaller screens) */}
      <td className="py-3 pr-4 font-semibold text-dark text-xs whitespace-nowrap">
        <div className="flex flex-col leading-normal">
          <span>{shipment.carrier}</span>
          <span className="lg:hidden text-[10px] text-gray-medium mt-0.5 font-semibold">
            {shipment.productCategory}
          </span>
          <span className="lg:hidden text-[10px] text-gray-medium font-semibold">
            {shipment.weight}
          </span>
        </div>
      </td>

      {/* 4. Product Category (Desktop Only) */}
      <td className="py-3 pr-4 text-xs font-semibold text-dark whitespace-nowrap hidden lg:table-cell">
        {shipment.productCategory}
      </td>

      {/* 5. Weight (Desktop Only) */}
      <td className="py-3 pr-4 text-xs font-semibold text-dark whitespace-nowrap hidden lg:table-cell">
        {shipment.weight}
      </td>

      {/* 6. Route (Desktop & Tablet Only) */}
      <td className="py-3 pr-4 whitespace-nowrap hidden sm:table-cell">
        <div className="flex flex-col text-xs leading-tight">
          <span className="text-gray-medium font-medium">
            {shipment.originCity}{" "}
            <span className="text-[10px] opacity-75 font-sans font-normal">(Origin)</span>
          </span>
          <span className="font-bold text-[#856DF3] mt-0.5">
            {shipment.destinationCity}{" "}
            <span className="text-[10px] text-gray-medium font-sans font-normal">(Destination)</span>
          </span>
        </div>
      </td>

      {/* 7. Date (Desktop & Tablet Only) */}
      <td className="py-3 pr-4 whitespace-nowrap hidden sm:table-cell">
        <div className="flex flex-col text-xs leading-tight font-sans">
          <span className="text-gray-medium font-semibold">
            {shipment.originDate.split(" - ")[0]}{" "}
            <span className="text-[9px] opacity-75 font-normal">(ATD)</span>
          </span>
          <span className="font-bold text-dark mt-0.5">
            {shipment.destinationDate.split(" - ")[0]}{" "}
            <span className="text-[9px] text-gray-medium font-normal">(ETA)</span>
          </span>
        </div>
      </td>

      {/* 8. Progress (Desktop Only) */}
      <td className="py-3 pr-4 whitespace-nowrap hidden lg:table-cell">
        <div className="flex items-center gap-2.5 w-28 font-sans font-bold text-dark text-xs">
          <div className="w-16 bg-gray-light h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#856DF3] h-full rounded-full"
              style={{ width: `${shipment.progress}%` }}
            />
          </div>
          <span>{shipment.progress}%</span>
        </div>
      </td>

      {/* 9. Status (Desktop Only) */}
      <td className="py-3 pr-4 text-right whitespace-nowrap hidden lg:table-cell">
        <div className="inline-flex items-center justify-end gap-1.5 w-full">
          <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(tableStatus)}`} />
          <span className="text-xs font-bold text-dark">{tableStatus}</span>
        </div>
      </td>
    </tr>
  );
}
