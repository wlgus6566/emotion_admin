module.exports = {
  content: [
    "src/pages/**/*.{js,jsx,ts,tsx}",
    "src/components/**/*.{js,jsx,ts,tsx}",
    "src/layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ee2c3c;',
        'gradient' : 'linear-gradient(90deg, rgba(238,44,60,1) 0%, rgba(238,44,60,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);'
      },
    },
  },
  plugins: [],
}