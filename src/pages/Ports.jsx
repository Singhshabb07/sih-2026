import PortCompatibility from "../components/ports/PortCompatibility";
import PortConstraints from "../components/ports/PortConstraints";
import DelayPrediction from "../components/ports/DelayPrediction";

function Ports() {
  return (
    <div className="space-y-6">
      {/* Page Header Section */}
      <div>
        {/* Main Title: Pure Crisp White */}
        <h1 className="text-3xl font-black tracking-tight text-white">
          Port Intelligence
        </h1>

        {/* Page Subtitle: High legibility Light Gray #B5BCBE */}
        <p className="mt-1.5 text-sm font-medium text-[#B5BCBE]">
          Analyze port constraints, vessel compatibility and delay risks.
        </p>
      </div>

      {/* Port Intelligence Widgets */}
      <PortCompatibility />
      <PortConstraints />
      <DelayPrediction />
    </div>
  );
}

export default Ports;