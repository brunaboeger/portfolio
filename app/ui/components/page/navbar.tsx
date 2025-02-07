"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/app/ui/components/button";
import store from "@/app/lib/store";
import { font } from "@/app/ui/fonts";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useWindowWidth } from "@/app/lib/utils";
import { useState } from "react";

export default function Navbar() {
  const tabletSize = 768;
  const width = useWindowWidth();
  const isMobile = width < tabletSize;
  const isDesktop = !isMobile;
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuDisplay(menuDisplay === false ? true : false);
  };

  return (
    <nav id="navbar" className="p-container position-fixed w-100 z-index-30">
      <div className="flex justify-between align-center">
        {/* Logo */}
        <Link href="/" style={{ height: 54 }}>
          <div className="flex pt-4 pb-4 pl-2 pr-4 align-center h-100 bg-glass-1 hover-translateY-1">
            <Image
              src="/images/photo.jpg"
              alt="Bruna Boeger"
              width={40}
              height={40}
              className="round-full"
            />
            <h3 className={`${font.logo} ml-3`}>Bruna Boeger</h3>
          </div>
        </Link>

        {/* Menu Links */}
        {isMobile ? (
          // Mobile Menu
          <div
            className="position-relative p-container bg-glass-1 flex align-center justify-center"
            style={{ height: 54, width: 54 }}
          >
            <Button onClick={toggleMenu} ariaLabel="Toggle Menu" iconOnly>
              <Bars3Icon />
            </Button>
            {menuDisplay ? (
              <div
                className="position-absolute top-0 p-4 bg-blue-100 shadow-3 round-top-2-right-0 border-gray-100"
                style={{ right: "0", top: "4rem" }}
              >
                <div className="flex-column justify-end gap-3 text-right position-relative">
                  {store.menuLinks.map((link, index) => (
                    <div className="menu-item mb-2" key={index}>
                      <Link className="menu-link" href={link.navigateTo?.link}>
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
          <div className="flex justify-end gap-4 text-right position-relative bg-glass-2 p-4">
            {store.menuLinks.map((link, index) => (
              <div className="menu-item" key={index}>
                <Link className="menu-link" href={link.navigateTo.link}>
                  {link.name}
                </Link>
                {isDesktop && link.description ? (
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
