import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const alerts = [
  {
    level: "High",
    title: "Dhamra congestion increasing",
    description:
      "Port congestion may increase vessel waiting time by approximately 27 hours.",
  },
  {
    level: "Medium",
    title: "Freight volatility detected",
    description:
      "Recent market movement indicates moderate uncertainty in freight rates.",
  },
  {
    level: "Low",
    title: "Paradip operating normally",
    description:
      "Current congestion and expected waiting time remain within acceptable limits.",
  },
];

function RiskAlert() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-lg font-black text-white">
          Risk Alerts & Early Warnings
        </h2>

        <p className="mt-1 text-sm font-medium text-slate-400">
          Important signals requiring attention before chartering decisions.
        </p>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const high = alert.level === "High";
          const medium = alert.level === "Medium";

          const levelBadgeClass = high
            ? "border-rose-500/30 bg-rose-500/15 text-rose-300"
            : medium
              ? "border-amber-500/30 bg-amber-500/15 text-amber-300"
              : "border-emerald-500/30 bg-emerald-500/15 text-emerald-300";

          const iconColor = high
            ? "text-rose-400"
            : medium
              ? "text-amber-400"
              : "text-emerald-400";

          return (
            <div
              key={alert.title}
              className="group flex flex-col gap-4 rounded-2xl border border-orange-500/15 bg-[#070e1c] p-5 shadow-md transition-all duration-300 hover:border-orange-400/40 hover:bg-[#091428] md:flex-row md:items-center"
            >
              <div className={`rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 ${iconColor}`}>
                {high || medium ? (
                  <AlertTriangle size={20} />
                ) : (
                  <CheckCircle2 size={20} />
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-sm font-bold text-white">
                    {alert.title}
                  </h3>

                  <span className={`rounded-full border px-3 py-0.5 text-xs font-bold uppercase tracking-wider ${levelBadgeClass}`}>
                    {alert.level}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 font-medium text-slate-300">
                  {alert.description}
                </p>
              </div>

              <button className="flex items-center gap-2 text-xs font-bold text-orange-400 transition duration-200 hover:text-orange-300">
                Details
                <ArrowRight size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RiskAlert;