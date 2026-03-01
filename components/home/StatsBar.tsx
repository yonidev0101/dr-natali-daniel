'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'שנות ניסיון', icon: '🏅' },
  { value: '5,000+', label: 'מטופלים', icon: '👥' },
  { value: '12', label: 'תחומי טיפול', icon: '🔬' },
  { value: '2', label: 'קליניקות', icon: '📍' },
]

export default function StatsBar() {
  return (
    <section className="border-y border-border bg-surface-alt py-10">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-3 text-lg">
                {stat.icon}
              </div>
              <p className="font-sans font-extrabold text-3xl md:text-4xl text-primary leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-muted text-sm font-sans">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
