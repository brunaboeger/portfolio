import { useState, useEffect } from "react";

const tabletSize = 768;
const desktopSize = 1280;

export const getScreenWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export const isMobileSize = (width = getScreenWidth()) => {
  if (width < tabletSize) {
    return true;
  }

  return false;
};
