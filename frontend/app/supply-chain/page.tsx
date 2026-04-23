import { SUPPLY_CHAIN_DATA } from "@/lib/constants";
import { isStockCritical } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Truck } from "lucide-react";

export default function SupplyChainPage() {
  const data = SUPPLY_CHAIN_DATA;
  const totalStock = parseInt(data.bufferStock.total.replace(/,/g, ''));
  const criticalStatus = isStockCritical(totalStock);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3 space-y-6">
        <Card className="p-5 bg-slate-900 border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Supply Chain</h2>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="text-sm">At risk for global disruptions</span>
          </div>
        </Card>

        <Card className="p-5 bg-slate-900 border-slate-800">
          <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase">NFA BUFFER STOCK</h3>
          <div className="mb-6">
            <span className="text-3xl font-bold block" data-testid="stock-display">
              {data.bufferStock.total} <span className="text-sm font-normal text-slate-500">MT</span>
            </span>
            
            {criticalStatus ? (
              <div data-testid="critical-alert" className="text-[10px] text-red-500 font-bold bg-red-500/10 px-2 py-1 rounded inline-block mt-2">
                ● BELOW 60-DAY THRESHOLD
              </div>
            ) : (
              <div className="text-[10px] text-green-500 font-bold bg-green-500/10 px-2 py-1 rounded inline-block mt-2">
                ● STOCK LEVELS STABLE
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            {data.bufferStock.regions.map((reg) => (
              <div key={reg.name} className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                <span className="text-slate-400">{reg.name}</span>
                <span className="font-mono">{reg.amount} MT <span className="text-blue-400 ml-1">({reg.pct}%)</span></span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="col-span-9 space-y-6">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Post-Harvest Loss Rates</h2>
        <Card className="p-6 bg-slate-900 border-slate-800 grid grid-cols-2 gap-x-12 gap-y-8">
          {data.lossRates.map((loss) => (
            <div key={loss.label}>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-slate-400">{loss.label}</span>
                <span className="font-bold text-red-500">{loss.value}% loss</span>
              </div>
              <Progress value={loss.value} className="h-1.5 bg-slate-800 [&>div]:bg-red-500" />
            </div>
          ))}
        </Card>

        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-8">Top Producing Regions</h2>
        <div className="grid grid-cols-2 gap-4">
          {data.topProducers.map((item, i) => (
            <Card key={i} className="p-4 bg-slate-900 border-slate-800 flex">
              <div>
                <span className="text-[10px] font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded mb-1 inline-block">{item.rank}</span>
                <p className="text-sm font-medium">{item.region}</p>
                <p className="text-2xl font-bold">{item.amount} <span className="text-xs font-normal text-slate-500">MT</span></p>
              </div>
              <div>
                <div className="text-cyan-400 text-xs font-bold">{item.pct}</div>
                <div className="text-[10px] text-slate-500">of national total</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}