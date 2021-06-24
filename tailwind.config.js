module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#253764",
        },
        lightBlue: {
          DEFAULT: "#93D4F0",
        },
        gray: {
          DEFAULT: "#EAEAEA",
          light: "#F7F7F7",
        },
        ageYellow: {
          DEFAULT: "#F5EA2E",
        },
        ageOrange: {
          DEFAULT: "#D4791EE",
        },
        agePurple: {
          DEFAULT: "#5E0F75",
        },
        ageGreen: {
          DEFAULT: "#33652E",
        },
        ageBrown: {
          DEFAULT: "#6E470A",
        },
        ageRed: {
          DEFAULT: "#B9382C",
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
      tondu: ["Tondu"],
      sourceSansPro: ["SourcePro"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
