/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',

      black: '#242323',
      white: '#FFF',
      default: '#596172',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      cyan: {
        500: '#81d8f7',
        300: '#9BE1FB'
      },
    },
    fontFamily: {
      title: ['Josefin Sans', 'sans-serif'],
      text: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      /*
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      */
    },
  },
  plugins: [],
}
