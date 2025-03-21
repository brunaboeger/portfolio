import { Cabin, Crimson_Pro, Agbalumo } from "next/font/google";

export const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const crimsom = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export const font = {
  heading: `${agbalumo.className} heading`,
  title: `${crimsom.className} title`,
  paragraph: `${cabin.className} paragraph`,
  small: `${cabin.className} small`,
  copyright: `${crimsom.className} text-italic text-light`,
  logo: `${crimsom.className} heading-light text-light`,
};
