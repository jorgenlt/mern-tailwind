import withMT from '@material-tailwind/react/utils/withMT'

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {},
    // colors: {
      // transparent: 'transparent',
      // black: '#000',
      // white: '#fff',
      // gray: {
      //   100: '#f7fafc',
      //   // ...
      //   900: '#1a202c',
      // },
    // },
    // fontFamily: {},
    // spacing: {},
    extend: {
      // spacing: {},
      // borderRadius: {},
    },
  },
  plugins: [],
});
