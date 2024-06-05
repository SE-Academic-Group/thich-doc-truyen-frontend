import {
  Inconsolata,
  Lora,
  Open_Sans,
  Protest_Revolution,
  Roboto_Condensed,
} from "next/font/google";

export const robotoCondensed = Roboto_Condensed({
  subsets: ["vietnamese"],
  variable: "--font-roboto-condensed",
});

export const protestRevolution = Protest_Revolution({
  weight: ["400"],
  subsets: ["vietnamese"],
  variable: "--font-protest-revolution",
});

export const lora = Lora({
  subsets: ["vietnamese"],
  variable: "--font-lora",
});

export const openSans = Open_Sans({
  subsets: ["vietnamese"],
  variable: "--font-open-sans",
});

export const inconsolata = Inconsolata({
  subsets: ["vietnamese"],
  variable: "--font-inconsolata",
});
