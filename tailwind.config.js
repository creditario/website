const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: 'production',
    content: ['./src/**/*.html', './src/**/*.md', './src/**/*.liquid'],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,

      creditario: '#6CAC88',
      'creditario-dark': '#619b7a',

      'dark-gray': '#6B7280',
      'almost-gray': '#F9FAFB',
      'dark-green': '#306370',
    },
    extend: {
      width: {
        35: '35%',
        65: '65%',
      },
      height: {
        96: '24rem',
      },
      spacing: {
        md: '25px',
      },
      zIndex: {
        100: "100"
      }
    },
  },
  variants: {},
  plugins: [],
};
