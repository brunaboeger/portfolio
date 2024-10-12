"use client";

import React, { useState, useEffect } from "react";

import Projetos from "./projetos/page";
import Experiencias from "./experiencias/page";
import Habilidades from "./habilidades/page";
import Aprendizados from "./aprendizados/page";
import Contato from "./contato/page";

import Navbar from "../components/navbar/Navbar";
import Button from "../components/button/Button";
import SideMenu from "../components/menus/SideMenu";

import store from "../store";

export default function Home() {
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

  const sideMenuPages = store.pages;
  const sideMenuTools = store.tools;

  return (
    <div
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
              onClick={toggleDarkMode}
            />
            <Button text="Contato" />
          </Navbar>

          <div className="tabs-container">
            <SideMenu buttons={sideMenuPages} position="left" />
            <section className="tab-pane">
              <Projetos />
              <Experiencias />
              <Habilidades />
              <Aprendizados />
              <Contato />
            </section>
            <SideMenu buttons={sideMenuTools} position="right" />
          </div>
        </div>
      )}
    </div>
  );
}
