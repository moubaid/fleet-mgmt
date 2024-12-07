/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './app/**/*.{css,js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{css,js,ts,jsx,tsx,mdx}',
    './components/**/*.{css,js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{css,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}