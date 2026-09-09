import {
  BellRing,
  TrendingDown,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const opportunities = [
  {
    route: "Australia → Paradip",
    rate: "$22.6 / MT",
    change: "-8.9%",
    type: "Strong Buying Opportunity",
    level: "High",
  },
  {
    route: "Mozambique → Haldia",
    rate: "$28.1 / MT",
    change: "-2.1%",
    type: "Potential Opportunity",
    level: "Medium",
  },
  {
    route: "Indonesia → Vizag",
    rate: "$24.8 / MT",
    change: "+3.2%",
    type: "Wait for Better Rate",
    level: "Low",
  },
];

function OpportunityAlert() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-orange-400">
            <BellRing size={18} className="text-orange-400" />
            AI Opportunity Alerts
          </div>

          <h2 className="mt-1 text-xl font-black text-white">
            Market Opportunities
          </h2>

          <p className="mt-1 text-sm font-medium text-slate-400">
            Routes where current or forecast rates may create chartering
            opportunities.
          </p>
        </div>

        <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-orange-400 shadow-inner">
          <TrendingDown size={21} />
        </div>
      </div>

      <div className="space-y-3">
        {opportunities.map((opportunity) => {
          const isHigh = opportunity.level === "High";
          const isMedium = opportunity.level === "Medium";

          const tagColor = isHigh
            ? "text-emerald-400"
            : isMedium
              ? "text-amber-400"
              : "text-amber-400";

          const iconColor = isHigh
            ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
            : isMedium
              ? "text-orange-400 border-orange-500/30 bg-orange-500/10"
              : "text-amber-400 border-amber-500/30 bg-amber-500/10";

          return (
            <div
              key={opportunity.route}
              className="group flex flex-col gap-4 rounded-2xl border border-orange-500/15 bg-[#070e1c] p-4 shadow-md transition-all duration-300 hover:border-orange-400/40 hover:bg-[#091428] lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className={`rounded-xl border p-2 ${iconColor}`}>
                  {isHigh ? (
                    <TrendingDown size={18} />
                  ) : (
                    <AlertTriangle size={18} />
                  )}
                </div>

                <div>
                  <p className="font-bold text-white">{opportunity.route}</p>

                  <p className={`mt-1 text-xs font-semibold ${tagColor}`}>
                    {opportunity.type}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 lg:justify-end">
                <div>
                  <p className="text-xs font-semibold text-slate-400">Forecast Rate</p>

                  <p className="mt-1 text-sm font-black text-white">
                    {opportunity.rate}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400">Change</p>

                  <p className={`mt-1 text-sm font-black ${isHigh || isMedium ? "text-emerald-400" : "text-rose-400"}`}>
                    {opportunity.change}
                  </p>
                </div>

                <button className="hidden rounded-xl border border-orange-500/20 bg-orange-500/10 p-2.5 text-orange-400 transition-all duration-200 hover:border-orange-400 hover:text-white lg:block">
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OpportunityAlert;