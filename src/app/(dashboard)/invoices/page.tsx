import React, { Suspense } from "react";
import InvoicesScreen from "../../../features/invoices/components/InvoicesScreen";

export const metadata = {
  title: "Invoices & Billing - ShipNow",
  description: "Manage client billing, paid, unpaid, and overdue invoices for ShipNow logistics.",
};

export default function InvoicesPage() {
  return (
    <Suspense fallback={<div className="p-6 font-sans text-xs text-gray-medium font-bold select-none">Loading Invoices & Billing...</div>}>
      <InvoicesScreen />
    </Suspense>
  );
}
