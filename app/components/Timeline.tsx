'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  { emoji: '🎓', date: 'May 2024', title: 'Graduated — B.E. Computer Engineering', detail: 'Mumbai University · CGPA 7.0 · Solid foundation in OS, DBMS, OOP, and algorithms.', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30' },
  { emoji: '🧠', date: 'Mid 2023', title: 'Deep-dived into Java & DSA', detail: 'Solved 200+ LeetCode problems (arrays, strings, trees, graphs, DP) in Java. Completed Java Full Stack & DSA with Java certifications.', color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' },
  { emoji: '🌱', date: 'Late 2023', title: 'Mastered Spring Boot & backend fundamentals', detail: 'Built confidence with Spring MVC, Spring Data JPA, Hibernate, JWT auth, and REST API design. Started project one.', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' },
  { emoji: '🏗️', date: 'Early 2024', title: 'Shipped production-style backend projects', detail: 'Built Global Booking System and AI Ticketing System — fully end-to-end: schema design, API layer, Docker, and Postman validation.', color: 'text-purple-400 bg-purple-400/10 border-purple-400/30' },
  { emoji: '🤖', date: '2024 → Now', title: 'Entered the AI + Backend frontier', detail: 'Integrated Spring AI and Model Context Protocol. Built 4 MCP tools enabling LLM agents to drive real cart operations — tested with Claude Desktop.', color: 'text-orange-400 bg-orange-400/10 border-orange-400/30' },
]

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="timeline" className="section-pad">
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">🗓️ Learning Journey</p>
          <h2 className="section-title">From CS graduate to backend engineer 🚀</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg mx-auto">Every step was intentional — not just accumulating tech, but building real systems.</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              {i < milestones.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-[var(--border)] to-transparent" />
              )}
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center text-xl ${m.color}`}>
                {m.emoji}
              </div>
              <div className="pt-1">
                <span className="text-xs font-mono text-[var(--muted)] font-semibold">{m.date}</span>
                <h3 className="font-bold text-[var(--fg)] text-base mt-0.5 mb-2">{m.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{m.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
