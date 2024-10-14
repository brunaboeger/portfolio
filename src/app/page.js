"use client";
import React, { useState, useEffect } from "react";

import Capa from "./capa/page";
import Projetos from "./projetos/page";
import Experiencias from "./experiencias/page";
import Habilidades from "./habilidades/page";
import Aprendizados from "./aprendizados/page";
import Contato from "./contato/page";

import Navbar from "../components/navbar/Navbar";
import Button from "../components/button/Button";
import SideMenu from "../components/menus/SideMenu";

import fullpage from "fullpage.js";

import store from "../store";

export default function Home() {
  const pages = [
    { name: Capa },
    { name: Projetos },
    { name: Experiencias },
    { name: Habilidades },
    { name: Aprendizados },
    { name: Contato },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullpageElement = document.getElementById("fullpage");
      if (fullpageElement) {
        new fullpage("#fullpage", {
          autoScrolling: true,
          navigation: true,
        });
      }
    }
    return () => {
      if (fullpage.destroy) {
        fullpage.destroy("all");
      }
    };
  }, []);

  return (
    <div className="light-mode">
      <div className="page-content">
        <Navbar>
          <Button text="Tema" />
          <Button text="Contato" />
        </Navbar>

        <div id="fullpage">
          {pages.map((page, index) => {
            const PageComponent = page.name;
            return (
              <div className="section" key={index}>
                <PageComponent />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
