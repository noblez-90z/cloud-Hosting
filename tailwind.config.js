/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-custom": "pulseEffect 2s infinite",
      },
      keyframes: {
        pulseEffect: {
          "0%": { boxShadow: "0 0 0 0 rgba(74, 144, 226, 0.7)" },
          "70%": { boxShadow: "0 0 0 15px rgba(74, 144, 226, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(74, 144, 226, 0)" },
        },
      },
    },
  },
  plugins: [],
};
