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
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
            AI Cost Engine
          </p>

          <h2 className="mt-1 text-xl font-semibold">
            Cost Optimization
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Compare chartering strategies using forecasted market conditions.
          </p>
        </div>

        <div className="hidden rounded-lg bg-blue-500/10 p-3 text-blue-400 sm:block">
          <Calculator size={22} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {scenarios.map((scenario) => {
          const isBest = scenario.title === bestOption.title;

          return (
            <div
              key={scenario.title}
              className={`rounded-xl border p-5 ${
                isBest
                  ? "border-blue-500/40 bg-blue-500/5"
                  : "border-slate-800 bg-slate-950/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{scenario.title}</h3>

                {isBest && (
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs text-blue-400">
                    Recommended
                  </span>
                )}
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Estimated total cost
              </p>

              <div className="mt-1 flex items-center gap-1">
                <IndianRupee size={20} />

                <span className="text-2xl font-bold">
                  {(scenario.cost / 100000).toFixed(2)} L
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                {scenario.description}
              </p>

              {scenario.saving > 0 && (
                <div className="mt-5 flex items-center gap-2 text-sm text-emerald-400">
                  <TrendingDown size={16} />
                  Save ₹{scenario.saving.toLocaleString("en-IN")}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <div className="flex items-start gap-3">
          <CheckCircle2
            size={21}
            className="mt-0.5 text-emerald-400"
          />

          <div>
            <p className="font-medium">Recommended Strategy</p>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              A multiple-voyage contract provides the lowest estimated
              transportation cost, with approximately{" "}
              <span className="font-medium text-emerald-400">
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