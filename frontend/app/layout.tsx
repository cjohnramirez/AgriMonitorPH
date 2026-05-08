import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgriMonitorPH",
  description: "National agricultural pulse tracking",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#0b0f19] text-slate-100 p-4`}>
        <div className="max-w-350 mx-auto">
          <Toaster />
          <Navigation />
          <main className="px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}