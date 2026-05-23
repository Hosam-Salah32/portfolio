/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#22d3ee',
          hover: '#67e8f9',
        },
        accent2: {
          DEFAULT: '#a78bfa',
          hover: '#c4b5fd',
        },
      },
      animation: {
        'glow-drift': 'glow-drift 18s ease-in-out infinite',
        'glow-drift-slow': 'glow-drift 28s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-drift': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
