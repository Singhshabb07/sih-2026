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
            <div className="min-h-screen bg-slate-950 text-white">
              <Sidebar />

              <div className="ml-64">
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