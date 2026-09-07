
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
    gradient: "from-[#1C6599] via-[#3F7ED7] to-[#5681CD]",
  },
  {
    title: "Forecast Rate",
    value: "$22.6 / MT",
    change: "-8.9%",
    label: "Expected decrease",
    positive: true,
    icon: TrendingDown,
    gradient: "from-[#5681CD] via-[#65A7BC] to-[#2B5EA1]",
  },
  {
    title: "Recommended Vessel",
    value: "Supramax",
    change: "92%",
    label: "Match confidence",
    positive: true,
    icon: Ship,
    gradient: "from-[#2B5EA1] via-[#5681CD] to-[#3F7ED7]",
  },
  {
    title: "Risk Level",
    value: "Medium",
    change: "68 / 100",
    label: "Overall risk score",
    positive: false,
    icon: ShieldAlert,
    gradient: "from-[#3F7ED7] via-[#5681CD] to-[#1C6599]",
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
            className="group relative overflow-hidden rounded-[1.6rem] border border-[#65A7BC]/25 bg-gradient-to-br from-[#F3FBFC] via-[#E8F3FB] to-[#EAF5F0] p-5 shadow-[0_14px_40px_rgba(43,94,161,0.10)] transition-shadow duration-300 hover:shadow-[0_22px_55px_rgba(43,94,161,0.18)]"
          >
            {/* blended glow */}
            <div
              className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${kpi.gradient} opacity-[0.16] blur-2xl transition duration-500 group-hover:scale-125 group-hover:opacity-[0.24]`}
            />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#5681CD]">
                    {kpi.title}
                  </p>

                  <p className="mt-3 text-2xl font-black tracking-tight text-[#173F61]">
                    {kpi.value}
                  </p>
                </div>

                <div
                  className={`rounded-2xl bg-gradient-to-br ${kpi.gradient} p-3 text-[#F4FDFF] shadow-[0_10px_25px_rgba(43,94,161,0.20)]`}
                >
                  <KpiIcon size={20} />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-bold ${
                      kpi.positive
                        ? "border-[#65A7BC]/25 bg-gradient-to-r from-[#DDF6F1] to-[#E0F4FF] text-[#1C6599]"
                        : "border-[#5681CD]/20 bg-gradient-to-r from-[#E5EEFF] to-[#E4F2F4] text-[#2B5EA1]"
                    }`}
                  >
                    {kpi.change}
                  </span>

                  <span className="text-xs text-[#6C8AA2]">
                    {kpi.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-[#8BAEC3] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#3F7ED7]"
                />
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-gradient-to-r from-[#D7EAF1] via-[#DCE8F7] to-[#DDEEE6]">
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

