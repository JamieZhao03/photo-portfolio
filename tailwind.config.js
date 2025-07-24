/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1f2937", // dark gray
          accent: "#eab308"   // amber for highlights
        }
      },
    },
    plugins: [],
  }