import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react'
import { identity, heroStatement } from '../data/content.js'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]"
      />
      <div className="section-container w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm sm:text-base font-mono mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100"
        >
          {identity.name}.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-400"
        >
          {identity.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
        >
          {heroStatement}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-6 flex items-center gap-2 text-slate-400 text-sm"
        >
          <MapPin size={16} className="text-accent" aria-hidden="true" />
          <span>{identity.location}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-3"
        >
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
    </section>
  )
}
