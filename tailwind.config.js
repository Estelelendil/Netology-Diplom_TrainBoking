/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        "dark-red": "#C10000",
        red: "#FF0034",
        orange: "#FFA800",
        gray: "#274568",
        "dark-gray": "#16293F",
        "back-gray": "#F6F8FA",
        "light-gray": "#F7F7F7",
        "green": "#00B5AD",
        backgroundImage: {
          'search': "url('img/search.png')",

        }
      },
      fontSize: {
        8: ['8px', '11px'],
        9: ['9px', '12px'],
        10: ['10px', '14px'],
        11: ['11px', '15px'],
        12: ['12px', '14px'],
        13: ['13px', '18px'],
        14: ['14px', '19.6px'],
        15: ['15px', '20px'],
        16: ['16px', '22.4px'],
        18: ['18px', '25px'],
        20: ["20px", "28px"],
        24: ["24px", "32px"],
        30: ["30px", "40px"],
        36: ["36px", "44px"],
        56: ["56px", "67.2px"],
        72: ["72px", "86.4px"],
      },
      borderWidth: {
        '1': '1px'
      },
      borderRadius: {
        '5': '5px'
      },
      padding: {
        '15': '15px',
        '30': '30px'
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fit, minmax(300px, 1fr))',
        'data-col': 'max-content 1fr'
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.7) 100%)'
      },
      screens: {
        "380px": { 'max': '380px' },
        'laptop': { 'max': '1100px' },
      },
      transitionProperty: {
        'invisible': ['visibility', 'opacity']
      }
    },
    plugins: [],
  }
}
