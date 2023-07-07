/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary':'#fff',
        'secondary':' rgba(25, 41, 106, 1)',
        'light':'rgba(25, 41, 106, 0.5)',
        'red':'rgba(247, 82, 82, 1)',
        'text-light':'rgba(217, 217, 217, 1)',
        'pink':'rgba(243, 88, 175, 1)',
      }
    },
  },
  plugins: [],
}
