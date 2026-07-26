import React from "react";
import Sidebar from "./Sidebar";
import MobileNavigation from "./MobileNavigation";
import Footer from "./Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      {/* Sidebar for Desktop & Tablet Rail */}
      <div className="hidden md:flex flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        {/* Mobile Sticky Header & Sliding Drawer */}
        <MobileNavigation />

        {/* Dynamic Page Content */}
        <div className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col gap-6 overflow-x-hidden">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
