import type { Config } from "tailwindcss";
import { teal } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: {
          "50": teal[50],
          "100": teal[100],
          "200": teal[200],
          "300": teal[300],
          "400": teal[400],
          "500": teal[500],
          "600": teal[600],
          "700": teal[700],
          "800": teal[800],
          "900": teal[900],
          "950": teal[950],
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".scrollbar": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(30, 30, 30) white",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
