'use client'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 15 })
  const display = useTransform(spring, v => `${Math.round(v)}${suffix}`)
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => mv.set(target), 100)
      return () => clearTimeout(timer)
    }
  }, [inView, mv, target])
  return <motion.span ref={ref}>{display}</motion.span>
}

const stats = [
  { emoji: '🧠', value: 200, suffix: '+', label: 'DSA Problems Solved',   sub: 'Arrays · Trees · Graphs · DP',       color: 'from-blue-500/20 to-blue-600/5',       border: 'border-blue-500/20',    num: 'text-blue-400'    },
  { emoji: '🔗', value: 15,  suffix: '+', label: 'REST APIs Built',       sub: 'Across 3 production-style projects', color: 'from-emerald-500/20 to-emerald-600/5', border: 'border-emerald-500/20', num: 'text-emerald-400' },
  { emoji: '🏗️', value: 3,   suffix: '',  label: 'Backend Projects',      sub: 'End-to-end, production-ready',       color: 'from-purple-500/20 to-purple-600/5',   border: 'border-purple-500/20',  num: 'text-purple-400'  },
  { emoji: '☕', value: 21,  suffix: '',  label: 'Java Version (Latest)', sub: 'Java 8 → 21 full experience',        color: 'from-orange-500/20 to-orange-600/5',   border: 'border-orange-500/20',  num: 'text-orange-400'  },
]

export default function Highlights() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px' })

  return (
    <section className="section-pad" style={{ background: 'var(--card)' }}>
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label">⚡ Engineering Highlights</p>
          <h2 className="section-title">Impact in numbers 📊</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg mx-auto">The real output of 2 years of deep Java & backend engineering work.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative card card-hover p-6 text-center group overflow-hidden border ${s.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className="text-4xl mb-3">{s.emoji}</div>
                <div className={`text-4xl font-black font-mono mb-1 ${s.num}`}>
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="font-bold text-[var(--fg)] text-sm mb-1">{s.label}</div>
                <div className="text-xs text-[var(--muted)]">{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {[
            { emoji: '🏆', label: 'Java Full Stack Developer Certified' },
            { emoji: '📚', label: 'DSA with Java Certified' },
            { emoji: '🎓', label: 'Udemy Java Programming' },
          ].map(c => (
            <div key={c.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-400/20 bg-brand-500/5 text-xs font-medium text-[var(--muted)]">
              <span className="text-base">{c.emoji}</span>
              {c.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
