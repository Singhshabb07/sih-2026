
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Ship,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

const kpis = [
  {
    title: "Current Freight Rate",
    value: "$24.8 / MT",
    change: "+4.2%",
    label: "Market increased",
    positive: false,
    icon: TrendingUp,
    gradient: "from-amber-500 via-orange-500 to-orange-600",
    badgeBg: "bg-rose-500/15 border-rose-500/30 text-rose-300",
  },
  {
    title: "Forecast Rate",
    value: "$22.6 / MT",
    change: "-8.9%",
    label: "Expected decrease",
    positive: true,
    icon: TrendingDown,
    gradient: "from-amber-400 via-orange-400 to-amber-500",
    badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
  },
  {
    title: "Recommended Vessel",
    value: "Supramax",
    change: "92%",
    label: "Match confidence",
    positive: true,
    icon: Ship,
    gradient: "from-amber-500 via-orange-500 to-orange-700",
    badgeBg: "bg-orange-500/15 border-orange-500/30 text-orange-300",
  },
  {
    title: "Risk Level",
    value: "Medium",
    change: "68 / 100",
    label: "Overall risk score",
    positive: false,
    icon: ShieldAlert,
    gradient: "from-amber-400 via-orange-500 to-rose-600",
    badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-300",
  },
];

function KPISection() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi, index) => {
        const KpiIcon = kpi.icon;

        return (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
              scale: 1.01,
            }}
            className="group relative overflow-hidden rounded-[1.6rem] border border-orange-500/20 bg-[#0d172e]/80 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-orange-400/40 hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)]"
          >
            {/* blended glow */}
            <div
              className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${kpi.gradient} opacity-[0.2] blur-2xl transition duration-500 group-hover:scale-125 group-hover:opacity-[0.35]`}
            />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                    {kpi.title}
                  </p>

                  <p className="mt-3 text-2xl font-black tracking-tight text-white">
                    {kpi.value}
                  </p>
                </div>

                <div
                  className={`rounded-2xl bg-gradient-to-br ${kpi.gradient} p-3 text-white shadow-lg`}
                >
                  <KpiIcon size={20} />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-bold ${kpi.badgeBg}`}
                  >
                    {kpi.change}
                  </span>

                  <span className="text-xs font-medium text-slate-400">
                    {kpi.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-400"
                />
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${68 + index * 7}%` }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35 + index * 0.08,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${kpi.gradient}`}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default KPISection;

