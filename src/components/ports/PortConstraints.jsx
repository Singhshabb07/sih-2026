import {
  Anchor,
  Ruler,
  Waves,
  Package,
} from "lucide-react";

const constraints = [
  {
    port: "Paradip",
    maxLOA: "300 m",
    maxBeam: "45 m",
    maxDraft: "14.5 m",
    handling: "80,000 MT/day",
  },
  {
    port: "Vizag",
    maxLOA: "290 m",
    maxBeam: "44 m",
    maxDraft: "14.0 m",
    handling: "75,000 MT/day",
  },
  {
    port: "Gangavaram",
    maxLOA: "320 m",
    maxBeam: "48 m",
    maxDraft: "16.5 m",
    handling: "100,000 MT/day",
  },
  {
    port: "Dhamra",
    maxLOA: "310 m",
    maxBeam: "46 m",
    maxDraft: "15.5 m",
    handling: "90,000 MT/day",
  },
];

function PortConstraints() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-lg font-black text-white">
          Port Infrastructure Constraints
        </h2>

        <p className="mt-1 text-sm font-medium text-slate-400">
          Operational limits that influence vessel selection and delays.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {constraints.map((port) => (
          <div
            key={port.port}
            className="group relative overflow-hidden rounded-2xl border border-orange-500/15 bg-[#070e1c] p-5 shadow-md transition-all duration-300 hover:border-orange-400/40 hover:bg-[#091428]"
          >
            <div className="flex items-center gap-3 border-b border-orange-500/15 pb-4">
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-2.5 text-orange-400">
                <Anchor size={19} />
              </div>

              <div>
                <h3 className="font-bold text-white">{port.port}</h3>
                
                <p className="text-xs font-medium text-slate-400">
                  Infrastructure limits
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <Constraint
                icon={<Ruler size={16} />}
                label="Max LOA"
                value={port.maxLOA}
              />

              <Constraint
                icon={<Ruler size={16} />}
                label="Max Beam"
                value={port.maxBeam}
              />

              <Constraint
                icon={<Waves size={16} />}
                label="Max Draft"
                value={port.maxDraft}
              />

              <Constraint
                icon={<Package size={16} />}
                label="Handling"
                value={port.handling}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Constraint({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-orange-500/15 bg-[#0d172e] p-4 shadow-sm">
      <div className="flex items-center gap-2 text-slate-400">
        <div className="text-orange-400">{icon}</div>
        <span className="text-xs font-semibold text-slate-300">{label}</span>
      </div>

      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

export default PortConstraints;