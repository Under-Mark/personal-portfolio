// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       
        orange: {
          500: "#f97316", // accent
          600: "#ea580c", // hover
        },
        neutral: {
          50: "#ffffff", // white
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// primary white
// gray 800 second
// accent is orange bg-blue-900