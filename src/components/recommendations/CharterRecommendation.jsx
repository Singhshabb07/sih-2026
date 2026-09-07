import {
  CheckCircle2,
  Ship,
  CalendarDays,
  IndianRupee,
  TrendingDown,
  ShieldCheck,
} from "lucide-react";

const recommendation = {
  vessel: "Supramax",
  match: 92,
  route: "Australia → Paradip",
  rate: 22.6,
  saving: 182000,
  contract: "Multiple-Voyage Contract",
  entryWindow: "Day 12–16",
};

function CharterRecommendation() {
  return (
    <div className="space-y-6">
      {/* Main Recommendation Container: Surface #2A2C30 with subtle light border */}
      <div className="rounded-[1.8rem] border border-[#4D5054]/80 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            {/* Header Badge: High contrast #B5BCBE */}
            <div className="flex items-center gap-2 text-sm font-bold text-[#B5BCBE]">
              <ShieldCheck size={18} className="text-[#B5BCBE]" />
              AI Chartering Recommendation
            </div>

            {/* Main Action Title: Crisp White */}
            <h2 className="mt-2 text-3xl font-black text-white">
              Book a Supramax
            </h2>

            {/* Subtext Description: Light Gray #B5BCBE */}
            <p className="mt-2 font-medium text-[#B5BCBE]">
              Best balance of freight cost, vessel capacity, port compatibility
              and operational risk.
            </p>
          </div>

          {/* Match Score Indicator */}
          <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border-4 border-[#B5BCBE] bg-[#111111] shadow-inner">
            <span className="text-2xl font-black text-white">
              {recommendation.match}%
            </span>
            <span className="text-[10px] font-bold tracking-wider text-[#B5BCBE]">
              MATCH
            </span>
          </div>
        </div>

        {/* Top Key Metrics Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric
            icon={Ship}
            label="Vessel"
            value={recommendation.vessel}
          />

          <Metric
            icon={IndianRupee}
            label="Expected Rate"
            value={`$${recommendation.rate}/MT`}
          />

          <Metric
            icon={CalendarDays}
            label="Entry Window"
            value={recommendation.entryWindow}
          />

          <Metric
            icon={TrendingDown}
            label="Expected Saving"
            value={`₹${recommendation.saving.toLocaleString()}`}
          />
        </div>
      </div>

      {/* Recommended Strategy Section */}
      <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
        <div className="mb-5">
          {/* Section Title: Crisp White */}
          <h3 className="text-lg font-black text-white">
            Recommended Charter Strategy
          </h3>
          
          {/* Subtitle: High contrast #B5BCBE */}
          <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
            AI-generated strategy based on forecast, vessel and cost analysis.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Strategy
            title="Market Entry"
            value="Day 12–16"
            description="Expected freight rate reaches a favourable range."
          />

          <Strategy
            title="Contract Type"
            value={recommendation.contract}
            description="Reduces exposure to future freight volatility."
          />

          <Strategy
            title="Risk Level"
            value="Moderate"
            description="Port congestion remains manageable on the route."
          />
        </div>
      </div>

      {/* Recommended Action Callout: Jet Black inner card */}
      <div className="flex items-start gap-3 rounded-2xl border border-[#4D5054] bg-[#111111] p-5 shadow-lg">
        <CheckCircle2 className="mt-0.5 shrink-0 text-[#B5BCBE]" size={22} />

        <div>
          {/* Action Header: Light Gray #B5BCBE */}
          <p className="font-bold text-[#B5BCBE]">
            Recommended Action
          </p>
          
          {/* Action Description: Crisp White */}
          <p className="mt-1 text-sm leading-6 font-medium text-white">
            Monitor the Australia → Paradip route and target a Supramax
            multiple-voyage contract during the predicted low-rate window.
          </p>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    /* Metric Box: Jet Black #111111 */
    <div className="rounded-xl border border-[#4D5054]/80 bg-[#111111] p-4 shadow-sm">
      {/* Label: Light Gray #B5BCBE */}
      <p className="text-xs font-bold uppercase tracking-wider text-[#B5BCBE]">
        {label}
      </p>

      {/* Metric Value: Pure White */}
      <p className="mt-1 text-base font-black text-white">{value}</p>
    </div>
  );
}

function Strategy({ title, value, description }) {
  return (
    /* Strategy Box: Jet Black #111111 */
    <div className="rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-5 shadow-md transition duration-300 hover:border-[#B5BCBE]">
      {/* Title: Light Gray #B5BCBE */}
      <p className="text-sm font-semibold text-[#B5BCBE]">{title}</p>

      {/* Strategy Value: Pure White */}
      <p className="mt-2 text-lg font-black text-white">{value}</p>

      {/* Description: Light Gray #B5BCBE */}
      <p className="mt-2 text-xs leading-5 font-medium text-[#B5BCBE]">
        {description}
      </p>
    </div>
  );
}

export default CharterRecommendation;