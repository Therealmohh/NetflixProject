/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, transparent 0%, transparent 0%, rgba(0, 0, 0, 0.3) 50%)",
      },
    },
  },
  plugins: [],
};
