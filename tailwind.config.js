/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: "url('/src/assets/welcomeBg.png')",
        landBg: "url('/src/assets/home.png')",
        doctorBg: "url('/src/assets/doctor.png')",
        sickPatientBg: "url('/src/assets/sickPatient.png')",
        eyePatientBg: "url('/src/assets/eyePatient.png')",
      },
    },
  },
  plugins: [],
};
