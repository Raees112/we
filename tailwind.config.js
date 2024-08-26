/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'dm-serif': ['"DM Serif Text"', 'serif'],
      },
    },
  },
  plugins: [],
}

