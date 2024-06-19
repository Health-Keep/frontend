/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: "url('/src/assets/welcomeBg.png')",
        landBg: "url('/src/assets/home.png')",
      },
    },
  },
  plugins: [],
};
