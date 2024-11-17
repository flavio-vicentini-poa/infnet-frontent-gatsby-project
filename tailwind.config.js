/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#283044",
        "custom-secondary": "#41495a",
        "custom-third": "#d1d9ec",
        "custom-font-primary": "#D3DDD9",
      },
    },
  },
  plugins: [],
};
