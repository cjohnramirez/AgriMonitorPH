"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LineChart } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Markets", path: "/" },
    { name: "Supply Chain", path: "/supply-chain" },
    { name: "Outlook", path: "/outlook" },
  ];

  return (
    <header className="flex items-center justify-between py-6 px-8 mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 border border-slate-700 rounded-lg">
          <LineChart className="w-6 h-6 text-slate-300" />
        </div>
        <div>
          <h1 className="text-xl font-bold leading-tight">AgriMonitorPH</h1>
          <p className="text-xs text-slate-400">Powered by Agriova</p>
        </div>
      </div>

      <nav className="flex items-center bg-slate-900/50 rounded-full p-1 border border-slate-800">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                isActive
                  ? "bg-slate-800 text-white font-medium"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="w-37.5"></div>
    </header>
  );
}