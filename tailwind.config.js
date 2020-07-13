module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ],
        serif: ["Georgia", "Cambria"],
        mono: ["SFMono-Regular", "Menlo"],
        dosis: [
          '"Dosis"',
          '"Source Sans Pro"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif"
        ]
      }
    }
  },
  variants: {},
  plugins: []
};
