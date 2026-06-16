'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    emoji: '📅',
    badge: '🔒 Concurrency & Transactions',
    title: 'Global Class Offering Booking System',
    tagline: 'Never let two users book the same slot — ever.',
    problem: 'A global education platform needed to manage course schedules across timezones and prevent double-booking under simultaneous requests — a classic distributed concurrency problem.',
    architecture: 'REST-first layered architecture → Controller → Service → Repository. Timezone engine via Java Time API. Conflict detection via Spring @Transactional.',
    achievements: [
      '⚡ 15+ REST endpoints covering full booking lifecycle',
      '🔒 Prevented double-booking via @Transactional integrity',
      '🌍 Multi-timezone scheduling — zero cross-region time errors',
      '🗄️ Normalized PostgreSQL schema with 5+ entities, optimized FKs',
      '🐳 Dockerized with Docker Compose · end-to-end Postman tested',
    ],
    stack: ['☕ Java 21', '🌱 Spring Boot', '🐘 PostgreSQL', '🐳 Docker', '🔒 @Transactional', '🕐 Java Time API'],
    github: 'https://github.com/rohitsharma2256',
    color: 'blue',
  },
  {
    emoji: '🎫',
    badge: '🤖 AI-Ready Backend',
    title: 'AI Ticketing System — Helpdesk Backend',
    tagline: 'Self-triaging tickets — from creation to resolution.',
    problem: 'Support teams need automated ticket triage: classification, priority detection (Low/Medium/High), and team routing without manual intervention — while staying observable and debuggable.',
    architecture: 'Pluggable classification service designed for drop-in LLM integration. DTO pattern for clean API contracts. Centralized global exception handling — observable errors across all endpoints.',
    achievements: [
      '🔄 Full lifecycle: creation → priority detection → routing → resolution',
      '🧩 Pluggable rule/LLM classifier — swap AI provider without refactoring',
      '🛡️ Centralized global exception handling across all APIs',
      '📦 DTO pattern for clean persistence / API contract separation',
      '🗄️ PostgreSQL schema across users, tickets & teams · Postman validated',
    ],
    stack: ['☕ Java 21', '🌱 Spring Boot', '🤖 Spring AI', '🐘 PostgreSQL', '📦 DTO Pattern', '🛡️ Global Exception Handling'],
    github: 'https://github.com/rohitsharma2256',
    color: 'emerald',
  },
  {
    emoji: '🛒',
    badge: '🕹️ Agentic AI · MCP',
    title: 'NextGenCommerce — Agentic AI E-commerce Backend',
    tagline: 'Your shopping cart, operated by an AI agent.',
    problem: 'Standard e-commerce backends aren\'t built for AI agents to safely drive operations. This solves: how do you let an LLM agent manage a shopping cart against a live backend without breaking invariants?',
    architecture: 'Clean layered architecture with shared business logic. MCP tool layer sits above the service layer — AI agents call tools, not raw HTTP endpoints. Guarantees business rules always run.',
    achievements: [
      '🧩 4 MCP tools: addToCart, removeFromCart, getCart, getCartTotal',
      '🤖 LLM agents execute full cart workflows against live services',
      '🔗 Single service layer serves both AI-agent and REST client paths',
      '🧪 Tested end-to-end using Claude Desktop as the MCP client',
      '🔒 AI path cannot bypass core business logic validations',
    ],
    stack: ['☕ Java', '🌱 Spring Boot', '🐘 PostgreSQL', '🧩 MCP', '🤖 Spring AI', '🖥️ Claude Desktop'],
    github: 'https://github.com/rohitsharma2256',
    color: 'purple',
  },
]

const colorBorder: Record<string, string> = {
  blue:    'border-blue-500/40',
  emerald: 'border-emerald-500/40',
  purple:  'border-purple-500/40',
}
const colorGlow: Record<string, string> = {
  blue:    'hover:shadow-blue-500/10',
  emerald: 'hover:shadow-emerald-500/10',
  purple:  'hover:shadow-purple-500/10',
}
const colorAccent: Record<string, string> = {
  blue:    'text-blue-400 bg-blue-500/10 border-blue-500/30',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  purple:  'text-purple-400 bg-purple-500/10 border-purple-500/30',
}
const dotColor: Record<string, string> = {
  blue: 'bg-blue-400', emerald: 'bg-emerald-400', purple: 'bg-purple-400',
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-pad">
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">🚀 Featured Projects</p>
          <h2 className="section-title">Systems built, problems solved 🏗️</h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto text-sm leading-relaxed">
            Each project was scoped around a <strong className="text-[var(--fg)]">real engineering challenge</strong> — concurrency 🔒, AI integration 🤖, or agentic workflows 🕹️ — not just a tech demo.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`card border p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ${colorBorder[p.color]} ${colorGlow[p.color]}`}
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-6">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-3xl flex-shrink-0 ${colorAccent[p.color]}`}>
                  {p.emoji}
                </div>
                <div>
                  <span className={`text-xs font-mono font-bold tracking-wider uppercase ${colorAccent[p.color].split(' ')[0]}`}>
                    {p.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-[var(--fg)] mt-0.5 leading-snug">{p.title}</h3>
                  <p className="text-sm text-[var(--muted)] italic mt-0.5">&ldquo;{p.tagline}&rdquo;</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* Left */}
                <div className="lg:col-span-3 space-y-5">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[var(--muted)] uppercase tracking-wider mb-2">🔍 Problem</h4>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[var(--muted)] uppercase tracking-wider mb-2">🏗️ Architecture</h4>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{p.architecture}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.stack.map(t => (
                      <span key={t} className="tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right — achievements */}
                <div className="lg:col-span-2">
                  <h4 className="text-xs font-mono font-bold text-[var(--muted)] uppercase tracking-wider mb-3">🏆 Key Achievements</h4>
                  <ul className="space-y-2.5">
                    {p.achievements.map(a => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColor[p.color]}`} />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-brand-400 transition-all duration-200 text-sm font-medium">
                      <Github size={15} /> 💻 Source Code
                    </a>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-[var(--border)] text-[var(--muted)] text-sm opacity-50 cursor-not-allowed">
                      <ExternalLink size={14} /> Demo Soon
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
