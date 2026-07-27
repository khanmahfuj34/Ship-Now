"use client";

import React from "react";
import Link from "next/link";

interface ComingSoonProps {
  featureName: string;
  iconPath: string;
}

export default function ComingSoon({ featureName, iconPath }: ComingSoonProps) {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[500px] w-full p-4 select-none">
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-border shadow-sm flex flex-col items-center text-center max-w-md w-full">
        {/* Animated Brand Glow Circle Icon Wrapper */}
        <div className="w-20 h-20 rounded-full bg-[#F3EFFF] border border-gray-border flex items-center justify-center mb-5 shrink-0 shadow-inner">
          <img
            src={iconPath}
            alt={featureName}
            className="w-10 h-10 object-contain opacity-90 transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              // Fallback icon if the image doesn't load
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        {/* Feature Coming Soon Status Badge */}
        <span className="px-3 py-1 rounded-full bg-[#F3EFFF] text-brand text-[10px] font-extrabold tracking-wider uppercase mb-3">
          Coming Soon
        </span>

        {/* Feature Title */}
        <h2 className="text-xl sm:text-2xl font-black font-heading text-dark tracking-tight mb-2">
          {featureName} Page
        </h2>

        {/* Professional description */}
        <p className="font-sans text-xs text-gray-medium max-w-xs leading-normal mb-8">
          We are currently working hard on the {featureName} module. This section will be ready with real-time analytics and controls shortly.
        </p>

        {/* Action Link button */}
        <Link
          href="/dashboard"
          className="px-6 py-2.5 bg-brand hover:bg-brand-hover text-white text-xs font-heading font-semibold rounded-xl cursor-pointer shadow-sm transition-all duration-200"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
