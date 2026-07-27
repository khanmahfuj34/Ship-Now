import React from "react";
import Link from "next/link";
import ShipmentViewSwitcher from "./components/ShipmentViewSwitcher";

interface ShipmentsHeaderProps {
    currentView: "table" | "grid";
    onViewChange: (view: "table" | "grid") => void;
}

export default function ShipmentsHeader({
    currentView,
    onViewChange,
}: ShipmentsHeaderProps) {
    return (
        <div className="flex flex-col gap-4 w-full select-none">
            {/* Desktop/Tablet: Full header row with title, breadcrumb, switcher & new button */}
            <div className="hidden md:flex items-center justify-between w-full">
                {/* Left Column: Title & Breadcrumbs */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold font-heading text-dark tracking-wide leading-none">
                        Shipments
                    </h1>
                    <div className="flex items-center gap-1.5 text-xs font-sans text-gray-medium font-semibold">
                        <Link href="/dashboard" className="text-brand hover:underline transition-colors">
                            Dashboard
                        </Link>
                        <span className="text-[10px] text-gray-medium opacity-55">/</span>
                        <span className="text-gray-medium">Shipments</span>
                    </div>
                </div>

                {/* Right Column: View Switcher & Action Button */}
                <div className="flex items-center gap-3">
                    <ShipmentViewSwitcher currentView={currentView} onViewChange={onViewChange} />
                    <Link
                        href="/shipments/new"
                        className="flex items-center gap-2.5 px-4 py-3 bg-dark hover:bg-[#222222] text-white text-xs font-heading font-semibold rounded-xl cursor-pointer transition-all duration-200 active:scale-[0.98]"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        New Shipment
                    </Link>
                </div>
            </div>

            {/* Mobile: Only view switcher (no title — MobileHeader shows it) */}
            <div className="flex md:hidden items-center justify-end w-full">
                <ShipmentViewSwitcher currentView={currentView} onViewChange={onViewChange} />
            </div>
        </div>
    );
}
