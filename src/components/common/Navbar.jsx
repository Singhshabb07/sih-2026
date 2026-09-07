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
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#03111f]/85 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-6">
        {/* Brand */}
        <Link
          to="/dashboard"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/10">
            <Ship size={21} />

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30" />
          </div>

          <div className="hidden sm:block">
            <div className="text-lg font-black tracking-tight">
              Freight<span className="text-cyan-400">AI</span>
            </div>

            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
              Maritime Intelligence
            </p>
          </div>
        </Link>

        {/* Center status */}
        <div className="hidden items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-2 lg:flex">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="text-xs font-medium text-slate-400">
            AI Engine Operational
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400 md:flex">
            <Globe2 size={15} className="text-cyan-400" />
            East Coast India
          </div>

          <button className="relative rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300">
            <Bell size={19} />

            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </button>

          <div className="hidden items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 md:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-xs font-bold text-slate-950">
              FM
            </div>

            <div className="leading-tight">
              <p className="text-xs font-semibold text-white">
                Freight Manager
              </p>
              <p className="text-[10px] text-slate-500">
                Operations
              </p>
            </div>

            <ChevronDown size={14} className="text-slate-500" />
          </div>

          <button className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-slate-400 md:hidden">
            <Menu size={19} />
          </button>
        </div>
      </div>

      {/* Sub navigation */}
      <div className="hidden border-t border-white/5 px-6 md:block">
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
            className="flex items-center gap-2 text-xs font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            <Sparkles size={14} />
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
      className="text-xs font-medium text-slate-500 transition hover:text-cyan-300"
    >
      {children}
    </Link>
  );
}

export default Navbar;