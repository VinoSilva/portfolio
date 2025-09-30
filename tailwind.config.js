export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#6e06f2",
      },
      boxShadow: (theme) => ({
        // small shadow
        "primary-sm": `0 1px 2px 0 ${theme("colors.primary")}33`,
        // default / medium
        primary: `0 4px 6px -1px ${theme(
          "colors.primary"
        )}40, 0 2px 4px -1px ${theme("colors.primary")}20`,
        // large
        "primary-lg": `0 10px 15px -3px ${theme(
          "colors.primary"
        )}40, 0 4px 6px -4px ${theme("colors.primary")}20`,
        // extra large
        "primary-xl": `0 20px 25px -5px ${theme(
          "colors.primary"
        )}40, 0 10px 10px -5px ${theme("colors.primary")}20`,
      }),
    },
  },
  plugins: [],
};
