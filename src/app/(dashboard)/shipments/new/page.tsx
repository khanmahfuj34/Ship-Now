import Link from "next/link";

export default function CreateShipmentPage() {
  return (
    <div className="flex flex-col gap-6 select-none p-4 md:p-6 lg:p-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-sans text-gray-medium font-semibold">
        <Link href="/dashboard" className="hover:text-dark transition-colors">
          Dashboard
        </Link>
        <span>/</span>
        <Link href="/shipments" className="hover:text-dark transition-colors">
          Shipments
        </Link>
        <span>/</span>
        <span className="text-dark">New Shipment</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-2xl font-bold font-heading text-dark tracking-wide leading-none">
            Create New Shipment
          </h1>
          <p className="text-xs font-sans text-gray-medium">
            Fill in the details to register a new shipment in the system.
          </p>
        </div>
        <Link
          href="/shipments"
          className="flex items-center gap-2 px-4 py-2 bg-dark hover:bg-[#222222] text-white text-xs font-heading font-semibold rounded-xl cursor-pointer transition-all duration-200"
        >
          ← Back to Shipments
        </Link>
      </div>

      {/* Placeholder Content Card */}
      <div className="bg-white p-6 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col items-center justify-center min-h-[300px] text-center">
        <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-lg text-dark mb-1">
          Shipment Form Active
        </h3>
        <p className="font-sans text-xs text-gray-medium max-w-sm">
          The "/shipments/new" route is registered. The complete form will be implemented in a separate task.
        </p>
      </div>
    </div>
  );
}
