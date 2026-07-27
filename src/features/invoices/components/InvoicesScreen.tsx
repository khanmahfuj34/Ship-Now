"use client";

import React, { useState, useMemo } from "react";
import { mockInvoices } from "../../../data/invoices/invoices.mock";
import { Invoice, InvoiceStatus } from "../types/invoice.types";
import InvoicesHeader from "./InvoicesHeader";
import InvoiceMetrics from "../metrics/InvoiceMetrics";
import InvoiceToolbar from "../filters/InvoiceToolbar";
import InvoiceTable from "../table/InvoiceTable";
import InvoicePagination from "../InvoicePagination";
import InvoiceDetails from "./InvoiceDetails";

export default function InvoicesScreen() {
  // 1. Core Query and Selection States
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Row Checkbox Selection State
  const [selectedInvoiceIds, setSelectedInvoiceIds] = useState<string[]>(["INV-1008"]); // Initial selected in Figma

  // Active Detailed Invoice Card state
  const [activeInvoiceId, setActiveInvoiceId] = useState<string>("INV-1008"); // Pre-selected in Figma

  // Combined filter handlers — each one resets page to 1 in the same
  // render batch instead of using an effect to sync state-from-state.
  const handleSearchChange = (val: string) => { setSearch(val); setPage(1); };
  const handleStatusChange = (val: string) => { setStatus(val); setPage(1); };
  const handleSortByChange = (val: string) => { setSortBy(val); setPage(1); };
  const handleSortOrderChange = (val: "asc" | "desc") => { setSortOrder(val); setPage(1); };
  const handlePageSizeChange = (val: number) => { setPageSize(val); setPage(1); };

  // 2. Data Filtering, Sorting & Pagination Pipeline
  const filteredInvoices = useMemo(() => {
    return mockInvoices.filter((inv) => {
      // A. Status Filter
      if (status !== "All" && inv.status !== status) {
        return false;
      }

      // B. Case-insensitive Search
      const query = search.toLowerCase().trim();
      if (!query) return true;

      const cleanQuery = query.startsWith("#") ? query.slice(1) : query;
      return (
        inv.id.toLowerCase().includes(cleanQuery) ||
        inv.company.name.toLowerCase().includes(query) ||
        inv.company.email.toLowerCase().includes(query) ||
        inv.shippingId.toLowerCase().includes(cleanQuery)
      );
    });
  }, [search, status]);

  const sortedInvoices = useMemo(() => {
    return [...filteredInvoices].sort((a, b) => {
      // Default: read the field value directly; cast to string | number
      // since all sortable primitive fields on Invoice are one of those two.
      let fieldA: string | number = a[sortBy as keyof Invoice] as string | number;
      let fieldB: string | number = b[sortBy as keyof Invoice] as string | number;

      if (sortBy === "company") {
        fieldA = a.company.name.toLowerCase();
        fieldB = b.company.name.toLowerCase();
      } else if (sortBy === "date") {
        fieldA = new Date(a.dueDate).getTime();
        fieldB = new Date(b.dueDate).getTime();
      }

      if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredInvoices, sortBy, sortOrder]);

  const paginatedInvoices = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedInvoices.slice(start, start + pageSize);
  }, [sortedInvoices, page, pageSize]);

  const totalResults = sortedInvoices.length;
  const totalPages = Math.ceil(totalResults / pageSize);

  // Active invoice details object
  const activeInvoice = useMemo(() => {
    if (!activeInvoiceId) return null;
    return mockInvoices.find((inv) => inv.id === activeInvoiceId) || null;
  }, [activeInvoiceId]);

  // Selection handlers
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const pageIds = paginatedInvoices.map((inv) => inv.id);
      setSelectedInvoiceIds((prev) => Array.from(new Set([...prev, ...pageIds])));
      if (pageIds.length > 0) {
        setActiveInvoiceId(pageIds[0]);
      }
    } else {
      const pageIds = paginatedInvoices.map((inv) => inv.id);
      setSelectedInvoiceIds((prev) => prev.filter((id) => !pageIds.includes(id)));
    }
  };

  const handleSelectChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedInvoiceIds([id]);
      setActiveInvoiceId(id);
    }
  };

  const handleActiveInvoiceChange = (id: string) => {
    setActiveInvoiceId(id);
    setSelectedInvoiceIds([id]);
  };

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full select-none">
      {/* Page Header */}
      <InvoicesHeader />

      {/* Top Metrics Cards Row */}
      <InvoiceMetrics />

      {/* Main Content Workspace Layout */}
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 w-full">
        {/* Left Column: Toolbar + Invoices Table + Pagination */}
        <div className="flex-1 flex flex-col gap-4 w-full min-w-0 lg:h-full">
          <div className="bg-white p-5 rounded-3xl border border-gray-border shadow-sm flex flex-col gap-4 w-full overflow-hidden lg:h-full justify-between">
            <InvoiceToolbar
              search={search}
              onSearchChange={handleSearchChange}
              status={status}
              onStatusChange={handleStatusChange}
              sortBy={sortBy}
              onSortByChange={handleSortByChange}
              sortOrder={sortOrder}
              onSortOrderChange={handleSortOrderChange}
            />

            <div className="flex-grow">
              <InvoiceTable
                invoices={paginatedInvoices}
                selectedIds={selectedInvoiceIds}
                onSelectAll={handleSelectAll}
                onSelectChange={handleSelectChange}
                activeInvoiceId={activeInvoiceId}
                onActiveInvoiceChange={handleActiveInvoiceChange}
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={handleSort}
              />
            </div>

            <InvoicePagination
              currentPage={page}
              totalPages={totalPages}
              pageSize={pageSize}
              totalResults={totalResults}
              onPageChange={setPage}
              onPageSizeChange={handlePageSizeChange}
            />
          </div>
        </div>

        {/* Right Column: Invoice Details (Sidepanel on desktop, stacked below on tablet/mobile) */}
        {(activeInvoiceId || !activeInvoice) && (
          <div className="w-full lg:w-[420px] lg:shrink-0 lg:h-full">
            <InvoiceDetails
              invoice={activeInvoice}
              onBack={() => setActiveInvoiceId("")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
