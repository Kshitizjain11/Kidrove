/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        kidrove: {
          orange: '#F5A623',
          orangeLight: '#FFF8E7',
          orangeDark: '#E09400',
          green: '#4CAF50',
          greenLight: '#E8F5E9',
          blue: '#2196F3',
          blueLight: '#E3F2FD',
          purple: '#9C27B0',
          purpleLight: '#F3E5F5',
          pink: '#E91E63',
          pinkLight: '#FCE4EC',
          gray: '#F5F5F5',
          text: '#333333',
          textLight: '#666666',
          border: '#E5E5E5',
        }
      }
    },
  },
  plugins: [],
}
