module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: '#8E8E8E',
      },
      fontFamily: {
        noto: ['Noto Sans'],
      },
      backgroundColor: {
        dark: '#181818',
        medium: '#242424',
        light: '#8E8E8E',
        blue: '#247FDA',
        yellow: '#FFDC7E',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
