import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const forecastData = [
  { day: "Day 1", rate: 24.8 },
  { day: "Day 5", rate: 24.1 },
  { day: "Day 10", rate: 23.2 },
  { day: "Day 15", rate: 22.6 },
  { day: "Day 20", rate: 22.4 },
  { day: "Day 25", rate: 22.9 },
  { day: "Day 30", rate: 23.7 },
];

function ForecastChart() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-lg font-black text-white">
          30-Day Freight Rate Forecast
        </h2>

        <p className="mt-1 text-sm font-medium text-slate-400">
          Predicted freight rate movement over the next 30 days.
        </p>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={forecastData}>
            <defs>
              <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="3 3"
              opacity={0.6}
            />

            <XAxis
              dataKey="day"
              stroke="#1e293b"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <YAxis
              domain={[20, 26]}
              stroke="#1e293b"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#070e1c",
                border: "1px solid rgba(249,115,22,0.3)",
                borderRadius: "14px",
                color: "#FFFFFF",
                boxShadow: "0 14px 35px rgba(0,0,0,0.5)",
              }}
              itemStyle={{ color: "#f97316", fontWeight: "bold" }}
              formatter={(value) => [`$${value}/MT`, "Forecast Rate"]}
            />

            <Area
              type="monotone"
              dataKey="rate"
              stroke="#f97316"
              strokeWidth={3.5}
              fill="url(#forecastFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ForecastChart;