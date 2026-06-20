/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f0eb',
          100: '#e8ddd4',
          200: '#d4bfaa',
          300: '#bb9b7a',
          400: '#a07850',
          500: '#7a5c3a',
          600: '#5c4228',
          700: '#4a3728',
          800: '#3a2a1e',
          900: '#2a1e14',
        }
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      }
    }
  },
  plugins: []
}
