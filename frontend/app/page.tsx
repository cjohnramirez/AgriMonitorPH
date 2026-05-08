"use client";

import { useEffect } from "react";
import { logEvent } from "@/lib/logger";

import { MARKET_DATA } from "@/lib/constants";
import { formatPHP, calculatePctChange } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Store, Info, TrendingUp, TrendingDown } from "lucide-react";

export default function MarketsPage() {
  useEffect(() => {
    // Log that the landing page was successfully rendered
    logEvent('PAGE_VIEW', { page: 'Home', status: 'success' });
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3 space-y-6">
        <Card className="p-5 bg-slate-900/50 border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <Store className="w-6 h-6 text-slate-300" />
            <h2 className="text-xl font-semibold">Markets</h2>
          </div>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            National agricultural pulse tracking real-time commodity prices
            against global energy benchmarks.
          </p>
          <div className="flex items-center gap-2 bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">
              Status
            </span>
            <span className="text-sm ml-auto text-slate-100">
              {MARKET_DATA.status}
            </span>
          </div>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
            Commodities
          </h3>
          {MARKET_DATA.commodities.map((item, i) => {
            const rawPreviousPrice =
              item.trend === "up" ? item.price * 0.95 : item.price;

            return (
              <Card key={i} className="p-4 bg-slate-900 border-slate-800">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg shrink-0 overflow-hidden" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${item.trend === "up" ? "bg-red-500" : "bg-blue-400"}`}
                      />
                      <span className="text-sm font-medium text-slate-200">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1 text-slate-100">
                      {/* Formatted cleanly by our utility */}
                      <span className="text-xl font-bold">
                        {formatPHP(item.price)}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-bold ${item.trend === "up" ? "text-red-500" : "text-slate-400"}`}
                    >
                      {calculatePctChange(item.price, rawPreviousPrice)} vs last
                      week
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="col-span-9 space-y-8">
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
              Global Oil and Currency
            </h2>
            <Info className="w-4 h-4 text-slate-600" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {MARKET_DATA.exchanges.map((ex, i) => (
              <Card key={i} className="p-5 bg-slate-900 border-slate-800">
                <div className="flex justify-between text-[10px] text-slate-500 mb-4 uppercase font-bold">
                  <span>{ex.title}</span>
                  <span>{ex.code}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  {ex.unit === "USD" ? (
                    <TrendingUp className="w-5 h-5 text-red-500" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-green-500" />
                  )}

                  {/* Format the number to always show 2 decimal places and commas */}
                  <span className="text-3xl font-bold tracking-tight">
                    {ex.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 3,
                    })}
                  </span>

                  <span className="text-sm text-slate-500 font-medium">
                    {ex.unit}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4">{ex.change}</p>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex gap-2 text-xs text-slate-400">
                  <Info className="w-4 h-4 shrink-0 text-slate-600" />
                  <p>{ex.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
