import React, { useState } from "react";
import { StorageRow } from "../../types/warehouse.types";

interface WarehouseStorageTableProps {
  rows: StorageRow[];
}

export default function WarehouseStorageTable({ rows }: WarehouseStorageTableProps) {
  const [sortBy, setSortBy] = useState<string>("section");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Sorting handler
  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  // Get unique categories for filter
  const categories = ["All", ...Array.from(new Set(rows.map((r) => r.category)))];

  // Process data
  const filteredRows = rows.filter((r) => {
    if (filterCategory !== "All" && r.category !== filterCategory) return false;
    return true;
  });

  const sortedRows = [...filteredRows].sort((a, b) => {
    let valA: any = a[sortBy as keyof StorageRow];
    let valB: any = b[sortBy as keyof StorageRow];

    if (typeof valA === "string") {
      return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return sortOrder === "asc" ? valA - valB : valB - valA;
  });

  const renderSortIndicator = (field: string) => {
    if (sortBy !== field) return <span className="text-gray-medium/30 ml-1">⇅</span>;
    return <span className="text-brand font-bold ml-1">{sortOrder === "asc" ? "▲" : "▼"}</span>;
  };

  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-border shadow-sm flex flex-col gap-4 w-full select-none">
      {/* Table Header Controls */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs sm:text-sm font-bold font-heading text-dark tracking-wide uppercase">
          Warehouse Storage
        </h2>

        {/* Toolbar controls */}
        <div className="flex items-center gap-3 relative">
          {/* Filter Button */}
          <button
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F9FAFB] hover:bg-gray-100 border border-gray-border text-dark text-xs font-heading font-semibold rounded-xl cursor-pointer transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
            <span>Filter</span>
          </button>

          {/* Filter Dropdown Popover */}
          {showFilterDropdown && (
            <div className="absolute top-10 right-28 bg-white border border-gray-border shadow-md rounded-xl p-2 z-10 min-w-[140px] text-xs">
              <span className="font-bold text-gray-medium block px-2 py-1 uppercase tracking-wider text-[9px]">
                Filter Category
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilterCategory(cat);
                    setShowFilterDropdown(false);
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded-lg hover:bg-gray-light font-semibold ${
                    filterCategory === cat ? "text-brand bg-[#F8F7FF]" : "text-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Sort dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-gray-medium font-semibold">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="bg-[#F9FAFB] border border-gray-border text-dark text-xs font-heading font-semibold rounded-xl px-2 py-1.5 cursor-pointer outline-none focus:border-brand transition-colors"
            >
              <option value="section">Section</option>
              <option value="floor">Floor</option>
              <option value="storageUsed">Percentage</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table grid */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left font-sans border-collapse">
          <thead>
            <tr className="border-b border-gray-border text-gray-medium font-bold text-[9px] uppercase tracking-wider h-10 select-none">
              <th className="py-2 pr-3 cursor-pointer hover:text-dark" onClick={() => handleSort("floor")}>
                Floor {renderSortIndicator("floor")}
              </th>
              <th className="py-2 pr-3 cursor-pointer hover:text-dark" onClick={() => handleSort("section")}>
                Section {renderSortIndicator("section")}
              </th>
              <th className="py-2 pr-3 cursor-pointer hover:text-dark" onClick={() => handleSort("category")}>
                Category {renderSortIndicator("category")}
              </th>
              <th className="py-2 pr-3 cursor-pointer hover:text-dark" onClick={() => handleSort("storageUsed")}>
                Storage Used {renderSortIndicator("storageUsed")}
              </th>
              <th className="py-2 pr-3 hidden sm:table-cell">Percentage</th>
              <th className="py-2 pr-3 text-right hidden sm:table-cell">Available Space</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-border text-[10px]">
            {sortedRows.map((row, idx) => (
              <tr key={idx} className="h-12 hover:bg-gray-light/30 transition-colors">
                {/* Floor */}
                <td className="py-2 pr-3 text-dark font-medium">{row.floor}</td>

                {/* Section */}
                <td className="py-2 pr-3 text-dark font-bold">{row.section}</td>

                {/* Category */}
                <td className="py-2 pr-3 text-gray-medium font-semibold">{row.category}</td>

                {/* Storage Used (Progress bar + mobile details) */}
                <td className="py-2 pr-3 min-w-[120px] sm:min-w-0">
                  <div className="flex flex-col gap-1 w-full max-w-[150px]">
                    <div className="w-full bg-[#F5F7FA] h-2.5 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${row.storageUsed}%` }}
                        className="bg-brand h-full rounded-full transition-all duration-500"
                      />
                    </div>
                    {/* Inline mobile details */}
                    <span className="sm:hidden text-[9px] text-gray-medium font-semibold mt-0.5">
                      {row.storageUsed}% <span className="opacity-45">•</span> {row.availableSpace}
                    </span>
                  </div>
                </td>

                {/* Percentage (Desktop) */}
                <td className="py-2 pr-3 text-dark font-bold hidden sm:table-cell">
                  {row.storageUsed}%
                </td>

                {/* Available Space (Desktop) */}
                <td className="py-2 pr-3 text-right text-dark font-bold font-mono hidden sm:table-cell">
                  {row.availableSpace}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
