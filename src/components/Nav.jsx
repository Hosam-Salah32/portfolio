import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, identity } from '../data/content.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-slate-900/85 backdrop-blur border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex items-center justify-between h-16"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-bold tracking-tight text-slate-100 hover:text-accent transition-colors"
        >
          {identity.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-300 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-slate-200 hover:text-accent"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-800">
          <ul className="section-container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="block py-2 text-slate-200 hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
