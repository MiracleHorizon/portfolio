import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'
import scrollbarHide from 'tailwind-scrollbar-hide'

const config = {
  content: ['./src/**/*.{html,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          main: colors.indigo[500],
          start: colors.sky[400],
          end: colors.indigo[500]
        }
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
        flying: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0.5rem)' },
          '100%': { transform: 'translateY(0)' }
        },
        badge: {
          '100%': {
            transform: 'scaleY(1.7) scaleX(1.25)',
            opacity: '0'
          }
        },
        loop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'flying-card': 'flying 3s infinite normal',
        'badge-pulse': 'badge 1.5s ease-out infinite',
        'looping-tag': 'loop 100s linear infinite'
      }
    }
  },
  plugins: [typography(), scrollbarHide]
}

export default config
