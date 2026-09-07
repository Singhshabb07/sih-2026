import CharterRecommendation from "../components/recommendations/CharterRecommendation";
import OpportunityAlert from "../components/recommendations/OpportunityAlert";

function Recommendations() {
  return (
    <div className="space-y-6">
      {/* Page Header Section */}
      <div>
        {/* Main Title: Pure Crisp White */}
        <h1 className="text-3xl font-black tracking-tight text-white">
          Chartering Recommendations
        </h1>

        {/* Page Subtitle: High legibility Light Gray #B5BCBE */}
        <p className="mt-1.5 text-sm font-medium text-[#B5BCBE]">
          AI-driven recommendations for better chartering decisions.
        </p>
      </div>

      {/* Recommendation Widgets */}
      <OpportunityAlert />
      <CharterRecommendation />
    </div>
  );
}

export default Recommendations;