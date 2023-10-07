module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#49705b',
        'secondary': '#90c2a9',
        'bg': '#F5F5F5',
        'bg-dark': '#333333',
      },
    },
  },
  plugins: [],
  variants: {},
  corePlugins: {
    preflight: true,
  },
};
