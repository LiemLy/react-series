module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        main:
          'url("https://images.takeshape.io/6f78e8ac-527a-4e09-9c5e-510876b096bf/dev/809fa1e8-86f1-4c4d-ad1b-cc93ca311640/book-covers-final-hero.png")',
      }),

      height: {
        "1/4vh": "25vh",
        "2/4vh": "50vh",
        "3/4vh": "75vh",
        "4/4vh": "100vh",
      },
      colors: {
        primary: {
          DEFAULT: "#e4f8ee",
        },
        secondary: {
          DEFAULT: "#442ab9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
