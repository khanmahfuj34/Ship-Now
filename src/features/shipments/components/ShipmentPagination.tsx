import React from "react";

interface ShipmentPaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalResults: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

export default function ShipmentPagination({
  currentPage,
  totalPages,
  pageSize,
  totalResults,
  onPageChange,
  onPageSizeChange,
}: ShipmentPaginationProps) {
  // Return a list of page indicators to render
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  if (totalPages <= 1) {
    // Still render a simple summary if we have some results but only 1 page
    return (
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-border/30 select-none text-xs text-gray-medium font-semibold w-full">
        <span className="hidden sm:inline">
          Showing {totalResults} of {totalResults} results
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-border/30 select-none text-xs text-gray-medium font-semibold w-full">
      {/* Page Size & Total Results Info (Hidden on Mobile) */}
      <div className="hidden sm:flex items-center gap-2">
        <span>Show</span>
        <div className="relative">
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="appearance-none bg-white border border-gray-border hover:border-gray-medium rounded-lg py-1.5 pl-3.5 pr-8 text-xs font-semibold text-dark outline-none cursor-pointer transition-colors duration-200"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={36}>36</option>
          </select>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-medium">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <span>of {totalResults.toLocaleString()} results</span>
      </div>

      {/* Pagination Page Selectors */}
      <div className="flex items-center gap-1.5 justify-center sm:justify-end w-full sm:w-auto">
        {/* Prev Arrow */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-border hover:bg-gray-light disabled:opacity-30 disabled:pointer-events-none text-dark transition-colors duration-200 cursor-pointer font-bold"
          title="Previous Page"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`dots-${idx}`} className="px-2 text-gray-medium">
                ...
              </span>
            );
          }
          return (
            <button
              key={`page-${p}`}
              onClick={() => onPageChange(p as number)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-heading font-semibold transition-all duration-200 cursor-pointer ${
                currentPage === p
                  ? "bg-brand text-white shadow-sm"
                  : "bg-transparent hover:bg-gray-light text-gray-medium hover:text-dark border border-transparent"
              }`}
            >
              {p}
            </button>
          );
        })}

        {/* Next Arrow */}
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-border hover:bg-gray-light disabled:opacity-30 disabled:pointer-events-none text-dark transition-colors duration-200 cursor-pointer font-bold"
          title="Next Page"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
