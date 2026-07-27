"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { shipmentsMock } from "../../data/shipments/shipments.mock";
import { Shipment, ShipmentStatus } from "./types/shipment.types";
import ShipmentsHeader from "./ShipmentsHeader";
import ShipmentMetrics from "./components/metrics/ShipmentMetrics";
import ShipmentToolbar from "./components/filters/ShipmentToolbar";
import ShipmentTable from "./components/table/ShipmentTable";
import ShipmentGrid from "./components/grid/ShipmentGrid";
import ShipmentPagination from "./components/ShipmentPagination";

// Status mapping utility function to translate DB status to Figma UI display names
export function getStatusLabel(status: ShipmentStatus, view: "table" | "grid"): string {
  if (view === "table") {
    switch (status) {
      case "in-transit":
      case "out-for-delivery":
        return "Delivery";
      case "delivered":
        return "Completed";
      case "processing":
        return "Pending";
      default:
        return "Delivery";
    }
  } else {
    switch (status) {
      case "in-transit":
        return "In Transit";
      case "out-for-delivery":
        return "Out for Delivery";
      case "delivered":
        return "Delivered";
      case "processing":
        return "Processing";
      default:
        return "In Transit";
    }
  }
}

export default function ShipmentsScreen() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // 1. Core States
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [dateFilter, setDateFilter] = useState("This Month");
  const [sortBy, setSortBy] = useState("Newest");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  // Collapsible Filters
  const [carrierFilter, setCarrierFilter] = useState("All");
  const [transportModeFilter, setTransportModeFilter] = useState("All");

  // Selection
  const [selectedShipmentIds, setSelectedShipmentIds] = useState<string[]>([]);

  // View state is driven by the URL '?view=table' or '?view=grid'
  const view = (searchParams.get("view") as "table" | "grid") || "table";

  // Reset tab/page/selection when switching views — done here in the handler
  // so all updates batch into one render (no effect needed).
  const handleViewChange = (newView: "table" | "grid") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", newView);
    router.push(`${pathname}?${params.toString()}`);
    setActiveTab("All");
    setPage(1);
    setSelectedShipmentIds([]);
  };

  // 2. Data Transformation Pipeline

  // A. Search
  let filtered = shipmentsMock.filter((s) => {
    const term = search.toLowerCase().trim();
    if (!term) return true;

    // Support searching without leading '#'
    const queryId = term.startsWith("#") ? term.slice(1) : term;
    const shipmentId = s.id.toLowerCase();

    return (
      shipmentId.includes(queryId) ||
      s.company.toLowerCase().includes(term) ||
      s.carrier.toLowerCase().includes(term) ||
      s.originCity.toLowerCase().includes(term) ||
      s.destinationCity.toLowerCase().includes(term)
    );
  });

  // B. Tab Filter (Completed, Delivery, Pending for Table vs Delivered, etc. for Grid)
  if (activeTab !== "All") {
    filtered = filtered.filter((s) => {
      const displayLabel = getStatusLabel(s.status, view);
      return displayLabel.toLowerCase() === activeTab.toLowerCase();
    });
  }

  // C. Date Filter (Table view only)
  if (view === "table" && dateFilter === "This Month") {
    filtered = filtered.filter((s) => {
      // Mock filter for "This Month" - match March dates (since the mock uses March dates)
      return s.originDate.includes("Mar") || s.destinationDate.includes("Mar");
    });
  }

  // D. Collapsible Tray Filters (Carrier and Transport Mode)
  if (carrierFilter !== "All") {
    filtered = filtered.filter((s) => s.carrier === carrierFilter);
  }
  if (transportModeFilter !== "All") {
    filtered = filtered.filter((s) => s.transportMode === transportModeFilter);
  }

  // E. Sorting
  const sorted = [...filtered].sort((a, b) => {
    let comparison = 0;
    if (sortBy === "Newest" || sortBy === "id") {
      comparison = a.id.localeCompare(b.id);
    } else if (sortBy === "Oldest") {
      comparison = b.id.localeCompare(a.id);
    } else if (sortBy === "Company" || sortBy === "company") {
      comparison = a.company.localeCompare(b.company);
    } else if (sortBy === "carrier") {
      comparison = a.carrier.localeCompare(b.carrier);
    } else if (sortBy === "productCategory") {
      comparison = a.productCategory.localeCompare(b.productCategory);
    } else if (sortBy === "weight") {
      comparison = a.weight.localeCompare(b.weight);
    } else if (sortBy === "route") {
      comparison = a.destinationCity.localeCompare(b.destinationCity);
    } else if (sortBy === "date") {
      comparison = a.originDate.localeCompare(b.originDate);
    } else if (sortBy === "progress") {
      comparison = a.progress - b.progress;
    } else if (sortBy === "status") {
      comparison = a.status.localeCompare(b.status);
    }

    // Newest is desc by default, others are asc by default
    const isDesc = sortBy === "Newest" ? sortOrder === "asc" : sortOrder === "desc";
    return isDesc ? -comparison : comparison;
  });

  // F. Pagination
  const totalResults = sorted.length;
  const totalPages = Math.ceil(totalResults / pageSize);

  // Adjust page boundary if filtered size shrinks below active page
  const currentPage = page > totalPages ? Math.max(1, totalPages) : page;

  const startIndex = (currentPage - 1) * pageSize;
  const visibleShipments = sorted.slice(startIndex, startIndex + pageSize);

  // 3. Selection Handlers
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      // Add all visible page IDs to selection
      const newSelection = [...selectedShipmentIds];
      visibleShipments.forEach((s) => {
        if (!newSelection.includes(s.id)) {
          newSelection.push(s.id);
        }
      });
      setSelectedShipmentIds(newSelection);
    } else {
      // Remove all visible page IDs from selection
      const visibleIds = visibleShipments.map((s) => s.id);
      setSelectedShipmentIds(selectedShipmentIds.filter((id) => !visibleIds.includes(id)));
    }
  };

  const handleSelectChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedShipmentIds([...selectedShipmentIds, id]);
    } else {
      setSelectedShipmentIds(selectedShipmentIds.filter((selectedId) => selectedId !== id));
    }
  };

  const handleTableHeaderSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-6 w-full select-none">
      {/* 1. Header breadcrumbs & switchers */}
      <ShipmentsHeader currentView={view} onViewChange={handleViewChange} />

      {/* 2. Metric Cards (Only shown in Table View as per Figma) */}
      {view === "table" && <ShipmentMetrics />}

      {/* 3. Toolbar (Search, Tabs, filters, Sort by) */}
      <ShipmentToolbar
        view={view}
        search={search}
        onSearchChange={(val) => {
          setSearch(val);
          setPage(1);
        }}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setPage(1);
        }}
        dateFilter={dateFilter}
        onDateFilterChange={(val) => {
          setDateFilter(val);
          setPage(1);
        }}
        sortBy={sortBy}
        onSortByChange={(val) => {
          setSortBy(val);
          setPage(1);
        }}
        carrierFilter={carrierFilter}
        onCarrierFilterChange={(val) => {
          setCarrierFilter(val);
          setPage(1);
        }}
        transportModeFilter={transportModeFilter}
        onTransportModeFilterChange={(val) => {
          setTransportModeFilter(val);
          setPage(1);
        }}
      />

      {/* 4. Display List (Table vs Grid view) */}
      {view === "table" ? (
        <ShipmentTable
          shipments={visibleShipments}
          selectedIds={selectedShipmentIds}
          onSelectAll={handleSelectAll}
          onSelectChange={handleSelectChange}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={handleTableHeaderSort}
        />
      ) : (
        <ShipmentGrid shipments={visibleShipments} />
      )}

      {/* 5. Pagination controls */}
      <ShipmentPagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        totalResults={totalResults}
        onPageChange={(p) => setPage(p)}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1);
        }}
      />
    </div>
  );
}
