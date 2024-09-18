"use client";

import React, { useState, useEffect } from "react";
import Projetos from "./projetos/page";
import Experiencias from "./experiencias/page";
import Habilidades from "./habilidades/page";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/button/Button";

export default function Home() {
  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(darkTheme.matches);

  useEffect(() => {
    setIsDarkMode(darkTheme.matches);

    const handleThemeChange = () => setIsDarkMode(darkTheme.matches);
    darkTheme.addEventListener("change", handleThemeChange);

    return () => {
      darkTheme.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`pages-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <Navbar />

      <Button
        text={isDarkMode ? "Tema escuro" : "Tema claro"}
        action={toggleDarkMode}
      />

      <div className="tabs-container">
        <Projetos />
        <Experiencias />
        <Habilidades />
      </div>
    </div>
  );
}
