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
    /* Surface Container: #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6">
        {/* Sub-label: Light Gray #B5BCBE */}
        <p className="text-xs font-black uppercase tracking-wider text-[#B5BCBE]">
          AI Recommendation
        </p>

        {/* Main Section Heading: Crisp White */}
        <h2 className="mt-1 text-xl font-black text-white">
          Recommended Vessel
        </h2>

        {/* Subtitle Description: High legibility #B5BCBE */}
        <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
          Vessel selection based on cargo, freight rate and port constraints.
        </p>
      </div>

      {/* Featured Highlight Card: Jet Black (#111111) */}
      <div className="rounded-2xl border border-[#4D5054] bg-[#111111] p-6 shadow-md">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {/* Icon Wrapper */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#4D5054] bg-[#2A2C30] text-[#B5BCBE]">
              <Ship size={28} />
            </div>

            <div>
              {/* Vessel Type: Crisp White */}
              <p className="text-2xl font-black text-white">Supramax</p>
              
              {/* Route Info: High legibility #B5BCBE */}
              <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
                Recommended for Australia → Paradip
              </p>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs font-bold text-[#B5BCBE]">Match Score</p>
            {/* Match Score Value: Crisp White */}
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
        <div className="mt-5 border-t border-[#4D5054]/60 pt-5">
          <p className="text-sm font-bold text-white">Why Supramax?</p>

          <p className="mt-2 text-sm font-medium leading-6 text-[#B5BCBE]">
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
          /* Alternative Card: Jet Black (#111111) */
          <div
            key={vessel.type}
            className="group flex flex-col gap-3 rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-4 shadow-md transition duration-300 hover:border-[#B5BCBE] md:flex-row md:items-center md:justify-between"
          >
            <div>
              {/* Alternative Title: Crisp White */}
              <p className="font-bold text-white">{vessel.type}</p>
              
              {/* Alternative Reason: High legibility #B5BCBE */}
              <p className="mt-1 text-xs font-medium text-[#B5BCBE]">
                {vessel.reason}
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <div>
                <p className="text-xs font-bold text-[#B5BCBE]">Rate</p>
                {/* Rate Value: Crisp White */}
                <p className="font-black text-white">{vessel.rate}</p>
              </div>

              <div>
                <p className="text-xs font-bold text-[#B5BCBE]">Match</p>
                {/* Score Value: Crisp White */}
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
    /* Info Sub-card: #2A2C30 */
    <div className="rounded-xl border border-[#4D5054] bg-[#2A2C30] p-4 shadow-sm">
      <div className="flex items-center gap-2 text-[#B5BCBE]">
        {icon}
        <span className="text-xs font-bold">{label}</span>
      </div>

      {/* Value: Crisp White */}
      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

export default VesselRecommendation;