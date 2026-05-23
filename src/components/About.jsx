import Section from './Section.jsx'
import { aboutSummary } from '../data/content.js'

export default function About() {
  return (
    <Section id="about">
      <h2 className="heading-2 mb-8">
        <span className="text-accent font-mono text-2xl mr-2">01.</span>
        About
      </h2>
      <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
        {aboutSummary}
      </p>
    </Section>
  )
}
