module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      colors: {
        "primary-color": "var(--primary-color)",
        "hover-green": "var(--hover-green)",
        "input-border": "var(--input-border-green)",
        "background-color": "var(--background-green)",
        "placeholder-color": "var(--placeholder-green)",
        "input-form-border": "var( --input-form-border-color)",
      },
      boxShadow: {
        bottom: '0px 3px 6px #4EB99029'
      },
      borderRadius: {
        bottom: '0px 0px 6px 6px'
      },
      minHeight: {
        minH: '90vh'
      },
      outline: {
        green: ['1px solid #00955C'],
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
