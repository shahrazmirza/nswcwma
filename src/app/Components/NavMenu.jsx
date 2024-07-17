"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";

const NavMenu = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-800 z-10 w-screen h-[96px]">
      <Container
        className={`fixed top-2 left-0 right-0 transition-transform transform ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="text-white flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width="70"
                height="70"
              />
            </Link>
            <Link href="/">
              <h1 className="text-xl font-basic tracking-wide">
                NSW Central West Muslim Association
              </h1>
            </Link>
          </div>

          <ul className="flex text-white text-sm font-normal gap-1">
            <li className="uppercase">
              <Link
                href="/"
                className={`outline outline-1 px-4 hover:outline-gray-300 ${
                  activeLink === "/" ? "outline-gray-300" : "outline-gray-800"
                }`}
                onClick={() => handleLinkClick("/")}
              >
                home
              </Link>
            </li>
            <li className="uppercase">
              <Link
                href="/About"
                className={`outline outline-1 px-4 hover:outline-gray-300 ${
                  activeLink === "/About"
                    ? "outline-gray-300"
                    : "outline-gray-800"
                }`}
                onClick={() => handleLinkClick("/About")}
              >
                about
              </Link>
            </li>
            <li className="uppercase">
              <Link
                href="/Services"
                className={`outline outline-1 px-4 hover:outline-gray-300 ${
                  activeLink === "/Services"
                    ? "outline-gray-300"
                    : "outline-gray-800"
                }`}
                onClick={() => handleLinkClick("/Services")}
              >
                services
              </Link>
            </li>
            <li className="uppercase">
              <Link
                href="/Events"
                className={`outline outline-1 px-4 hover:outline-gray-300 ${
                  activeLink === "/Events"
                    ? "outline-gray-300"
                    : "outline-gray-800"
                }`}
                onClick={() => handleLinkClick("/Events")}
              >
                events
              </Link>
            </li>
            <li className="uppercase">
              <Link
                href="/Downloads"
                className={`outline outline-1 px-4 hover:outline-gray-300 ${
                  activeLink === "/Downloads"
                    ? "outline-gray-300"
                    : "outline-gray-800"
                }`}
                onClick={() => handleLinkClick("/Downloads")}
              >
                downloads
              </Link>
            </li>
            <li className="uppercase">
              <Link
                href="/Contacts"
                className={`outline outline-1 px-4 hover:outline-gray-300 ${
                  activeLink === "/Contacts"
                    ? "outline-gray-300"
                    : "outline-gray-800"
                }`}
                onClick={() => handleLinkClick("/Contacts")}
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavMenu;
