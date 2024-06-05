import { BG_COLOR_MAP, FONT_FAMILY_MAP, FONT_SIZE_MAP } from "@/lib/constants";

export type TBgColor = keyof typeof BG_COLOR_MAP | undefined;
export type TFontSize = keyof typeof FONT_SIZE_MAP | undefined;
export type TFontFamily = keyof typeof FONT_FAMILY_MAP | undefined;
