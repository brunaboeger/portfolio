import { useState, useEffect } from "react";

export default function checkTheme() {
  const [isDarkMode, setIsDarkMode] = useState(null);

  const getDarkTheme = async () => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkTheme.matches);

    return darkTheme;
  };

  useEffect(() => {
    getDarkTheme();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return toggleDarkMode;
}
