
import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, ArrowRight } from "lucide-react";

const markets = [
  {
    name: "Australia → Paradip",
    rate: "$22.6 / MT",
    change: "-6.4%",
    trend: "down",
  },
  {
    name: "Indonesia → Vizag",
    rate: "$24.8 / MT",
    change: "+3.2%",
    trend: "up",
  },
  {
    name: "USA → Dhamra",
    rate: "$31.4 / MT",
    change: "+5.7%",
    trend: "up",
  },
  {
    name: "Mozambique → Haldia",
    rate: "$28.1 / MT",
    change: "-2.1%",
    trend: "down",
  },
];

function MarketTrend() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.35 }}
      className="rounded-3xl border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            Market Trends
          </h2>

          <span className="rounded-full border border-orange-500/30 bg-orange-500/15 px-3 py-1 text-[10px] font-bold text-orange-300">
            LIVE MARKET
          </span>
        </div>

        <p className="mt-1 text-sm font-medium text-slate-400">
          Current freight market movements
        </p>
      </div>

      <div className="space-y-3">
        {markets.map((market, index) => {
          const isDown = market.trend === "down";

          return (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.45 + index * 0.08,
              }}
              whileHover={{ x: 4 }}
              className="group rounded-2xl border border-orange-500/15 bg-[#081222]/80 p-4 transition-all duration-300 hover:border-orange-400/40 hover:bg-[#0b172a]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-200">
                    {market.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Current market rate
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-black text-white">
                    {market.rate}
                  </p>

                  <div
                    className={`mt-1 flex items-center justify-end gap-1 text-xs font-bold ${
                      isDown ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {isDown ? (
                      <TrendingDown size={14} />
                    ) : (
                      <TrendingUp size={14} />
                    )}

                    {market.change}
                  </div>
                </div>
              </div>

              <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isDown ? "38%" : "68%" }}
                  transition={{ duration: 0.7, delay: 0.6 + index * 0.08 }}
                  className={`h-full rounded-full ${
                    isDown
                      ? "bg-gradient-to-r from-amber-400 to-orange-500"
                      : "bg-gradient-to-r from-rose-400 to-pink-600"
                  }`}
                />
              </div>

              <div className="mt-2 flex items-center justify-end opacity-0 transition group-hover:opacity-100">
                <span className="flex items-center gap-1 text-[10px] font-bold text-orange-400">
                  View market
                  <ArrowRight size={11} />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default MarketTrend;

