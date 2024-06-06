import * as fonts from "./fonts";
import "./globals.css";

export const fontVariables = Object.values(fonts)
  .map((font) => font.variable)
  .join(" ");
