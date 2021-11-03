const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '491': '491px',
      },
      width: {
        '4.5rem': '4.5rem',
        '23.5rem': '23.5rem',
      },
      minHeight: {
        '20rem': '20rem',
        '25rem': '25rem',
      },
      maxWidth: {
        'card': '25rem',
      },
      zIndex: {
        '-10': '-10',
      },
      fontSize: {
        '2rem': '2rem',
        xxs: '.625rem',
        // For tablets
        xxxlt: ['3.25rem', '3.5rem'],
        xlt: ['1.75rem', '2rem'],
        lt: ['1.375rem', '1.563rem'],
        // For web
        xxxlw: ['4rem', '4rem'],
        xxlw: ['3rem', '3.125rem'],
        xlw: ['2rem', '2.125rem'],
        lw: ['1.5rem', '1.625rem'],
      },
      colors: {
        blue: {
          DEFAULT: '#253764',
          border: '#A9DDF3',
        },
        lightBlue: {
          DEFAULT: '#93D4F0',
          light: '#EAF7FC',
        },
        hardBlue: {
          DEFAULT: '#28AAE1',
        },
        highlightBlue: {
          DEFAULT: '#D4EEF9',
        },
        gray: {
          dark: '#6A6A6A',
          semiDark: '#D1D1D1',
          DEFAULT: '#EAEAEA',
          light: '#F7F7F7',
        },
        ageYellow: {
          DEFAULT: '#F5EA2E',
        },
        ageOrange: {
          DEFAULT: '#D4791EE',
        },
        agePurple: {
          DEFAULT: '#5E0F75',
        },
        ageGreen: {
          DEFAULT: '#33652E',
        },
        ageBrown: {
          DEFAULT: '#6E470A',
        },
        ageRed: {
          DEFAULT: '#B9382C',
        },
        notFoundRed: {
          DEFAULT: '#F04150'
        }
      },
      spacing: {
        '0.5': '0.25rem',
        1: '0.5rem',
        2: '0.75rem',
        3: '1rem',
        4: '1.5rem',
        5: '2rem',
        6: '3rem',
      },
      inset: {
        'full+1': 'calc(100% + .5rem)',
      },
      borderRadius: {
        '4xl': 32,
      },
    },
    fontFamily: {
      tondu: ['Tondu'],
      sourceSansPro: ['SourcePro'],
    },
  },
  variants: {
    extend: {
      borderColor: ['no-hover-focus'],
      backgroundColor: ['no-hover-focus'],
      margin: ['important'],
      translate: ['focus-within'],
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant('no-hover-focus', ({ modifySelectors, separator, container }) => {
        container.walkRules((rule) => {
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
        modifySelectors(({ className }) => {
          return `.${e(`no-hover-focus${separator}${className}`)}:not(:hover):not(:focus)`;
        });
      });
    }),
    // Create utils for changing individual border colors.
    // Copied from here https://github.com/tailwindlabs/tailwindcss/pull/560#issuecomment-670045304
    ({ addUtilities, e, theme, variants }) => {
      const colors = flattenColorPalette(theme('borderColor'));
      delete colors['default'];

      const colorMap = Object.keys(colors).map((color) => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
      }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
