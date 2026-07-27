import React from "react";
import { Invoice } from "../types/invoice.types";

interface InvoiceDetailsProps {
  invoice: Invoice | null;
  onBack?: () => void; // Optional back action on mobile
}

export default function InvoiceDetails({ invoice, onBack }: InvoiceDetailsProps) {
  if (!invoice) {
    return (
      <div className="bg-white p-6 rounded-3xl border border-gray-border/50 shadow-sm flex flex-col items-center justify-center min-h-[400px] text-center w-full select-none text-gray-medium">
        <svg className="w-12 h-12 text-gray-border mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="text-sm font-semibold">Select an invoice to view details</span>
      </div>
    );
  }

  // Derive prices
  const subTotal = invoice.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subTotal * invoice.taxRate;
  const total = subTotal + tax + invoice.fee;

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-[#E6F9F0] text-[#00B074]";
      case "Unpaid":
        return "bg-[#F3EFFF] text-[#856DF3]";
      case "Overdue":
      default:
        return "bg-[#FFF0F2] text-[#FF4D6D]";
    }
  };

  const actionButtons = (
    <>
      <button
        onClick={() => alert("Edit Invoice is not implemented in this frontend demo.")}
        className="px-3.5 py-2 bg-white hover:bg-gray-light border border-gray-border text-dark text-xs font-heading font-semibold rounded-xl cursor-pointer transition-all duration-200 flex-1 sm:flex-initial text-center"
      >
        Edit
      </button>
      <button
        onClick={() => alert("Invoice placed on Hold.")}
        className="px-3.5 py-2 bg-white hover:bg-gray-light border border-gray-border text-dark text-xs font-heading font-semibold rounded-xl cursor-pointer transition-all duration-200 flex-1 sm:flex-initial text-center"
      >
        Hold
      </button>
      <button
        onClick={() => alert("Invoice sent successfully!")}
        className="px-3.5 py-2 bg-dark hover:bg-[#222222] text-white text-xs font-heading font-semibold rounded-xl cursor-pointer transition-all duration-200 flex-1 sm:flex-initial text-center"
      >
        Send Invoice
      </button>
    </>
  );

  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-border shadow-sm flex flex-col gap-6 w-full select-none lg:h-full">
      {/* 1. Header with Title and Desktop Actions */}
      <div className="flex items-center justify-between w-full pb-1 border-b border-gray-border">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="sm:hidden text-gray-medium hover:text-dark mr-1"
              title="Back to List"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <h2 className="text-lg font-bold font-heading text-dark tracking-wide">
            Invoice Details
          </h2>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {actionButtons}
        </div>
      </div>

      {/* 2. Invoice Summary Card Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-lg font-bold font-heading text-brand">
            Invoice #{invoice.id}
          </span>
          <div>
            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold tracking-wide font-sans ${getStatusBadgeClass(invoice.status)}`}>
              {invoice.status}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-[11px] font-sans text-gray-medium font-semibold text-right sm:items-end">
          <div>
            <span>Issue Date </span>
            <span className="text-dark ml-1 font-bold">{invoice.issuedDate}</span>
          </div>
          <div>
            <span>Due Date </span>
            <span className="text-dark ml-1 font-bold">{invoice.dueDate}</span>
          </div>
        </div>
      </div>

      {/* 3. Bill From / Bill To Section */}
      <div className="bg-[#FAF9FF] rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Bill From */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-sans font-bold text-gray-medium uppercase tracking-wide">
            Bill From
          </span>
          <span className="text-xs font-bold text-dark font-heading">
            {invoice.company.name}
          </span>
          <span className="text-[10px] text-gray-medium font-sans">
            {invoice.company.email}
          </span>
          <span className="text-[10px] text-gray-medium font-sans leading-normal">
            {invoice.company.address}
          </span>
          <span className="text-[10px] text-gray-medium font-sans font-semibold mt-1">
            {invoice.company.phone}
          </span>
        </div>

        {/* Bill To */}
        <div className="flex flex-col gap-1 pt-4 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-sans font-bold text-gray-medium uppercase tracking-wide">
            Bill To
          </span>
          <span className="text-xs font-bold text-dark font-heading">
            {invoice.billTo.name}
          </span>
          <span className="text-[10px] text-gray-medium font-sans">
            {invoice.billTo.email}
          </span>
          <span className="text-[10px] text-gray-medium font-sans leading-normal">
            {invoice.billTo.address}
          </span>
          <span className="text-[10px] text-gray-medium font-sans font-semibold mt-1">
            {invoice.billTo.phone}
          </span>
        </div>
      </div>

      {/* 4. Package Summary Sub-table */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xs font-bold font-heading text-dark tracking-wide uppercase">
          Package Summary
        </h3>
        <div className="w-full overflow-hidden border border-gray-border rounded-xl">
          <table className="w-full text-left font-sans border-collapse">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-gray-border text-gray-medium font-bold text-[9px] uppercase tracking-wider h-8">
                <th className="pl-3 py-1.5">Description</th>
                <th className="pr-3 py-1.5">Shipment Type</th>
                <th className="pr-3 py-1.5 hidden sm:table-cell">Price</th>
                <th className="pr-3 py-1.5 hidden sm:table-cell">Qty</th>
                <th className="pr-3 py-1.5 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-[10px]">
              {invoice.items.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-border h-10">
                  <td className="pl-3 py-1.5 font-semibold text-dark">
                    <div className="flex flex-col leading-tight">
                      <span>{item.description}</span>
                      {/* Price x Qty nested on mobile */}
                      <span className="sm:hidden text-[9px] text-brand font-bold mt-0.5">
                        ${item.price.toFixed(2)} x {item.qty}
                      </span>
                    </div>
                  </td>
                  <td className="pr-3 py-1.5 text-gray-medium font-medium">
                    {item.shipmentType}
                  </td>
                  <td className="pr-3 py-1.5 text-dark font-medium hidden sm:table-cell">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="pr-3 py-1.5 text-dark font-medium hidden sm:table-cell">
                    {item.qty}
                  </td>
                  <td className="pr-3 py-1.5 text-right font-bold text-dark">
                    ${(item.price * item.qty).toFixed(2)}
                  </td>
                </tr>
              ))}

              {/* Totals Rows inside the border box */}
              {/* Sub Total */}
              <tr className="border-t border-gray-border h-9">
                <td colSpan={3} className="hidden sm:table-cell" />
                <td colSpan={1} className="sm:hidden" />
                <td className="pl-3 sm:pl-0 py-1.5 font-semibold text-gray-medium text-left">
                  Sub Total
                </td>
                <td className="pr-3 py-1.5 text-right font-bold text-dark">
                  ${subTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
              {/* Tax */}
              <tr className="h-7">
                <td colSpan={3} className="hidden sm:table-cell" />
                <td colSpan={1} className="sm:hidden" />
                <td className="pl-3 sm:pl-0 py-1 font-semibold text-gray-medium text-left">
                  Tax ({(invoice.taxRate * 100).toFixed(0)}%)
                </td>
                <td className="pr-3 py-1 text-right font-bold text-dark">
                  ${tax.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
              {/* Fee */}
              <tr className="h-7">
                <td colSpan={3} className="hidden sm:table-cell" />
                <td colSpan={1} className="sm:hidden" />
                <td className="pl-3 sm:pl-0 py-1 font-semibold text-gray-medium text-left">
                  Fee
                </td>
                <td className="pr-3 py-1 text-right font-bold text-dark">
                  ${invoice.fee.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
              {/* Total */}
              <tr className="border-t border-gray-border h-10 font-bold">
                <td colSpan={3} className="hidden sm:table-cell" />
                <td colSpan={1} className="sm:hidden" />
                <td className="pl-3 sm:pl-0 py-2 font-heading font-black text-dark text-xs text-left">
                  Total
                </td>
                <td className="pr-3 py-2 text-right font-black text-brand text-xs">
                  ${total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Notes Section */}
      {invoice.note && (
        <div className="flex flex-col gap-1 border-t border-gray-border pt-4">
          <span className="text-[10px] font-sans font-bold text-gray-medium uppercase tracking-wide">
            Note
          </span>
          <p className="text-[10px] text-gray-medium font-sans leading-normal font-medium italic">
            {invoice.note}
          </p>
        </div>
      )}

      {/* Mobile Buttons */}
      <div className="flex sm:hidden items-center gap-2 mt-4 pt-4 border-t border-gray-border">
        {actionButtons}
      </div>
    </div>
  );
}
