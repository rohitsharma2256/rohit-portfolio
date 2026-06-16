'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { label: '👤 About',    href: '#about' },
  { label: '🛠️ Skills',   href: '#skills' },
  { label: '🚀 Projects', href: '#projects' },
  { label: '🗓️ Timeline', href: '#timeline' },
  { label: '📬 Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark]         = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-[var(--border)]' : 'bg-transparent'
      }`}
    >
      <div className="max-container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

        <a href="#" className="font-mono font-bold text-base">
          <span className="text-[var(--fg)]">☕ rohit</span>
          <span className="text-brand-400">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--border)] transition-all duration-200"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="mailto:rohitsharma250602@gmail.com"
            className="btn-primary text-sm px-4 py-2"
          >
            🤝 Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-[var(--muted)]">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-[var(--muted)]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[var(--border)]"
          >
            <div className="max-container px-4 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[var(--muted)] hover:text-brand-400 transition-colors font-medium py-1"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:rohitsharma250602@gmail.com"
                className="btn-primary text-sm w-fit"
              >
                🤝 Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
