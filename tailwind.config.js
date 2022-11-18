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

      default: {
        DEFAULT: '#596172',
        600: '#373b45',
      },

      primary: {
        DEFAULT: '#17BEBB',
        600: '#108583',
      },

      secondary: {
        DEFAULT: '#25272E',
        600: '#32343d',
      },
      tertiary: '#E9DCC4',

      error: {
        DEFAULT: '#A71D31',
        600: '#7a1726',
      },

      info: '#4969B3',
    },
    fontFamily: {
      title: ['Josefin Sans', 'sans-serif'],
      text: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        vh: '8px 24px'
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px'
      },
      /*
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      */
    },
  },
  plugins: [],
}