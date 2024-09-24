"use client";

import React, { useState, useEffect } from "react";

import Projetos from "./projetos/page";
import Experiencias from "./experiencias/page";
import Habilidades from "./habilidades/page";
import Aprendizados from "./aprendizados/page";
import Contato from "./contato/page";

import Navbar from "../components/navbar/Navbar";
import Button from "../components/button/Button";

function Home() {
  // const [isDarkMode, setIsDarkMode] = useState(null);

  // useEffect(() => {
  //   const fetchTheme = async () => {
  //     try {
  //       const response = await fetch("/api/v1/theme");
  //       const data = await response.json();
  //       setIsDarkMode(data.isDarkMode);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchTheme();
  // }, []);

  // const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  // const [isDarkMode, setIsDarkMode] = useState(darkTheme.matches);
  // useEffect(() => {
  //   setIsDarkMode(darkTheme.matches);

  //   const handleThemeChange = () => setIsDarkMode(darkTheme.matches);
  //   darkTheme.addEventListener("change", handleThemeChange);

  //   return () => {
  //     darkTheme.removeEventListener("change", handleThemeChange);
  //   };
  // }, []);

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

  return (
    <div
      // className={`pages-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
      className={`pages-container ${
        isDarkMode === null
          ? "loading"
          : isDarkMode
          ? "dark-mode"
          : "light-mode"
      }`}
    >
      {isDarkMode === null ? (
        <div className="page-loading">Carregando...</div>
      ) : (
        <div className="page-content">
          <Navbar>
            <Button
              text={isDarkMode ? "Tema escuro" : "Tema claro"}
              action={toggleDarkMode}
            />
            <Button text="Contato" />
          </Navbar>

          <div className="tabs-container">
            <Projetos />
            <Experiencias />
            <Habilidades />
            <Aprendizados />
            <Contato />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
