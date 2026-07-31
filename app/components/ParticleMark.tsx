'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Particle {
  tx: number; ty: number   // target (assembled) position
  x: number; y: number     // current position
  vx: number; vy: number
  jitterSeed: number
}

export default function ParticleMark({
  glyph = '☕',
  size = 420,
  color = '96,151,248',   // brand blue rgb
  className = '',
}: { glyph?: string; size?: number; color?: string; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const startedRef = useRef(false)

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = size * dpr
    canvas.height = size * dpr
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    // Rasterize glyph offscreen to sample particle positions from its alpha
    const off = document.createElement('canvas')
    off.width = size
    off.height = size
    const offCtx = off.getContext('2d')
    if (!offCtx) return
    offCtx.font = `${Math.floor(size * 0.72)}px sans-serif`
    offCtx.textAlign = 'center'
    offCtx.textBaseline = 'middle'
    offCtx.fillText(glyph, size / 2, size / 2 + size * 0.04)
    const data = offCtx.getImageData(0, 0, size, size).data

    const step = 4
    const targets: { x: number; y: number }[] = []
    for (let y = 0; y < size; y += step) {
      for (let x = 0; x < size; x += step) {
        const alpha = data[(y * size + x) * 4 + 3]
        if (alpha > 80) targets.push({ x, y })
      }
    }

    particlesRef.current = targets.map(t => ({
      tx: t.x,
      ty: t.y,
      x: size / 2 + (Math.random() - 0.5) * size * 1.6,
      y: size / 2 + (Math.random() - 0.5) * size * 1.6,
      vx: 0,
      vy: 0,
      jitterSeed: Math.random() * Math.PI * 2,
    }))

    let raf: number
    let frame = 0
    startedRef.current = true

    const animate = () => {
      frame++
      ctx.clearRect(0, 0, size, size)
      const settleProgress = Math.min(1, frame / 90) // ~1.5s assemble at 60fps

      for (const p of particlesRef.current) {
        // ease toward target while assembling
        const ease = 0.06 + settleProgress * 0.02
        p.x += (p.tx - p.x) * ease
        p.y += (p.ty - p.y) * ease

        // gentle idle jitter once mostly settled
        const jitter = settleProgress > 0.85 ? Math.sin(frame * 0.02 + p.jitterSeed) * 0.6 : 0

        const dist = Math.hypot(p.tx - p.x, p.ty - p.y)
        const opacity = settleProgress < 1 ? 0.25 + settleProgress * 0.55 : Math.max(0.35, 1 - dist / 40)

        ctx.beginPath()
        ctx.fillStyle = `rgba(${color},${opacity})`
        ctx.arc(p.x + jitter, p.y + jitter, 1.1, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(raf)
  }, [glyph, size, color])

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: parallaxY }}
      className={`pointer-events-none select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: size,
          height: size,
          maskImage: 'radial-gradient(closest-side, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(closest-side, black 60%, transparent 100%)',
        }}
      />
    </motion.div>
  )
}
