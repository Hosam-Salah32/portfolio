import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import Section from './Section.jsx'
import SectionBadge from './SectionBadge.jsx'
import { identity } from '../data/content.js'

export default function Contact() {
  return (
    <Section id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center">
          <SectionBadge number="06" label="What's Next" />
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Get In Touch
        </h2>
        <p className="mt-6 text-slate-300 leading-relaxed">
          I am open to data analytics and analytics engineering roles,
          especially in healthcare on US time zones. If you want to talk about a
          project, role, or collaboration, my inbox is open.
        </p>
        <a
          href={`mailto:${identity.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-accent px-7 py-3 text-accent font-semibold hover:bg-accent/10 transition-colors"
        >
          <Mail size={18} aria-hidden="true" /> Say Hello
        </a>
        <div className="mt-10 flex justify-center gap-6 text-slate-400">
          <a
            href={`mailto:${identity.email}`}
            aria-label="Email Hossam"
            className="hover:text-accent transition-colors"
          >
            <Mail size={22} aria-hidden="true" />
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-accent transition-colors"
          >
            <Linkedin size={22} aria-hidden="true" />
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-accent transition-colors"
          >
            <Github size={22} aria-hidden="true" />
          </a>
          <a
            href={`tel:${identity.phone.replace(/\s+/g, '')}`}
            aria-label="Phone"
            className="hover:text-accent transition-colors"
          >
            <Phone size={22} aria-hidden="true" />
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500 font-mono">
          {identity.email} · {identity.phone}
        </p>
      </div>
    </Section>
  )
}
