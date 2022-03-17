const dev = process.env.NODE_ENV === 'development';

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'mountain-bike': dev ? "url('/mountain-bike.jpg')" : "url('/btech/trek/mountain-bike.jpg')",
      }
    },
  },
  plugins: [],
}
