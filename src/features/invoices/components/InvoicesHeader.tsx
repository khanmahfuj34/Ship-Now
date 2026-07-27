import React from "react";
import Link from "next/link";

export default function InvoicesHeader() {
  return (
    <div className="flex flex-col gap-1.5 w-full select-none">
      <h1 className="text-3xl font-bold font-heading text-dark tracking-wide leading-none">
        Invoices & Billing
      </h1>
      <div className="flex items-center gap-1.5 text-xs font-sans text-gray-medium font-semibold">
        <Link href="/dashboard" className="text-brand hover:underline transition-colors">
          Dashboard
        </Link>
        <span className="text-[10px] text-gray-medium opacity-55">/</span>
        <span className="text-gray-medium">Invoices & Billing</span>
      </div>
    </div>
  );
}
