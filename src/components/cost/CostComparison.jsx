import {
  ArrowDown,
  ArrowUp,
  IndianRupee,
} from "lucide-react";

const comparison = [
  {
    route: "Australia → Paradip",
    spot: 1280000,
    shortTerm: 1165000,
    multiVoyage: 1098000,
  },
  {
    route: "Indonesia → Vizag",
    spot: 1420000,
    shortTerm: 1345000,
    multiVoyage: 1265000,
  },
  {
    route: "Mozambique → Haldia",
    spot: 1580000,
    shortTerm: 1495000,
    multiVoyage: 1410000,
  },
];

function CostComparison() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-lg font-black text-white">
          Charter Cost Comparison
        </h2>

        <p className="mt-1 text-sm font-medium text-slate-400">
          Estimated cost across different contracting strategies.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px] text-left">
          <thead>
            <tr className="border-b border-orange-500/20 text-xs font-bold uppercase tracking-wider text-orange-400">
              <th className="px-4 py-4">Route</th>
              <th className="px-4 py-4">Spot</th>
              <th className="px-4 py-4">Short-Term</th>
              <th className="px-4 py-4">Multi-Voyage</th>
              <th className="px-4 py-4">Savings</th>
            </tr>
          </thead>

          <tbody>
            {comparison.map((item) => {
              const savings = item.spot - item.multiVoyage;

              return (
                <tr
                  key={item.route}
                  className="border-b border-orange-500/10 transition-colors duration-200 hover:bg-[#070e1c]/60 last:border-0"
                >
                  <td className="px-4 py-5">
                    <p className="font-bold text-white">{item.route}</p>
                  </td>

                  <td className="px-4 py-5 text-slate-300 font-medium">
                    <Cost value={item.spot} />
                  </td>

                  <td className="px-4 py-5 text-slate-300 font-medium">
                    <Cost value={item.shortTerm} />
                  </td>

                  <td className="px-4 py-5">
                    <div className="font-bold text-emerald-400">
                      <Cost value={item.multiVoyage} />
                    </div>
                  </td>

                  <td className="px-4 py-5">
                    <div className="flex items-center gap-1 text-sm font-bold text-emerald-400">
                      <ArrowDown size={15} />
                      ₹{savings.toLocaleString("en-IN")}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-orange-500/15 bg-[#070e1c] p-4 shadow-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <IndianRupee size={16} className="text-orange-400" />
            <span className="text-xs font-semibold text-slate-400">Average Spot Cost</span>
          </div>

          <p className="mt-2 text-lg font-black text-white">₹14.27 L</p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-400">
            <ArrowDown size={16} />
            <span className="text-xs font-semibold text-emerald-400">Potential Saving</span>
          </div>

          <p className="mt-2 text-lg font-black text-emerald-400">
            ₹1.69 L
          </p>
        </div>
      </div>
    </div>
  );
}

function Cost({ value }) {
  return (
    <span className="text-sm">
      ₹{(value / 100000).toFixed(2)} L
    </span>
  );
}

export default CostComparison;