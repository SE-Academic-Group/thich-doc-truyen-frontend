export const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
export const SKIP_PAGINATION_NUMBER = 0;

export const BG_COLOR_MAP: Record<string, string> = {
  "light-yellow": "bg-[#f4f4e4]",
  "light-blue": "bg-[#e9ebee]",
  "light-gray": "bg-[#f4f4f4]",
};

export const FONT_SIZE_MAP: Record<string, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
  xlarge: "text-xl",
};

export const FONT_FAMILY_MAP: Record<string, string> = {
  serif: "font-lora tracking-wider",
  sans: "font-openSans",
  mono: "font-inconsolata",
};

export enum HTTP_ERROR_CODES {
  NOT_FOUND = "NOT_FOUND",
  BAD_REQUEST = "BAD_REQUEST",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}

export enum APP_ERROR_CODES {
  MISS_SHAPED_SCHEMA = "MISS_SHAPED_SCHEMA",
}
