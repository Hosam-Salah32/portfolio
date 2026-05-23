import { Database, TrendingUp, DollarSign } from 'lucide-react'
import Section from './Section.jsx'
import SectionBadge from './SectionBadge.jsx'
import { aboutIntro, aboutStats } from '../data/content.js'

const icons = [Database, TrendingUp, DollarSign]

export default function About() {
  return (
    <Section id="about">
      <SectionBadge number="01" label="About" />
      <h2 className="heading-2 mb-6">From raw data to revenue decisions.</h2>
      <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
        {aboutIntro}
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {aboutStats.map((s, i) => {
          const Icon = icons[i] || Database
          return (
            <div key={s.label} className="glass-card p-6">
              <Icon size={22} className="text-accent" aria-hidden="true" />
              <div className="outcome-metric mt-4">{s.value}</div>
              <p className="mt-1 text-slate-200 font-semibold">{s.label}</p>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                {s.detail}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
