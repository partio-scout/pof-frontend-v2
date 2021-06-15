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
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
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
