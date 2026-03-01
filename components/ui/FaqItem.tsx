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
    <div className={`border-b border-border last:border-0 transition-colors ${isOpen ? 'bg-primary-subtle/30' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-1 text-right gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-base font-semibold text-heading group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
            isOpen ? 'border-primary bg-primary text-white' : 'border-border text-muted'
          }`}
        >
          <span className="text-base leading-none font-light">+</span>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-body font-sans text-sm leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
