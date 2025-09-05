/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Seus componentes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "Arial", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/*
 colors: {
        "primary-roxo": "#3D3C6C",
        "primary-hover": "#373661",
        "dark-roxo": "#151526",
        "light-roxo": "#ECECF0",
        "light-hover": "#E2E2E9",
      },

      */
