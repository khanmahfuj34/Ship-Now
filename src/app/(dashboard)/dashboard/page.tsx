"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("shipnow_user_email");
      if (!storedEmail) {
        // Redirect to login if session is missing (mock route guard)
        router.push("/auth/login");
      } else {
        setEmail(storedEmail);
      }
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("shipnow_user_email");
    }
    router.push("/auth/login");
  };

  if (!email) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-500 font-sans">
        Checking session...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-gray-100">
        <div className="w-16 h-16 bg-[#856DF3]/10 text-[#856DF3] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
          ✓
        </div>
        <h1 className="text-2xl font-bold text-[#333333] font-heading mb-2">
          Dashboard Placeholder
        </h1>
        <p className="text-sm text-gray-500 font-sans mb-6">
          Successfully authenticated as <strong className="text-gray-700">{email}</strong>
        </p>
        <button
          onClick={handleLogout}
          className="w-full py-2.5 px-4 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-200 text-sm cursor-pointer"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
