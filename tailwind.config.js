/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    // not currently using below
    // "./app/**/*.{js.jsx,ts.tsx}",
    // "./public/**/*.html",
    // "./layouts/**/*/.html",
    // "./content/**/*.{md,html}",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg',
  ],
  darkmode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Brown Sugar', 'serif'],
    },
    // extend: {
    //   '128': '32rem',
    //   '144': '36rem',
    // },
    // borderRadius: {
    //   '4xl': '2rem',
    // }
  },
  // variants: {
  //   fill: [],
  //   extend: {
  //     borderColor: ['focus-visible'],
  //     opacity: ['disabled'],
  //   }
  // }
}
