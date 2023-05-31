/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A7A7A7',
        secandary: '#F46B5B',
        black: '#383838',
      },
    },
  },
  plugins: [],
}
