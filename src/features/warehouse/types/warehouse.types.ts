export type FreightType = "Road Freight" | "Rail Freight" | "Ocean Freight" | "Air Freight";

export interface WarehouseMetric {
  label: string;
  value: string;
  change: string;
}

export interface InventoryItem {
  category: string;
  percentage: number;
  value: number;
  barType: "solid" | "striped";
  colorClass: string; // CSS custom properties or classes
}

export interface StorageRow {
  floor: number;
  section: string;
  category: string;
  storageUsed: number;
  availableSpace: string;
}

export interface PackageStatus {
  id: string;
  time: string;
  status: "Sent" | "Received" | "Expected";
}

export interface ActivityLog {
  id: string;
  user: string;
  action: string;
  detail: string;
  section: string;
  category: string;
  time: string;
  type: "receipt" | "add" | "dispatch" | "create";
}

export interface MapBlock {
  id: string;
  isFull: boolean;
}

export interface MapGridSection {
  category: string;
  availableSpace: string;
  blocks: MapBlock[];
}
