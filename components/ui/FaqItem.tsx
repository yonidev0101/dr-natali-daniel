'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { FaqItem as FaqItemType } from '@/lib/data/faq'

interface FaqItemProps {
  item: FaqItemType
}

export default function FaqItem({ item }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-ink/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-right gap-4 hover:text-gold transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-base md:text-lg font-medium text-ink group-hover:text-gold transition-colors">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gold text-2xl leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-ink/70 font-sans text-sm md:text-base leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
