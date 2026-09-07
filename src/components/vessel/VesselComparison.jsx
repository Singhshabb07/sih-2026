import {
  Ship,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const vessels = [
  {
    type: "Handysize",
    capacity: "35,000 DWT",
    rate: "$26.4",
    draft: "10.5 m",
    portFit: "Excellent",
    score: 76,
  },
  {
    type: "Supramax",
    capacity: "50,000 DWT",
    rate: "$22.8",
    draft: "12.5 m",
    portFit: "Excellent",
    score: 92,
  },
  {
    type: "Panamax",
    capacity: "75,000 DWT",
    rate: "$21.9",
    draft: "13.8 m",
    portFit: "Moderate",
    score: 84,
  },
  {
    type: "Capesize",
    capacity: "150,000 DWT",
    rate: "$19.7",
    draft: "17.0 m",
    portFit: "Restricted",
    score: 61,
  },
];

function VesselComparison() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Vessel Comparison</h2>

        <p className="mt-1 text-sm text-slate-500">
          Compare vessel classes for the selected voyage.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-500">
              <th className="px-4 py-4">Vessel</th>
              <th className="px-4 py-4">Capacity</th>
              <th className="px-4 py-4">Rate / MT</th>
              <th className="px-4 py-4">Draft</th>
              <th className="px-4 py-4">Port Fit</th>
              <th className="px-4 py-4">Score</th>
            </tr>
          </thead>

          <tbody>
            {vessels.map((vessel) => {
              const restricted = vessel.portFit === "Restricted";
              const moderate = vessel.portFit === "Moderate";

              return (
                <tr
                  key={vessel.type}
                  className="border-b border-slate-800/70 last:border-0"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-slate-800 p-2 text-slate-300">
                        <Ship size={17} />
                      </div>

                      <span className="font-medium">
                        {vessel.type}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-300">
                    {vessel.capacity}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium">
                    {vessel.rate}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-300">
                    {vessel.draft}
                  </td>

                  <td className="px-4 py-4">
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        restricted
                          ? "text-red-400"
                          : moderate
                          ? "text-yellow-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {restricted ? (
                        <AlertTriangle size={16} />
                      ) : (
                        <CheckCircle2 size={16} />
                      )}

                      {vessel.portFit}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                      {vessel.score}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 rounded-lg border border-slate-800 bg-slate-950/50 p-4">
        <p className="text-xs leading-5 text-slate-500">
          The vessel score combines estimated freight economics,
          cargo capacity and port compatibility. A higher score indicates
          a better overall fit for the selected voyage.
        </p>
      </div>
    </div>
  );
}

export default VesselComparison;