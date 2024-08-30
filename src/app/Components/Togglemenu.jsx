"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

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
    <div className="z-10 ">
      <div className="flex justify-between h-[70px] items-center py-7 bg-gray-800 text-white">
        <div className="flex justify-center items-center p-5 gap-4">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={54}
              height={54}
              className=""
            />
          </Link>
          <Link href="/">
            <h1 className="text-[10px] font-semibold">
              NSW Central West Muslims Association
            </h1>
          </Link>
        </div>
        <button
          className="flex text-gray-800 bg-gray-100 justify-center items-center w-12 h-[70px]"
          onClick={toggleDiv}
        >
          {showDiv ? (
            <RxCross1 className="text-red-500 w-5 h-5" />
          ) : (
            <IoMenu className="text-red-500 w-6 h-6" />
          )}
        </button>
      </div>
      {showDiv && (
        <div className="border border-red-500">
          <ul className="flex flex-col">
            <Link
              className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                activeLink === "/"
                  ? "bg-neutral-800 text-red-500 font-medium"
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
                  ? "bg-neutral-800 text-red-500 font-medium"
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
                  ? "bg-neutral-800 text-red-500 font-medium"
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
                  ? "bg-neutral-800 text-red-500 font-medium"
                  : "bg-gray-100"
              }`}
              onClick={() => handleLinkClick("/")}
              href="/Events"
            >
              Events
            </Link>
            <Link
              className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                activeLink === "/Mosque"
                  ? "bg-neutral-800 text-red-500 font-medium"
                  : "bg-gray-100"
              }`}
              onClick={() => handleLinkClick("/")}
              href="/Mosque"
            >
              Mosque
            </Link>
            <Link
              className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                activeLink === "/Downloads"
                  ? "bg-neutral-800 text-red-500 font-medium"
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
                  ? "bg-neutral-800 text-red-500 font-medium"
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
