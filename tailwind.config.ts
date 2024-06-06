import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "100%",
        sm: "640px",
        md: "768px",
      },
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      fontFamily: {
        logo: ["var(--font-protest-revolution)"],
        sans: ["var(--font-roboto-condensed)"],
        lora: ["var(--font-lora)"],
        openSans: ["var(--font-open-sans)"],
        inconsolata: ["var(--font-inconsolata)"],
      },
      colors: {
        primary: "#669900",
        border: colors.gray[300],
        danger: colors.red[500],
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
  plugins: [require("tailwindcss-mixins")],
};

export default config;
