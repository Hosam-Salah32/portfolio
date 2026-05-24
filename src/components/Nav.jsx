import { useEffect, useState } from 'react'
import { Menu, X, Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'
import { identity } from '../data/content.js'

const contactLinks = [
  {
    key: 'email',
    label: 'Email',
    href: `mailto:${identity.email}`,
    display: identity.email,
    Icon: Mail,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: identity.linkedin,
    display: 'LinkedIn',
    Icon: Linkedin,
    external: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    href: identity.github,
    display: 'GitHub',
    Icon: Github,
    external: true,
  },
  {
    key: 'phone',
    label: 'Phone',
    href: `tel:${identity.phone.replace(/\s+/g, '')}`,
    display: identity.phone,
    Icon: Phone,
  },
]

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
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="font-bold tracking-tight text-slate-100 hover:text-accent transition-colors"
          >
            {identity.name.split(' ')[0]}
            <span className="text-accent">.</span>
          </a>
          <span
            aria-hidden="true"
            className="hidden md:inline-block h-4 w-px bg-slate-700"
          />
          <span
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-400"
            aria-label={`Location: ${identity.location}`}
          >
            <MapPin size={14} className="text-accent" aria-hidden="true" />
            {identity.location}
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          {contactLinks.map((c) => (
            <li key={c.key}>
              <a
                href={c.href}
                {...(c.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors"
                aria-label={c.label}
              >
                <c.Icon size={16} aria-hidden="true" />
                <span className="hidden lg:inline">{c.display}</span>
                <span className="lg:hidden">{c.label}</span>
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
            <li className="flex items-center gap-3 py-2 text-slate-300">
              <MapPin size={18} className="text-accent" aria-hidden="true" />
              <span>{identity.location}</span>
            </li>
            {contactLinks.map((c) => (
              <li key={c.key}>
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  onClick={close}
                  className="flex items-center gap-3 py-2 text-slate-200 hover:text-accent"
                >
                  <c.Icon size={18} aria-hidden="true" />
                  <span>{c.display}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
