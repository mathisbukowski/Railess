/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", "index.html"],
  theme: {
    extend: {
      fontFamily : {
        'contrail': ['Contrail One', 'sans-serif'],
        'kode': ['Kode Mono', 'monospace'],
        'rubik': ['Rubik Mono One', 'sans-serif']
      },
      colors: {
        bgColor: '#3F6182',
        buttonColor: '#9EC8DB',
        textColor: "#E9FDFC",
        myWhite: "#FFFFFF",
        colorSecond: "#EE7154",
        lineColor: "#2A3542"
      }
    },
  },
  plugins: [],
}

