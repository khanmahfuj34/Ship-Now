import { FreightType, WarehouseMetric, InventoryItem, StorageRow, PackageStatus, ActivityLog, MapGridSection } from "../../features/warehouse/types/warehouse.types";

export interface WarehouseMockData {
  metrics: WarehouseMetric[];
  inventory: InventoryItem[];
  storage: StorageRow[];
  packages: PackageStatus[];
  activities: ActivityLog[];
  map: MapGridSection[];
}

export const mockWarehouseData: Record<FreightType, WarehouseMockData> = {
  "Road Freight": {
    metrics: [
      { label: "Total SKU", value: "285", change: "+2.58%" },
      { label: "Quantity on Hand", value: "12,450 units", change: "+4.37%" },
      { label: "Capacity Usage", value: "62.5% Full", change: "+1.54%" },
    ],
    inventory: [
      { category: "Electronics", percentage: 25, value: 2500, barType: "solid", colorClass: "bg-brand" },
      { category: "Apparel", percentage: 20, value: 2000, barType: "striped", colorClass: "bg-[#856DF3]" },
      { category: "Home & Kitchen", percentage: 18, value: 1800, barType: "solid", colorClass: "bg-dark" },
      { category: "Beauty & Health", percentage: 15, value: 1500, barType: "striped", colorClass: "bg-[#333333]" },
      { category: "Automotive Parts", percentage: 12, value: 1200, barType: "solid", colorClass: "bg-gray-medium" },
      { category: "Sports Equipment", percentage: 10, value: 1000, barType: "striped", colorClass: "bg-[#757575]" },
    ],
    storage: [
      { floor: 1, section: "A1 – A10", category: "Electronics", storageUsed: 80, availableSpace: "20/100" },
      { floor: 2, section: "B1 – B10", category: "Apparel", storageUsed: 60, availableSpace: "40/100" },
      { floor: 1, section: "C1 – C10", category: "Home & Kitchen", storageUsed: 90, availableSpace: "10/100" },
      { floor: 3, section: "D1 – D10", category: "Automotive Parts", storageUsed: 50, availableSpace: "50/100" },
      { floor: 2, section: "E1 – E10", category: "Beauty & Health", storageUsed: 70, availableSpace: "30/100" },
    ],
    packages: [
      { id: "PKG-HK77420", time: "March 20, 2035 – 05:30 PM", status: "Sent" },
      { id: "PKG-A50812", time: "March 21, 2035 – 01:45 PM", status: "Received" },
      { id: "PKG-E10293", time: "March 22, 2035 – 09:00 AM", status: "Expected" },
    ],
    activities: [
      { id: "act-1", user: "Leo Fernandez", action: "confirmed receipt of 40 units of Winter Jacket Series", detail: "in Section B3 (Apparel)", section: "Section B3", category: "Apparel", time: "01:45 PM", type: "receipt" },
      { id: "act-2", user: "Ava Martinez", action: "added 25 units of Smart Router Kit", detail: "to Section A1 (Electronics)", section: "Section A1", category: "Electronics", time: "09:15 AM", type: "add" },
      { id: "act-3", user: "Oscar Liem", action: "dispatched 18 units of Stainless Steel Cookware Set", detail: "from Section C5 (Home & Kitchen)", section: "Section C5", category: "Home & Kitchen", time: "05:30 PM", type: "dispatch" },
      { id: "act-4", user: "Dina Choi", action: "created a shipment entry for Brake Pad Sets", detail: "in Section D2 (Automotive Parts)", section: "Section D2", category: "Automotive Parts", time: "04:10 PM", type: "create" },
    ],
    map: [
      {
        category: "Electronics",
        availableSpace: "20/100",
        blocks: [
          { id: "A1", isFull: false },
          { id: "A2", isFull: true },
          { id: "A3", isFull: false },
        ],
      },
      {
        category: "Home & Kitchen",
        availableSpace: "10/100",
        blocks: [
          { id: "C1", isFull: false },
          { id: "C2", isFull: true },
          { id: "C3", isFull: true },
        ],
      },
      {
        category: "Automotive Parts",
        availableSpace: "50/100",
        blocks: [
          { id: "D1", isFull: false },
          { id: "D2", isFull: true },
          { id: "D3", isFull: false },
        ],
      },
      {
        category: "Sports Equipment",
        availableSpace: "45/100",
        blocks: [
          { id: "F1", isFull: false },
          { id: "F2", isFull: false },
          { id: "F3", isFull: true },
        ],
      },
      {
        category: "Apparel",
        availableSpace: "20/100",
        blocks: [
          { id: "B1", isFull: false },
          { id: "B2", isFull: true },
          { id: "B3", isFull: true },
          { id: "B4", isFull: false },
          { id: "B5", isFull: false },
          { id: "B6", isFull: true },
          { id: "B7", isFull: true },
          { id: "B8", isFull: false },
          { id: "B9", isFull: true },
          { id: "B10", isFull: false },
        ],
      },
      {
        category: "Beauty & Health",
        availableSpace: "30/100",
        blocks: [
          { id: "E1", isFull: false },
          { id: "E2", isFull: true },
          { id: "E3", isFull: false },
          { id: "E4", isFull: false },
        ],
      },
    ],
  },
  "Rail Freight": {
    metrics: [
      { label: "Total SKU", value: "142", change: "+1.12%" },
      { label: "Quantity on Hand", value: "8,920 units", change: "+2.40%" },
      { label: "Capacity Usage", value: "48.2% Full", change: "+0.85%" },
    ],
    inventory: [
      { category: "Industrial Materials", percentage: 40, value: 3568, barType: "solid", colorClass: "bg-brand" },
      { category: "Automotive Parts", percentage: 30, value: 2676, barType: "striped", colorClass: "bg-[#856DF3]" },
      { category: "Home Appliances", percentage: 20, value: 1784, barType: "solid", colorClass: "bg-dark" },
      { category: "Others", percentage: 10, value: 892, barType: "striped", colorClass: "bg-[#757575]" },
    ],
    storage: [
      { floor: 1, section: "R1 – R10", category: "Industrial Materials", storageUsed: 65, availableSpace: "35/100" },
      { floor: 1, section: "T1 – T10", category: "Automotive Parts", storageUsed: 50, availableSpace: "50/100" },
      { floor: 2, section: "H1 – H10", category: "Home Appliances", storageUsed: 30, availableSpace: "70/100" },
    ],
    packages: [
      { id: "PKG-RL99410", time: "March 20, 2035 – 11:30 AM", status: "Received" },
      { id: "PKG-RL50212", time: "March 21, 2035 – 03:00 PM", status: "Sent" },
    ],
    activities: [
      { id: "act-r1", user: "Michael Chen", action: "checked in 50 heavy steel coils", detail: "in Section R1 (Industrial Materials)", section: "Section R1", category: "Industrial Materials", time: "11:30 AM", type: "receipt" },
      { id: "act-r2", user: "John Carter", action: "moved 10 crates of Engine Blocks", detail: "to Section T2 (Automotive)", section: "Section T2", category: "Automotive Parts", time: "09:30 AM", type: "add" },
    ],
    map: [
      {
        category: "Industrial Materials",
        availableSpace: "35/100",
        blocks: [
          { id: "R1", isFull: true },
          { id: "R2", isFull: false },
        ],
      },
      {
        category: "Automotive Parts",
        availableSpace: "50/100",
        blocks: [
          { id: "T1", isFull: true },
          { id: "T2", isFull: false },
          { id: "T3", isFull: true },
        ],
      },
    ],
  },
  "Ocean Freight": {
    metrics: [
      { label: "Total SKU", value: "520", change: "+4.18%" },
      { label: "Quantity on Hand", value: "48,150 units", change: "+6.90%" },
      { label: "Capacity Usage", value: "85.4% Full", change: "+3.20%" },
    ],
    inventory: [
      { category: "Chemicals", percentage: 35, value: 16852, barType: "solid", colorClass: "bg-brand" },
      { category: "Heavy Machinery", percentage: 25, value: 12037, barType: "striped", colorClass: "bg-[#856DF3]" },
      { category: "Textiles", percentage: 20, value: 9630, barType: "solid", colorClass: "bg-dark" },
      { category: "Electronics", percentage: 15, value: 7222, barType: "striped", colorClass: "bg-[#333333]" },
      { category: "Others", percentage: 5, value: 2409, barType: "solid", colorClass: "bg-[#757575]" },
    ],
    storage: [
      { floor: 1, section: "C1 – C20", category: "Chemicals", storageUsed: 92, availableSpace: "8/100" },
      { floor: 1, section: "M1 – M10", category: "Heavy Machinery", storageUsed: 80, availableSpace: "20/100" },
      { floor: 2, section: "TX1 – TX10", category: "Textiles", storageUsed: 85, availableSpace: "15/100" },
      { floor: 3, section: "E1 – E10", category: "Electronics", storageUsed: 75, availableSpace: "25/100" },
    ],
    packages: [
      { id: "PKG-OC01844", time: "March 19, 2035 – 08:30 AM", status: "Received" },
      { id: "PKG-OC90219", time: "March 20, 2035 – 04:15 PM", status: "Received" },
      { id: "PKG-OC22849", time: "March 21, 2035 – 10:00 AM", status: "Expected" },
    ],
    activities: [
      { id: "act-o1", user: "Sanjay Patel", action: "offloaded 12 containers of polymers", detail: "in Section C1 (Chemicals)", section: "Section C1", category: "Chemicals", time: "08:30 AM", type: "receipt" },
      { id: "act-o2", user: "Lars Neilson", action: "logged 4 hydraulic crane shipments", detail: "in Section M3 (Heavy Machinery)", section: "Section M3", category: "Heavy Machinery", time: "10:15 AM", type: "create" },
    ],
    map: [
      {
        category: "Chemicals",
        availableSpace: "8/100",
        blocks: [
          { id: "C1", isFull: true },
          { id: "C2", isFull: true },
          { id: "C3", isFull: true },
        ],
      },
      {
        category: "Heavy Machinery",
        availableSpace: "20/100",
        blocks: [
          { id: "M1", isFull: true },
          { id: "M2", isFull: false },
          { id: "M3", isFull: true },
        ],
      },
    ],
  },
  "Air Freight": {
    metrics: [
      { label: "Total SKU", value: "98", change: "+0.45%" },
      { label: "Quantity on Hand", value: "2,150 units", change: "+1.22%" },
      { label: "Capacity Usage", value: "35.8% Full", change: "+0.15%" },
    ],
    inventory: [
      { category: "Pharmaceuticals", percentage: 50, value: 1075, barType: "solid", colorClass: "bg-brand" },
      { category: "Luxury Goods", percentage: 30, value: 645, barType: "striped", colorClass: "bg-[#856DF3]" },
      { category: "Tech Components", percentage: 20, value: 430, barType: "solid", colorClass: "bg-dark" },
    ],
    storage: [
      { floor: 1, section: "P1 – P5", category: "Pharmaceuticals", storageUsed: 40, availableSpace: "60/100" },
      { floor: 2, section: "L1 – L5", category: "Luxury Goods", storageUsed: 30, availableSpace: "70/100" },
      { floor: 1, section: "TC1 – TC5", category: "Tech Components", storageUsed: 35, availableSpace: "65/100" },
    ],
    packages: [
      { id: "PKG-AF22049", time: "March 22, 2035 – 02:30 PM", status: "Sent" },
      { id: "PKG-AF10293", time: "March 22, 2035 – 05:40 PM", status: "Expected" },
    ],
    activities: [
      { id: "act-a1", user: "Yuki Tanaka", action: "stored 5 boxes of thermo-vaccines", detail: "in Section P2 (Pharmaceuticals)", section: "Section P2", category: "Pharmaceuticals", time: "02:30 PM", type: "add" },
      { id: "act-a2", user: "Emma Dubois", action: "scanned incoming high-value timepiece container", detail: "in Section L1 (Luxury Goods)", section: "Section L1", category: "Luxury Goods", time: "03:40 PM", type: "receipt" },
    ],
    map: [
      {
        category: "Pharmaceuticals",
        availableSpace: "60/100",
        blocks: [
          { id: "P1", isFull: true },
          { id: "P2", isFull: false },
        ],
      },
      {
        category: "Luxury Goods",
        availableSpace: "70/100",
        blocks: [
          { id: "L1", isFull: true },
          { id: "L2", isFull: false },
        ],
      },
    ],
  },
};
