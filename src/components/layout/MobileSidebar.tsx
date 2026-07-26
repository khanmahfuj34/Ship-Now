"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavigation, secondaryNavigation } from "../../config/navigation";
import SidebarItem from "./SidebarItem";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();

  // Close drawer when route changes
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
        isOpen ? "visible" : "invisible pointer-events-none"
      }`}
    >
      {/* Overlay Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding Navigation Container */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[240px] bg-white shadow-2xl transition-transform duration-300 flex flex-col justify-between py-6 px-4 overflow-y-auto select-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {/* Header with Logo & Close Button */}
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src="/icons/image.png"
                  alt="ShipNow Brand Logo Icon"
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-extrabold italic text-lg tracking-wider text-brand">
                SHIPNOW
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-1 text-gray-medium hover:text-dark hover:bg-gray-light rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand/40 cursor-pointer flex items-center justify-center"
              aria-label="Close navigation drawer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* User Profile Card */}
          <div className="flex items-center gap-2.5 p-2 bg-gray-light/60 rounded-xl border border-gray-border/30">
            <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0 border border-gray-border">
              <Image
                src="/icons/profile pic.png"
                alt="John Doe profile avatar"
                fill
                sizes="30px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-sans text-[12px] font-bold text-dark truncate leading-tight">
                John Doe
              </span>
              <span className="font-sans text-[10px] text-gray-medium leading-none">
                Admin
              </span>
            </div>
          </div>

          {/* Main Navigation Group */}
          <nav className="flex flex-col gap-1">
            {mainNavigation.map((item) => (
              <SidebarItem
                key={item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
                badge={item.badge}
                active={pathname === item.href}
                forceShowLabel={true}
              />
            ))}
          </nav>
        </div>

        {/* Secondary Navigation & Promo Banner */}
        <div className="flex flex-col gap-5 mt-6">
          <nav className="flex flex-col gap-1">
            {secondaryNavigation.map((item) => (
              <SidebarItem
                key={item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
                badge={item.badge}
                active={pathname === item.href}
                forceShowLabel={true}
              />
            ))}
          </nav>

          {/* Promo Go Pro Banner */}
          <div className="bg-gradient-to-br from-[#1E2022] to-[#363B3F] text-white p-4 rounded-2xl relative overflow-hidden shadow-md">
            <h3 className="font-heading font-bold text-sm mb-1 leading-snug">
              Loving ShipNow Free?
            </h3>
            <p className="font-sans text-[11px] text-zinc-300 leading-relaxed mb-3">
              Go Pro to access priority support, real-time tracking, and full analytics.
            </p>
            <button className="w-full py-2 bg-white hover:bg-zinc-100 text-dark font-heading font-semibold text-xs rounded-xl active:scale-[0.98] transition-all cursor-pointer">
              Go Pro Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
