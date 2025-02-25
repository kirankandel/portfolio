import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'], 
  theme: {
    extend: {
      colors: {
        background: "#ecdcc5", // Soft, warm off-white color
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#d4a76a',
          light: '#ecdcc5', // Light parchment color
          dark: '#b38748',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
