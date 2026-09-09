import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CalendarDays,
  ChevronRight,
  Home,
} from "lucide-react";

import { Link } from "react-router-dom";

import KPISection from "../components/dashboard/KPISection";
import FreightChart from "../components/dashboard/FreightChart";
import MarketTrend from "../components/dashboard/MarketTrend";
import RiskOverview from "../components/dashboard/RiskOverview";

function Dashboard() {
  return (
    <div className="min-h-screen space-y-8 rounded-[2rem] bg-[#080e1a] p-2 text-slate-100">

      {/* ================= HEADER ================= */}
      <motion.section
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-[#0a1224] via-[#0d172e] to-[#070e1c] px-7 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* blended background lights */}
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-orange-400">
              <div className="rounded-lg bg-orange-500/15 p-1.5 border border-orange-500/20">
                <BrainCircuit size={17} />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-400">
                AI Freight Intelligence
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Freight Intelligence Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Monitor freight rates, market movements, vessel suitability and
              operational risks through one intelligent decision workspace.
            </p>
          </div>

          {/* Market status + Home */}
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">

            {/* Home Button */}
            <Link
              to="/"
              className="group flex items-center justify-center gap-2 rounded-2xl border border-orange-500/30 bg-[#0d172e]/80 px-4 py-3 text-sm font-bold text-orange-400 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
            >
              <Home
                size={18}
                className="text-orange-400 transition-all duration-300 group-hover:scale-110"
              />

              <span>Home</span>
            </Link>

            {/* Market status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="flex items-center gap-3 rounded-2xl border border-orange-500/30 bg-[#0d172e]/80 px-4 py-3 shadow-lg backdrop-blur-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 border border-orange-500/20">
                <CalendarDays size={19} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  Market Date
                </p>

                <p className="text-sm font-bold text-white">
                  September 7, 2026
                </p>
              </div>

              <div className="ml-2 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[10px] font-bold text-emerald-400">
                  LIVE
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= KPI ================= */}
      <section>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400">
              Market Snapshot
            </p>

            <h2 className="mt-1 text-xl font-black text-white">
              Key Performance Indicators
            </h2>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-orange-500/20 bg-[#0d172e]/80 px-3 py-1.5 text-xs font-semibold text-orange-300 sm:flex">
            <Activity size={13} className="text-orange-400 animate-pulse" />
            Updated moments ago
          </div>
        </div>

        <KPISection />
      </section>

      {/* ================= ANALYTICS ================= */}
      <section>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400">
              Market Analytics
            </p>

            <h2 className="mt-1 text-xl font-black text-white">
              Freight Market Intelligence
            </h2>
          </div>

          <button className="hidden items-center gap-1 rounded-xl border border-orange-500/30 bg-[#0d172e]/80 px-3 py-2 text-xs font-bold text-orange-300 transition-all duration-300 hover:border-orange-400 hover:text-white sm:flex">
            View detailed analysis
            <ChevronRight size={15} />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
          <FreightChart />
          <MarketTrend />
        </div>
      </section>

      {/* ================= RISK ================= */}
      <section>
        <div className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400">
            Operational Intelligence
          </p>

          <h2 className="mt-1 text-xl font-black text-white">
            Risk Monitoring
          </h2>
        </div>

        <RiskOverview />
      </section>
    </div>
  );
}

export default Dashboard;
