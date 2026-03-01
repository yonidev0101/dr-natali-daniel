'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const stats = [
  { value: '15+', label: 'שנות ניסיון' },
  { value: '5,000+', label: 'מטופלים' },
  { value: '12', label: 'תחומים' },
  { value: '2', label: 'קליניקות' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blue blob top-left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-subtle opacity-60 blur-3xl float-slow" />
        {/* Small accent blob */}
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-accent/10 blur-2xl float" style={{ animationDelay: '3s' }} />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      <div className="container-main relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            {/* Badge */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-primary-subtle text-primary text-xs font-sans font-semibold px-3 py-1.5 rounded-pill mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                אלרגולוגיה ואימונולוגיה קלינית
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-sans text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold text-heading leading-[1.1] tracking-tight mb-5"
            >
              חיים חופשיים
              <br />
              <span className="text-primary">מאלרגיות</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-muted font-sans text-lg leading-relaxed mb-8 max-w-lg"
            >
              ד&quot;ר נטלי דניאל — מומחית עם מעל 15 שנות ניסיון. אבחון מדויק, טיפול מותאם אישית, ותוצאות אמיתיות בשתי קליניקות.
            </motion.p>

            {/* Buttons */}
            <motion.div custom={0.3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary px-7 py-3.5 text-base">
                קביעת תור
              </Link>
              <a
                href="tel:025551234"
                className="inline-flex items-center gap-2 border border-border text-body px-7 py-3.5 rounded-pill font-sans font-semibold text-base hover:border-primary hover:text-primary transition-colors"
              >
                <span className="text-primary">📞</span>
                02-555-1234
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div custom={0.45} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              {['חברה בלשכה הישראלית לאלרגולוגיה', 'חברה ב-EAACI', 'מומחית מוסמכת'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary-light flex items-center justify-center">
                    <span className="text-primary text-[10px]">✓</span>
                  </div>
                  <span className="text-muted text-xs font-sans">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — visual card stack */}
          <motion.div
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative bg-primary rounded-2xl p-8 text-white shadow-blue overflow-hidden">
              {/* Card decoration */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/5" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🩺</span>
                </div>
                <h3 className="font-sans font-extrabold text-2xl mb-2">מומחיות רפואית</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  אבחון וטיפול בכל ספקטרום מחלות האלרגיה והמערכת החיסונית.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {stats.map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <p className="font-sans font-extrabold text-2xl text-primary">{s.value}</p>
                  <p className="text-muted text-xs font-sans mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card-hover border border-border px-4 py-2.5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-sm">✅</span>
              </div>
              <div>
                <p className="text-xs font-sans font-bold text-heading leading-none">זמין לתורים</p>
                <p className="text-xs text-muted leading-none mt-0.5">ירושלים ומודיעין</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
