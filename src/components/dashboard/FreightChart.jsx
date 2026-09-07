
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
      className="relative overflow-hidden rounded-[1.8rem] border border-[#65A7BC]/25 bg-gradient-to-br from-[#F2FAFC] via-[#E7F2FB] to-[#E9F5F0] p-6 shadow-[0_16px_45px_rgba(43,94,161,0.10)]"
    >
      {/* soft connected glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-[#92EEFF]/30 via-[#5681CD]/10 to-transparent blur-3xl" />

      <div className="relative mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-[#173F61]">
              Freight Rate Forecast
            </h2>

            <span className="rounded-full border border-[#65A7BC]/20 bg-gradient-to-r from-[#DDF5F3] to-[#E2EEFF] px-2.5 py-1 text-[10px] font-bold text-[#2B5EA1]">
              9 DAYS
            </span>
          </div>

          <p className="mt-1 text-sm text-[#6C8AA2]">
            Historical and predicted freight rates
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-[#65A7BC]/20 bg-gradient-to-r from-[#DFF6F1] via-[#E2F3F8] to-[#E3EBFC] px-3.5 py-2.5">
          <div className="rounded-lg bg-gradient-to-br from-[#65A7BC] to-[#3F7ED7] p-1.5 text-[#F4FDFF]">
            <TrendingDown size={15} />
          </div>

          <div>
            <p className="text-[10px] text-[#7190A6]">Forecast</p>
            <p className="text-sm font-black text-[#1C6599]">-10.9%</p>
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
              stroke="#B9D8E5"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#6C8AA2",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[21, 27]}
              tick={{
                fill: "#6C8AA2",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value}`}
            />

            <Tooltip
              cursor={{
                stroke: "#65A7BC",
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                background: "linear-gradient(135deg, #EAF8FA, #E8F0FC)",
                border: "1px solid #A9CFDF",
                borderRadius: "14px",
                boxShadow: "0 14px 35px rgba(43,94,161,0.16)",
              }}
              labelStyle={{
                color: "#5681CD",
                fontSize: 12,
              }}
              formatter={(value) => [
                `$${value} / MT`,
                "Freight Rate",
              ]}
            />

            <Line
              type="monotone"
              dataKey="rate"
              stroke="#2B5EA1"
              strokeWidth={3}
              dot={{
                r: 3,
                fill: "#DFF6F1",
                stroke: "#3F7ED7",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "#65A7BC",
                stroke: "#EAF7FA",
                strokeWidth: 3,
              }}
              animationDuration={1400}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="relative mt-5 flex items-center justify-between border-t border-[#65A7BC]/20 pt-4">
        <span className="text-xs text-[#6C8AA2]">
          Current:{" "}
          <strong className="text-[#2B5EA1]">$24.8 / MT</strong>
        </span>

        <span className="text-xs text-[#6C8AA2]">
          Forecast:{" "}
          <strong className="text-[#1C6599]">$22.6 / MT</strong>
        </span>
      </div>
    </motion.div>
  );
}

export default FreightChart;

