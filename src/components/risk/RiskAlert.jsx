import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const alerts = [
  {
    level: "High",
    title: "Dhamra congestion increasing",
    description:
      "Port congestion may increase vessel waiting time by approximately 27 hours.",
  },
  {
    level: "Medium",
    title: "Freight volatility detected",
    description:
      "Recent market movement indicates moderate uncertainty in freight rates.",
  },
  {
    level: "Low",
    title: "Paradip operating normally",
    description:
      "Current congestion and expected waiting time remain within acceptable limits.",
  },
];

function RiskAlert() {
  return (
    /* Surface Container: #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6">
        {/* Main Section Heading: Crisp White */}
        <h2 className="text-lg font-black text-white">
          Risk Alerts & Early Warnings
        </h2>

        {/* Section Subtitle: High contrast #B5BCBE */}
        <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
          Important signals requiring attention before chartering decisions.
        </p>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const high = alert.level === "High";
          const medium = alert.level === "Medium";

          return (
            /* Alert Item Card: Jet Black (#111111) */
            <div
              key={alert.title}
              className="group flex flex-col gap-4 rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-5 shadow-md transition duration-300 hover:border-[#B5BCBE] md:flex-row md:items-center"
            >
              {/* Icon Container */}
              <div className="rounded-xl border border-[#4D5054] bg-[#2A2C30] p-3 text-[#B5BCBE]">
                {high || medium ? (
                  <AlertTriangle size={20} />
                ) : (
                  <CheckCircle2 size={20} />
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Alert Title: Crisp White */}
                  <h3 className="text-sm font-bold text-white">
                    {alert.title}
                  </h3>

                  {/* Level Badge: High contrast #B5BCBE with Border */}
                  <span className="rounded-full border border-[#4D5054] bg-[#2A2C30] px-3 py-0.5 text-xs font-black uppercase tracking-wider text-[#B5BCBE]">
                    {alert.level}
                  </span>
                </div>

                {/* Alert Description: Light Gray #B5BCBE */}
                <p className="mt-2 text-xs leading-5 font-medium text-[#B5BCBE]">
                  {alert.description}
                </p>
              </div>

              {/* Action Button */}
              <button className="flex items-center gap-2 text-xs font-bold text-[#B5BCBE] transition duration-200 hover:text-white">
                Details
                <ArrowRight size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RiskAlert;