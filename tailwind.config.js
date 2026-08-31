/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        charcoal: '#121212',
        white: '#fafafa',
        off-white: '#e8e8e8',
      }
    }
  }
}