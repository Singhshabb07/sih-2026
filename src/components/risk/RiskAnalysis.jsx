import {
  ShieldAlert,
  TrendingUp,
  Anchor,
  Activity,
} from "lucide-react";

const riskFactors = [
  {
    name: "Freight Volatility",
    score: 62,
    status: "Moderate",
    icon: TrendingUp,
  },
  {
    name: "Port Congestion",
    score: 48,
    status: "Moderate",
    icon: Anchor,
  },
  {
    name: "Market Uncertainty",
    score: 55,
    status: "Moderate",
    icon: Activity,
  },
];

function RiskAnalysis() {
  const overallRisk = 58;

  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
            AI Risk Engine
          </p>

          <h2 className="mt-1 text-xl font-black text-white">
            Overall Risk Analysis
          </h2>

          <p className="mt-1 text-sm font-medium text-slate-400">
            Combined assessment of market and operational risks.
          </p>
        </div>

        <div className="rounded-xl border border-amber-500/30 bg-amber-500/15 p-3 text-amber-400 shadow-inner">
          <ShieldAlert size={23} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-orange-500/15 bg-[#070e1c] p-6 shadow-md">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-amber-400 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <div className="text-center">
              <p className="text-4xl font-black text-white">{overallRisk}</p>
              <p className="text-xs font-bold text-amber-400">/ 100</p>
            </div>
          </div>

          <p className="mt-4 font-bold text-amber-400">
            Moderate Risk
          </p>
        </div>

        <div className="space-y-4">
          {riskFactors.map((risk) => {
            const Icon = risk.icon;

            return (
              <div
                key={risk.name}
                className="group rounded-2xl border border-orange-500/15 bg-[#070e1c] p-4 shadow-md transition-all duration-300 hover:border-orange-400/40 hover:bg-[#091428]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-2 text-orange-400">
                      <Icon size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">{risk.name}</p>
                      
                      <p className="mt-1 text-xs font-semibold text-amber-400">
                        {risk.status} exposure
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-black text-white">
                    {risk.score}/100
                  </span>
                </div>

                <div className="mt-4 h-2 rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                    style={{ width: `${risk.score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RiskAnalysis;