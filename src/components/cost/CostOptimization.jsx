import {
  IndianRupee,
  TrendingDown,
  Calculator,
  CheckCircle2,
} from "lucide-react";

const scenarios = [
  {
    title: "Spot Charter",
    cost: 1280000,
    saving: 0,
    description: "Immediate charter at current market rate.",
  },
  {
    title: "Short-Term Contract",
    cost: 1165000,
    saving: 115000,
    description: "15-day contract based on forecasted rate movement.",
  },
  {
    title: "Multiple-Voyage Contract",
    cost: 1098000,
    saving: 182000,
    description: "Optimized multi-voyage contract with lower average freight cost.",
  },
];

function CostOptimization() {
  const bestOption = scenarios[2];

  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
            AI Cost Engine
          </p>

          <h2 className="mt-1 text-xl font-black text-white">
            Cost Optimization
          </h2>

          <p className="mt-1 text-sm font-medium text-slate-400">
            Compare chartering strategies using forecasted market conditions.
          </p>
        </div>

        <div className="hidden rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-orange-400 sm:block">
          <Calculator size={22} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {scenarios.map((scenario) => {
          const isBest = scenario.title === bestOption.title;

          return (
            <div
              key={scenario.title}
              className={`rounded-2xl border p-5 transition-all duration-300 ${
                isBest
                  ? "border-emerald-500/40 bg-[#06241b]/80 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                  : "border-orange-500/15 bg-[#070e1c]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white">{scenario.title}</h3>

                {isBest && (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-400">
                    Recommended
                  </span>
                )}
              </div>

              <p className="mt-5 text-xs font-semibold text-slate-400">
                Estimated total cost
              </p>

              <div className="mt-1 flex items-center gap-1 text-white">
                <IndianRupee size={20} className="text-orange-400" />

                <span className="text-2xl font-black text-white">
                  {(scenario.cost / 100000).toFixed(2)} L
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 font-medium text-slate-300">
                {scenario.description}
              </p>

              {scenario.saving > 0 && (
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-emerald-400">
                  <TrendingDown size={16} />
                  Save ₹{scenario.saving.toLocaleString("en-IN")}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
        <div className="flex items-start gap-3">
          <CheckCircle2
            size={21}
            className="mt-0.5 text-emerald-400 shrink-0"
          />

          <div>
            <p className="font-bold text-white">Recommended Strategy</p>

            <p className="mt-1 text-sm leading-6 font-medium text-slate-300">
              A multiple-voyage contract provides the lowest estimated
              transportation cost, with approximately{" "}
              <span className="font-bold text-emerald-400">
                ₹1.82 lakh
              </span>{" "}
              savings compared with the current spot-charter scenario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostOptimization;