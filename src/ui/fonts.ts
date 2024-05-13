import {
  Roboto_Condensed,
  Spectral,
  EB_Garamond,
  Open_Sans,
  Montagu_Slab,
  Merienda,
} from "next/font/google";

// Display fonts
export const robotoCondensed = Roboto_Condensed({ subsets: ["vietnamese"] });

// Reading content fonts
export const ebGaramond = EB_Garamond({ subsets: ["vietnamese"] });
export const spectral = Spectral({
  subsets: ["vietnamese"],
  weight: ["400", "700"],
});
export const openSans = Open_Sans({ subsets: ["vietnamese"] });
export const montaguSlab = Montagu_Slab({ subsets: ["vietnamese"] });
export const merienda = Merienda({ subsets: ["vietnamese"] });
