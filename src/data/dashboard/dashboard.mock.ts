export interface MetricData {
  title: string;
  value: string;
  subValue: string;
  change: string;
  isPositive: boolean;
  iconName: string;
}

export const metricsData: MetricData[] = [
  {
    title: "Active Shipments",
    value: "1,284",
    subValue: "shipments",
    change: "+8.7%",
    isPositive: true,
    iconName: "truck",
  },
  {
    title: "Delivery Performance",
    value: "94.3%",
    subValue: "on-time",
    change: "-1.2%",
    isPositive: false,
    iconName: "performance",
  },
  {
    title: "Revenue",
    value: "$82,450",
    subValue: "",
    change: "+12.4%",
    isPositive: true,
    iconName: "revenue",
  },
];

export interface ShipmentStatPoint {
  month: string;
  value: number;
  highlighted?: boolean;
}

export const shipmentStatsData: ShipmentStatPoint[] = [
  { month: "Jan", value: 1800 },
  { month: "Feb", value: 2100 },
  { month: "Mar", value: 1500 },
  { month: "Apr", value: 2300 },
  { month: "May", value: 3124, highlighted: true },
  { month: "Jun", value: 1700 },
  { month: "Jul", value: 2600 },
  { month: "Aug", value: 3100 },
];

export interface ProfitStatPoint {
  month: string;
  revenue: number;
  cost: number;
  highlighted?: boolean;
}

export const profitStatsData: ProfitStatPoint[] = [
  { month: "Jan", revenue: 45000, cost: 25000 },
  { month: "Feb", revenue: 50000, cost: 30000 },
  { month: "Mar", revenue: 40000, cost: 20000 },
  { month: "Apr", revenue: 60000, cost: 35000 },
  { month: "May", revenue: 87524, cost: 45680, highlighted: true },
  { month: "Jun", revenue: 55000, cost: 30000 },
  { month: "Jul", revenue: 70000, cost: 40000 },
  { month: "Aug", revenue: 75000, cost: 45000 },
];

export interface ShipmentTypePoint {
  name: string;
  percentage: number;
  count: number;
  color: string;
}

export const shipmentTypeData: ShipmentTypePoint[] = [
  { name: "Road Freight", percentage: 46, count: 1150, color: "#856DF3" },
  { name: "Ocean Freight", percentage: 17, count: 425, color: "#808080" },
  { name: "Air Freight", percentage: 28, count: 700, color: "#333333" },
  { name: "Rail Freight", percentage: 9, count: 225, color: "#E0E0E0" },
];

export interface ProductCategoryPoint {
  name: string;
  percentage: number;
  count: number;
  color: string;
}

export const productCategoriesData: ProductCategoryPoint[] = [
  { name: "Electronics", percentage: 24, count: 240, color: "#856DF3" },
  { name: "Home & Kitchen", percentage: 20, count: 200, color: "#E3DDFF" },
  { name: "Apparel", percentage: 18, count: 180, color: "#333333" },
  { name: "Beauty & Health", percentage: 14, count: 140, color: "#808080" },
  { name: "Sports & Outdoors", percentage: 12, count: 120, color: "#E0E0E0" },
  { name: "Automotive", percentage: 12, count: 120, color: "#F0F0F0" },
];

export interface TrackingData {
  shippingId: string;
  status: string;
  subStatus: string;
  courier: string;
  company: string;
  from: {
    city: string;
    date: string;
  };
  to: {
    city: string;
    date: string;
  };
  progress: number;
}

export const trackingData: TrackingData = {
  shippingId: "#SH8743921",
  status: "In Transit",
  subStatus: "On Schedule",
  courier: "Daniel Cooper",
  company: "SkyLogix Express",
  from: {
    city: "San Francisco, CA, USA",
    date: "Mar 19, 2035 - 10:30 AM",
  },
  to: {
    city: "New York, NY, USA",
    date: "Mar 23, 2035 - 03:00 PM (estimated)",
  },
  progress: 75,
};

export interface AlertDetail {
  title: string;
  id: string;
  type: string;
  date: string;
  iconType: "document" | "pin" | "cloud";
}

export const alertsSummary = {
  totalDelays: 12,
  categories: [
    { title: "Customs Clearance Delay", count: 5 },
    { title: "Incorrect Address Provided", count: 4 },
    { title: "Weather-Related Hold", count: 3 },
  ],
};

export const alertsList: AlertDetail[] = [
  {
    title: "Customs Clearance Delay",
    id: "#SH8743921",
    type: "Ocean Freight",
    date: "Mar 20",
    iconType: "document",
  },
  {
    title: "Incorrect Address Provided",
    id: "#SH8725810",
    type: "Road Freight",
    date: "Mar 20",
    iconType: "pin",
  },
  {
    title: "Weather-Related Hold",
    id: "#SH8790043",
    type: "Air Freight",
    date: "Mar 19",
    iconType: "cloud",
  },
  {
    title: "Incorrect Address Provided",
    id: "#SH8716654",
    type: "Rail Freight",
    date: "Mar 18",
    iconType: "document",
  },
];

export interface RecentShipment {
  id: string;
  company: string;
  category: string;
  carrier: string;
  route: string;
  date: string;
  status: "In Transit" | "Out for Delivery" | "Delivered" | "Processing";
}

export const recentShipmentsData: RecentShipment[] = [
  {
    id: "#SH9283746",
    company: "TechGear Inc.",
    category: "Electronics",
    carrier: "FedEx",
    route: "Los Angeles, CA → Chicago, IL",
    date: "Mar 20, 2035",
    status: "In Transit",
  },
  {
    id: "#SH9182635",
    company: "StyleHub Co.",
    category: "Apparel",
    carrier: "DHL",
    route: "New York, NY → Atlanta, GA",
    date: "Mar 19, 2035",
    status: "Out for Delivery",
  },
  {
    id: "#SH9037821",
    company: "FreshNest",
    category: "Home & Kitchen",
    carrier: "UPS",
    route: "Dallas, TX → Miami, FL",
    date: "Mar 18, 2035",
    status: "Delivered",
  },
  {
    id: "#SH9374652",
    company: "FitPlus Gear",
    category: "Sports & Outdoors",
    carrier: "USPS",
    route: "Seattle, WA → Denver, CO",
    date: "Mar 21, 2035",
    status: "Processing",
  },
  {
    id: "#SH9457830",
    company: "AutoParts Pro",
    category: "Automotive",
    carrier: "Aramex",
    route: "Detroit, MI → San Francisco, CA",
    date: "Mar 20, 2035",
    status: "In Transit",
  },
];

export interface RecentActivity {
  user: string;
  text: string;
  time: string;
  iconType: "package" | "tag" | "undo" | "check";
}

export const recentActivityData: RecentActivity[] = [
  {
    user: "@TechGuru99",
    text: "submitted a bulk shipment request",
    time: "12:00 PM",
    iconType: "package",
  },
  {
    user: "@SupportKen",
    text: "added a priority tag to Order ID 77889JKL",
    time: "11:30 AM",
    iconType: "tag",
  },
  {
    user: "@SallyMae88",
    text: "initiated a return process for Order ID 44556GHI",
    time: "11:00 AM",
    iconType: "undo",
  },
  {
    user: "@AdminLisa",
    text: "resolved a delivery issue for Order ID 12345XYZ",
    time: "10:15 AM",
    iconType: "check",
  },
];
