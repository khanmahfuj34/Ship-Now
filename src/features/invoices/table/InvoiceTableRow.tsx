import React from "react";
import { Invoice, InvoiceStatus } from "../types/invoice.types";
import { CompanyLogo } from "../../shipments/components/table/ShipmentTableRow";

interface InvoiceTableRowProps {
  invoice: Invoice;
  selected: boolean;
  onSelectChange: (checked: boolean) => void;
  isActive: boolean;
  onRowClick: () => void;
}

export default function InvoiceTableRow({
  invoice,
  selected,
  onSelectChange,
  isActive,
  onRowClick,
}: InvoiceTableRowProps) {
  const getStatusBadgeClass = (status: InvoiceStatus) => {
    switch (status) {
      case "Paid":
        return "bg-[#E6F9F0] text-[#00B074]";
      case "Unpaid":
        return "bg-[#F3EFFF] text-[#856DF3]";
      case "Overdue":
      default:
        return "bg-[#FFF0F2] text-[#FF4D6D]";
    }
  };

  return (
    <tr
      className={`border-b border-gray-border hover:bg-[#FDFDFD] transition-colors cursor-pointer h-14 ${
        isActive ? "bg-[#F8F7FF]" : ""
      }`}
      onClick={onRowClick}
    >
      {/* 0. Checkbox Cell */}
      <td
        className="w-12 pl-4 py-3 text-left"
        onClick={(e) => e.stopPropagation()} // Prevent selecting active view when checking box
      >
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => onSelectChange(e.target.checked)}
            className="w-4 h-4 rounded border-gray-medium text-brand focus:ring-brand/40 cursor-pointer accent-brand"
          />
        </label>
      </td>

      {/* 1. Invoice ID */}
      <td className="py-3 pr-4 font-bold text-brand text-xs font-sans whitespace-nowrap">
        <div className="flex items-center gap-1">
          <div className="flex flex-col leading-tight">
            <span className="flex items-center gap-1 hover:underline">
              {invoice.id}
              {/* Small Document Icon */}
              <svg className="w-3 h-3 text-gray-medium shrink-0 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            {/* Shipping ID nested on mobile, hidden on larger screens */}
            <span className="sm:hidden text-[9px] text-gray-medium font-normal mt-0.5">
              {invoice.shippingId}
            </span>
          </div>
        </div>
      </td>

      {/* 2. Customer / Company */}
      <td className="py-3 pr-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <CompanyLogo logoType={invoice.company.logoType || "hex"} />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-dark text-xs">{invoice.company.name}</span>
            <span className="text-[9px] text-gray-medium font-semibold mt-0.5">
              {invoice.company.email}
            </span>
          </div>
        </div>
      </td>

      {/* 3. Shipping ID (Hidden on mobile) */}
      <td className="py-3 pr-4 font-semibold text-gray-medium text-xs whitespace-nowrap hidden sm:table-cell">
        {invoice.shippingId}
      </td>

      {/* 4. Date (Issued and Due stacked) */}
      <td className="py-3 pr-4 whitespace-nowrap">
        <div className="flex flex-col text-xs leading-tight font-sans">
          <span className="text-gray-medium font-semibold">
            {invoice.issuedDate} <span className="text-[9px] opacity-75 font-normal">(Issued)</span>
          </span>
          <span className="font-bold text-dark mt-0.5">
            {invoice.dueDate} <span className="text-[9px] text-gray-medium font-normal">(Due)</span>
          </span>
        </div>
      </td>

      {/* 5. Amount (Hidden on mobile) */}
      <td className="py-3 pr-4 font-black text-dark text-xs whitespace-nowrap hidden sm:table-cell">
        ${invoice.amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>

      {/* 6. Status Badge (Hidden on mobile) */}
      <td className="py-3 pr-4 whitespace-nowrap hidden sm:table-cell">
        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold tracking-wide font-sans ${getStatusBadgeClass(invoice.status)}`}>
          {invoice.status}
        </span>
      </td>
    </tr>
  );
}
