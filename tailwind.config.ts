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
        ink: '#1a3328',
        'ink-light': '#2d5045',
        cream: '#f5f0e8',
        'cream-dark': '#ede7d8',
        gold: '#c4954a',
        'gold-light': '#e0b876',
        sage: '#8aaa94',
        'sage-light': '#c5d9cc',
      },
      fontFamily: {
        serif: ['var(--font-frank-ruhl)', 'serif'],
        sans: ['var(--font-heebo)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
