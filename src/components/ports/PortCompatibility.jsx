import {
  Anchor,
  CheckCircle2,
  AlertTriangle,
  Ship,
} from "lucide-react";

const ports = [
  {
    port: "Paradip",
    vessel: "Supramax",
    compatibility: 94,
    status: "Excellent",
    reason: "Draft and cargo handling requirements are well within limits.",
  },
  {
    port: "Vizag",
    vessel: "Panamax",
    compatibility: 88,
    status: "Good",
    reason: "Compatible with moderate draft restrictions.",
  },
  {
    port: "Dhamra",
    vessel: "Capesize",
    compatibility: 63,
    status: "Restricted",
    reason: "Higher draft creates additional operational constraints.",
  },
];

function PortCompatibility() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
          Vessel × Port Analysis
        </p>

        <h2 className="mt-1 text-xl font-black text-white">
          Port Compatibility
        </h2>

        <p className="mt-1 text-sm font-medium text-slate-400">
          Check whether the selected vessel is suitable for destination ports.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {ports.map((port) => {
          const restricted = port.status === "Restricted";
          const statusColor = restricted
            ? "text-rose-400"
            : port.status === "Good"
              ? "text-amber-400"
              : "text-emerald-400";

          const barGradient = restricted
            ? "from-rose-500 to-red-600"
            : "from-amber-400 to-orange-500";

          return (
            <div
              key={port.port}
              className="group relative overflow-hidden rounded-2xl border border-orange-500/15 bg-[#070e1c] p-5 shadow-md transition-all duration-300 hover:border-orange-400/40 hover:bg-[#091428]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-2.5 text-orange-400">
                    <Anchor size={19} />
                  </div>

                  <div>
                    <p className="font-bold text-white">{port.port}</p>
                    
                    <p className="text-xs font-medium text-slate-400">
                      {port.vessel}
                    </p>
                  </div>
                </div>

                {restricted ? (
                  <AlertTriangle
                    size={18}
                    className="text-rose-400"
                  />
                ) : (
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />
                )}
              </div>

              <div className="mt-6">
                <div className="flex items-end justify-between">
                  <span className="text-sm font-medium text-slate-300">
                    Compatibility
                  </span>

                  <span className="text-2xl font-black text-white">
                    {port.compatibility}%
                  </span>
                </div>

                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${barGradient}`}
                    style={{ width: `${port.compatibility}%` }}
                  />
                </div>
              </div>

              <p className={`mt-4 text-xs font-black uppercase ${statusColor}`}>
                {port.status}
              </p>

              <p className="mt-2 text-xs leading-5 font-medium text-slate-400">
                {port.reason}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortCompatibility;