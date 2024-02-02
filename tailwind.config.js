/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'ssm': '550px',
      'msm':'481px'
      },},
  },
  plugins: [],
}