module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          red: "#FC4747",
          blue: { light: "#5A698F", medium: "#161D2F", dark: "#10141E" },
        },
      },
      fontFamily: {
        outfit: ["'Outfit'", "sans"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
