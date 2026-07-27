export type InvoiceStatus = "Paid" | "Unpaid" | "Overdue";

export interface CompanyInfo {
  name: string;
  email: string;
  address: string;
  phone: string;
  logoType?: string;
}

export interface InvoiceItem {
  description: string;
  shipmentType: string;
  price: number;
  qty: number;
}

export interface Invoice {
  id: string;
  company: CompanyInfo;
  shippingId: string;
  issuedDate: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
  
  // Billing details
  billTo: CompanyInfo;
  items: InvoiceItem[];
  taxRate: number; // e.g., 0.08 for 8%
  fee: number;
  note?: string;
}

export interface InvoiceQueryState {
  search: string;
  status: string; // "All" | "Paid" | "Unpaid" | "Overdue"
  sortBy: string;
  sortOrder: "asc" | "desc";
  page: number;
  pageSize: number;
}
