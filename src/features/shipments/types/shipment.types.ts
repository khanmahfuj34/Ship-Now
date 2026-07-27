export type ShipmentStatus = "in-transit" | "out-for-delivery" | "delivered" | "processing";
export type TransportMode = "air" | "road" | "ocean" | "rail";

export interface Shipment {
  id: string;
  company: string;
  category: string;
  carrier: string;
  productCategory: string;
  weight: string;
  originCity: string;
  originDate: string;
  destinationCity: string;
  destinationDate: string;
  progress: number;
  status: ShipmentStatus;
  transportMode: TransportMode;
  logoType: "hex" | "triangle" | "house" | "ring" | "star" | "diamond";
}
