'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data/services'

const featured = new Set([0, 6]) // food-allergy & immunotherapy

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Dot-matrix background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #e2e8f0 1.2px, transparent 1.2px)',
          backgroundSize: '26px 26px',
          opacity: 0.6,
        }}
      />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <div className="container-main relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-primary-subtle text-primary text-xs font-sans font-semibold px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            תחומי מומחיות
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-4">
            שירותים רפואיים
          </h2>
          <p className="text-muted font-sans text-base max-w-xl mx-auto leading-relaxed">
            טיפול מקיף בכל סוגי האלרגיות ומחלות המערכת החיסונית, עם גישה מותאמת אישית לכל מטופל.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {services.map((service, i) => {
            const isFeatured = featured.has(i)

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.5,
                  delay: (i % 4) * 0.07,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`
                  group relative rounded-2xl p-5 overflow-hidden cursor-default
                  transition-shadow duration-300
                  ${isFeatured
                    ? 'bg-primary shadow-blue'
                    : 'bg-white border border-slate-100 hover:border-primary/20'
                  }
                `}
                style={
                  isFeatured
                    ? undefined
                    : {
                        boxShadow:
                          '0 1px 2px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.03)',
                      }
                }
              >
                {/* Hover shadow (regular cards only) */}
                {!isFeatured && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: '0 12px 32px rgba(37,99,235,0.10)' }}
                  />
                )}

                {/* Watermark number */}
                <span
                  className={`
                    absolute -bottom-3 -left-1 font-black leading-none select-none
                    pointer-events-none transition-all duration-300
                    ${isFeatured
                      ? 'text-white/10 text-[5.5rem] group-hover:text-white/[0.07]'
                      : 'text-slate-50 text-[5.5rem] group-hover:text-primary/[0.06]'
                    }
                  `}
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon bubble */}
                <div
                  className={`
                    w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4
                    transition-all duration-300 group-hover:scale-110
                    ${isFeatured
                      ? 'bg-white/20'
                      : 'bg-primary-subtle group-hover:bg-primary-light'
                    }
                  `}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className={`
                    font-sans font-bold text-sm leading-snug mb-2 relative z-10
                    transition-colors duration-200
                    ${isFeatured
                      ? 'text-white'
                      : 'text-heading group-hover:text-primary'
                    }
                  `}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`
                    font-sans text-xs leading-relaxed relative z-10
                    ${isFeatured ? 'text-white/70' : 'text-muted'}
                  `}
                >
                  {service.description}
                </p>

                {/* Decorative circle on featured */}
                {isFeatured && (
                  <>
                    <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/[0.07] pointer-events-none" />
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/[0.05] pointer-events-none" />
                  </>
                )}

                {/* Bottom accent line — slides in on hover (regular cards) */}
                {!isFeatured && (
                  <div
                    className="absolute bottom-0 right-0 left-0 h-[2.5px] bg-primary rounded-b-2xl
                      scale-x-0 group-hover:scale-x-100
                      transition-transform duration-500 ease-out origin-right"
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted/50 text-xs font-sans mt-8"
        >
          12 תחומי טיפול · 2 קליניקות · מעל 5,000 מטופלים
        </motion.p>
      </div>
    </section>
  )
}
