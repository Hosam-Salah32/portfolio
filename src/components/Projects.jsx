import { ExternalLink, Folder } from 'lucide-react'
import Section from './Section.jsx'
import { projects, identity } from '../data/content.js'

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="heading-2 mb-10">
        <span className="text-accent font-mono text-2xl mr-2">04.</span>
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/40 p-6 hover:-translate-y-1 hover:border-accent/60 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <Folder
                size={32}
                className="text-accent"
                aria-hidden="true"
              />
              <a
                href={identity.githubRepos}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${p.title} on GitHub`}
                className="text-slate-400 hover:text-accent transition-colors"
              >
                <ExternalLink size={20} aria-hidden="true" />
              </a>
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">
              {p.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed flex-1">
              {p.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-slate-400">
              {p.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a
              href={identity.githubRepos}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:text-cyan-300"
            >
              View on GitHub <ExternalLink size={14} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
