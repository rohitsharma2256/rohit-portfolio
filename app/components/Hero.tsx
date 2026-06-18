'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Mail, Github, Linkedin, Terminal, MapPin, Coffee } from 'lucide-react'
import Image from 'next/image'

const TITLES = [
  '☕ Java Backend Developer',
  '🚀 Spring Boot Engineer',
  '🔗 REST API Architect',
  '🤖 AI-Integrated Systems Builder',
]

export default function Hero() {
  const [titleIdx, setTitleIdx]   = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const target = TITLES[titleIdx]
    let timeout: NodeJS.Timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2400)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else {
      setDeleting(false)
      setTitleIdx((titleIdx + 1) % TITLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIdx])

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 32 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="glow-orb w-[600px] h-[600px] bg-brand-500/10 -top-40 -left-40" />
      <div className="glow-orb w-[500px] h-[500px] bg-purple-400/8 bottom-0 right-0" />
      <div className="glow-orb w-[350px] h-[350px] bg-blue-400/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-container px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-left">
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                🟢 Open to SE & Backend Engineer roles · Any Company
              </span>
            </motion.div>

            <motion.p {...fadeUp(0.15)} className="text-brand-400 font-mono text-base mb-2 font-medium">
              👋 Hey there, I&apos;m
            </motion.p>

            <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-[1.05]">
              <span className="text-[var(--fg)]">Rohit </span>
              <span className="gradient-text">Sharma</span>
            </motion.h1>

            <motion.div {...fadeUp(0.3)} className="h-10 flex items-center mb-6">
              <span className="text-lg sm:text-xl font-mono text-brand-400 font-medium">
                {displayed}
                <span className="cursor-blink text-brand-400 ml-0.5">|</span>
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.35)} className="flex items-center gap-5 mb-6 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-brand-400" /> India 🇮🇳
              </span>
              <span className="flex items-center gap-1.5">
                <Coffee size={13} className="text-brand-400" /> Runs on ☕ & Java
              </span>
            </motion.div>

            <motion.p {...fadeUp(0.4)} className="text-[var(--muted)] text-base max-w-xl mb-10 leading-relaxed">
              I build <span className="text-[var(--fg)] font-semibold">production-grade backends</span> — scalable
              REST APIs 🔗, concurrency-safe systems 🔒, and AI-integrated services 🤖 using{' '}
              <span className="text-brand-400 font-mono">Java 21</span> &amp;{' '}
              <span className="text-brand-400 font-mono">Spring Boot</span>.
              Solved <span className="text-[var(--fg)] font-semibold">200+ DSA problems</span> 🧠 in Java.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-4 mb-10">
              <a href="/resume.pdf" download className="btn-primary">
                <Download size={17} />
                📄 Download Resume
              </a>
              <a href="#projects" className="btn-ghost">
                🚀 View Projects <ArrowRight size={17} />
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={17} />
                Contact Me
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="flex items-center gap-6">
              {[
                { icon: Github,   href: 'https://github.com/rohitsharma2256',              label: 'GitHub',   emoji: '💻' },
                { icon: Linkedin, href: 'https://linkedin.com/in/rohit-sharma-14aab6293', label: 'LinkedIn', emoji: '🔗' },
                { icon: Terminal, href: 'https://leetcode.com/u/rohitsharma250602',        label: 'LeetCode', emoji: '🧠' },
              ].map(({ icon: Icon, href, label, emoji }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-[var(--muted)] hover:text-brand-400 transition-colors duration-200 text-sm font-medium group">
                  <Icon size={17} className="group-hover:scale-110 transition-transform duration-200" />
                  <span>{emoji} {label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Bitmoji */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-brand-400/40 animate-spin"
                style={{ animationDuration: '14s' }}
              />
              <div className="absolute inset-4 rounded-full bg-brand-300/20 blur-2xl" />
              <div className="relative rounded-full p-1.5 bg-gradient-to-br from-brand-400 via-purple-400 to-blue-400 shadow-2xl shadow-brand-500/25">
                <div className="rounded-full p-1 bg-white">
                  <div className="relative w-56 h-56 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                    <Image
                      src="/profile.jpg"
                      alt="Rohit Sharma Profile"
                      fill
                      className="object-cover object-top scale-110"
                      sizes="(max-width: 768px) 100vw, 224px"
                      priority
                    />
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-brand-500/40 whitespace-nowrap border border-brand-400"
              >
                ☕ Java 21
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 0.4 }}
                className="absolute -bottom-4 -left-4 bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-purple-500/40 whitespace-nowrap border border-purple-400"
              >
                🧠 210+ DSA
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.8 }}
                className="absolute top-1/2 -right-10 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-green-500/40 -translate-y-1/2 whitespace-nowrap border border-green-400"
              >
                ✅Open to Work
              </motion.div>
            </div>

            {/* Code card */}
            <div className="code-block w-full max-w-sm text-left">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[var(--muted)] text-xs font-mono">RohitSharma.java</span>
              </div>
              <div className="space-y-0.5 text-sm font-mono">
                <p><span className="text-purple-400">public class</span> <span className="text-yellow-300">RohitSharma</span> {'{'}</p>
                <p className="pl-5"><span className="text-blue-400">String</span> role = <span className="text-green-400">&quot;Backend Engineer 🚀&quot;</span>;</p>
                <p className="pl-5"><span className="text-blue-400">String</span> stack = <span className="text-green-400">&quot;Java · Spring Boot · PostgreSQL&quot;</span>;</p>
                <p className="pl-5"><span className="text-blue-400">int</span> dsaSolved = <span className="text-orange-400">200</span>; <span className="text-[var(--muted)]">// 🧠</span></p>
                <p className="pl-5"><span className="text-blue-400">boolean</span> openToAll = <span className="text-orange-400">true</span>; <span className="text-[var(--muted)]">// ✅</span></p>
                <p className="pl-5"><span className="text-blue-400">String</span> location = <span className="text-green-400">&quot;India 🇮🇳&quot;</span>;</p>
                <p>{'}'}</p>
              </div>
            </div>

            {/* Stat pills */}
            <div className="flex gap-3 flex-wrap justify-center">
              {[
                { label: '3 Projects', emoji: '🏗️' },
                { label: '15+ APIs',   emoji: '🔗' },
                { label: 'AI + MCP',   emoji: '🤖' },
              ].map(({ label, emoji }) => (
                <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold">
                  {emoji} {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--muted)] font-mono">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-brand-400 to-transparent"
        />
      </motion.div>
    </section>
  )
}
