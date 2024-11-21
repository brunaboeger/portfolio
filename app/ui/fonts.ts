import { Merriweather, Poppins, IBM_Plex_Mono } from "next/font/google";

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
