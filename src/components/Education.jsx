import Section from './Section.jsx'
import { education } from '../data/content.js'

export default function Education() {
  return (
    <Section id="education">
      <h2 className="heading-2 mb-10">
        <span className="text-accent font-mono text-2xl mr-2">05.</span>
        Education & Certifications
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.title}
            className="rounded-lg border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="text-lg font-semibold text-slate-100">{e.title}</h3>
            <p className="text-accent text-sm mt-1">{e.institution}</p>
            <p className="text-slate-400 text-xs font-mono mt-1">{e.period}</p>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              {e.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
