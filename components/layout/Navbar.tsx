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
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-serif font-bold">נד</span>
            </div>
            <div>
              <p className={`font-serif font-bold text-sm leading-tight transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>
                ד&quot;ר נטלי דניאל
              </p>
              <p className={`text-xs font-sans leading-tight transition-colors ${scrolled ? 'text-ink/50' : 'text-white/70'}`}>
                אלרגולוגיה ואימונולוגיה
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium font-sans transition-colors duration-200 hover:text-gold ${
                  scrolled ? 'text-ink/80' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:025551234"
              className={`text-sm font-sans font-medium transition-colors hover:text-gold ${scrolled ? 'text-ink/70' : 'text-white/80'}`}
            >
              02-555-1234
            </a>
            <Link
              href="/contact"
              className="bg-gold text-white text-sm font-sans font-medium px-5 py-2 rounded-sm hover:bg-gold-light transition-colors"
            >
              קביעת תור
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className={`block w-5 h-0.5 transition-colors ${scrolled ? 'bg-ink' : 'bg-white'}`}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block w-5 h-0.5 transition-colors ${scrolled ? 'bg-ink' : 'bg-white'}`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className={`block w-5 h-0.5 transition-colors ${scrolled ? 'bg-ink' : 'bg-white'}`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink flex flex-col pt-24 px-8 pb-8"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-2xl font-serif text-white hover:text-gold transition-colors border-b border-white/10"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a
                href="tel:025551234"
                className="flex items-center gap-2 text-sage-light font-sans text-sm"
              >
                <span>📞</span>
                02-555-1234
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-gold text-white text-center py-3 rounded-sm font-sans font-medium"
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
