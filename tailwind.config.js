/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
    
  ],
  theme: {
    extend: {
      screens: {
        'ssm': '500px',
        'msm':'481px',
       
      },
      colors: {
        orange: {
          300: '#9D6618',
          400: '#E6992A',
          500: '#E6992A',
        },
        'gray-900': 'var(--Gray-Scale-Gray-900, #1A1A1A)',
      },
      textColor: {
        'branding-error': 'var(--Branding-Error, #EA4B48)',
        'branding-success-dark': 'var(--Branding-Success-Dark, #9D6618)',
      },
    },
   
  },
  plugins: [
  ],

}