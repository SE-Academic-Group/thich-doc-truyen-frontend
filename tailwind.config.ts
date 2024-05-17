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
          light: colors.cyan[700],
          DEFAULT: colors.cyan[900],
        },
        fg_primary: {
          DEFAULT: colors.cyan[50],
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
        bg_alert: {
          DEFAULT: colors.cyan[100],
        },
        fg_alert: {
          DEFAULT: colors.cyan[900],
        },
        muted: {
          DEFAULT: colors.gray[500],
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-members"),
    require("tailwindcss-mixins"),
    require("tailwindcss-signals"),
  ],
};
export default config;
