/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      '2sm': '480px',
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
      '2xl': '1600px',
      '3xl': '1920px',
    },
    // colors: {
    //   blue: '#1fb6ff',
    //   pink: '#ff49db',
    //   orange: '#ff7849',
    //   green: '#13ce66',
    //   'gray-dark': '#273444',
    //   gray: '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    fontFamily: {
      sfPro: ['SF Pro Display'],
    },
    extend: {
      colors: {
        '247CFF': '#247CFF',
        '7C9DCE': '#7C9DCE',
        '3D5476': '#3D5476',
        '3E5477': '#3E5477',
        '3D5476': '#3D5476',
        '15181C': '#15181C',
        ff8900: '#ff8900',
        F6891F: '#F6891F',
        FF0000: '#FF0000',
        gradientBg: 'linear-gradient(180deg, #fff, #fff0)',
      },

      spacing: {
        128: '32rem',
        144: '36rem',
        86: '86.5rem',
        '94px': '5.875rem',
      },
      maxWidth: {
        86: '86.5rem',
      },
      boxShadow: {
        '3xl': '0px 2px 8px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundSize: {
        '100%': '100%',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
