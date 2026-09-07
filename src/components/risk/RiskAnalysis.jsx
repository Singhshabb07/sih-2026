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
    /* Surface Container: #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6 flex items-start justify-between">
        <div>
          {/* Badge Label: High contrast #B5BCBE */}
          <p className="text-xs font-bold uppercase tracking-wider text-[#B5BCBE]">
            AI Risk Engine
          </p>

          {/* Main Title: Crisp White */}
          <h2 className="mt-1 text-xl font-black text-white">
            Overall Risk Analysis
          </h2>

          {/* Subtitle Description: High legibility #B5BCBE */}
          <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
            Combined assessment of market and operational risks.
          </p>
        </div>

        {/* Top Header Icon Box */}
        <div className="rounded-xl border border-[#4D5054] bg-[#111111] p-3 text-[#B5BCBE] shadow-inner">
          <ShieldAlert size={23} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        {/* Score Card: Jet Black (#111111) */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-6 shadow-md">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#B5BCBE] bg-[#2A2C30] shadow-inner">
            <div className="text-center">
              {/* Main Score Value: Pure White */}
              <p className="text-4xl font-black text-white">{overallRisk}</p>
              <p className="text-xs font-bold text-[#B5BCBE]">/ 100</p>
            </div>
          </div>

          {/* Overall Status Text: Light Gray #B5BCBE */}
          <p className="mt-4 font-bold text-[#B5BCBE]">
            Moderate Risk
          </p>
        </div>

        <div className="space-y-4">
          {riskFactors.map((risk) => {
            const Icon = risk.icon;

            return (
              /* Risk Factor Row Item: Jet Black (#111111) */
              <div
                key={risk.name}
                className="group rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-4 shadow-md transition duration-300 hover:border-[#B5BCBE]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Icon Box */}
                    <div className="rounded-xl border border-[#4D5054] bg-[#2A2C30] p-2 text-[#B5BCBE]">
                      <Icon size={17} />
                    </div>

                    <div>
                      {/* Factor Name: Crisp White */}
                      <p className="text-sm font-bold text-white">{risk.name}</p>
                      
                      {/* Exposure Status: Light Gray #B5BCBE */}
                      <p className="mt-1 text-xs font-medium text-[#B5BCBE]">
                        {risk.status} exposure
                      </p>
                    </div>
                  </div>

                  {/* Score Fraction: Pure White */}
                  <span className="text-sm font-black text-white">
                    {risk.score}/100
                  </span>
                </div>

                {/* Progress Bar Track: #2A2C30 */}
                <div className="mt-4 h-2 rounded-full bg-[#2A2C30]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#878C8F] to-[#B5BCBE]"
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