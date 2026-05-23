import { GraduationCap, BookOpen } from 'lucide-react'
import Section from './Section.jsx'
import SectionBadge from './SectionBadge.jsx'
import { education } from '../data/content.js'

const icons = [BookOpen, GraduationCap]

export default function Education() {
  return (
    <Section id="education">
      <SectionBadge number="05" label="Education & Certifications" />
      <h2 className="heading-2 mb-10">How I got here.</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((e, i) => {
          const Icon = icons[i] || BookOpen
          return (
            <div key={e.title} className="glass-card p-6">
              <Icon size={22} className="text-accent2" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-slate-100 mt-3">
                {e.title}
              </h3>
              <p className="text-accent text-sm mt-1">{e.institution}</p>
              <p className="text-slate-400 text-xs font-mono mt-1">{e.period}</p>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                {e.detail}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
