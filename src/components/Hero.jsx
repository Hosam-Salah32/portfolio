import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download, MapPin, Sparkles } from 'lucide-react'
import {
  identity,
  heroStatement,
  specialties,
  heroMetrics,
  heroStack,
  currentlyBuilding,
} from '../data/content.js'
import AnimatedCounter from './AnimatedCounter.jsx'
import TechIcon from './TechIcon.jsx'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
})

function Monogram() {
  return (
    <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/40 via-violet-400/30 to-transparent blur-2xl"
      />
      <div className="relative w-full h-full rounded-full glass-card-static flex items-center justify-center">
        <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
          <span className="text-accent">H</span>
          <span className="text-accent2">S</span>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-accent/30 animate-pulse-soft"
        />
      </div>
    </div>
  )
}

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
              className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-400"
            >
              {identity.title}
            </motion.h2>

            {/* Specialty chips */}
            <motion.ul
              {...fadeUp(0.22)}
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Specialties"
            >
              {specialties.map((s) => (
                <li
                  key={s}
                  className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent"
                >
                  {s}
                </li>
              ))}
            </motion.ul>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              {heroStatement}
            </motion.p>

            <motion.div
              {...fadeUp(0.36)}
              className="mt-5 flex items-center gap-2 text-slate-400 text-sm"
            >
              <MapPin size={16} className="text-accent" aria-hidden="true" />
              <span>{identity.location}</span>
            </motion.div>

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

            {/* Currently building */}
            <motion.div
              {...fadeUp(0.58)}
              className="mt-8 flex items-start gap-2.5 text-sm text-slate-400 max-w-2xl"
            >
              <Sparkles
                size={16}
                className="text-accent2 mt-0.5 flex-none animate-pulse-soft"
                aria-hidden="true"
              />
              <p>
                <span className="font-mono text-accent2 mr-2">Now</span>
                {currentlyBuilding.replace(/^Now /, '')}
              </p>
            </motion.div>
          </div>

          {/* Right: monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <Monogram />
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
