
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
        <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/55 shadow-[0_20px_60px_rgba(48,175,255,0.12)] backdrop-blur-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(48,175,255,0.2)]">
          <div className="relative h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2C30]/80 via-[#4D5054]/10 to-transparent" />

            <span className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-bold text-[#2A2C30] backdrop-blur-md">
              {number}
            </span>

            <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-[#2A2C30] shadow-lg">
              <Icon size={21} />
            </div>
          </div>

          <div className="p-7">
            <h3 className="text-xl font-bold text-[#111111]">{title}</h3>

            <p className="mt-3 text-sm leading-6 text-[#4D5054]">
              {description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#2A2C30]">
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
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-[#2A2C30] shadow-sm">
        <Icon size={18} />
      </div>

      <div>
        <p className="text-lg font-bold text-[#111111]">{value}</p>
        <p className="text-xs text-[#878C8F]">{label}</p>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#B5BCBE] text-[#111111]">

      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden bg-gradient-to-br from-[#2A2C30] via-[#4D5054] to-[#B5BCBE]">

        {/* Smooth colour atmosphere */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#4D5054]/60 blur-3xl" />
        <div className="absolute right-[-150px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#878C8F]/80 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[30%] h-[450px] w-[650px] rounded-full bg-[#B5BCBE]/70 blur-3xl" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-16 lg:px-10">

          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-[#2A2C30]/30 via-[#4D5054]/30 to-[#878C8F]/40 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/30 p-2 shadow-[0_30px_100px_rgba(48,175,255,0.25)] backdrop-blur-xl">
                <img
                  src={img1}
                  alt="Bulk cargo vessel"
                  className="h-[390px] w-full rounded-[1.5rem] object-cover"
                />

                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/70 bg-white/75 px-5 py-4 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <Waves className="text-[#2A2C30]" size={22} />
                    <div>
                      <p className="text-sm font-bold text-[#111111]">
                        Intelligent Chartering
                      </p>
                      <p className="text-xs text-[#878C8F]">
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#111111] backdrop-blur-xl">
                <BrainCircuit size={15} />
                AI-Powered Freight Intelligence
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
                Smarter decisions for{" "}
                <span className="bg-gradient-to-r from-[#111111] via-[#2A2C30] to-[#4D5054] bg-clip-text text-transparent">
                  bulk cargo chartering.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#2A2C30] sm:text-lg">
                Forecast freight markets, optimize vessel selection, analyse
                port constraints and identify the right chartering opportunity
                — all through one intelligent decision platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/dashboard"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#2A2C30] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2A2C30]/25 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:bg-[#111111]"
                >
                  Explore Platform
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/60 px-6 py-3.5 text-sm font-bold text-[#2A2C30] backdrop-blur-xl transition-all duration-500 ease-in-out hover:bg-white/80"
                >
                  Discover More
                  <ChevronDown size={17} />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-5 border-t border-white/60 pt-7">
                <HeroStat icon={Ship} value="4" label="Vessel Classes" />
                <HeroStat icon={Anchor} value="7" label="East Coast Ports" />
                <HeroStat icon={Globe2} value="5" label="Origin Markets" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative border-y border-white/70 bg-gradient-to-r from-[#B5BCBE] via-white to-[#4D5054]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-7 sm:grid-cols-4 lg:px-10">
          {[
            ["Forecast", "Future freight rates"],
            ["Optimize", "Charter decisions"],
            ["Analyse", "Port constraints"],
            ["Protect", "Against market risk"],
          ].map(([title, text]) => (
            <div key={title} className="flex items-center gap-3">
              <CheckCircle2 size={19} className="text-[#4D5054]" />
              <div>
                <p className="text-sm font-bold text-[#111111]">{title}</p>
                <p className="text-xs text-[#878C8F]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section
        id="platform"
        className="relative overflow-hidden bg-gradient-to-b from-white via-[#4D5054]/25 to-[#B5BCBE]/70 px-6 py-24 lg:px-10"
      >
        <div className="absolute left-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-[#4D5054]/30 blur-3xl" />
        <div className="absolute right-[-200px] bottom-0 h-[500px] w-[500px] rounded-full bg-[#878C8F]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2A2C30]">
              One intelligent platform
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111111] sm:text-4xl">
              From market data to a{" "}
              <span className="text-[#2A2C30]">chartering decision.</span>
            </h2>

            <p className="mt-4 text-[#4D5054]">
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2A2C30] via-[#4D5054] to-[#878C8F] px-6 py-24 lg:px-10">
        <div className="absolute inset-0 bg-white/15" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#111111]">
                Decision Pipeline
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#111111] sm:text-4xl">
                Intelligence that moves with the market.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#2A2C30]">
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
                    className="flex items-center gap-5 rounded-2xl border border-white/70 bg-white/55 p-5 shadow-lg backdrop-blur-xl"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#2A2C30] shadow-md">
                      <Icon size={21} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-[#111111]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#4D5054]">
                        {item.text}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-[#878C8F]">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#878C8F] via-[#B5BCBE] to-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 shadow-[0_30px_80px_rgba(48,175,255,0.12)]">
              <img
                src={img4}
                alt="Indian port"
                className="h-[430px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2C30]/70 via-transparent to-[#B5BCBE]/20" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/75 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  East Coast Network
                </p>
                <p className="mt-1 text-xl font-black text-[#111111]">
                  7 key ports
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2A2C30]">
                Port Intelligence
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#111111] sm:text-4xl">
                Built for India's{" "}
                <span className="text-[#2A2C30]">East Coast.</span>
              </h2>

              <p className="mt-5 leading-7 text-[#4D5054]">
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
                    className="flex items-center gap-3 rounded-xl border border-white bg-white/60 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#2A2C30]" />
                    <span className="text-sm font-semibold text-[#2A2C30]">
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2A2C30] via-[#4D5054] to-[#B5BCBE] px-6 py-20 lg:px-10">
        <div className="absolute -left-32 top-[-150px] h-[400px] w-[400px] rounded-full bg-white/25 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-180px] h-[450px] w-[450px] rounded-full bg-[#878C8F]/70 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-[#2A2C30] shadow-xl backdrop-blur-xl">
            <TrendingDown size={25} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-[#111111] sm:text-4xl">
            Turn freight uncertainty into an advantage.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#2A2C30]">
            Use forecasting, vessel intelligence, port analysis, cost
            optimization and risk signals to make better chartering decisions.
          </p>

          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#111111] shadow-xl transition hover:-translate-y-1"
          >
            Enter the Dashboard
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-[#B5BCBE] via-white to-[#4D5054] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2A2C30] text-white">
              <Ship size={17} />
            </div>

            <span className="font-black text-[#111111]">
              Freight<span className="text-[#2A2C30]">IQ</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#878C8F]">
            <Clock3 size={14} />
            Intelligent Freight Forecasting & Chartering
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;

