const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacityValue(variableName) {
  return ({opacityValue}) => {
    opacityValue = opacityValue ?? 1;
    return `rgba(var(${variableName}), ${opacityValue})`
  }
};

module.exports = {
  content: ["./src/**/*.{liquid,md,html,yml}", "./frontend/javascript/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ObjektivMk', ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        skin: {
          inverted: withOpacityValue('--color-inverted'),
          accented: withOpacityValue('--color-accented'),
          'accented-hover': withOpacityValue('--color-accented-hover'),
          base: withOpacityValue('--color-base'),
          muted: withOpacityValue('--color-muted'),
          dimmed: withOpacityValue('--color-dimmed'),
          error: withOpacityValue('--color-error'),
          alternate: withOpacityValue('--color-alternate'),
          'alternate-1': withOpacityValue('--color-alternate-1'),
          'alternate-2': withOpacityValue('--color-alternate-2')
        }
      },
      backgroundColor: {
        skin: {
          'button-accented': withOpacityValue('--color-accented'),
          'button-accented-hover': withOpacityValue('--color-accented-hover'),
          'button-inverted': withOpacityValue('--color-inverted'),
          'button-inverted-hover': withOpacityValue('--color-inverted-hover'),
          muted: withOpacityValue('--color-muted'),
          dimmed: withOpacityValue('--color-dimmed'),
          accented: withOpacityValue('--color-accented'),
          alternate: withOpacityValue('--color-alternate'),
          'alternate-1': withOpacityValue('--color-alternate-1'),
          'alternate-2': withOpacityValue('--color-alternate-2')
        }
      },
      ringColor: {
        skin: {
          accented: withOpacityValue('--color-border-accented'),
        }
      },
      borderColor: {
        skin: {
          base: withOpacityValue('--color-border-base'),
          accented: withOpacityValue('--color-border-accented'),
        }
      },
      textDecorationColor: {
        skin: {
          accented: withOpacityValue('--color-border-accented'),
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
