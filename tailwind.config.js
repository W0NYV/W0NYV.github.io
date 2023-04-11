/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            "./src/**/*.{js,jsx,ts,tsx}",
          ],
  theme: {
    extend: {
      height: {
        "70v": "70vh",
        "80v": "80vh"
      },
      width: {
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh"
      },
    },
  },
  plugins: [],
}

