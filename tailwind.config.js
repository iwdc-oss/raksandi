module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './archives/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
    },
    screens: {
      sm: { min: '0px', max: '360px' },
      md: { min: '361px', max: '576px' },
      lg: { min: '577px', max: '960px' },
      xl: { min: '961px', max: '1080px' },
      '2xl': { min: '1081px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
