import {
  TrendingDown,
  CalendarDays,
  Target,
  Lightbulb,
} from "lucide-react";

function ForecastResult() {
  return (
    /* Main Card Container: Surface #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6">
        {/* Main Title: Crisp White */}
        <h2 className="text-lg font-black text-white">Forecast Result</h2>

        {/* Subtitle: Light Gray #B5BCBE */}
        <p className="mt-1 text-sm font-medium text-[#B5BCBE]">
          AI-generated market outlook
        </p>
      </div>

      {/* Featured Rate Highlight Box: Dark Jet Black #111111 */}
      <div className="rounded-2xl border border-[#4D5054] bg-[#111111] p-5 shadow-inner">
        <p className="text-sm font-medium text-[#B5BCBE]">Predicted Rate — Day 15</p>

        <div className="mt-2 flex items-end gap-3">
          {/* Main Price Readout: White */}
          <span className="text-4xl font-black text-white">$22.6</span>
          <span className="mb-1 text-sm font-medium text-[#878C8F]">/ MT</span>
        </div>

        {/* Percentage Drop Metric: Light Gray with High Contrast */}
        <div className="mt-3 flex items-center gap-2 text-sm font-bold text-[#B5BCBE]">
          <TrendingDown size={17} className="text-[#B5BCBE]" />
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

      {/* AI Recommendation Container: Jet Black #111111 */}
      <div className="mt-5 rounded-2xl border border-[#4D5054] bg-[#111111] p-4">
        <p className="text-sm font-bold text-white">AI Recommendation</p>

        {/* Recommendation Prose: Clear light contrast #B5BCBE */}
        <p className="mt-2 text-sm leading-6 font-medium text-[#B5BCBE]">
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
    /* Sub-Metric Card: Jet Black #111111 */
    <div className="rounded-2xl border border-[#4D5054]/80 bg-[#111111] p-4 shadow-sm">
      <div className="flex items-center gap-2 text-[#878C8F]">
        <div className="text-[#B5BCBE]">{icon}</div>
        <span className="text-xs font-semibold text-[#878C8F]">{title}</span>
      </div>

      {/* Value Readout: Crisp White */}
      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

export default ForecastResult;