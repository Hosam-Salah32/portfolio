import Section from './Section.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="heading-2 mb-10">
        <span className="text-accent font-mono text-2xl mr-2">03.</span>
        Experience
      </h2>
      <ol className="relative border-l border-slate-800 ml-3 space-y-12">
        {experience.map((job) => (
          <li key={`${job.role}-${job.company}`} className="pl-8 relative">
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-slate-900"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                {job.role}{' '}
                <span className="text-accent">@ {job.company}</span>
              </h3>
              <p className="text-sm font-mono text-slate-400">{job.period}</p>
            </div>
            <ul className="mt-4 space-y-2 text-slate-300 leading-relaxed">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-1.5 flex-none">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
