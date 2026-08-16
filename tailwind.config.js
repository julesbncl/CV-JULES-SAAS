/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charbon: {
          DEFAULT: '#0F0F13',
          deep: '#09090C',
          light: '#16161D',
          surface: '#1A1A22'
        },
        ardoise: {
          DEFAULT: '#1E1E26',
          light: '#272732',
          border: '#2F2F3D',
          hover: '#343444'
        },
        or: {
          DEFAULT: '#D4A843',
          light: '#F3CA68',
          dark: '#A07C28',
          glow: 'rgba(212, 168, 67, 0.15)',
          glowStrong: 'rgba(212, 168, 67, 0.3)'
        },
        creme: {
          DEFAULT: '#F5F3EE',
          pure: '#FAF8F5',
          muted: '#D8D5CC',
          dark: '#1C1B19'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem'
      },
      boxShadow: {
        'prestige': '0 20px 50px rgba(0, 0, 0, 0.45), 0 0 1px 1px rgba(212, 168, 67, 0.1)',
        'prestige-hover': '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 168, 67, 0.25)',
        'gold-subtle': '0 0 30px rgba(212, 168, 67, 0.12)',
        'inner-gold': 'inset 0 1px 1px rgba(243, 202, 104, 0.2)'
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em'
      }
    },
  },
  plugins: [],
}
