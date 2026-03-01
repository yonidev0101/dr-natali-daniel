'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-ink flex items-center overflow-hidden">
      {/* Animated orbs */}
      <div
        className="orb-slow w-96 h-96 bg-ink-light/40 top-1/4 right-1/4"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="orb w-64 h-64 bg-gold/10 bottom-1/3 left-1/5"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="orb-slow w-80 h-80 bg-sage/10 top-10 left-1/3"
        style={{ animationDelay: '6s' }}
      />
      <div
        className="orb w-48 h-48 bg-ink-light/30 bottom-20 right-1/5"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Content */}
      <div className="container-main relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-sans font-medium tracking-widest uppercase">
              אלרגולוגיה ואימונולוגיה קלינית
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            חיים חופשיים
            <br />
            <span className="text-gold">מאלרגיות</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-sage-light font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            ד&quot;ר נטלי דניאל — מומחית לאלרגולוגיה ואימונולוגיה קלינית עם מעל 15 שנות ניסיון.
            אבחון מדויק, טיפול מותאם אישית, ותוצאות אמיתיות.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={0.45}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="bg-gold text-white font-sans font-medium px-8 py-4 rounded-sm hover:bg-gold-light transition-colors duration-200 text-base"
            >
              קביעת תור
            </Link>
            <a
              href="tel:025551234"
              className="border border-white/40 text-white font-sans font-medium px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition-colors duration-200 text-base"
            >
              02-555-1234
            </a>
          </motion.div>

          {/* Credentials */}
          <motion.div
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4 mt-12"
          >
            {[
              '15+ שנות ניסיון',
              '5,000+ מטופלים',
              'חברה בלשכה הישראלית לאלרגולוגיה',
            ].map((cred) => (
              <div key={cred} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                <span className="text-sage text-sm font-sans">{cred}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink to-transparent" />
    </section>
  )
}
