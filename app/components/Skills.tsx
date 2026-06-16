'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const groups = [
  {
    emoji: '⚙️', label: 'Backend Engineering', color: 'blue',
    skills: ['☕ Java 8–21', '🌱 Spring Boot', '🗺️ Spring MVC', '🗃️ Spring Data JPA', '🔗 Hibernate', '📡 REST API Design', '🔐 JWT Auth', '📦 Maven'],
  },
  {
    emoji: '🗄️', label: 'Database Engineering', color: 'emerald',
    skills: ['🐘 PostgreSQL', '🔶 Oracle', '📐 Schema Design', '🔁 JPA / Hibernate ORM', '⚖️ Transactions', '🔒 Concurrency Control', '📝 SQL'],
  },
  {
    emoji: '☁️', label: 'Cloud & DevOps', color: 'purple',
    skills: ['☁️ AWS (Beanstalk · RDS · ECS)', '🐳 Docker', '🐙 Docker Compose', '🐧 Linux', '🌿 Git', '⚡ GitHub Actions', '📮 Postman'],
  },
  {
    emoji: '🤖', label: 'AI Integration', color: 'orange',
    skills: ['🤖 Spring AI', '🧩 Model Context Protocol (MCP)', '🔮 LLM Integration', '🕹️ Agentic Workflows', '🖥️ Claude Desktop'],
  },
  {
    emoji: '🧠', label: 'Core Computer Science', color: 'pink',
    skills: ['🧮 DSA (200+ problems)', '🏗️ OOP', '🔧 Low-Level Design', '🗃️ DBMS', '💾 Operating Systems', '📊 Complexity Analysis', '🔍 Debugging'],
  },
]

const colorMap: Record<string, string> = {
  blue:    'border-blue-500/30 bg-blue-500/8 text-blue-300',
  emerald: 'border-emerald-500/30 bg-emerald-500/8 text-emerald-300',
  purple:  'border-purple-500/30 bg-purple-500/8 text-purple-300',
  orange:  'border-orange-500/30 bg-orange-500/8 text-orange-300',
  pink:    'border-pink-500/30 bg-pink-500/8 text-pink-300',
}
const headerColor: Record<string, string> = {
  blue:    'text-blue-400 bg-blue-500/10 border-blue-500/20',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  purple:  'text-purple-400 bg-purple-500/10 border-purple-500/20',
  orange:  'text-orange-400 bg-orange-500/10 border-orange-500/20',
  pink:    'text-pink-400 bg-pink-500/10 border-pink-500/20',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-pad" style={{ background: 'var(--card)' }}>
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">🛠️ Technical Skills</p>
          <h2 className="section-title">The stack behind the projects</h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto text-sm leading-relaxed">
            Not a list of technologies I&apos;ve heard of — these are tools I&apos;ve actually <strong className="text-[var(--fg)]">built with, debugged, and shipped</strong> 🚢 in real projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="card card-hover p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-xl ${headerColor[g.color]}`}>
                  {g.emoji}
                </div>
                <h3 className="font-bold text-[var(--fg)] text-sm">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map(s => (
                  <span key={s} className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${colorMap[g.color]}`}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
