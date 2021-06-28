module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '491': '491px',
      },
      colors: {
        blue: {
          DEFAULT: '#253764',
        },
        lightBlue: {
          DEFAULT: '#93D4F0',
        },
        hardBlue: {
          DEFAULT: '#28AAE1',
        },
        gray: {
          dark: '#6A6A6A',
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
      },
      spacing: {
        1: '0.5rem',
        2: '0.75rem',
        3: '1rem',
        4: '1.5rem',
        5: '2rem',
        6: '3rem',
      },
    },
    fontFamily: {
      tondu: ['Tondu'],
      sourceSansPro: ['SourcePro'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
