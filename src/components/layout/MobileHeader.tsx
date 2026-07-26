import Image from "next/image";

interface MobileHeaderProps {
  onToggle: () => void;
}

export default function MobileHeader({ onToggle }: MobileHeaderProps) {
  return (
    <header className="h-[60px] bg-white border-b border-gray-border flex items-center justify-between px-4 sticky top-0 z-40 md:hidden select-none">
      {/* Brand Icon */}
      <div className="relative w-6 h-6">
        <Image
          src="/icons/image.png"
          alt="ShipNow Brand Logo Icon"
          fill
          sizes="24px"
          className="object-contain"
        />
      </div>

      {/* Page Title */}
      <span className="font-heading font-bold text-base text-dark">
        Dashboard
      </span>

      {/* Hamburger Trigger */}
      <button
        onClick={onToggle}
        className="p-1.5 text-dark hover:bg-gray-light rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand/40 cursor-pointer flex items-center justify-center"
        aria-label="Open navigation drawer"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
}
