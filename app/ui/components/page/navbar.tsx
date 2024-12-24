"use client";

import Button from "@/app/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { font } from "@/app/ui/fonts";

export default function Navbar() {
  const [display, setDisplay] = useState<string>("hidden");

  const toggleMenu = () => {
    setDisplay(display === "hidden" ? "flex" : "hidden");
  };

  return (
    <nav className="navbar">
      <div className="flex align-center justify-between p-container">
        <div className="flex align-center">
          <Image
            src="/images/photo.jpg"
            alt="Bruna Boeger"
            width={64}
            height={64}
            className="round-full"
          />
          <h3 className={`${font.heading} ml-3`}>Bruna Boeger</h3>
        </div>
        <Button onClick={toggleMenu} iconOnly>
          <Bars3Icon />
        </Button>
      </div>
      <div className={`navbar_menu p-container flex-column ${display}`}>
        <Link href="/login" className="button w-auto">
          Login
        </Link>
        <Link href="/admin" className="button w-auto mt-4">
          Admin
        </Link>
      </div>
    </nav>
  );
}
