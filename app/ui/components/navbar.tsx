"use client";

import Button from "./button";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [display, setDisplay] = useState<string>("hidden");

  const toggleMenu = () => {
    setDisplay(display === "hidden" ? "flex" : "hidden");
  };

  return (
    <nav className="navbar">
      <div className="flex align-center justify-between padding-container">
        <div className="flex align-center">
          <Image
            src="/images/photo.jpg"
            alt="Bruna Boeger"
            width={64}
            height={64}
            className="round-full"
          />
          <h3 className="heading ml-3">Bruna Boeger</h3>
        </div>
        <Button onClick={toggleMenu} iconOnly />
      </div>
      <div className={`navbar_menu padding-container flex column ${display}`}>
        navbar menu
      </div>
    </nav>
  );
}
