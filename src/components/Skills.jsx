import Section from './Section.jsx'
import SectionBadge from './SectionBadge.jsx'
import TechIcon from './TechIcon.jsx'
import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionBadge number="02" label="Skills" />
      <h2 className="heading-2 mb-8">The stack I reach for.</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="glass-card p-6">
            <h3 className="text-slate-100 font-semibold mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono px-3 py-1.5 rounded-full bg-slate-800/60 text-slate-200 border border-slate-700 hover:border-accent/60 hover:text-accent transition-colors"
                >
                  <TechIcon slug={item.slug} size={14} className="text-accent" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
