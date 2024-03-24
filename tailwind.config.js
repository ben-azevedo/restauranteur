module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#243c5a",
      },
    },
  },
  variants: {},
  plugins: [],
};
