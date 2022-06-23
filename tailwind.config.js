/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/background.svg')",
      },
      colors: {
        'input': {
          100: '#FFFFFF40'
        },
        'button': {
          100: '#1DB954'
        },
        'background': {
          900: '#1C1919'
        }
      }
    },
  },
  plugins: [],
}
