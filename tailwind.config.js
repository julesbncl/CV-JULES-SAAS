/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./cv-preview.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skytheme: {
          bg: '#EBF4FC',
          subtle: '#F0F7FF',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          cardHover: '#F8FAFC',
          border: '#D1E5F8',
          borderSubtle: '#E2EDF8',
          accent: '#0284C7',
          accentLight: '#38BDF8',
          accentDark: '#0369A1',
          accentGlow: 'rgba(2, 132, 199, 0.18)',
          navy: '#0F172A',
          navyMuted: '#475569',
          navyLight: '#64748B',
          pill: '#E0F2FE',
          pillBorder: '#BAE6FD',
          pillText: '#0369A1'
        },
        // Backward compatibility tokens mapped to the light blue aesthetic
        charbon: {
          DEFAULT: '#0F172A',
          deep: '#0B132B',
          light: '#1E293B',
          surface: '#F1F7FD'
        },
        ardoise: {
          DEFAULT: '#FFFFFF',
          light: '#F8FAFC',
          border: '#CFE2F4',
          hover: '#E8F2FC'
        },
        or: {
          DEFAULT: '#0284C7',
          light: '#38BDF8',
          dark: '#0369A1',
          glow: 'rgba(2, 132, 199, 0.15)',
          glowStrong: 'rgba(2, 132, 199, 0.3)'
        },
        creme: {
          DEFAULT: '#0F172A',
          pure: '#0B132B',
          muted: '#475569',
          dark: '#EBF4FC'
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
        'prestige': '0 20px 40px -15px rgba(2, 132, 199, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04)',
        'prestige-hover': '0 25px 50px -12px rgba(2, 132, 199, 0.18), 0 0 20px rgba(56, 189, 248, 0.25)',
        'azure-subtle': '0 0 30px rgba(2, 132, 199, 0.12)',
        'inner-azure': 'inset 0 1px 2px rgba(56, 189, 248, 0.2)'
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em'
      }
    },
  },
  plugins: [],
}
