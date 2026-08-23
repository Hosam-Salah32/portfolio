import { ExternalLink } from 'lucide-react'
import Section from './Section.jsx'
import SectionBadge from './SectionBadge.jsx'
import TechIcon from './TechIcon.jsx'
import { projects, identity } from '../data/content.js'

export default function Projects() {
  return (
    <Section id="projects">
      <SectionBadge number="04" label="Projects" />
      <h2 className="heading-2 mb-10">Things I have shipped.</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`glass-card p-6 flex flex-col hover:-translate-y-1 ${
              p.image ? 'sm:col-span-2' : ''
            }`}
          >
            {p.image && (
              <a
                href={p.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full ${p.title} screenshot`}
                className="mb-5 block overflow-hidden rounded-lg border border-slate-700 bg-white"
              >
                <img
                  src={p.image}
                  alt={p.imageAlt ?? `${p.title} interface`}
                  loading="lazy"
                  className="block w-full transition-transform duration-500 hover:scale-[1.015]"
                />
              </a>
            )}
            <p className="outcome-metric text-lg leading-snug">{p.outcome}</p>
            <div className="mt-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
              <a
                href={identity.githubRepos}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${p.title} on GitHub`}
                className="text-slate-400 hover:text-accent transition-colors flex-none"
              >
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed flex-1">
              {p.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((tech, i) => (
                <li
                  key={`${tech.name}-${i}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-300 border border-slate-700"
                >
                  <TechIcon slug={tech.slug} size={12} className="text-accent" />
                  {tech.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
