module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        360: "1440px",
        46.5: "11.625rem",
        150: "37.5rem",
        186: "46.5rem",
      },
      colors: {
        "bg-grad-start": "#AC32E4",
        "bg-grad-end": "#4801FF",
        highlight: "#7918F2",
        "light-black": "#121212",
        "text-grad-start": "#00DBDE",
        "text-grad-end": "#FC00FF",
        golden: "#E2C668",
        "dark-black": "#767676",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
      fontSize: {
        5: ["1.25rem", { lineHeight: "1.875rem" }],
        6: ["1.5rem", { lineHeight: "1.75rem" }],
        7: ["1.75rem", { lineHeight: "2.625rem" }],
        12: ["3rem", { lineHeight: "3.5rem" }],
      },
      boxShadow: {
        custom: "-10px -5px #000000",
      },
      lineHeight: {
        36: "9rem",
      },
      spacing: {
        4.25: "1.0625rem",
        4.5: "1.125rem",
        4.75: "1.1875rem",
        12.5: "3.125rem",
        21: "5.25rem",
        54: "13.5rem",
      },
      screens: {
        xln: "1281px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
