import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        DEFAULT: "100%",
        sm: "640px",
        md: "768px",
        lg: "960px",
      },
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        primary: colors.cyan[800],
        secondary: "#669900",
        read: "#f6f1e7",
        border: colors.gray[300],
        bg: {
          0: colors.white,
          50: colors.gray[50],
          100: colors.gray[100],
          200: colors.gray[200],
          300: colors.gray[300],
        },
        fg: {
          0: colors.black,
          50: colors.gray[900],
          100: colors.gray[800],
          200: colors.gray[700],
          500: colors.gray[500],
          900: colors.white,
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-members"),
    require("tailwindcss-mixins"),
    require("tailwindcss-signals"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;
