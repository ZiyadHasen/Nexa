module.exports = {
  theme: {
    screens: {
      largeMedium: '1200px',
      medium: '900px',
      small: '540px',
      extraSmall: '450px',
      verySmall: '300px',
    },
    extend: {
      backgroundColor: {
        474747: '#474747',
      },
      textColor: {
        'light-gray': '#ACACAC',
        'veryLight-gray': '#D9D9D9',
      },
      fontSize: {
        'small-size': '13px',
        lg: '20px',
      },
      borderColor: {
        'light-border': '#D9D9D9',
      },
      borderWidth: {
        0.5: '0.5px',
      },
    },
  },
  plugins: [],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
};
