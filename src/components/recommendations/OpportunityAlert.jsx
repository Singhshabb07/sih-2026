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
    /* Main Surface Container: #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6 flex items-start justify-between">
        <div>
          {/* Badge Label: High contrast #B5BCBE */}
          <div className="flex items-center gap-2 text-sm font-bold text-[#B5BCBE]">
            <BellRing size={18} className="text-[#B5BCBE]" />
            AI Opportunity Alerts
          </div>

          {/* Main Title: Crisp White */}
          <h2 className="mt-1 text-xl font-black text-white">
            Market Opportunities
          </h2>

          {/* Subtitle Description: High legibility #B5BCBE */}
          <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
            Routes where current or forecast rates may create chartering
            opportunities.
          </p>
        </div>

        {/* Top Header Icon Box */}
        <div className="rounded-xl border border-[#4D5054] bg-[#111111] p-3 text-[#B5BCBE] shadow-inner">
          <TrendingDown size={21} />
        </div>
      </div>

      <div className="space-y-3">
        {opportunities.map((opportunity) => {
          const isHigh = opportunity.level === "High";
          const isMedium = opportunity.level === "Medium";

          return (
            /* Opportunity Row Item: Jet Black (#111111) */
            <div
              key={opportunity.route}
              className="group flex flex-col gap-4 rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-4 shadow-md transition duration-300 hover:border-[#B5BCBE] lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex items-start gap-3">
                {/* Level Icon Accent Box */}
                <div className="rounded-xl border border-[#4D5054] bg-[#2A2C30] p-2 text-[#B5BCBE]">
                  {isHigh ? (
                    <TrendingDown size={18} />
                  ) : (
                    <AlertTriangle size={18} />
                  )}
                </div>

                <div>
                  {/* Route Title: Crisp White */}
                  <p className="font-bold text-white">{opportunity.route}</p>

                  {/* Opportunity Type Tag: High-contrast #B5BCBE */}
                  <p className="mt-1 text-xs font-semibold text-[#B5BCBE]">
                    {opportunity.type}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 lg:justify-end">
                <div>
                  {/* Label: Light Gray #B5BCBE */}
                  <p className="text-xs font-semibold text-[#B5BCBE]">Forecast Rate</p>

                  {/* Numerical Value: Pure White */}
                  <p className="mt-1 text-sm font-black text-white">
                    {opportunity.rate}
                  </p>
                </div>

                <div>
                  {/* Label: Light Gray #B5BCBE */}
                  <p className="text-xs font-semibold text-[#B5BCBE]">Change</p>

                  {/* Percentage Change Metric: Pure White */}
                  <p className="mt-1 text-sm font-black text-white">
                    {opportunity.change}
                  </p>
                </div>

                {/* Navigation Button */}
                <button className="hidden rounded-xl border border-[#4D5054] bg-[#2A2C30] p-2.5 text-[#B5BCBE] transition duration-200 hover:border-[#B5BCBE] hover:text-white lg:block">
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