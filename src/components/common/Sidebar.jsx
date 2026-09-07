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
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-800 bg-slate-950">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-800 px-6">
        <div>
          <h1 className="text-xl font-bold text-white">
            Freight<span className="text-blue-500">AI</span>
          </h1>

          <p className="mt-1 text-xs text-slate-500">
            Intelligent Chartering
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
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
      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-800 p-4">
        <div className="rounded-lg bg-slate-900 p-3">
          <p className="text-xs font-medium text-slate-300">
            AI Engine
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs text-slate-500">
              System operational
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;