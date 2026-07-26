import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShipNow - Dashboard",
  description: "ShipNow Logistics Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
