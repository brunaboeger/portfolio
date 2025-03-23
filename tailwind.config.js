/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,tsx,ts,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "8px",
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
