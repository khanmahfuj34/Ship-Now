import Link from "next/link";
import Image from "next/image";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: string;
  badge?: number;
  active: boolean;
  forceShowLabel?: boolean;
}

export default function SidebarItem({
  label,
  href,
  icon,
  badge,
  active,
  forceShowLabel = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-xl transition-all duration-200 cursor-pointer relative group w-full ${
        active
          ? "bg-[#856DF3]/10 text-brand font-semibold"
          : "text-gray-medium hover:bg-gray-light hover:text-dark"
      } ${
        forceShowLabel
          ? "justify-start px-4 py-2.5 gap-3 h-auto"
          : "justify-center lg:justify-start px-2 py-2.5 lg:px-4 lg:py-2.5 gap-0 lg:gap-3 h-[38px] lg:h-auto"
      }`}
    >
      {/* Icon */}
      <div className="relative w-[18px] h-[18px] lg:w-5 lg:h-5 flex-shrink-0">
        <Image
          src={icon}
          alt={label}
          fill
          sizes="20px"
          className={`object-contain transition-all duration-200 ${
            active ? "" : "opacity-80 group-hover:opacity-100 filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
          }`}
        />
      </div>

      {/* Label */}
      <span
        className={`font-sans text-[13px] font-medium tracking-wide leading-none truncate ${
          forceShowLabel ? "inline" : "hidden lg:inline"
        }`}
      >
        {label}
      </span>

      {/* Badge */}
      {badge !== undefined && (
        <span
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-[#856DF3] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center leading-normal ${
            forceShowLabel ? "inline" : "hidden lg:inline"
          }`}
        >
          {badge}
        </span>
      )}

      {/* Left indicator line for collapsed active state (Tablet rail only) */}
      {active && !forceShowLabel && (
        <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-1 h-5 bg-brand rounded-r-md lg:hidden" />
      )}
    </Link>
  );
}
