import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "dropdown": {
          "0%": { 
            "opacity": "0", 
            "transform": "translateY(-10px) translateX(-50%)" 
          },
          "100%": { 
            "opacity": "1", 
            "transform": "translateY(0) translateX(-50%)" 
          },
        },
        "detail-in": {
          "0%": { 
            "opacity": "0", 
            "transform": "translateX(10px)" 
          },
          "100%": { 
            "opacity": "1", 
            "transform": "translateX(0)" 
          },
        }
      },
      animation: {
        "dropdown": "dropdown 0.3s ease-out forwards",
        "dropdown-out": "dropdown 0.2s ease-in reverse forwards",
        "detail-in": "detail-in 0.4s ease-out forwards",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;