'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const contactLinks = [
  { emoji: '📧', label: 'Email',    href: 'mailto:rohitsharma250602@gmail.com', value: 'rohitsharma250602@gmail.com' },
  { emoji: '📱', label: 'Phone',    href: 'tel:+919370256399',                  value: '+91 93702 56399' },
  { emoji: '🔗', label: 'LinkedIn', href: 'https://linkedin.com/in/rohit-sharma-14aab6293', value: 'rohit-sharma-14aab6293' },
  { emoji: '💻', label: 'GitHub',   href: 'https://github.com/rohitsharma2256', value: 'rohitsharma2256' },
  { emoji: '🧠', label: 'LeetCode', href: 'https://leetcode.com/u/rohitsharma250602', value: 'rohitsharma250602' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <section id="contact" className="section-pad">
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">📬 Contact</p>
          <h2 className="section-title">Let&apos;s build something together 🚀</h2>
          <p className="text-[var(--muted)] max-w-lg mx-auto text-sm leading-relaxed">
            Open to <strong className="text-[var(--fg)]">Software Engineer</strong> and <strong className="text-[var(--fg)]">Backend Engineer</strong> roles
            at <strong className="text-[var(--fg)]">any company</strong> — product-based, startup, or service 🌍.
            If you&apos;re hiring or want to collaborate, I&apos;d love to connect! 🤝
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="card p-6">
              <h3 className="font-bold text-[var(--fg)] mb-5 text-sm">📋 Direct Contacts</h3>
              <div className="space-y-4">
                {contactLinks.map(({ emoji, label, href, value }) => (
                  <a key={label} href={href}
                     target={href.startsWith('http') ? '_blank' : undefined}
                     rel="noopener noreferrer"
                     className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-brand-500/20 transition-colors duration-200">
                      {emoji}
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)]">{label}</div>
                      <div className="text-sm text-[var(--fg)] group-hover:text-brand-400 transition-colors duration-200 font-medium truncate max-w-[200px]">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-[var(--fg)]">🟢 Available for opportunities</span>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                💼 Open to SE / Backend Engineer roles at <strong className="text-[var(--fg)]">any company</strong>.<br/>
                📍 Comfortable with on-site (Mumbai · Pune · Bangalore) or 🌐 remote.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === 'sent' ? (
              <div className="card p-10 flex flex-col items-center justify-center text-center h-full gap-4">
                <div className="text-6xl">🎉</div>
                <CheckCircle2 size={36} className="text-green-400" />
                <h3 className="text-lg font-bold text-[var(--fg)]">Message sent! ✅</h3>
                <p className="text-sm text-[var(--muted)]">Thanks for reaching out 🙏. I&apos;ll reply within 24 hours!</p>
                <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }) }}
                        className="btn-ghost text-sm px-4 py-2">
                  Send another 📩
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'name',  label: '👤 Name',  placeholder: 'Your name',        type: 'text' },
                    { name: 'email', label: '📧 Email', placeholder: 'your@email.com',   type: 'email' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="text-xs text-[var(--muted)] font-semibold mb-1.5 block">{f.label}</label>
                      <input name={f.name} type={f.type} value={form[f.name as keyof typeof form]}
                             onChange={handleChange} required placeholder={f.placeholder}
                             className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-brand-400 transition-colors duration-200" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs text-[var(--muted)] font-semibold mb-1.5 block">📋 Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} required
                         placeholder="Software Engineer opportunity / Collaboration 🤝"
                         className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-brand-400 transition-colors duration-200" />
                </div>
                <div>
                  <label className="text-xs text-[var(--muted)] font-semibold mb-1.5 block">💬 Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                            placeholder="Tell me about the role or project... 🚀"
                            className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-brand-400 transition-colors duration-200 resize-none" />
                </div>
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} /> ⚠️ Something went wrong. Please email directly.
                  </div>
                )}
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending... ✈️
                    </span>
                  ) : (
                    <><Send size={16} /> 🚀 Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
