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
        primary: {
          fg: colors.cyan[50],
          bg: colors.gray[50],
          light: colors.cyan[700],
          DEFAULT: colors.cyan[900],
        },
        secondary: {
          DEFAULT: colors.green[600],
        },
        bg: {
          200: colors.gray[200],
          300: colors.gray[300],
        },
        bg_light: {
          DEFAULT: colors.white,
        },
        fg_light: {
          DEFAULT: colors.gray[900],
        },
        link: {
          DEFAULT: colors.blue[500],
        },
        muted: {
          DEFAULT: colors.gray[500],
        },
        read: {
          DEFAULT: "#f6f1e7",
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
