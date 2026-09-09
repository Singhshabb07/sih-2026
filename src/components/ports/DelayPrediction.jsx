import {
  Clock3,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const delayData = [
  {
    port: "Paradip",
    delay: "8 hrs",
    probability: 18,
    level: "Low",
  },
  {
    port: "Vizag",
    delay: "16 hrs",
    probability: 34,
    level: "Moderate",
  },
  {
    port: "Dhamra",
    delay: "27 hrs",
    probability: 61,
    level: "High",
  },
];

function DelayPrediction() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
          Predictive Analysis
        </p>

        <h2 className="mt-1 text-xl font-black text-white">
          Port Delay Prediction
        </h2>

        <p className="mt-1 text-sm font-medium text-slate-400">
          Estimated vessel waiting time based on congestion and infrastructure.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {delayData.map((item) => {
          const high = item.level === "High";
          const moderate = item.level === "Moderate";

          const levelColor = high
            ? "text-rose-400"
            : moderate
              ? "text-amber-400"
              : "text-emerald-400";

          const barGradient = high
            ? "from-rose-500 to-red-600"
            : moderate
              ? "from-amber-400 to-orange-500"
              : "from-emerald-400 to-amber-500";

          return (
            <div
              key={item.port}
              className="group relative overflow-hidden rounded-2xl border border-orange-500/15 bg-[#070e1c] p-5 shadow-md transition-all duration-300 hover:border-orange-400/40 hover:bg-[#091428]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white">{item.port}</h3>

                {high || moderate ? (
                  <AlertTriangle
                    size={18}
                    className={levelColor}
                  />
                ) : (
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />
                )}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-orange-400">
                  <Clock3 size={21} />
                </div>

                <div>
                  <p className="text-2xl font-black text-white">
                    {item.delay}
                  </p>

                  <p className="text-xs font-medium text-slate-400">
                    Expected delay
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-slate-300">
                    Delay probability
                  </span>

                  <span className="font-bold text-white">
                    {item.probability}%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${barGradient}`}
                    style={{ width: `${item.probability}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs">
                <TrendingUp size={14} className={levelColor} />

                <span className={`font-black ${levelColor}`}>
                  {item.level.toUpperCase()} RISK
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operational Alert Box */}
      <div className="mt-5 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4">
        <p className="text-sm font-bold text-rose-300">
          Operational Alert
        </p>

        <p className="mt-1 text-xs leading-5 font-medium text-slate-300">
          Dhamra currently shows the highest predicted delay risk.
          Consider additional buffer time when evaluating the charter.
        </p>
      </div>
    </div>
  );
}

export default DelayPrediction;