import React from "react";

interface ShipmentTableHeaderProps {
  allSelected: boolean;
  onSelectAllClick: (checked: boolean) => void;
  sortBy: string;
  sortOrder: "asc" | "desc";
  onSort: (field: string) => void;
}

export default function ShipmentTableHeader({
  allSelected,
  onSelectAllClick,
  sortBy,
  sortOrder,
  onSort,
}: ShipmentTableHeaderProps) {
  // Config for header columns, including their responsiveness and sort capability
  const columns = [
    { key: "id", label: "Shipping ID", sortable: true, className: "" },
    { key: "company", label: "Company", sortable: true, className: "" },
    { key: "carrier", label: "Carriers", sortable: true, className: "" },
    { key: "productCategory", label: "Product Category", sortable: true, className: "hidden lg:table-cell" },
    { key: "weight", label: "Weight", sortable: true, className: "hidden lg:table-cell" },
    { key: "route", label: "Route", sortable: true, className: "hidden sm:table-cell" },
    { key: "date", label: "Date", sortable: true, className: "hidden sm:table-cell" },
    { key: "progress", label: "Progress", sortable: true, className: "hidden lg:table-cell" },
    { key: "status", label: "Status", sortable: true, className: "hidden lg:table-cell text-right pr-4" },
  ];

  return (
    <thead>
      <tr className="border-b border-gray-border/50 text-[10px] font-extrabold text-gray-medium uppercase tracking-wider h-11 select-none">
        {/* Checkbox Column */}
        <th className="w-12 min-w-[48px] max-w-[48px] pl-4 pb-3 text-left">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={(e) => onSelectAllClick(e.target.checked)}
              className="w-4 h-4 rounded border-gray-medium text-[#856DF3] focus:ring-[#856DF3]/40 cursor-pointer accent-[#856DF3]"
            />
          </label>
        </th>

        {/* Dynamic Column Headers */}
        {columns.map((col) => {
          const isSorted = sortBy === col.key;
          return (
            <th
              key={col.key}
              className={`pb-3 pr-4 font-bold text-left cursor-pointer hover:text-dark transition-colors ${col.className}`}
              onClick={() => col.sortable && onSort(col.key)}
            >
              <div className={`inline-flex items-center gap-1.5 ${col.key === "status" ? "justify-end w-full" : ""}`}>
                <span>{col.label}</span>
                {col.sortable && (
                  <span className="text-[9px] text-gray-medium opacity-80">
                    {isSorted ? (sortOrder === "asc" ? "▲" : "▼") : "↕"}
                  </span>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
