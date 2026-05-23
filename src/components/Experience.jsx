import Section from './Section.jsx'
import SectionBadge from './SectionBadge.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionBadge number="03" label="Experience" />
      <h2 className="heading-2 mb-10">Where the impact landed.</h2>
      <div className="space-y-6">
        {experience.map((job) => (
          <article key={`${job.role}-${job.company}`} className="glass-card p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                {job.role}{' '}
                <span className="text-accent">@ {job.company}</span>
              </h3>
              <p className="text-sm font-mono text-slate-400">{job.period}</p>
            </div>
            <ul className="space-y-3.5">
              {job.bullets.map((b, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[9rem_1fr] gap-3 sm:gap-5 items-baseline"
                >
                  <span className="outcome-metric text-base sm:text-lg whitespace-nowrap">
                    {b.impact}
                  </span>
                  <span className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {b.action}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
