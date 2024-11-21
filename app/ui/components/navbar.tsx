"use client";

import Button from "./button";
import { useState } from "react";

export default function Navbar() {
  const [display, setDisplay] = useState<string>("hidden");

  const toggleMenu = () => {
    setDisplay(display === "hidden" ? "flex" : "hidden");
  };

  return (
    <nav className="navbar">
      <div className="flex align-center justify-between padding-container">
        <h3 className="logo">Bruna Boeger</h3>
        <Button onClick={toggleMenu} />
      </div>
      <div className={`navbar_menu padding-container flex-column ${display}`}>
        navbar menu
      </div>
    </nav>
  );
}
