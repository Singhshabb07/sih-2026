import {
  TrendingDown,
  CalendarDays,
  Target,
  Lightbulb,
} from "lucide-react";

function ForecastResult() {
  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-lg font-black text-white">Forecast Result</h2>

        <p className="mt-1 text-sm font-medium text-slate-400">
          AI-generated market outlook
        </p>
      </div>

      {/* Featured Rate Highlight Box */}
      <div className="rounded-2xl border border-orange-500/25 bg-[#070e1c] p-5 shadow-inner">
        <p className="text-sm font-semibold text-orange-400">Predicted Rate — Day 15</p>

        <div className="mt-2 flex items-end gap-3">
          <span className="text-4xl font-black text-white">$22.6</span>
          <span className="mb-1 text-sm font-semibold text-slate-400">/ MT</span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm font-bold text-emerald-400">
          <TrendingDown size={17} className="text-emerald-400" />
          8.9% below current rate
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Metric
          icon={<CalendarDays size={18} />}
          title="Best Entry"
          value="Day 12–16"
        />

        <Metric
          icon={<Target size={18} />}
          title="Confidence"
          value="87%"
        />

        <Metric
          icon={<TrendingDown size={18} />}
          title="Expected Low"
          value="$22.4 / MT"
        />

        <Metric
          icon={<Lightbulb size={18} />}
          title="Opportunity"
          value="Favourable"
        />
      </div>

      {/* AI Recommendation Container */}
      <div className="mt-5 rounded-2xl border border-orange-500/20 bg-[#070e1c] p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_8px_#f97316]" />
          <p className="text-sm font-bold text-white">AI Recommendation</p>
        </div>

        <p className="mt-2 text-sm leading-6 font-medium text-slate-300">
          Freight rates are expected to soften over the next two weeks.
          Consider entering a short-term charter around Day 12–16,
          subject to market and port conditions.
        </p>
      </div>
    </div>
  );
}

function Metric({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-orange-500/15 bg-[#070e1c] p-4 shadow-sm">
      <div className="flex items-center gap-2 text-slate-400">
        <div className="text-orange-400">{icon}</div>
        <span className="text-xs font-semibold text-slate-400">{title}</span>
      </div>

      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

export default ForecastResult;