'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'קביעת תור',
    description: 'פנו אלינו בטלפון או דרך האתר. נקבע תור בזמן הנוח לכם ונאשר את הפגישה.',
    icon: '📅',
  },
  {
    number: '02',
    title: 'ביקור ראשוני',
    description: 'שיחה מעמיקה על ההיסטוריה הרפואית והתסמינים — 45 עד 60 דקות מלאות.',
    icon: '🗣️',
  },
  {
    number: '03',
    title: 'בדיקות ואבחון',
    description: 'בדיקות עקיצה, בדיקות דם ובדיקות נוספות לאבחון מדויק ומבוסס.',
    icon: '🔬',
  },
  {
    number: '04',
    title: 'תוכנית טיפול',
    description: 'תוכנית מותאמת אישית — תרופות, שינויי אורח חיים ואימונותרפיה.',
    icon: '📋',
  },
]

export default function Process() {
  const lineRef = useRef<HTMLDivElement>(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: '#060c1a' }}
    >
      {/* Gradient orbs */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)',
        }}
      />
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold px-3 py-1.5 rounded-full mb-5"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            תהליך הטיפול
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            איך זה עובד?
          </h2>
          <p className="font-sans text-base max-w-lg mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            תהליך פשוט וברור מהפגישה הראשונה ועד לתוצאות אמיתיות.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">

          {/* Animated connector line — desktop only */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[52px] right-[10%] left-[10%] h-px overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <motion.div
              className="h-full"
              style={{
                background: 'linear-gradient(to left, #3b82f6, #6366f1, #3b82f6)',
                transformOrigin: '100% 50%',
                scaleX: 0,
              }}
              animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group"
            >
              {/* Glass card */}
              <div
                className="relative rounded-2xl p-6 overflow-hidden h-full"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(12px)',
                  transition: 'background 0.3s, border-color 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = 'rgba(255,255,255,0.07)'
                  el.style.borderColor = 'rgba(59,130,246,0.35)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = 'rgba(255,255,255,0.04)'
                  el.style.borderColor = 'rgba(255,255,255,0.09)'
                }}
              >
                {/* Watermark number */}
                <span
                  className="absolute -bottom-3 -left-1 font-black leading-none select-none pointer-events-none tabular-nums"
                  style={{
                    fontSize: '7rem',
                    color: 'rgba(255,255,255,0.04)',
                  }}
                >
                  {step.number}
                </span>

                {/* Node circle */}
                <div className="flex items-center justify-between mb-7 relative z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                      boxShadow: '0 0 20px rgba(59,130,246,0.4)',
                    }}
                  >
                    <span className="text-white font-black font-sans text-lg tabular-nums">
                      {i + 1}
                    </span>
                  </div>
                  {/* Faint icon top-right */}
                  <span className="text-3xl opacity-20 select-none">{step.icon}</span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-sans font-bold text-lg text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Bottom glow on hover */}
                <div
                  className="absolute bottom-0 right-0 left-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to right, transparent, #3b82f6, transparent)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
        >
          <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            מוכנים להתחיל את התהליך?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200"
            style={{
              background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.35)',
              color: '#93c5fd',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'rgba(59,130,246,0.25)'
              el.style.borderColor = 'rgba(59,130,246,0.6)'
              el.style.color = '#bfdbfe'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'rgba(59,130,246,0.15)'
              el.style.borderColor = 'rgba(59,130,246,0.35)'
              el.style.color = '#93c5fd'
            }}
          >
            קביעת תור ראשוני
            <span>←</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
