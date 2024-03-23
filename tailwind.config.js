/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", "index.html"],
  theme: {
    extend: {
      fontFamily : {
        'contrail': ['Contrail One', 'sans-serif'],
        'kode': ['Kode Mono', 'monospace'],
      },
      colors: {
        bgColor: '#808CF1',
        buttonColor: '#5560BF',
        textColor: "#FFFFFF",
        lineColor: "#1B2570"
      }
    },
  },
  plugins: [],
}

