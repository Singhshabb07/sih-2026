import {
  Clock3,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const delayData = [
  {
    port: "Paradip",
    delay: "8 hrs",
    probability: 18,
    level: "Low",
  },
  {
    port: "Vizag",
    delay: "16 hrs",
    probability: 34,
    level: "Moderate",
  },
  {
    port: "Dhamra",
    delay: "27 hrs",
    probability: 61,
    level: "High",
  },
];

function DelayPrediction() {
  return (
    /* Main Outer Card: Surface #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6">
        {/* Category Label: High contrast light gray #B5BCBE */}
        <p className="text-xs font-bold uppercase tracking-wider text-[#B5BCBE]">
          Predictive Analysis
        </p>

        {/* Main Title: Crisp White */}
        <h2 className="mt-1 text-xl font-black text-white">
          Port Delay Prediction
        </h2>

        {/* Subtitle: Legible light gray #B5BCBE */}
        <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
          Estimated vessel waiting time based on congestion and infrastructure.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {delayData.map((item) => {
          const high = item.level === "High";
          const moderate = item.level === "Moderate";

          return (
            /* Inner Card: Jet Black #111111 */
            <div
              key={item.port}
              className="group relative overflow-hidden rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-5 shadow-md transition duration-300 hover:border-[#B5BCBE]"
            >
              <div className="flex items-center justify-between">
                {/* Port Title: White */}
                <h3 className="font-bold text-white">{item.port}</h3>

                {/* Status Icon: High visibility #B5BCBE */}
                {high || moderate ? (
                  <AlertTriangle
                    size={18}
                    className="text-[#B5BCBE]"
                  />
                ) : (
                  <CheckCircle2
                    size={18}
                    className="text-[#B5BCBE]"
                  />
                )}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {/* Icon Container */}
                <div className="rounded-xl border border-[#4D5054] bg-[#2A2C30] p-3 text-[#B5BCBE]">
                  <Clock3 size={21} />
                </div>

                <div>
                  {/* Delay Value: White */}
                  <p className="text-2xl font-black text-white">
                    {item.delay}
                  </p>

                  {/* Delay Label: Muted Gray #878C8F */}
                  <p className="text-xs font-medium text-[#878C8F]">
                    Expected delay
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-xs">
                  {/* Metric Label: #B5BCBE */}
                  <span className="font-medium text-[#B5BCBE]">
                    Delay probability
                  </span>

                  {/* Probability Value: White */}
                  <span className="font-bold text-white">
                    {item.probability}%
                  </span>
                </div>

                {/* Progress Bar Track: #2A2C30 */}
                <div className="mt-2 h-2 rounded-full bg-[#2A2C30]">
                  {/* Progress Bar Fill: Gradient using palette grays */}
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#878C8F] to-[#B5BCBE]"
                    style={{ width: `${item.probability}%` }}
                  />
                </div>
              </div>

              {/* Risk Level Output: High visibility #B5BCBE */}
              <div className="mt-5 flex items-center gap-2 text-xs">
                <TrendingUp size={14} className="text-[#B5BCBE]" />

                <span className="font-black text-[#B5BCBE]">
                  {item.level.toUpperCase()} RISK
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operational Alert Box: Dark Surface #111111 */}
      <div className="mt-5 rounded-2xl border border-[#4D5054] bg-[#111111] p-4">
        <p className="text-sm font-bold text-white">
          Operational Alert
        </p>

        {/* Alert Description: Legible #B5BCBE */}
        <p className="mt-1 text-xs leading-5 font-medium text-[#B5BCBE]">
          Dhamra currently shows the highest predicted delay risk.
          Consider additional buffer time when evaluating the charter.
        </p>
      </div>
    </div>
  );
}

export default DelayPrediction;