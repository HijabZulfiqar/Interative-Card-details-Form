/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      
      xs: '320px',
      sm: '375px',
      lsm: '425px',
      msm:'560px',
      nsm:'670px',
      md: '860px',
     

      lg: '1050px',

      xl: '1280px',
    },
    extend: {
      fontFamily: {
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
    
      },
    },
  },
  plugins: [],
}
