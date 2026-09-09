import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  TrendingUp,
  Ship,
  Anchor,
  IndianRupee,
  ShieldAlert,
  Lightbulb,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Forecasting",
    path: "/forecasting",
    icon: TrendingUp,
  },
  {
    name: "Vessels",
    path: "/vessels",
    icon: Ship,
  },
  {
    name: "Ports",
    path: "/ports",
    icon: Anchor,
  },
  {
    name: "Cost Analysis",
    path: "/cost",
    icon: IndianRupee,
  },
  {
    name: "Risk Analysis",
    path: "/risk",
    icon: ShieldAlert,
  },
  {
    name: "Recommendations",
    path: "/recommendations",
    icon: Lightbulb,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-orange-500/15 bg-[#0a1224]/95 backdrop-blur-2xl">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-orange-500/15 px-6">
        <div>
          <h1 className="text-xl font-black tracking-tight text-white">
            Freight<span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">AI</span>
          </h1>

          <p className="mt-0.5 text-xs font-semibold tracking-wider text-orange-400/80">
            Logistics & Chartering
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1.5 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.35)]"
                    : "text-slate-400 hover:bg-orange-500/10 hover:text-orange-400"
                }`
              }
            >
              <Icon size={19} />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-orange-500/15 p-4">
        <div className="rounded-xl border border-orange-500/20 bg-[#0d172e]/80 p-3.5 backdrop-blur-md">
          <p className="text-xs font-bold text-slate-200">
            Logistics Engine
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium text-emerald-400">
              System operational
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;