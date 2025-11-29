/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#6b21a8",
        secondary: "#ffffff",
        dark: "#111827",
        light: "#f3f4f6",
      },
      gridTemplateColumns:{
        'auto' : 'repeat(auto-fit,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}