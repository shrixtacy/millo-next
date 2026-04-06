import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#2F5D3A",
          dark: "#1e3d26",
          light: "#3d7a4d",
        },
        orange: {
          DEFAULT: "#ff914d",
          dark: "#e07a3a",
          light: "#ffaa70",
        },
        red: {
          DEFAULT: "#ff3131",
          dark: "#cc2020",
          light: "#ff5555",
        },
        cream: {
          DEFAULT: "#F5E6D3",
          dark: "#e8d4bc",
          light: "#faf3ec",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #ff914d 0%, #ff3131 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #ff914d 0%, #ff6b6b 50%, #ff3131 100%)",
        "hero-gradient": "linear-gradient(135deg, #2F5D3A 0%, #1e3d26 60%, #ff3131 150%)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
