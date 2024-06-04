import { BG_COLOR_MAP, FONT_FAMILY_MAP, FONT_SIZE_MAP } from "@/lib/constants";

export type BgColor = keyof typeof BG_COLOR_MAP | undefined;
export type FontSize = keyof typeof FONT_SIZE_MAP | undefined;
export type FontFamily = keyof typeof FONT_FAMILY_MAP | undefined;
