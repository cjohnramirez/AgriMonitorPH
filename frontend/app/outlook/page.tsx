import { OUTLOOK_DATA } from "@/lib/constants";
import { getRiskColor } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";

export default function OutlookPage() {
  const { climate, forecasts, indicators } = OUTLOOK_DATA;
  const riskColorClass = getRiskColor(climate.enso);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <Card className="p-5 bg-slate-900 border-slate-800 h-fit">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Outlook</h2>
          </div>
          <p className="text-sm text-slate-400">Long-term food security monitoring and climate adaptation.</p>
        </Card>
      </div>

      <div className="col-span-9 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <Card className={`p-5 bg-slate-900 border-slate-800 border-l-4 ${riskColorClass.replace('bg-', 'border-l-')}`}>
            <div className="flex justify-between items-start mb-2">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">ENSO Status</span>
               <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${riskColorClass}`} />
            </div>
            <h3 className="text-xl font-bold">{climate.enso}</h3>
            <p className="text-xs text-slate-400 mt-1">{climate.ensoStatus}</p>
          </Card>

          <Card className="p-5 bg-slate-900 border-slate-800 col-span-2 flex justify-between">
            <div>
               <span className="text-[10px] font-bold text-slate-500 uppercase mb-2 block">Current Weather</span>
               <p className="text-sm text-slate-300">{climate.weather.city}</p>
               <h3 className="text-3xl font-bold mt-1">{climate.weather.temp}</h3>
            </div>
            <div className="text-right text-xs text-slate-500 space-y-1">
              <p>Precipitation: {climate.weather.precip}</p>
              <p>Humidity: {climate.weather.humidity}</p>
              <p>Wind: {climate.weather.wind}</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Production Forecast</h2>
            <div className="grid gap-3">
              {forecasts.map((f, i) => (
                <Card key={i} className="p-4 bg-slate-900 border-slate-800">
                  <span className="text-xs text-slate-400">{f.label}</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold">{f.value}</span>
                    <span className={`text-[10px] ${f.trend === 'down' ? 'text-red-500' : 'text-slate-500'}`}>{f.change}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Security Indicators</h2>
            <div className="grid gap-3">
              {indicators.map((ind, i) => (
                <Card key={i} className="p-4 bg-slate-900 border-slate-800">
                  <span className="text-xs text-slate-400">{ind.label}</span>
                  <div className="text-2xl font-bold mt-1">{ind.value}</div>
                  <span className="text-[10px] text-slate-500">{ind.sub}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}