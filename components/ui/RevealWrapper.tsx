'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealWrapperProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  once?: boolean
}

export default function RevealWrapper({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: RevealWrapperProps) {
  const directionMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
    none: { y: 0, x: 0 },
  }

  const initial = { opacity: 0, ...directionMap[direction] }
  const animate = { opacity: 1, y: 0, x: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
