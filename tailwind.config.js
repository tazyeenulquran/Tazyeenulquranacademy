/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#064E3B', // Dark Emerald Green
          dark: '#032D22',
          light: '#0A7357',
        },
        secondary: {
          DEFAULT: '#0B3D2E', // Deep Islamic Green
          dark: '#07251C',
          light: '#135843',
        },
        accent: {
          DEFAULT: '#D4AF37', // Elegant Gold
          light: '#F5E7B2',
          dark: '#AA820A',
          shimmer: '#FBF2D4',
        },
        ivory: {
          DEFAULT: '#FAF8F0', // Warm Ivory
          dark: '#F3EFE0',
          light: '#FDFAF4',
        },
        charcoal: {
          DEFAULT: '#252525',
          light: '#404040',
          muted: '#666666',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Amiri', 'Cinzel', 'Georgia', 'serif'],
        arabic: ['Amiri', 'Scheherazade New', 'serif'],
      },
      backgroundImage: {
        'islamic-pattern': "radial-gradient(rgba(212, 175, 55, 0.08) 1.5px, transparent 1.5px), radial-gradient(rgba(6, 78, 59, 0.08) 1.5px, #FAF8F0 1.5px)",
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
        'emerald': '0 10px 25px -5px rgba(6, 78, 59, 0.25)',
      }
    },
  },
  plugins: [],
}
