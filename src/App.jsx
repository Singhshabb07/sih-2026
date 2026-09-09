import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Forecasting from "./pages/Forecasting";
import Vessel from "./pages/Vessel";
import Ports from "./pages/Ports";
import CostAnalysis from "./pages/CostAnalysis";
import RiskAnalysis from "./pages/RiskAnalysis";
import Recommendations from "./pages/Recommendations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="*"
          element={
            <div className="relative min-h-screen bg-[#080e1a] text-slate-100 antialiased selection:bg-orange-500 selection:text-white">
              {/* Background ambient lighting */}
              <div className="pointer-events-none fixed left-0 top-0 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[130px]" />
              <div className="pointer-events-none fixed right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[130px]" />

              <Sidebar />

              <div className="relative ml-64">
                <Navbar />

                <main className="p-6">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route
                      path="/forecasting"
                      element={<Forecasting />}
                    />
                    <Route path="/vessels" element={<Vessel />} />
                    <Route path="/ports" element={<Ports />} />
                    <Route path="/cost" element={<CostAnalysis />} />
                    <Route path="/risk" element={<RiskAnalysis />} />
                    <Route
                      path="/recommendations"
                      element={<Recommendations />}
                    />

                    <Route
                      path="*"
                      element={<Navigate to="/dashboard" replace />}
                    />
                  </Routes>
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;