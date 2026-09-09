import RiskAnalysisComponent from "../components/risk/RiskAnalysis";
import RiskAlert from "../components/risk/RiskAlert";
import CongestionStatus from "../components/risk/CongestionStatus";

function RiskAnalysis() {
  return (
    <div className="space-y-6">
      {/* Page Header Section */}
      <div>
        {/* Main Title: Pure Crisp White */}
        <h1 className="text-3xl font-black tracking-tight text-white">
          Risk Analysis
        </h1>

        {/* Page Subtitle: High legibility Light Gray #B5BCBE */}
        <p className="mt-1.5 text-sm font-medium text-slate-400">
          Monitor freight volatility, congestion and operational risks.
        </p>
      </div>

      {/* Risk Analysis Dashboard Widgets */}
      <RiskAnalysisComponent />
      <CongestionStatus />
      <RiskAlert />
    </div>
  );
}

export default RiskAnalysis;