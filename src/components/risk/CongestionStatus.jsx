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
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Port Congestion Status
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Current congestion indicators for major East Coast ports.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {ports.map((port) => {
          const high = port.status === "High";
          const moderate = port.status === "Moderate";

          return (
            <div
              key={port.port}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Anchor size={17} className="text-blue-400" />
                  <span className="font-medium">{port.port}</span>
                </div>

                <span
                  className={`text-xs font-medium ${
                    high
                      ? "text-red-400"
                      : moderate
                      ? "text-yellow-400"
                      : "text-emerald-400"
                  }`}
                >
                  {port.status}
                </span>
              </div>

              <div className="mt-5">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-500">
                    Congestion
                  </span>

                  <span className="text-sm font-semibold">
                    {port.congestion}%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${port.congestion}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock3 size={14} />
                  Expected waiting
                </div>

                <span className="font-medium text-slate-300">
                  {port.waiting}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <TrendingUp size={14} />
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