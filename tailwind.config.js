/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.html",
  ],
  plugins: [
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
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Brown Sugar', 'serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.5rem', '1.5rem'],
      xl: ['1.75rem', '2rem'],
      '2xl': ['2rem', '2.75rem'],
      '3xl': ['3.5rem', '3.875rem'],
      '4xl': ['8rem', '3rem'],
      '12xl': ['12rem', 1],
    }
  },
}
