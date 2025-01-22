"use client";

import Image from "next/image";
import Link from "next/link";
import Store from "@/app/lib/store";
import Button from "@/app/ui/components/button";
import { font } from "@/app/ui/fonts";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { isMobileSize } from "@/app/lib/utils";
import { useState } from "react";

export default function Navbar() {
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuDisplay(menuDisplay === false ? true : false);
  };

  const isMobile = isMobileSize();

  return (
    <nav id="navbar" className="position-fixed w-100 z-index-30">
      <div
        className={`p-container flex justify-between ${
          isMobile ? "align-center" : "align-start"
        }`}
      >
        {/* Logo */}
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

        {/* Menu Links */}
        {isMobile ? (
          // Mobile Menu
          <div className="position-relative">
            <Button onClick={toggleMenu} ariaLabel="Toggle Menu" iconOnly>
              <Bars2Icon />
            </Button>
            {menuDisplay ? (
              <div
                className="position-absolute"
                style={{ right: "0", top: "4rem" }}
              >
                <div className="flex-column justify-end gap-3 text-right position-relative">
                  {Store.menuLinks.map((link, index) => (
                    <div className="menu-item mb-2" key={index}>
                      <Link className="menu-link" href={link.linkTo}>
                        {link.name}
                      </Link>
                      {!isMobile ? (
                        <div className="menu-tooltip flex justify-end">
                          <div className="menu-tooltip-container">
                            <p>{link.description}</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          // Tablet and Desktop Menu
          <div className="flex-column justify-end gap-3 text-right position-relative">
            {Store.menuLinks.map((link, index) => (
              <div className="menu-item mb-2" key={index}>
                <Link className="menu-link" href={link.linkTo}>
                  {link.name}
                </Link>
                {!isMobile ? (
                  <div className="menu-tooltip flex justify-end">
                    <div className="menu-tooltip-container">
                      <p>{link.description}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
