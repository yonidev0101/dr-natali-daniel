import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary blue palette
        primary: '#2563eb',
        'primary-dark': '#1d4ed8',
        'primary-light': '#dbeafe',
        'primary-subtle': '#eff6ff',
        // Neutral palette
        surface: '#ffffff',
        'surface-alt': '#f8fafc',
        'surface-card': '#ffffff',
        border: '#e2e8f0',
        'border-strong': '#cbd5e1',
        // Text
        heading: '#0f172a',
        body: '#334155',
        muted: '#64748b',
        // Accent
        accent: '#0ea5e9',
        'accent-light': '#bae6fd',
        // Legacy aliases (keeping for non-updated files)
        ink: '#0f172a',
        'ink-light': '#1d4ed8',
        cream: '#f8fafc',
        'cream-dark': '#f1f5f9',
        gold: '#2563eb',
        'gold-light': '#3b82f6',
        sage: '#64748b',
        'sage-light': '#cbd5e1',
      },
      fontFamily: {
        serif: ['var(--font-plus-jakarta)', 'var(--font-heebo)', 'sans-serif'],
        sans: ['var(--font-heebo)', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
        'card-hover': '0 10px 25px -3px rgb(37 99 235 / 0.12), 0 4px 10px -4px rgb(37 99 235 / 0.08)',
        blue: '0 8px 30px rgb(37 99 235 / 0.18)',
      },
    },
  },
  plugins: [],
}

export default config
