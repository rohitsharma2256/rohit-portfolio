export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-4">
      <div className="max-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-[var(--muted)]">
          ☕ rohit.dev · Built with Next.js, TypeScript &amp; lots of ☕
        </div>
        <div className="flex items-center gap-5">
          {[
            { emoji: '💻', href: 'https://github.com/rohitsharma2256',               label: 'GitHub' },
            { emoji: '🔗', href: 'https://linkedin.com/in/rohit-sharma-14aab6293', label: 'LinkedIn' },
            { emoji: '📧', href: 'mailto:rohitsharma250602@gmail.com',               label: 'Email' },
          ].map(({ emoji, href, label }) => (
            <a key={label} href={href}
               target={href.startsWith('http') ? '_blank' : undefined}
               rel="noopener noreferrer"
               className="text-[var(--muted)] hover:text-brand-400 transition-colors duration-200 text-sm flex items-center gap-1.5">
              <span>{emoji}</span>{label}
            </a>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Rohit Rajendra Sharma 🇮🇳
        </p>
      </div>
    </footer>
  )
}
