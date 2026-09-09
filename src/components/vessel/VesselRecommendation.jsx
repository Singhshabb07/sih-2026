import { Ship, CheckCircle2, Gauge, Ruler } from "lucide-react";

const recommendations = [
  {
    type: "Supramax",
    score: 92,
    rate: "$22.8 / MT",
    capacity: "50,000 DWT",
    draft: "12.5 m",
    reason: "Best balance of freight cost, cargo capacity and port compatibility.",
  },
  {
    type: "Panamax",
    score: 84,
    rate: "$21.9 / MT",
    capacity: "75,000 DWT",
    draft: "13.8 m",
    reason: "Lower freight rate but higher draft creates additional port constraints.",
  },
  {
    type: "Handysize",
    score: 76,
    rate: "$26.4 / MT",
    capacity: "35,000 DWT",
    draft: "10.5 m",
    reason: "Excellent port accessibility but higher cost per tonne.",
  },
];

function VesselRecommendation() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
          AI Recommendation
        </p>

        <h2 className="mt-1 text-xl font-black text-white">
          Recommended Vessel
        </h2>

        <p className="mt-1 text-sm font-medium text-slate-400">
          Vessel selection based on cargo, freight rate and port constraints.
        </p>
      </div>

      {/* Featured Highlight Card */}
      <div className="rounded-2xl border border-orange-500/25 bg-[#070e1c] p-6 shadow-md">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {/* Icon Wrapper */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/15 text-orange-400 shadow-sm">
              <Ship size={28} />
            </div>

            <div>
              <p className="text-2xl font-black text-white">Supramax</p>
              
              <p className="mt-1 text-sm font-medium text-slate-300">
                Recommended for Australia → Paradip
              </p>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs font-bold text-orange-400">Match Score</p>
            <p className="text-3xl font-black text-white">92%</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Info
            icon={<Gauge size={17} />}
            label="Capacity"
            value="50,000 DWT"
          />

          <Info
            icon={<Ruler size={17} />}
            label="Draft"
            value="12.5 m"
          />

          <Info
            icon={<CheckCircle2 size={17} />}
            label="Port Fit"
            value="Compatible"
          />
        </div>

        {/* Recommendation Reason Box */}
        <div className="mt-5 border-t border-orange-500/15 pt-5">
          <p className="text-sm font-bold text-white">Why Supramax?</p>

          <p className="mt-2 text-sm font-medium leading-6 text-slate-300">
            It provides the best overall balance between freight cost,
            cargo capacity, vessel dimensions and destination-port
            compatibility for the selected voyage.
          </p>
        </div>
      </div>

      {/* Alternative Options Section */}
      <div className="mt-6 space-y-3">
        <p className="text-sm font-bold text-white">Alternative Options</p>

        {recommendations.slice(1).map((vessel) => (
          <div
            key={vessel.type}
            className="group flex flex-col gap-3 rounded-2xl border border-orange-500/15 bg-[#070e1c] p-4 shadow-md transition-all duration-300 hover:border-orange-400/40 hover:bg-[#091428] md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-bold text-white">{vessel.type}</p>
              
              <p className="mt-1 text-xs font-medium text-slate-400">
                {vessel.reason}
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <div>
                <p className="text-xs font-bold text-slate-400">Rate</p>
                <p className="font-black text-orange-300">{vessel.rate}</p>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400">Match</p>
                <p className="font-black text-white">{vessel.score}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-orange-500/15 bg-[#0d172e] p-4 shadow-sm">
      <div className="flex items-center gap-2 text-orange-400">
        {icon}
        <span className="text-xs font-bold text-slate-300">{label}</span>
      </div>

      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

export default VesselRecommendation;