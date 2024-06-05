import { BG_COLOR_MAP, FONT_FAMILY_MAP, FONT_SIZE_MAP } from "@/lib/constants";
import { z } from "zod";

const BG_COLOR_KEYS = Object.keys(BG_COLOR_MAP);
const FONT_SIZE_KEYS = Object.keys(FONT_SIZE_MAP);
const FONT_FAMILY_KEYS = Object.keys(FONT_FAMILY_MAP);

export const ZBgColor = z
  .enum([BG_COLOR_KEYS[0], ...BG_COLOR_KEYS.slice(1)])
  .default(BG_COLOR_KEYS[0]);

export const ZFontSize = z
  .enum([FONT_SIZE_KEYS[0], ...FONT_SIZE_KEYS.slice(1)])
  .default(FONT_SIZE_KEYS[0]);

export const ZFontFamily = z
  .enum([FONT_FAMILY_KEYS[0], ...FONT_FAMILY_KEYS.slice(1)])
  .default(FONT_FAMILY_KEYS[0]);
