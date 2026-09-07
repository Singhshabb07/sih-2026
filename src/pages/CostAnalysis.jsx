import CostComparison from "../components/cost/CostComparison";
import CostOptimization from "../components/cost/CostOptimization";

function CostAnalysis() {
  return (
    <div className="space-y-6">
      {/* Page Header Section */}
      <div>
        {/* Main Title: Pure Crisp White */}
        <h1 className="text-3xl font-black text-white tracking-tight">
          Cost Optimization
        </h1>

        {/* Page Subtitle: High legibility Light Gray #B5BCBE */}
        <p className="mt-1.5 text-sm font-medium text-[#B5BCBE]">
          Compare chartering scenarios and identify the lowest expected cost.
        </p>
      </div>

      {/* Sub-components Grid / Flow */}
      <CostOptimization />
      <CostComparison />
    </div>
  );
}

export default CostAnalysis;