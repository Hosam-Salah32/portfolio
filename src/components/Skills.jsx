import Section from './Section.jsx'
import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="heading-2 mb-8">
        <span className="text-accent font-mono text-2xl mr-2">02.</span>
        Skills
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 hover:border-accent/60 transition-colors"
          >
            <h3 className="text-slate-100 font-semibold mb-4">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-xs sm:text-sm font-mono px-3 py-1 rounded-full bg-slate-800/60 text-slate-300 border border-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
