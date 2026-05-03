import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#83bd81',
          50: '#f0f7f0',
          100: '#dff0de',
          200: '#c1e1bf',
          300: '#9dcf9b',
          400: '#83bd81',
          500: '#5fa05d',
          600: '#4a834a',
          700: '#3b673b',
          800: '#315231',
          900: '#294429',
        },
        dark: {
          DEFAULT: '#404e5e',
          50: '#f4f6f8',
          100: '#e8ecf0',
          200: '#c8d1db',
          300: '#9aaab8',
          400: '#677e93',
          500: '#4d6175',
          600: '#404e5e',
          700: '#344050',
          800: '#2c3643',
          900: '#262e39',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
