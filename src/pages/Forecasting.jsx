import ForecastForm from "../components/forecasting/ForecastForm";
import ForecastChart from "../components/forecasting/ForecastChart";
import ForecastResult from "../components/forecasting/ForecastResult";

function Forecasting() {
  return (
    <div className="space-y-6">
      {/* Page Header Section */}
      <div>
        {/* Main Title: Pure Crisp White */}
        <h1 className="text-3xl font-black tracking-tight text-white">
          Freight Forecasting
        </h1>

        {/* Page Subtitle: High legibility Light Gray #B5BCBE */}
        <p className="mt-1.5 text-sm font-medium text-[#B5BCBE]">
          Predict future freight rates using market and voyage parameters.
        </p>
      </div>

      {/* Input / Control Form */}
      <ForecastForm />

      {/* Visualization & Output Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ForecastChart />
        <ForecastResult />
      </div>
    </div>
  );
}

export default Forecasting;