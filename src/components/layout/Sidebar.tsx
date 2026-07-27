"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavigation, secondaryNavigation } from "../../config/navigation";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  isCollapsed?: boolean | null;
  setIsCollapsed?: (val: boolean) => void;
}

export default function Sidebar({ isCollapsed = null, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();

  // Determine aside element classes based on collapsed state
  let asideClasses = "h-full bg-white border-r border-gray-border flex flex-col justify-between lg:justify-start lg:gap-6 py-6 flex-shrink-0 transition-all duration-300 select-none overflow-y-auto";
  if (isCollapsed === true) {
    asideClasses += " w-[54px] px-2";
  } else if (isCollapsed === false) {
    asideClasses += " w-[223px] px-4";
  } else {
    // Default responsive behavior
    asideClasses += " w-[54px] lg:w-[223px] px-2 lg:px-4";
  }

  const collapsedProp = isCollapsed === null ? undefined : isCollapsed;

  return (
    <aside className={asideClasses}>
      <div className="flex flex-col gap-6">
        {/* Logo Section */}
        <div className={`flex items-center h-10 transition-all duration-300 ${
          isCollapsed === true 
            ? "justify-center px-0 gap-0" 
            : isCollapsed === false 
              ? "justify-start px-2 gap-2" 
              : "justify-center lg:justify-start px-1 lg:px-2 gap-0 lg:gap-2"
        }`}>
          <div className={`relative w-6 h-6 flex-shrink-0 transition-all duration-300 ${
            isCollapsed === true ? "mx-auto" : isCollapsed === false ? "mx-0" : "mx-auto lg:mx-0"
          }`}>
            <Image
              src="/icons/image.png"
              alt="ShipNow Brand Logo Icon"
              fill
              sizes="24px"
              className="object-contain"
            />
          </div>
          <span className={`font-heading font-extrabold italic text-lg tracking-wider text-brand transition-all duration-300 whitespace-nowrap overflow-hidden ${
            isCollapsed === true
              ? "opacity-0 max-w-0 pointer-events-none"
              : isCollapsed === false
                ? "opacity-100 max-w-[150px]"
                : "opacity-0 max-w-0 lg:opacity-100 lg:max-w-[150px] lg:inline"
          }`}>
            SHIPNOW
          </span>
        </div>

        {/* User Profile Card */}
        <div className={`flex items-center rounded-xl border border-gray-border/30 bg-gray-light/60 transition-all duration-300 ${
          isCollapsed === true
            ? "p-1 justify-center"
            : isCollapsed === false
              ? "p-2 justify-between"
              : "p-1.5 lg:p-2 justify-center lg:justify-between"
        }`}>
          <div className={`flex items-center min-w-0 transition-all duration-300 ${
            isCollapsed === true
              ? "gap-0"
              : isCollapsed === false
                ? "gap-2.5"
                : "gap-0 lg:gap-2.5"
          }`}>
            <div className={`relative w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0 border border-gray-border transition-all duration-300 ${
              isCollapsed === true ? "mx-auto" : isCollapsed === false ? "mx-0" : "mx-auto lg:mx-0"
            }`}>
              <Image
                src="/icons/profile pic.png"
                alt="John Doe profile avatar"
                fill
                sizes="30px"
                className="object-cover"
              />
            </div>
            <div className={`flex flex-col min-w-0 transition-all duration-300 overflow-hidden ${
              isCollapsed === true
                ? "opacity-0 max-w-0 pointer-events-none hidden"
                : isCollapsed === false
                  ? "opacity-100 max-w-[120px] flex"
                  : "opacity-0 max-w-0 lg:opacity-100 lg:max-w-[120px] hidden lg:flex"
            }`}>
              <span className="font-sans text-[12px] font-bold text-dark truncate leading-tight">
                John Doe
              </span>
              <span className="font-sans text-[10px] text-gray-medium leading-none">
                Admin
              </span>
            </div>
          </div>
          <svg
            className={`w-3.5 h-3.5 text-gray-medium cursor-pointer hover:text-dark transition-all duration-300 ${
              isCollapsed === true
                ? "opacity-0 scale-0 pointer-events-none hidden"
                : isCollapsed === false
                  ? "opacity-100 scale-100 block"
                  : "opacity-0 scale-0 lg:opacity-100 lg:scale-100 hidden lg:block"
            }`}
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
              collapsed={collapsedProp}
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
              collapsed={collapsedProp}
            />
          ))}
        </nav>

        {/* Promo Go Pro Banner (Hidden in tablet rail mode) */}
        <div className={`bg-gradient-to-br from-[#1E2022] to-[#363B3F] text-white p-4 rounded-2xl relative overflow-hidden shadow-md transition-all duration-300 ${
          isCollapsed === true
            ? "opacity-0 max-h-0 p-0 scale-95 pointer-events-none overflow-hidden"
            : isCollapsed === false
              ? "opacity-100 max-h-[250px] scale-100"
              : "opacity-0 max-h-0 p-0 scale-95 lg:opacity-100 lg:max-h-[250px] lg:scale-100 lg:p-4 hidden lg:block overflow-hidden"
        }`}>
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

        {/* Sidebar Collapse Toggle Control */}
        <div className={`border-t border-gray-border/50 pt-4 flex items-center transition-all duration-300 ${
          isCollapsed === true
            ? "justify-center px-0"
            : isCollapsed === false
              ? "justify-start px-2"
              : "justify-center lg:justify-start px-1 lg:px-2"
        }`}>
          <button
            onClick={() => setIsCollapsed?.(!isCollapsed)}
            className={`flex items-center rounded-lg text-gray-medium hover:text-dark hover:bg-gray-light cursor-pointer transition-all duration-300 focus:outline-none ${
              isCollapsed === true
                ? "justify-center w-8 h-8"
                : isCollapsed === false
                  ? "justify-start px-2 py-1.5 w-full gap-3"
                  : "justify-center lg:justify-start lg:px-2 lg:py-1.5 w-8 lg:w-full h-8 lg:h-auto gap-0 lg:gap-3"
            }`}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <div className={`flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
              isCollapsed === true
                ? "rotate-180"
                : isCollapsed === false
                  ? ""
                  : "rotate-180 lg:rotate-0"
            }`}>
              <svg
                className="w-[18px] h-[18px] lg:w-5 lg:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </div>
            <span
              className={`font-sans text-[13px] font-medium tracking-wide leading-none truncate transition-all duration-300 whitespace-nowrap overflow-hidden ${
                isCollapsed === true
                  ? "opacity-0 max-w-0 pointer-events-none"
                  : isCollapsed === false
                    ? "opacity-100 max-w-[150px]"
                    : "opacity-0 max-w-0 lg:opacity-100 lg:max-w-[150px] lg:inline"
              }`}
            >
              Collapse Sidebar
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
