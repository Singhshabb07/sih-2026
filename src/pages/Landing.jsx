
import {
  ArrowRight,
  Anchor,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe2,
  IndianRupee,
  ShieldCheck,
  Ship,
  TrendingDown,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

const services = [
  {
    image: img2,
    number: "01",
    icon: BarChart3,
    title: "Freight Forecasting",
    description:
      "Predict future freight rates using historical market behaviour, seasonality and key economic signals.",
    link: "/forecasting",
  },
  {
    image: img3,
    number: "02",
    icon: Ship,
    title: "Vessel Intelligence",
    description:
      "Identify the most suitable vessel class based on cargo, route, capacity and operational constraints.",
    link: "/vessels",
  },
  {
    image: img4,
    number: "03",
    icon: Anchor,
    title: "Port Intelligence",
    description:
      "Analyse port compatibility, congestion and infrastructure constraints before chartering.",
    link: "/ports",
  },
  {
    image: img1,
    number: "04",
    icon: ShieldCheck,
    title: "Risk & Cost Optimization",
    description:
      "Compare chartering scenarios and identify lower-cost opportunities with controlled operational risk.",
    link: "/recommendations",
  },
];

const ports = [
  "Paradip",
  "Vizag",
  "Gangavaram",
  "Gopalpur",
  "Dhamra",
  "Haldia",
  "Sagar-Sandheads",
];

const flow = [
  {
    icon: BarChart3,
    title: "Freight Forecast",
    text: "Understand where the market is moving.",
  },
  {
    icon: Ship,
    title: "Vessel Analysis",
    text: "Match cargo with the right vessel.",
  },
  {
    icon: Anchor,
    title: "Port Analysis",
    text: "Check infrastructure and congestion.",
  },
  {
    icon: IndianRupee,
    title: "Cost Analysis",
    text: "Compare chartering scenarios.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Analysis",
    text: "Identify volatility and operational risks.",
  },
];

function ServiceCard({ image, number, icon: Icon, title, description, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link to={link}>
        <div className="overflow-hidden rounded-3xl border border-orange-500/20 bg-[#0d172e]/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-orange-400/50 hover:shadow-[0_30px_70px_rgba(249,115,22,0.2)]">
          <div className="relative h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d172e] via-[#0d172e]/40 to-transparent" />

            <span className="absolute left-5 top-5 rounded-full border border-orange-400/30 bg-[#0a1224]/90 px-4 py-2 text-xs font-bold text-orange-300 backdrop-blur-md">
              {number}
            </span>

            <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25">
              <Icon size={21} />
            </div>
          </div>

          <div className="p-7">
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-orange-400 group-hover:text-orange-300">
              Explore intelligence
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function HeroStat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400 shadow-sm">
        <Icon size={18} />
      </div>

      <div>
        <p className="text-lg font-black text-white">{value}</p>
        <p className="text-xs font-medium text-slate-400">{label}</p>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080e1a] text-slate-100 selection:bg-orange-500 selection:text-white">

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden bg-gradient-to-br from-[#080e1a] via-[#0d172e] to-[#060a14]">

        {/* Smooth colour atmosphere */}
        <div className="absolute -left-40 top-20 h-[550px] w-[550px] rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute right-[-150px] top-[-100px] h-[550px] w-[550px] rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[30%] h-[450px] w-[650px] rounded-full bg-yellow-600/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-16 lg:px-10">

          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/30 bg-[#0d172e]/60 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <img
                  src={img1}
                  alt="Bulk cargo vessel"
                  className="h-[390px] w-full rounded-[1.5rem] object-cover"
                />

                <div className="absolute bottom-6 left-6 rounded-2xl border border-orange-500/30 bg-[#0a1224]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <Waves className="text-orange-400" size={22} />
                    <div>
                      <p className="text-sm font-bold text-white">
                        Intelligent Chartering
                      </p>
                      <p className="text-xs text-orange-300/80">
                        Data → Forecast → Decision
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-xl">
                <BrainCircuit size={15} className="text-orange-400" />
                AI-Powered Freight Intelligence
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Smarter decisions for{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                  bulk cargo chartering.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Forecast freight markets, optimize vessel selection, analyse
                port constraints and identify the right chartering opportunity
                — all through one intelligent decision platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/dashboard"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:shadow-orange-500/40"
                >
                  Explore Platform
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 rounded-xl border border-orange-500/30 bg-[#0d172e]/80 px-6 py-3.5 text-sm font-bold text-orange-200 backdrop-blur-xl transition-all duration-500 ease-in-out hover:border-orange-400 hover:text-white"
                >
                  Discover More
                  <ChevronDown size={17} />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-5 border-t border-orange-500/15 pt-7">
                <HeroStat icon={Ship} value="4" label="Vessel Classes" />
                <HeroStat icon={Anchor} value="7" label="East Coast Ports" />
                <HeroStat icon={Globe2} value="5" label="Origin Markets" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative border-y border-orange-500/20 bg-[#070d18]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-7 sm:grid-cols-4 lg:px-10">
          {[
            ["Forecast", "Future freight rates"],
            ["Optimize", "Charter decisions"],
            ["Analyse", "Port constraints"],
            ["Protect", "Against market risk"],
          ].map(([title, text]) => (
            <div key={title} className="flex items-center gap-3">
              <CheckCircle2 size={19} className="text-orange-400" />
              <div>
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="text-xs text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section
        id="platform"
        className="relative overflow-hidden bg-gradient-to-b from-[#080e1a] via-[#0d172e] to-[#080e1a] px-6 py-24 lg:px-10"
      >
        <div className="absolute left-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-[-200px] bottom-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              One intelligent platform
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              From market data to a{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">chartering decision.</span>
            </h2>

            <p className="mt-4 text-slate-300">
              Replace reactive freight-market exploration with a structured,
              AI-assisted workflow for short and medium-term chartering.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE FLOW */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0a1224] via-[#0e1a33] to-[#0a1224] border-y border-orange-500/20 px-6 py-24 lg:px-10">
        <div className="absolute inset-0 bg-orange-500/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Decision Pipeline
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Intelligence that moves with the market.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-slate-300">
                Every decision starts with market intelligence and moves
                through forecasting, vessel and port analysis before arriving
                at an actionable chartering recommendation.
              </p>
            </div>

            <div className="space-y-4">
              {flow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-5 rounded-2xl border border-orange-500/20 bg-[#0d172e]/80 p-5 shadow-lg backdrop-blur-xl transition hover:border-orange-400/40"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/20">
                      <Icon size={21} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-300">
                        {item.text}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-orange-400/80">
                      0{index + 1}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* EAST COAST NETWORK */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#080e1a] via-[#0d172e] to-[#080e1a] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

            <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/30 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <img
                src={img4}
                alt="Indian port"
                className="h-[430px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080e1a]/90 via-[#080e1a]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-orange-500/30 bg-[#0a1224]/90 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  East Coast Network
                </p>
                <p className="mt-1 text-xl font-black text-white">
                  7 key ports
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Port Intelligence
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Built for India's{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">East Coast.</span>
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Evaluate port infrastructure and operational conditions before
                committing to a vessel and chartering strategy.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {ports.map((port, index) => (
                  <motion.div
                    key={port}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-orange-500/20 bg-[#0d172e]/70 px-4 py-3 backdrop-blur-sm transition hover:border-orange-400/40"
                  >
                    <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_8px_#f97316]" />
                    <span className="text-sm font-bold text-slate-200">
                      {port}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0a1224] via-[#0f1d38] to-[#0a1224] border-t border-orange-500/20 px-6 py-20 lg:px-10">
        <div className="absolute -left-32 top-[-150px] h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-180px] h-[450px] w-[450px] rounded-full bg-amber-500/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/30 backdrop-blur-xl">
            <TrendingDown size={25} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
            Turn freight uncertainty into an advantage.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Use forecasting, vessel intelligence, port analysis, cost
            optimization and risk signals to make better chartering decisions.
          </p>

          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-1 hover:shadow-orange-500/50"
          >
            Enter the Dashboard
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-orange-500/15 bg-[#050912] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-sm">
              <Ship size={17} />
            </div>

            <span className="font-black text-white">
              Freight<span className="text-orange-400">IQ</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Clock3 size={14} className="text-orange-400" />
            Intelligent Freight Forecasting & Chartering
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;

