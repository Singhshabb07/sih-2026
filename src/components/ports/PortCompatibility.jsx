import {
  Anchor,
  CheckCircle2,
  AlertTriangle,
  Ship,
} from "lucide-react";

const ports = [
  {
    port: "Paradip",
    vessel: "Supramax",
    compatibility: 94,
    status: "Excellent",
    reason: "Draft and cargo handling requirements are well within limits.",
  },
  {
    port: "Vizag",
    vessel: "Panamax",
    compatibility: 88,
    status: "Good",
    reason: "Compatible with moderate draft restrictions.",
  },
  {
    port: "Dhamra",
    vessel: "Capesize",
    compatibility: 63,
    status: "Restricted",
    reason: "Higher draft creates additional operational constraints.",
  },
];

function PortCompatibility() {
  return (
    /* Surface Container: #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6">
        {/* Category Badge Text: High-contrast light gray #B5BCBE */}
        <p className="text-xs font-bold uppercase tracking-wider text-[#B5BCBE]">
          Vessel × Port Analysis
        </p>

        {/* Header Title: Crisp White */}
        <h2 className="mt-1 text-xl font-black text-white">
          Port Compatibility
        </h2>

        {/* Subtitle: High legibility #B5BCBE */}
        <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
          Check whether the selected vessel is suitable for destination ports.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {ports.map((port) => {
          const restricted = port.status === "Restricted";

          return (
            /* Inner Card: Jet Black (#111111) */
            <div
              key={port.port}
              className="group relative overflow-hidden rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-5 shadow-md transition duration-300 hover:border-[#B5BCBE]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Anchor Icon Box */}
                  <div className="rounded-xl border border-[#4D5054] bg-[#2A2C30] p-2.5 text-[#B5BCBE]">
                    <Anchor size={19} />
                  </div>

                  <div>
                    {/* Port Name: Crisp White */}
                    <p className="font-bold text-white">{port.port}</p>
                    
                    {/* Vessel Subtitle: High contrast #B5BCBE */}
                    <p className="text-xs font-medium text-[#B5BCBE]">
                      {port.vessel}
                    </p>
                  </div>
                </div>

                {/* Status Icon: Standard Light Gray #B5BCBE */}
                {restricted ? (
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

              <div className="mt-6">
                <div className="flex items-end justify-between">
                  {/* Label: Light Gray #B5BCBE */}
                  <span className="text-sm font-medium text-[#B5BCBE]">
                    Compatibility
                  </span>

                  {/* Percentage Score: Pure White */}
                  <span className="text-2xl font-black text-white">
                    {port.compatibility}%
                  </span>
                </div>

                {/* Progress Bar Track: #2A2C30 */}
                <div className="mt-3 h-2 rounded-full bg-[#2A2C30]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#878C8F] to-[#B5BCBE]"
                    style={{ width: `${port.compatibility}%` }}
                  />
                </div>
              </div>

              {/* Status Badge: High contrast #B5BCBE */}
              <p className="mt-4 text-xs font-black uppercase text-[#B5BCBE]">
                {port.status}
              </p>

              {/* Detail Reason Text: #B5BCBE for crisp readability */}
              <p className="mt-2 text-xs leading-5 font-medium text-[#B5BCBE]">
                {port.reason}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortCompatibility;