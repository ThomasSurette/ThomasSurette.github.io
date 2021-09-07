module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      debugScreens: {
        position: ['bottom', 'left'],
      },
    },
    extend: {
      screens:{
        '3xl': '1792px',
        '4xl': '2048px',
      },
      backgroundImage: theme => ({
        'test': "url('/img/Koala.jpg')",
        'qwally': "url('/img/qwally.png')"
       }),
      fontFamily:{
        'sans': ['Roboto', 'sans-serif'],
        'header': ['Poppins', 'sans-serif']
      },
      colors: {
        brandBlue:{
          50: '#EBF5FF',
          100: '#ADD8FF',
          200: '#70BAFF',
          300: '#47A6FF',
          400: '#1F93FF',
          500: '#007EF5',
          600: '#005FB8',
          700: '#003F7A',
          800: '#002A52',
          900: '#001529',
        },
        brandRed:{
          50: '#FEECEC',
          100: '#FBB1B1',
          200: '#F87777',
          300: '#F65151',
          400: '#F42A2A',
          500: '#E90C0C',
          600: '#AE0909',
          700: '#740606',
          800: '#4E0404',
          900: '#270202',
        },
        gitHub: '#333',
        linkedIn: '#2867b2'
        },
      },
    },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
