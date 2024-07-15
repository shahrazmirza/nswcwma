"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Togglemenu() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="z-10">
      <div className="flex justify-between h-10 items-center py-7 bg-gray-800 text-white">
        <div className="flex justify-center items-center p-5 gap-2">
          {/* <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className=""
            />
          </Link> */}
          <Link href="/">
            <h1 className="bold">NSW Central West Muslim Association</h1>
          </Link>
        </div>
        <button
          className="flex text-gray-800 bg-gray-100 justify-center w-12 h-14 pt-6"
          onClick={toggleDiv}
        >
          {showDiv ? (
            <RxCross1 className="text-red-500" />
          ) : (
            <IoMenu className="text-red-500" />
          )}
        </button>
      </div>
      {showDiv && (
        <div className="border border-red-500">
          <ul className="flex flex-col">
            <Link
              className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                activeLink === "/"
                  ? "bg-neutral-800 text-red-500 font-thin"
                  : "bg-gray-100"
              }`}
              onClick={() => handleLinkClick("/")}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                activeLink === "/About"
                  ? "bg-neutral-800 text-red-500 font-thin"
                  : "bg-gray-100"
              }`}
              onClick={() => handleLinkClick("/")}
              href="/About"
            >
              About
            </Link>
            <Link
              className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                activeLink === "/Services"
                  ? "bg-neutral-800 text-red-500 font-thin"
                  : "bg-gray-100"
              }`}
              onClick={() => handleLinkClick("/")}
              href="/Services"
            >
              Services
            </Link>
            <Link
              className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                activeLink === "/Events"
                  ? "bg-neutral-800 text-red-500 font-thin"
                  : "bg-gray-100"
              }`}
              onClick={() => handleLinkClick("/")}
              href="/Events"
            >
              Events
            </Link>
            <Link
              className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                activeLink === "/Downloads"
                  ? "bg-neutral-800 text-red-500 font-thin"
                  : "bg-gray-100"
              }`}
              onClick={() => handleLinkClick("/")}
              href="/Downloads"
            >
              Downloads
            </Link>
            <Link
              className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                activeLink === "/Contacts"
                  ? "bg-neutral-800 text-red-500 font-thin"
                  : "bg-gray-100"
              }`}
              onClick={() => handleLinkClick("/")}
              href="/Contacts"
            >
              Contacts
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Togglemenu;
