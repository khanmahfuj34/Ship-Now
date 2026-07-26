"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavigation, secondaryNavigation } from "../../config/navigation";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[54px] lg:w-[223px] min-h-screen bg-white border-r border-gray-border flex flex-col justify-between py-6 px-2 lg:px-4 flex-shrink-0 transition-all duration-300 select-none">
      <div className="flex flex-col gap-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2 px-1 lg:px-2 h-10">
          <div className="relative w-6 h-6 flex-shrink-0 mx-auto lg:mx-0">
            <Image
              src="/icons/image.png"
              alt="ShipNow Brand Logo Icon"
              fill
              sizes="24px"
              className="object-contain"
            />
          </div>
          <span className="font-heading font-extrabold italic text-lg tracking-wider text-brand hidden lg:inline">
            SHIPNOW
          </span>
        </div>

        {/* User Profile Card */}
        <div className="flex items-center justify-between p-1.5 lg:p-2 bg-gray-light/60 rounded-xl border border-gray-border/30">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0 mx-auto lg:mx-0 border border-gray-border">
              <Image
                src="/icons/profile pic.png"
                alt="John Doe profile avatar"
                fill
                sizes="30px"
                className="object-cover"
              />
            </div>
            <div className="hidden lg:flex flex-col min-w-0">
              <span className="font-sans text-[12px] font-bold text-dark truncate leading-tight">
                John Doe
              </span>
              <span className="font-sans text-[10px] text-gray-medium leading-none">
                Admin
              </span>
            </div>
          </div>
          <svg
            className="w-3.5 h-3.5 text-gray-medium hidden lg:block cursor-pointer hover:text-dark transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
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
            />
          ))}
        </nav>
      </div>

      {/* Secondary Navigation & Footer Promotion */}
      <div className="flex flex-col gap-5">
        {/* Secondary Navigation (Messages, Notifications, Settings) */}
        <nav className="flex flex-col gap-1">
          {secondaryNavigation.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
              badge={item.badge}
              active={pathname === item.href}
            />
          ))}
        </nav>

        {/* Promo Go Pro Banner (Hidden in tablet rail mode) */}
        <div className="hidden lg:block bg-gradient-to-br from-[#1E2022] to-[#363B3F] text-white p-4 rounded-2xl relative overflow-hidden shadow-md">
          {/* Decorative design elements */}
          <div className="absolute top-[-30px] right-[-30px] w-20 h-20 bg-white/5 rounded-full blur-xl pointer-events-none" />
          
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
    </aside>
  );
}
