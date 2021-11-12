module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nav: "#075e54",
        title_chat: "#273443",
        sub_title_chat: "#128c7e",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
    },
  },
  plugins: [],
};
