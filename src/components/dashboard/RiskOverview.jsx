import { motion } from "framer-motion";
import {
  AlertTriangle,
  Anchor,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const risks = [
  {
    name: "Freight Volatility",
    score: 62,
    status: "Moderate",
    icon: AlertTriangle,
  },
  {
    name: "Port Congestion",
    score: 28,
    status: "Low",
    icon: Anchor,
  },
  {
    name: "Expected Vessel Delay",
    score: 54,
    status: "Moderate",
    icon: Clock3,
  },
];

function RiskOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative overflow-hidden rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl"
    >
      {/* Background glow using orange */}
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />

      <div className="relative mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-white">
              Risk Overview
            </h2>

            <span className="rounded-full border border-orange-500/30 bg-orange-500/15 px-2.5 py-1 text-[10px] font-bold text-orange-300">
              3 INDICATORS
            </span>
          </div>

          <p className="mt-1 text-sm font-medium text-slate-400">
            Current operational and market risk indicators.
          </p>
        </div>

        {/* Overall Status Widget */}
        <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-2.5">
          <div className="rounded-lg bg-emerald-500 p-1.5 text-slate-950 font-bold">
            <ShieldCheck size={16} />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-emerald-400/80">
              Overall status
            </p>

            <p className="text-sm font-black text-emerald-400">
              Controlled
            </p>
          </div>
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-3">
        {risks.map((risk, index) => {
          const RiskIcon = risk.icon;
          const isHigh = risk.score >= 70;
          const isModerate = risk.score >= 35 && risk.score < 70;

          const colorClass = isHigh
            ? "text-rose-400"
            : isModerate
              ? "text-amber-400"
              : "text-emerald-400";

          const gradientClass = isHigh
            ? "from-rose-500 to-red-600"
            : isModerate
              ? "from-amber-400 to-orange-500"
              : "from-emerald-400 to-amber-500";

          return (
            <motion.div
              key={risk.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.5 + index * 0.1,
              }}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="group relative overflow-hidden rounded-2xl border border-orange-500/15 bg-[#081222]/90 p-5 shadow-md transition-all duration-300 hover:border-orange-400/40 hover:bg-[#0b172a]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl transition duration-500 group-hover:scale-125" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Icon Box */}
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-2.5 text-orange-400 shadow-inner">
                    <RiskIcon size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      {risk.name}
                    </p>

                    <p className={`mt-1 text-xs font-semibold ${colorClass}`}>
                      {risk.status} risk
                    </p>
                  </div>
                </div>

                <span className="text-sm font-black text-white">
                  {risk.score}
                  <span className="text-xs font-medium text-slate-500">
                    /100
                  </span>
                </span>
              </div>

              {/* Progress Track */}
              <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${risk.score}%` }}
                  transition={{
                    duration: 0.9,
                    delay: 0.65 + index * 0.1,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${gradientClass}`}
                />
              </div>

              <div className="relative mt-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Risk exposure
                </span>

                <span className={`text-[10px] font-black ${colorClass}`}>
                  {risk.score < 35
                    ? "LOW"
                    : risk.score < 70
                      ? "MODERATE"
                      : "HIGH"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default RiskOverview;