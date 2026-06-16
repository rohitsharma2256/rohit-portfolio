'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const USERNAME = 'rohitsharma2256'

export default function GitHubStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-pad" style={{ background: 'var(--card)' }}>
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label">GitHub Activity</p>
          <h2 className="section-title">Code speaks louder than claims</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg mx-auto">
            Real projects, real commits. Every repository below represents an engineering challenge I tackled end-to-end.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=6097f8&icon_color=6097f8&text_color=6b7a9e&bg_color=0d1628&ring_color=6097f8`}
              alt="GitHub Stats"
              className="w-full rounded-2xl border border-[var(--border)]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=6097f8&text_color=6b7a9e&bg_color=0d1628`}
              alt="Top Languages"
              className="w-full rounded-2xl border border-[var(--border)]"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 text-center"
        >
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            <Github size={18} />
            View All Repositories
            <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
