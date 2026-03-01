'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'שנות ניסיון' },
  { value: '5,000+', label: 'מטופלים' },
  { value: '12', label: 'תחומי טיפול' },
  { value: '2', label: 'קליניקות' },
]

export default function StatsBar() {
  return (
    <section className="bg-ink-light py-10 md:py-12">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-x-reverse divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-4 py-2"
            >
              <p className="font-serif text-4xl md:text-5xl font-bold text-gold leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-sage-light text-sm font-sans">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
