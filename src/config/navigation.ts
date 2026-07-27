export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
  badge?: number;
}

export const mainNavigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "/icons/Dashboard.png",
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: "/icons/Analytics.png",
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: "/icons/Calender.png",
  },
  {
    label: "Shipments",
    href: "/shipments",
    icon: "/icons/Shipments.png",
  },
  {
    label: "Tracking",
    href: "/tracking",
    icon: "/icons/Traking.png",
  },
  {
    label: "Warehouse",
    href: "/warehouse",
    icon: "/icons/Warehouse.png",
  },
  {
    label: "Fleets",
    href: "/fleets",
    icon: "/icons/Fleets.png",
  },
  {
    label: "Drivers",
    href: "/drivers",
    icon: "/icons/Drivers.png",
  },
  {
    label: "Invoices & Billing",
    href: "/invoices",
    icon: "/icons/Invoices & Billing.png",
  },
];

export const secondaryNavigation: NavigationItem[] = [
  {
    label: "Message",
    href: "/message",
    icon: "/icons/Message.png",
    badge: 19,
  },
  {
    label: "Notification",
    href: "/notification",
    icon: "/icons/Notification.png",
    badge: 5,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: "/icons/Settings.png",
  },
];
