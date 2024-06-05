export const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
export const SKIP_PAGINATION_NUMBER = 0;

export const BG_COLOR_MAP = {
  "light-yellow": "bg-[#f4f4e4]",
  "light-blue": "bg-[#e9ebee]",
  "light-gray": "bg-[#f4f4f4]",
} as const;

export const FONT_SIZE_MAP = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
  xlarge: "text-xl",
} as const;

export const FONT_FAMILY_MAP = {
  serif: "font-lora tracking-wider",
  sans: "font-openSans",
  mono: "font-inconsolata",
} as const;
