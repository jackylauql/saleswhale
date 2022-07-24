module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        proximaNova: ["proxima-nova", "Arial", "Helvetica"],
      },
      colors: {
        gray: "#E2E2E2",
        lighterBlack: "#1A1919",
      },
      backgroundColor: {
        darkblue: "#042235",
        lightblue: "#2995DA",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
