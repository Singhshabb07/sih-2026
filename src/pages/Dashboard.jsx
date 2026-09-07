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
    <div className="min-h-screen space-y-8 rounded-[2rem] bg-gradient-to-br from-[#B5BCBE] via-[#878C8F] to-[#4D5054] p-2">

      {/* ================= HEADER ================= */}
      <motion.section
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden rounded-[2rem] border border-[#B5BCBE]/30 bg-gradient-to-br from-[#111111] via-[#2A2C30] to-[#4D5054] px-7 py-8 shadow-[0_25px_70px_rgba(17,17,17,0.28)]"
      >
        {/* blended background lights */}
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-gradient-to-br from-[#B5BCBE]/35 via-[#878C8F]/20 to-transparent blur-3xl" />

        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-gradient-to-tr from-[#4D5054]/40 via-[#878C8F]/20 to-transparent blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B5BCBE]/5 to-[#878C8F]/10" />

        <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[#B5BCBE]">
              <div className="rounded-lg bg-[#878C8F]/20 p-1.5">
                <BrainCircuit size={17} />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
                AI Freight Intelligence
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-[#B5BCBE] sm:text-4xl">
              Freight Intelligence Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#878C8F]">
              Monitor freight rates, market movements, vessel suitability and
              operational risks through one intelligent decision workspace.
            </p>
          </div>

          {/* Market status + Home */}
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">

            {/* Home Button */}
            <Link
              to="/"
              className="group flex items-center justify-center gap-2 rounded-2xl border border-[#B5BCBE]/20 bg-gradient-to-br from-[#878C8F]/20 via-[#4D5054]/20 to-[#2A2C30]/30 px-4 py-3 text-sm font-bold text-[#B5BCBE] shadow-lg backdrop-blur-xl transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#B5BCBE]/40 hover:bg-[#878C8F]/30"
            >
              <Home
                size={18}
                className="text-[#B5BCBE] transition-all duration-500 group-hover:scale-110"
              />

              <span>Home</span>
            </Link>

            {/* Market status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="flex items-center gap-3 rounded-2xl border border-[#B5BCBE]/20 bg-gradient-to-br from-[#878C8F]/20 via-[#4D5054]/20 to-[#2A2C30]/30 px-4 py-3 shadow-lg backdrop-blur-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#878C8F]/30 to-[#4D5054]/30">
                <CalendarDays size={19} className="text-[#B5BCBE]" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#B5BCBE]/70">
                  Market Date
                </p>

                <p className="text-sm font-bold text-[#B5BCBE]">
                  September 7, 2026
                </p>
              </div>

              <div className="ml-2 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#878C8F]/30 to-[#B5BCBE]/20 px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B5BCBE]" />

                <span className="text-[10px] font-bold text-[#B5BCBE]">
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
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D5054]">
              Market Snapshot
            </p>

            <h2 className="mt-1 text-xl font-black text-[#111111]">
              Key Performance Indicators
            </h2>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-[#878C8F]/20 bg-gradient-to-r from-[#B5BCBE]/60 to-[#878C8F]/40 px-3 py-1.5 text-xs font-semibold text-[#2A2C30] sm:flex">
            <Activity size={13} />
            Updated moments ago
          </div>
        </div>

        <KPISection />
      </section>

      {/* ================= ANALYTICS ================= */}
      <section>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D5054]">
              Market Analytics
            </p>

            <h2 className="mt-1 text-xl font-black text-[#111111]">
              Freight Market Intelligence
            </h2>
          </div>

          <button className="hidden items-center gap-1 rounded-xl bg-gradient-to-r from-[#B5BCBE]/70 to-[#878C8F]/50 px-3 py-2 text-xs font-bold text-[#2A2C30] transition-all duration-500 ease-in-out hover:from-[#878C8F]/70 hover:to-[#B5BCBE]/60 sm:flex">
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
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D5054]">
            Operational Intelligence
          </p>

          <h2 className="mt-1 text-xl font-black text-[#111111]">
            Risk Monitoring
          </h2>
        </div>

        <RiskOverview />
      </section>
    </div>
  );
}

export default Dashboard;
