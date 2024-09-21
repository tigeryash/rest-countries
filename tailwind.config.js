/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        elements: "hsl(var(--elements))",
        background: "hsl(var(--background))",
        text: "hsl(var(--text))",
        input: "hsl(var(--input))",
      },
    },
  },
  plugins: [],
};
