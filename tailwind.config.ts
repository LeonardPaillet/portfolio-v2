import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white : "#EBEBEB",
        blue : "#0B0932",
        darkBlue : "#0A0927",
        darkViolet : "#160B4D",
        violet : "#2C1D77",
        grey : "#1C234B",
        lightBlue : "#1DDDDD"
      },
    },
  },
  plugins: [],
};
export default config;
