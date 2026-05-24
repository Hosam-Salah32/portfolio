import { motion } from 'framer-motion'
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Database,
  TrendingUp,
  BarChart3,
} from 'lucide-react'
import {
  identity,
  heroStatement,
  heroMetrics,
  heroStack,
} from '../data/content.js'
import AnimatedCounter from './AnimatedCounter.jsx'
import TechIcon from './TechIcon.jsx'

const specialtyNodes = [
  {
    key: 'bi',
    label: 'BI Dashboards',
    Icon: BarChart3,
    x: 50,
    y: 14,
    labelX: 50,
    labelY: -3,
  },
  {
    key: 'forecast',
    label: 'Forecasting',
    Icon: TrendingUp,
    x: 81.2,
    y: 68,
    labelX: 82,
    labelY: 84,
  },
  {
    key: 'pipelines',
    label: 'Data Pipelines',
    Icon: Database,
    x: 18.8,
    y: 68,
    labelX: 18,
    labelY: 84,
  },
]

const ringArcs = [
  'M 59.32 15.23 A 36 36 0 0 1 84.77 59.32',
  'M 75.46 75.46 A 36 36 0 0 1 24.54 75.46',
  'M 15.23 59.32 A 36 36 0 0 1 40.68 15.23',
]

function SpecialtyCircle() {
  return (
    <div
      className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[24rem] lg:h-[24rem] mx-auto"
      role="img"
      aria-label="Specialties cycle: data pipelines, forecasting, BI dashboards"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-violet-400/15 to-transparent blur-2xl"
      />

      {/* Ring */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ring-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        {ringArcs.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#ring-edge)"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center text-center px-4">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
            Remarkable
          </span>
          <span className="mt-0.5 text-xl sm:text-2xl font-extrabold tracking-tight outcome-metric">
            Insights
          </span>
        </div>
      </div>

      {/* Node icons */}
      {specialtyNodes.map((n) => (
        <div
          key={`${n.key}-icon`}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-accent/25 blur-md"
            />
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-accent/60 bg-slate-900/90 backdrop-blur flex items-center justify-center text-accent shadow-[0_0_22px_-4px_rgba(34,211,238,0.6)]">
              <n.Icon size={28} strokeWidth={1.75} aria-hidden="true" />
            </div>
          </div>
        </div>
      ))}

      {/* Node labels (positioned outside the ring) */}
      {specialtyNodes.map((n) => (
        <span
          key={`${n.key}-label`}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-xs sm:text-sm font-mono text-slate-200 whitespace-nowrap"
          style={{ left: `${n.labelX}%`, top: `${n.labelY}%` }}
        >
          {n.label}
        </span>
      ))}
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
})

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Layered background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div
        aria-hidden="true"
        className="glow-blob -z-10 w-[520px] h-[520px] bg-cyan-500/30 top-[-120px] left-[-120px] animate-glow-drift"
      />
      <div
        aria-hidden="true"
        className="glow-blob -z-10 w-[480px] h-[480px] bg-violet-500/25 bottom-[-100px] right-[-80px] animate-glow-drift-slow"
      />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          {/* Left: text */}
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-accent text-sm sm:text-base font-mono mb-4"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100"
            >
              {identity.name}.
            </motion.h1>

            <motion.h2
              {...fadeUp(0.16)}
              className="mt-3 text-xl sm:text-2xl lg:text-[2rem] font-semibold tracking-tight text-slate-300"
            >
              {identity.title}
            </motion.h2>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              {heroStatement}
            </motion.p>

            {/* Tech logo bar */}
            <motion.div
              {...fadeUp(0.42)}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-slate-400"
              aria-label="Core stack"
            >
              {heroStack.map((s) => (
                <div
                  key={s.slug}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                  title={s.label}
                >
                  <TechIcon slug={s.slug} size={20} />
                  <span className="text-xs font-mono">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-slate-900 font-semibold hover:bg-cyan-300 transition-colors"
              >
                <Mail size={18} aria-hidden="true" /> Email
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-5 py-2.5 text-slate-100 hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={18} aria-hidden="true" /> LinkedIn
              </a>
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-5 py-2.5 text-slate-100 hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={18} aria-hidden="true" /> GitHub
              </a>
              <a
                href={identity.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-5 py-2.5 text-slate-100 hover:border-accent hover:text-accent transition-colors"
              >
                <Download size={18} aria-hidden="true" /> Download CV
              </a>
            </motion.div>

          </div>

          {/* Right: specialty circle graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <SpecialtyCircle />
          </motion.div>
        </div>

        {/* Headline metric strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Headline impact metrics"
        >
          {heroMetrics.map((m) => (
            <div key={m.label} className="glass-card-static p-5">
              <div className="outcome-metric">
                <AnimatedCounter
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                />
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-snug">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
