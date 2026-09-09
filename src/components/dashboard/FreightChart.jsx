
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingDown } from "lucide-react";

const data = [
  { day: "Sep 1", rate: 25.4 },
  { day: "Sep 2", rate: 25.8 },
  { day: "Sep 3", rate: 24.9 },
  { day: "Sep 4", rate: 25.2 },
  { day: "Sep 5", rate: 24.8 },
  { day: "Sep 6", rate: 24.2 },
  { day: "Sep 7", rate: 23.7 },
  { day: "Sep 8", rate: 23.1 },
  { day: "Sep 9", rate: 22.6 },
];

function FreightChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative overflow-hidden rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl"
    >
      {/* soft connected glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/15 blur-3xl" />

      <div className="relative mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-white">
              Freight Rate Forecast
            </h2>

            <span className="rounded-full border border-orange-500/30 bg-orange-500/15 px-2.5 py-1 text-[10px] font-bold text-orange-300">
              9 DAYS
            </span>
          </div>

          <p className="mt-1 text-sm font-medium text-slate-400">
            Historical and predicted freight rates
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/15 px-3.5 py-2.5">
          <div className="rounded-lg bg-emerald-500 p-1.5 text-slate-950 font-bold">
            <TrendingDown size={15} />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-emerald-400/80">Forecast</p>
            <p className="text-sm font-black text-emerald-400">-10.9%</p>
          </div>
        </div>
      </div>

      <div className="relative h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 8,
              right: 8,
              left: -15,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="4 6"
              stroke="#1e293b"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#94a3b8",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[21, 27]}
              tick={{
                fill: "#94a3b8",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value}`}
            />

            <Tooltip
              cursor={{
                stroke: "#f97316",
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                background: "#070e1c",
                border: "1px solid rgba(249,115,22,0.3)",
                borderRadius: "14px",
                boxShadow: "0 14px 35px rgba(0,0,0,0.5)",
                color: "#ffffff",
              }}
              labelStyle={{
                color: "#f97316",
                fontSize: 12,
                fontWeight: "bold",
              }}
              formatter={(value) => [
                `$${value} / MT`,
                "Freight Rate",
              ]}
            />

            <Line
              type="monotone"
              dataKey="rate"
              stroke="#f97316"
              strokeWidth={3.5}
              dot={{
                r: 4,
                fill: "#070e1c",
                stroke: "#f97316",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: "#f59e0b",
                stroke: "#ffffff",
                strokeWidth: 3,
              }}
              animationDuration={1400}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="relative mt-5 flex items-center justify-between border-t border-orange-500/15 pt-4">
        <span className="text-xs font-medium text-slate-400">
          Current:{" "}
          <strong className="text-orange-400 font-bold">$24.8 / MT</strong>
        </span>

        <span className="text-xs font-medium text-slate-400">
          Forecast:{" "}
          <strong className="text-emerald-400 font-bold">$22.6 / MT</strong>
        </span>
      </div>
    </motion.div>
  );
}

export default FreightChart;

