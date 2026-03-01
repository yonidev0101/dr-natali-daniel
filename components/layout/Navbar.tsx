'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'בית' },
  { href: '/#services', label: 'שירותים' },
  { href: '/#about', label: 'אודות' },
  { href: '/blog', label: 'בלוג' },
  { href: '/faq', label: 'שאלות נפוצות' },
  { href: '/contact', label: 'יצירת קשר' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-3'
            : 'bg-white py-4'
        }`}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-blue">
              <span className="text-white text-xs font-sans font-bold">נד</span>
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-heading leading-tight">
                ד&quot;ר נטלי דניאל
              </p>
              <p className="text-xs text-muted leading-tight">אלרגולוגיה ואימונולוגיה</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:025551234" className="text-sm font-medium text-muted hover:text-primary transition-colors">
              02-555-1234
            </a>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              קביעת תור
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 flex flex-col gap-1.5 items-center justify-center rounded-lg hover:bg-surface-alt transition-colors"
            aria-label="תפריט"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-heading rounded-full" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-0.5 bg-heading rounded-full" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-heading rounded-full" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 pb-8"
          >
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-4 text-lg font-sans font-semibold text-heading border-b border-border hover:text-primary transition-colors"
                  >
                    {link.label}
                    <span className="text-muted text-sm">←</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto space-y-3">
              <a href="tel:025551234" className="flex items-center gap-2 text-muted text-sm font-sans">
                <span className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-xs">📞</span>
                02-555-1234
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                קביעת תור
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
