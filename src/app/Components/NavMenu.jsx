"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";

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
    <div className="bg-gray-800 py-10 z-10 w-screen">
      <Container
        className={`fixed top-0 left-0 right-0 transition-transform transform ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="text-white flex justify-between items-center pt-6">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width="50"
                height="30"
              />
            </Link>
            <Link href="/">
              <h1 className="text-2xl font-basic tracking-wider">
                NSW Central West Muslim Association
              </h1>
            </Link>
          </div>

          {/* <NavigationMenu.Root>
            <NavigationMenu.List className="flex text-white text-sm font-normal gap-1">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  href="/"
                  className={`uppercase outline outline-1 py-1 px-4 hover:outline-gray-300 ${
                    activeLink === "/" ? "outline-gray-300" : "outline-gray-800"
                  }`}
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  href="/About"
                  className={`uppercase outline outline-1 py-1 px-4 hover:outline-gray-300 ${
                    activeLink === "/About"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => handleLinkClick("/About")}
                >
                  About
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  className={`uppercase outline outline-1 py-1 px-4 hover:outline-gray-300 ${
                    activeLink === "/Services"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => handleLinkClick("/Services")}
                >
                  Services
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <ul className="bg-white bg-opacity-100 text-black mt-0 w-fit text-sm capitalize text-center">
                    <div className="border-t-5 border-red-500 mt-2"></div>
                    <ListItem
                      className="transition delay-150 duration-300 ease-in-out hover:bg-black hover:text-white"
                      title="Homeless"
                      href="/Homeless"
                    ></ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  href="/Events"
                  className={`uppercase outline outline-1 py-1 px-4 hover:outline-gray-300 ${
                    activeLink === "/Events"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => handleLinkClick("/Events")}
                >
                  Events
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  href="/Downloads"
                  className={`uppercase outline outline-1 py-1 px-4 hover:outline-gray-300 ${
                    activeLink === "/Downloads"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => handleLinkClick("/Downloads")}
                >
                  Downloads
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  href="/Contacts"
                  className={`uppercase outline outline-1 py-1 px-4 hover:outline-gray-300 ${
                    activeLink === "/Contacts"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => handleLinkClick("/Contacts")}
                >
                  Contacts
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root> */}

          <ul className="flex text-white text-sm font-normal gap-1">
            <li className="uppercase">
              <Link
                href="/"
                className={`outline outline-1 py-1 px-4 hover:outline-gray-300 ${
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
                className={`outline outline-1 py-1 px-4 hover:outline-gray-300 ${
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
                className={`outline outline-1 py-1 px-4 hover:outline-gray-300 ${
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
                className={`outline outline-1 py-1 px-4 hover:outline-gray-300 ${
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
                className={`outline outline-1 py-1 px-4 hover:outline-gray-300 ${
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
                className={`outline outline-1 py-1 px-4 hover:outline-gray-300 ${
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

// const ListItem = React.forwardRef(
//   ({ className, children, title, ...props }, forwardedRef) => (
//     <li>
//       <NavigationMenu.Link asChild>
//         <a
//           className={classNames("block p-3 pl-5", className)}
//           {...props}
//           ref={forwardedRef}
//         >
//           <div className="font-medium">{title}</div>
//           <p>{children}</p>
//         </a>
//       </NavigationMenu.Link>
//     </li>
//   )
// );

export default NavMenu;
