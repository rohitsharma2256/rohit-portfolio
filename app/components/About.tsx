'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  { emoji: '🔗', title: 'API Design',           color: 'from-blue-500/20 to-blue-600/5',      border: 'border-blue-500/30',    text: 'text-blue-400',    desc: 'REST APIs with clean contracts, proper HTTP semantics, and global exception handling that production systems depend on.' },
  { emoji: '🗄️', title: 'Database Engineering',  color: 'from-emerald-500/20 to-emerald-600/5', border: 'border-emerald-500/30', text: 'text-emerald-400', desc: 'Normalized PostgreSQL schemas, efficient JPA queries, and transaction-safe concurrent operations.' },
  { emoji: '⚙️', title: 'Systems Design',         color: 'from-purple-500/20 to-purple-600/5',  border: 'border-purple-500/30',  text: 'text-purple-400',  desc: 'Layered architecture, service abstraction, and separation of concerns — scalability and reliability baked in from day one.' },
  { emoji: '🤖', title: 'AI Integration',          color: 'from-orange-500/20 to-orange-600/5',  border: 'border-orange-500/30',  text: 'text-orange-400',  desc: 'Spring AI and MCP to let LLM agents safely drive real backend operations — designing full agentic workflows.' },
]

const funFacts = [
  { emoji: '☕', text: 'Powered by coffee & Java' },
  { emoji: '🧠', text: '200+ LeetCode problems solved' },
  { emoji: '🎯', text: 'Clean code enthusiast' },
  { emoji: '🏗️', text: '3 production-style projects built' },
  { emoji: '🚀', text: 'Always learning new tech' },
  { emoji: '🔒', text: 'Concurrency & transactions nerd' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-pad">
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* LEFT */}
          <div>
            <p className="section-label">👨‍💻 About Me</p>
            <h2 className="section-title">
              Backend engineer who thinks in <span className="gradient-text">systems</span>
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed text-sm">
              <p>
                I&apos;m a Computer Engineering graduate 🎓 (Mumbai University, 2024) who went deep into the Java
                ecosystem — not just enough to pass interviews, but enough to build{' '}
                <span className="text-[var(--fg)] font-semibold">three end-to-end production-style backends</span> that
                solve real business problems 💼.
              </p>
              <p>
                My focus is building systems that are <span className="text-[var(--fg)] font-semibold">reliable under load</span> 🔒 —
                concurrency-safe bookings, transactionally consistent data, and APIs that fail gracefully
                rather than silently. Every project pushed me to understand the <em>&ldquo;why&rdquo;</em> behind the
                architecture, not just the implementation.
              </p>
              <p>
                Lately I&apos;ve been working at the intersection of backend engineering and AI 🤖 — using Spring AI
                and MCP to let LLM agents safely drive real backend operations. It&apos;s a frontier I genuinely love.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['☕ Java 8–21', '📝 SQL', '🌱 Spring Boot', '🗄️ PostgreSQL', '🔗 REST APIs', '🐳 Docker', '🤖 Spring AI', '🧩 MCP'].map(t => (
                <span key={t} className="tag text-xs">{t}</span>
              ))}
            </div>

            {/* Fun facts */}
            <div className="mt-8">
              <p className="text-xs font-mono font-semibold text-[var(--muted)] uppercase tracking-wider mb-3">⚡ Quick facts</p>
              <div className="grid grid-cols-2 gap-2">
                {funFacts.map(f => (
                  <div key={f.text} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-500/5 border border-brand-500/10 text-xs text-[var(--muted)]">
                    <span className="text-base">{f.emoji}</span>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — pillars */}
          <div>
            <p className="text-xs font-mono font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">🏗️ What I specialise in</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`relative card card-hover p-5 group cursor-default overflow-hidden border ${p.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className="text-3xl mb-3">{p.emoji}</div>
                    <h3 className={`font-bold text-sm mb-2 ${p.text}`}>{p.title}</h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 card p-5 flex items-center gap-4"
            >
              <div className="text-4xl">🎓</div>
              <div>
                <p className="font-bold text-[var(--fg)] text-sm">B.E. Computer Engineering</p>
                <p className="text-xs text-[var(--muted)]">Mumbai University · 2024 · CGPA 7.0</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="tag text-xs">🏆 Java Full Stack Certified</span>
                  <span className="tag text-xs">📚 DSA with Java</span>
                  <span className="tag text-xs">🎓 Udemy Java Programming</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}