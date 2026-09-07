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
    /* Card Container: Surface #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6">
        {/* Title: Crisp White */}
        <h2 className="text-lg font-black text-white">
          30-Day Freight Rate Forecast
        </h2>

        {/* Subtitle: High legibility gray #B5BCBE */}
        <p className="mt-1 text-sm text-[#B5BCBE]">
          Predicted freight rate movement over the next 30 days.
        </p>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={forecastData}>
            <defs>
              {/* Gradient Fill using Light Gray #B5BCBE transitioning into Dark Surface */}
              <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B5BCBE" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#2A2C30" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Grid stroke mapped to #4D5054 */}
            <CartesianGrid
              stroke="#4D5054"
              strokeDasharray="3 3"
              opacity={0.4}
            />

            {/* Axes & Ticks mapped to #878C8F and #B5BCBE */}
            <XAxis
              dataKey="day"
              stroke="#4D5054"
              tick={{ fill: "#B5BCBE", fontSize: 12 }}
            />

            <YAxis
              domain={[20, 26]}
              stroke="#4D5054"
              tick={{ fill: "#B5BCBE", fontSize: 12 }}
            />

            {/* Tooltip mapped to Jet Black #111111 with #4D5054 Border */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#111111",
                border: "1px solid #4D5054",
                borderRadius: "12px",
                color: "#FFFFFF",
                boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
              }}
              itemStyle={{ color: "#B5BCBE" }}
              formatter={(value) => [`$${value}/MT`, "Forecast Rate"]}
            />

            {/* Line stroke mapped to #B5BCBE highlight */}
            <Area
              type="monotone"
              dataKey="rate"
              stroke="#B5BCBE"
              strokeWidth={3}
              fill="url(#forecastFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ForecastChart;