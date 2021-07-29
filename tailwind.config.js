module.exports = {
  purge: {
    mode: 'production',
    content: ['./output/**/*.html'],
  },
  theme: {
    colors: {
      creditario: '#6CAC88',
      'dark-gray': '#6B7280',
      'almost-gray': '#F9FAFB',
      'dark-green': '#306370',
    },
    extend: {
      width: {
        35: '35%',
        65: '65%',
      },
      spacing: {
        md: '25px',
      },
    },
    zIndex: {
      100: 100,
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
