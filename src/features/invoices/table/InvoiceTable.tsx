import React from "react";
import { Invoice } from "../types/invoice.types";
import InvoiceTableRow from "./InvoiceTableRow";

interface InvoiceTableProps {
  invoices: Invoice[];
  selectedIds: string[];
  onSelectAll: (checked: boolean) => void;
  onSelectChange: (id: string, checked: boolean) => void;
  activeInvoiceId: string;
  onActiveInvoiceChange: (id: string) => void;
  sortBy: string;
  sortOrder: "asc" | "desc";
  onSort: (field: string) => void;
}

export default function InvoiceTable({
  invoices,
  selectedIds,
  onSelectAll,
  onSelectChange,
  activeInvoiceId,
  onActiveInvoiceChange,
  sortBy,
  sortOrder,
  onSort,
}: InvoiceTableProps) {
  const allSelected =
    invoices.length > 0 && invoices.every((inv) => selectedIds.includes(inv.id));

  const handleSortClick = (field: string) => {
    onSort(field);
  };

  const renderSortIndicator = (field: string) => {
    if (sortBy !== field) {
      return (
        <span className="text-gray-medium/40 opacity-50 ml-1">⇅</span>
      );
    }
    return (
      <span className="text-brand font-bold ml-1">
        {sortOrder === "asc" ? "▲" : "▼"}
      </span>
    );
  };

  if (invoices.length === 0) {
    return (
      <div className="bg-white p-10 rounded-2xl border border-gray-border shadow-sm flex flex-col items-center justify-center min-h-[340px] text-center select-none w-full">
        <div className="w-14 h-14 rounded-full bg-gray-light flex items-center justify-center text-gray-medium mb-3.5">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-base text-dark mb-1">
          No Invoices Found
        </h3>
        <p className="font-sans text-xs text-gray-medium max-w-xs leading-normal">
          We couldn't find any invoices matching your search or filters. Try adjusting your parameters.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border shadow-sm flex flex-col select-none w-full overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left font-sans border-collapse">
          <thead>
            <tr className="border-b border-gray-border text-gray-medium font-bold text-[10px] uppercase tracking-wider h-10 select-none">
              {/* Checkbox Column */}
              <th className="w-12 pl-4 py-2 text-left">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => onSelectAll(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-medium text-brand focus:ring-brand/40 cursor-pointer accent-brand"
                  />
                </label>
              </th>

              {/* Invoice ID */}
              <th
                className="py-2 pr-4 cursor-pointer hover:text-dark transition-colors"
                onClick={() => handleSortClick("id")}
              >
                Invoice ID {renderSortIndicator("id")}
              </th>

              {/* Company */}
              <th
                className="py-2 pr-4 cursor-pointer hover:text-dark transition-colors"
                onClick={() => handleSortClick("company")}
              >
                Company {renderSortIndicator("company")}
              </th>

              {/* Shipping ID (Hidden on mobile) */}
              <th className="py-2 pr-4 hidden sm:table-cell">
                Shipping ID
              </th>

              {/* Date */}
              <th
                className="py-2 pr-4 cursor-pointer hover:text-dark transition-colors"
                onClick={() => handleSortClick("date")}
              >
                Date {renderSortIndicator("date")}
              </th>

              {/* Amount (Hidden on mobile) */}
              <th
                className="py-2 pr-4 cursor-pointer hover:text-dark transition-colors hidden sm:table-cell"
                onClick={() => handleSortClick("amount")}
              >
                Amount {renderSortIndicator("amount")}
              </th>

              {/* Status (Hidden on mobile) */}
              <th
                className="py-2 pr-4 cursor-pointer hover:text-dark transition-colors hidden sm:table-cell"
                onClick={() => handleSortClick("status")}
              >
                Status {renderSortIndicator("status")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-border text-xs">
            {invoices.map((inv) => (
              <InvoiceTableRow
                key={inv.id}
                invoice={inv}
                selected={selectedIds.includes(inv.id)}
                onSelectChange={(checked) => onSelectChange(inv.id, checked)}
                isActive={activeInvoiceId === inv.id}
                onRowClick={() => onActiveInvoiceChange(inv.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
