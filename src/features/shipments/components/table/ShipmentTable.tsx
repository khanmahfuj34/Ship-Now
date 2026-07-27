import React from "react";
import { Shipment } from "../../types/shipment.types";
import ShipmentTableHeader from "./ShipmentTableHeader";
import ShipmentTableRow from "./ShipmentTableRow";

interface ShipmentTableProps {
  shipments: Shipment[];
  selectedIds: string[];
  onSelectAll: (checked: boolean) => void;
  onSelectChange: (id: string, checked: boolean) => void;
  sortBy: string;
  sortOrder: "asc" | "desc";
  onSort: (field: string) => void;
}

export default function ShipmentTable({
  shipments,
  selectedIds,
  onSelectAll,
  onSelectChange,
  sortBy,
  sortOrder,
  onSort,
}: ShipmentTableProps) {
  // Check if all visible records are selected
  const allSelected =
    shipments.length > 0 && shipments.every((s) => selectedIds.includes(s.id));

  if (shipments.length === 0) {
    return (
      <div className="bg-white p-10 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col items-center justify-center min-h-[340px] text-center select-none w-full">
        <div className="w-14 h-14 rounded-full bg-gray-light flex items-center justify-center text-gray-medium mb-3.5">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-base text-dark mb-1">
          No Shipments Found
        </h3>
        <p className="font-sans text-xs text-gray-medium max-w-xs leading-normal">
          We couldn't find any shipments matching your search or filters. Try adjusting your parameters.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none w-full overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left font-sans border-collapse">
          <ShipmentTableHeader
            allSelected={allSelected}
            onSelectAllClick={onSelectAll}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSort={onSort}
          />
          <tbody className="divide-y divide-gray-border/20 text-xs">
            {shipments.map((shipment) => (
              <ShipmentTableRow
                key={shipment.id}
                shipment={shipment}
                selected={selectedIds.includes(shipment.id)}
                onSelectChange={(checked) => onSelectChange(shipment.id, checked)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
