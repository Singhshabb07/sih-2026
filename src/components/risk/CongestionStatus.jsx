import {
  Anchor,
  TrendingUp,
  Clock3,
} from "lucide-react";

const ports = [
  {
    port: "Paradip",
    congestion: 28,
    waiting: "8 hrs",
    status: "Low",
  },
  {
    port: "Vizag",
    congestion: 46,
    waiting: "16 hrs",
    status: "Moderate",
  },
  {
    port: "Dhamra",
    congestion: 68,
    waiting: "27 hrs",
    status: "High",
  },
  {
    port: "Haldia",
    congestion: 39,
    waiting: "12 hrs",
    status: "Moderate",
  },
];

function CongestionStatus() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-lg font-black text-white">
          Port Congestion Status
        </h2>

        <p className="mt-1 text-sm font-medium text-slate-400">
          Current congestion indicators for major East Coast ports.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {ports.map((port) => {
          const high = port.status === "High";
          const moderate = port.status === "Moderate";

          const statusColor = high
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
              key={port.port}
              className="rounded-2xl border border-orange-500/15 bg-[#070e1c] p-5 shadow-md transition-all duration-300 hover:border-orange-400/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Anchor size={17} className="text-orange-400" />
                  <span className="font-bold text-white">{port.port}</span>
                </div>

                <span
                  className={`text-xs font-bold ${statusColor}`}
                >
                  {port.status}
                </span>
              </div>

              <div className="mt-5">
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    Congestion
                  </span>

                  <span className="text-sm font-black text-white">
                    {port.congestion}%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${barGradient}`}
                    style={{ width: `${port.congestion}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock3 size={14} className="text-orange-400" />
                  Expected waiting
                </div>

                <span className="font-bold text-white">
                  {port.waiting}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <TrendingUp size={14} className={statusColor} />
                Congestion index
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CongestionStatus;