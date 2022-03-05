module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F8F6E1',
        secondary: '#242424',
        apps: '#CF6C65',
        videos: '#D1A95B',
        subtitle: '#F8F6E0',
        section: '#A7A692',
        form: '#E7E6D5'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // require('daisyui')
  ]
  // daisyui: {
  //   themes: ['dark', 'light', 'luxury', 'forest'],
  // },
}
