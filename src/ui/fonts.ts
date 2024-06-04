import {
  Inconsolata,
  Literata,
  Lora,
  Noto_Serif,
  Open_Sans,
  Protest_Revolution,
  Roboto_Condensed,
} from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["vietnamese"],
  variable: "--font-roboto-condensed",
});

const protestRevolution = Protest_Revolution({
  weight: ["400"],
  subsets: ["vietnamese"],
  variable: "--font-protest-revolution",
});

const lora = Lora({
  subsets: ["vietnamese"],
  variable: "--font-lora",
});

const openSans = Open_Sans({
  subsets: ["vietnamese"],
  variable: "--font-open-sans",
});

const inconsolata = Inconsolata({
  subsets: ["vietnamese"],
  variable: "--font-inconsolata",
});

export const fontVariables = `${robotoCondensed.variable} ${protestRevolution.variable} ${lora.variable} ${openSans.variable} ${inconsolata.variable}`;
