import { Merriweather, Poppins, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

export const ginto = localFont({ src: "/fonts/Ginto-Regular.otf" });

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const font = {
  heading: `${ginto.className} heading`,
  paragraph: `${merriweather.className} paragraph`,
  small: `${merriweather.className} small`,
  copyright: `${ginto.className} text-italic text-light`,
  logo: `${merriweather.className} heading-light text-light`,
};
