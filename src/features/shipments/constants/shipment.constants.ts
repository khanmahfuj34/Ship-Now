export const CARRIERS = ["FedEx", "DHL", "UPS", "USPS", "Aramex"] as const;

export const SHIPPING_METHODS: Record<string, string[]> = {
  FedEx: ["Standard Ground", "Express Saver", "Overnight"],
  DHL: ["Express Worldwide", "Economy Select"],
  UPS: ["Ground", "3 Day Select", "Next Day Air"],
  USPS: ["Priority Mail", "First-Class Package"],
  Aramex: ["Priority Document", "Value Express"],
};

export const FREIGHT_TYPES = [
  { value: "road", label: "Road Freight" },
  { value: "rail", label: "Rail Freight" },
  { value: "ocean", label: "Ocean Freight" },
  { value: "air", label: "Air Freight" },
] as const;

export const UNITS = ["Kg", "Lbs"] as const;
