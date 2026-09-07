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
    /* Surface Container: #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6">
        {/* Main Title: Crisp White */}
        <h2 className="text-lg font-black text-white">
          Port Infrastructure Constraints
        </h2>

        {/* Subtitle: High contrast #B5BCBE */}
        <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
          Operational limits that influence vessel selection and delays.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {constraints.map((port) => (
          /* Inner Card Container: Jet Black (#111111) */
          <div
            key={port.port}
            className="group relative overflow-hidden rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-5 shadow-md transition duration-300 hover:border-[#B5BCBE]"
          >
            <div className="flex items-center gap-3 border-b border-[#4D5054]/60 pb-4">
              {/* Icon Box */}
              <div className="rounded-xl border border-[#4D5054] bg-[#2A2C30] p-2.5 text-[#B5BCBE]">
                <Anchor size={19} />
              </div>

              <div>
                {/* Port Title: Crisp White */}
                <h3 className="font-bold text-white">{port.port}</h3>
                
                {/* Sub-label: High contrast #B5BCBE */}
                <p className="text-xs font-medium text-[#B5BCBE]">
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
    /* Sub-Metric Box: Dark Surface #2A2C30 */
    <div className="rounded-xl border border-[#4D5054]/80 bg-[#2A2C30] p-4 shadow-sm">
      <div className="flex items-center gap-2 text-[#878C8F]">
        <div className="text-[#B5BCBE]">{icon}</div>
        {/* Label: Light Gray #B5BCBE */}
        <span className="text-xs font-semibold text-[#B5BCBE]">{label}</span>
      </div>

      {/* Metric Value: Pure White */}
      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

export default PortConstraints;