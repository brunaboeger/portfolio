"use client";

import Image from "next/image";
import Link from "next/link";
import { font } from "@/app/ui/fonts";
// import { useState } from "react";

export default function Navbar() {
  // const [display, setDisplay] = useState<string>("hidden");

  // const toggleMenu = () => {
  //   setDisplay(display === "hidden" ? "flex" : "hidden");
  // };

  return (
    <nav id="navbar" className="navbar grid-area:logo z-index-20">
      <div className="flex align-center justify-between p-container position-sticky">
        <div className="flex align-center">
          <Link href="/">
            <Image
              src="/images/photo.jpg"
              alt="Bruna Boeger"
              width={64}
              height={64}
              className="round-full"
            />
          </Link>
          <h3 className={`${font.logo} ml-3`}>
            Bruna <br /> Boeger
          </h3>
        </div>
      </div>
    </nav>
  );
}
