/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#f5f2ff',
          100: '#ede8ff',
          200: '#d4caff',
          300: '#b09ffc',
          400: '#8b6ef5',
          500: '#6b46eb',
          600: '#5530d4',
          700: '#3F2A6B',
          800: '#2d1f54',
          900: '#1e1238',
          950: '#120b22',
        },
        gold: {
          300: '#f0cc7a',
          400: '#e8bb55',
          500: '#D9A441',
          600: '#b8882d',
          700: '#8f6620',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
