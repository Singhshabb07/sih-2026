import { Link } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  Globe2,
  Menu,
  Ship,
  Sparkles,
} from "lucide-react";


function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-orange-500/15 bg-[#0a1224]/85 backdrop-blur-2xl">
      <div className="flex h-20 items-center justify-between px-6">
        {/* Brand */}
        <Link
          to="/dashboard"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]">
            <Ship size={21} className="text-white" />

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/40" />
          </div>

          <div className="hidden sm:block">
            <div className="text-lg font-black tracking-tight text-white">
              Freight<span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">AI</span>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400/80">
              Maritime Logistics
            </p>
          </div>
        </Link>

        {/* Center status */}
        <div className="hidden items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 lg:flex">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="text-xs font-semibold text-orange-300">
            AI Engine Operational
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-xl border border-orange-500/20 bg-[#0d172e]/80 px-3.5 py-2 text-xs font-semibold text-slate-300 md:flex">
            <Globe2 size={15} className="text-orange-400" />
            East Coast India
          </div>

          <button className="relative rounded-xl border border-orange-500/20 bg-[#0d172e]/80 p-2.5 text-slate-300 transition duration-300 hover:border-orange-400 hover:text-orange-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <Bell size={19} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
          </button>

          <div className="hidden items-center gap-3 rounded-xl border border-orange-500/20 bg-[#0d172e]/80 px-3.5 py-2 md:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 text-xs font-black text-white shadow-md">
              FM
            </div>

            <div className="leading-tight">
              <p className="text-xs font-bold text-white">
                Freight Manager
              </p>
              <p className="text-[10px] font-medium text-slate-400">
                Operations
              </p>
            </div>

            <ChevronDown size={14} className="text-slate-400" />
          </div>

          <button className="rounded-xl border border-orange-500/20 bg-[#0d172e]/80 p-2.5 text-slate-300 md:hidden">
            <Menu size={19} />
          </button>
        </div>
      </div>

      {/* Sub navigation */}
      <div className="hidden border-t border-orange-500/10 px-6 md:block">
        <div className="flex h-11 items-center justify-between">
          <div className="flex items-center gap-6">
            <NavItem to="/dashboard">Overview</NavItem>
            <NavItem to="/forecasting">Market Forecast</NavItem>
            <NavItem to="/vessels">Vessel Intelligence</NavItem>
            <NavItem to="/ports">Port Intelligence</NavItem>
            <NavItem to="/cost">Cost Optimization</NavItem>
            <NavItem to="/risk">Risk</NavItem>
          </div>

          <Link
            to="/recommendations"
            className="flex items-center gap-2 text-xs font-bold text-orange-400 transition duration-300 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
          >
            <Sparkles size={14} className="animate-pulse" />
            AI Recommendations
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="text-xs font-semibold text-slate-400 transition duration-300 hover:text-orange-400"
    >
      {children}
    </Link>
  );
}

export default Navbar;