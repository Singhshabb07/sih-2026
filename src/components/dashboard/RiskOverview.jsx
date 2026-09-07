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
      /* Surface Card: #2A2C30 with #4D5054 Border */
      className="relative overflow-hidden rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]"
    >
      {/* Background glow using #878C8F */}
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-gradient-to-tl from-[#878C8F]/20 via-[#4D5054]/10 to-transparent blur-3xl" />

      <div className="relative mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            {/* Main Header: White (#FFFFFF) for max contrast */}
            <h2 className="text-lg font-black text-white">
              Risk Overview
            </h2>

            {/* Badge: Jet black bg with high contrast #B5BCBE text */}
            <span className="rounded-full border border-[#4D5054] bg-[#111111] px-2.5 py-1 text-[10px] font-bold text-[#B5BCBE]">
              3 INDICATORS
            </span>
          </div>

          {/* Subtitle: High legibility gray #B5BCBE */}
          <p className="mt-1 text-sm text-[#B5BCBE]">
            Current operational and market risk indicators.
          </p>
        </div>

        {/* Overall Status Widget */}
        <div className="flex items-center gap-2.5 rounded-2xl border border-[#4D5054] bg-[#111111] px-4 py-2.5">
          <div className="rounded-lg bg-[#B5BCBE] p-1.5 text-[#111111]">
            <ShieldCheck size={16} />
          </div>

          <div>
            <p className="text-[10px] font-medium text-[#878C8F]">
              Overall status
            </p>

            {/* Status value: Crisp White */}
            <p className="text-sm font-black text-white">
              Controlled
            </p>
          </div>
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-3">
        {risks.map((risk, index) => {
          const RiskIcon = risk.icon;

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
              /* Inner Card: Jet Black (#111111) */
              className="group relative overflow-hidden rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-5 shadow-md transition duration-300 hover:border-[#B5BCBE] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#B5BCBE]/10 via-[#4D5054]/10 to-transparent blur-2xl transition duration-500 group-hover:scale-125" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Icon Box */}
                  <div className="rounded-xl border border-[#4D5054] bg-[#2A2C30] p-2.5 text-[#B5BCBE] shadow-inner">
                    <RiskIcon size={18} />
                  </div>

                  <div>
                    {/* Item Name: Crisp White */}
                    <p className="text-sm font-bold text-white">
                      {risk.name}
                    </p>

                    {/* Status Text: #B5BCBE for strong contrast */}
                    <p className="mt-1 text-xs font-medium text-[#B5BCBE]">
                      {risk.status} risk
                    </p>
                  </div>
                </div>

                {/* Score Number: White for primary readout */}
                <span className="text-sm font-black text-white">
                  {risk.score}
                  <span className="text-xs font-medium text-[#878C8F]">
                    /100
                  </span>
                </span>
              </div>

              {/* Progress Track: Dark surface #2A2C30 */}
              <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-[#2A2C30]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${risk.score}%` }}
                  transition={{
                    duration: 0.9,
                    delay: 0.65 + index * 0.1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#B5BCBE] via-[#878C8F] to-[#4D5054]"
                />
              </div>

              <div className="relative mt-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#878C8F]">
                  Risk exposure
                </span>

                {/* Risk Level Output: High visibility #B5BCBE */}
                <span className="text-[10px] font-black text-[#B5BCBE]">
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