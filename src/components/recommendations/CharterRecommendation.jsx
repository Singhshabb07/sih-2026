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
      {/* Main Recommendation Container */}
      <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-orange-400">
              <ShieldCheck size={18} className="text-orange-400" />
              AI Chartering Recommendation
            </div>

            <h2 className="mt-2 text-3xl font-black text-white">
              Book a Supramax
            </h2>

            <p className="mt-2 font-medium text-slate-300">
              Best balance of freight cost, vessel capacity, port compatibility
              and operational risk.
            </p>
          </div>

          {/* Match Score Indicator */}
          <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border-4 border-orange-400 bg-orange-500/10 shadow-[0_0_25px_rgba(249,115,22,0.25)]">
            <span className="text-2xl font-black text-white">
              {recommendation.match}%
            </span>
            <span className="text-[10px] font-bold tracking-wider text-orange-300">
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
      <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <div className="mb-5">
          <h3 className="text-lg font-black text-white">
            Recommended Charter Strategy
          </h3>
          
          <p className="mt-1 text-sm font-medium text-slate-400">
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

      {/* Recommended Action Callout */}
      <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 shadow-lg">
        <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={22} />

        <div>
          <p className="font-bold text-emerald-400">
            Recommended Action
          </p>
          
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
    <div className="rounded-xl border border-orange-500/15 bg-[#070e1c] p-4 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
        {label}
      </p>

      <p className="mt-1 text-base font-black text-white">{value}</p>
    </div>
  );
}

function Strategy({ title, value, description }) {
  return (
    <div className="rounded-2xl border border-orange-500/15 bg-[#070e1c] p-5 shadow-md transition-all duration-300 hover:border-orange-400/40">
      <p className="text-sm font-semibold text-orange-400">{title}</p>

      <p className="mt-2 text-lg font-black text-white">{value}</p>

      <p className="mt-2 text-xs leading-5 font-medium text-slate-300">
        {description}
      </p>
    </div>
  );
}

export default CharterRecommendation;