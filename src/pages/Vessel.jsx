import VesselRecommendation from "../components/vessel/VesselRecommendation";
import VesselComparison from "../components/vessel/VesselComparison";

function Vessel() {
  return (
    <div className="space-y-6">
      {/* Page Header Section */}
      <div>
        {/* Main Title: Pure Crisp White */}
        <h1 className="text-3xl font-black tracking-tight text-white">
          Vessel Optimization
        </h1>

        {/* Page Subtitle: High legibility Light Gray #B5BCBE */}
        <p className="mt-1.5 text-sm font-medium text-[#B5BCBE]">
          Select and compare vessels based on cargo and voyage requirements.
        </p>
      </div>

      {/* Vessel Optimization Components */}
      <VesselRecommendation />
      <VesselComparison />
    </div>
  );
}

export default Vessel;