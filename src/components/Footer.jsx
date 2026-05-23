import { identity } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="section-container text-center text-sm text-slate-500">
        <p>
          © 2026 {identity.name} · Built with React, Tailwind &amp; Vite
        </p>
      </div>
    </footer>
  )
}
