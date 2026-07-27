import Link from "next/link";
import Image from "next/image";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: string;
  badge?: number;
  active: boolean;
  forceShowLabel?: boolean;
  collapsed?: boolean;
}

export default function SidebarItem({
  label,
  href,
  icon,
  badge,
  active,
  forceShowLabel = false,
  collapsed,
}: SidebarItemProps) {
  // Determine classes based on collapsible state
  let layoutClasses = "";
  let labelClasses = "";
  let badgeClasses = "";
  let showIndicator = false;
  let indicatorClasses = "absolute left-[-2px] top-1/2 -translate-y-1/2 w-1 h-5 bg-brand rounded-r-md transition-all duration-300";

  if (collapsed === true) {
    layoutClasses = "justify-center px-2 py-2.5 gap-0 h-[38px]";
    labelClasses = "opacity-0 max-w-0 pointer-events-none";
    badgeClasses = "opacity-0 scale-0 pointer-events-none";
    showIndicator = active;
  } else if (collapsed === false) {
    layoutClasses = "justify-start px-4 py-2.5 gap-3 h-auto";
    labelClasses = "opacity-100 max-w-[150px]";
    badgeClasses = "opacity-100 scale-100";
    showIndicator = false;
  } else if (forceShowLabel) {
    layoutClasses = "justify-start px-4 py-2.5 gap-3 h-auto";
    labelClasses = "opacity-100 max-w-[150px]";
    badgeClasses = "opacity-100 scale-100";
    showIndicator = false;
  } else {
    // Default responsive behavior
    layoutClasses = "justify-center lg:justify-start px-2 py-2.5 lg:px-4 lg:py-2.5 gap-0 lg:gap-3 h-[38px] lg:h-auto";
    labelClasses = "hidden lg:inline opacity-0 lg:opacity-100 lg:max-w-[150px]";
    badgeClasses = "hidden lg:inline opacity-0 scale-0 lg:opacity-100 lg:scale-100";
    showIndicator = active;
    indicatorClasses += " lg:hidden";
  }

  return (
    <Link
      href={href}
      className={`flex items-center rounded-xl transition-all duration-300 cursor-pointer relative group w-full ${
        active
          ? "bg-[#856DF3]/10 text-brand font-semibold"
          : "text-gray-medium hover:bg-gray-light hover:text-dark"
      } ${layoutClasses}`}
    >
      {/* Icon */}
      <div className={`relative flex-shrink-0 transition-all duration-300 ${
        collapsed === true
          ? "w-[18px] h-[18px]"
          : collapsed === false
            ? "w-5 h-5"
            : "w-[18px] h-[18px] lg:w-5 lg:h-5"
      }`}>
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
        className={`font-sans text-[13px] font-medium tracking-wide leading-none truncate transition-all duration-300 whitespace-nowrap overflow-hidden ${labelClasses}`}
      >
        {label}
      </span>

      {/* Badge */}
      {badge !== undefined && (
        <span
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-[#856DF3] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center leading-normal transition-all duration-300 ${badgeClasses}`}
        >
          {badge}
        </span>
      )}

      {/* Left indicator line for collapsed active state */}
      {showIndicator && (
        <div className={indicatorClasses} />
      )}
    </Link>
  );
}
