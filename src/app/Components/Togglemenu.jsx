"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Togglemenu() {
  const [items, setItems] = useState([]);

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
          className="flex text-gray-800 bg-gray-100 justify-center w-12 h-16 pt-6"
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
        <div className="bg-gray-100 px-5 py-2 h-screen">
          <div>
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex flex-col gap-2 w-full justify-center items-start">
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="uppercase md:text-3xl text-xl md:font-medium font-medium md:tracking-wide text-black border-b-1 border-black"
                    href="/"
                  >
                    Home
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="uppercase md:text-3xl text-xl md:font-medium font-medium md:tracking-wide text-black border-b-1 border-black"
                    href="/About"
                  >
                    About
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="uppercase md:text-3xl text-xl md:font-medium font-medium md:tracking-wide text-black border-b-1 border-black"
                    href="/Ramadan"
                  >
                    Services
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="uppercase md:text-3xl text-xl md:font-medium font-medium md:tracking-wide text-black border-b-1 border-black"
                    href="/Appeals"
                  >
                    Events
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="uppercase md:text-3xl text-xl md:font-medium font-medium md:tracking-wide text-black border-b-1 border-black"
                    href="/Projects"
                  >
                    Downloads
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="uppercase md:text-3xl text-xl md:font-medium font-medium md:tracking-wide text-black border-b-1 border-black"
                    href="/Contacts"
                  >
                    Contacts
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        </div>
      )}
    </div>
  );
}

export default Togglemenu;
