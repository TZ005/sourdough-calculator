/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#8B5A2B',
        'brand-brown-dark': '#6B4226',
        'brand-cream': '#FAF7F2',
        'brand-wheat': '#D4A574',
        'brand-wheat-dark': '#C58F5E',
        'brand-dark': '#3D2817',
        'brand-tan': '#F5EDE0',
        'brand-muted': '#8B7355',
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
