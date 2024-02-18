module.exports = {
  theme: {
    screens: {
      xxs: '300px',
      xs: '450px',
      sm: '540px',
      md: '900px',
      xl: '1200px',
      '2xl': '1536px',
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
