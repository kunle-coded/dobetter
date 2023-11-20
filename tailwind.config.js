/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Sometype Mono, monospace",
    },
    extend: {
      height: "100dvh",
    },
  },
  plugins: [],
};
