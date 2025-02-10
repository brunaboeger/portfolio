"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/app/ui/components/button";
import store from "@/app/lib/store";
import { font } from "@/app/ui/fonts";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useWindowWidth } from "@/app/lib/utils";
import { useState, useEffect, useRef, use } from "react";

export default function Navbar() {
  const tabletSize = 768;
  const width = useWindowWidth();
  const isMobile = width < tabletSize;
  const isDesktop = !isMobile;

  const navbarTexts = store.home.navbar;
  const navbarLogo = navbarTexts.photo;

  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setMenuDisplay(!menuDisplay);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setMenuDisplay(false);
    }
  };

  const handleMenuItemClick = () => {
    setMenuDisplay(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav id="navbar" className="p-container position-fixed w-100 z-index-30">
      <div className="flex justify-between align-center">
        {/* Logo */}
        <Link href={navbarLogo.navigateTo?.link || "/"} style={{ height: 54 }}>
          <div className="flex pt-4 pb-4 pl-2 pr-4 align-center h-100 bg-glass-1 hover-translateY-1">
            <Image
              src={navbarLogo.image?.src}
              alt={navbarLogo.image?.alt}
              width={navbarLogo.image?.width || 40}
              height={navbarLogo.image?.height || 40}
              className="round-full"
            />
            <h3 className={`${font.logo} ml-3`}>{navbarLogo.title}</h3>
          </div>
        </Link>

        {/* Menu Links */}
        {isMobile ? (
          // Mobile Menu
          <div
            className="position-relative p-container bg-glass-1 flex align-center justify-center"
            style={{ height: 54, width: 54 }}
          >
            <Button
              ref={buttonRef}
              onClick={toggleMenu}
              ariaLabel="Toggle Menu"
              iconOnly
            >
              <Bars3Icon />
            </Button>
            {menuDisplay && (
              <div
                ref={menuRef}
                className="position-absolute top-0 p-4 bg-blue-100 shadow-3 round-top-2-right-0 border-gray-100"
                style={{ right: "0", top: "4rem" }}
              >
                <div className="flex-column justify-end gap-3 text-right position-relative">
                  {store.menuLinks.map((link, index) => (
                    <div className="menu-item mb-2" key={index}>
                      <Link
                        className="menu-link"
                        href={link.navigateTo?.link}
                        onClick={handleMenuItemClick}
                      >
                        {link.name}
                      </Link>
                      {!isMobile && (
                        <div className="menu-tooltip flex justify-end">
                          <div className="menu-tooltip-container">
                            <p>{link.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
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
