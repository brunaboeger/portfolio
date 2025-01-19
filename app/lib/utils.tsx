export const windowWidth =
  typeof window !== "undefined" ? window.innerWidth : 0;
export const tabletView = 768;
export const isMobile = windowWidth < tabletView;

export let navbarHeight = 0;
if (typeof window !== "undefined") {
  const navbar = document.getElementById("navbar");
  navbarHeight = navbar?.offsetHeight || 0;
}
