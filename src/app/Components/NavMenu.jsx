"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import Languages from "../Components/Languages";

const NavMenu = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);

    // Apply translations for the saved language
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    if (savedLanguage !== "en") {
      translateMenuItems(savedLanguage);
    } else {
      setLoading(false); // No translations needed for English
    }
  }, []);

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

  const translateMenuItems = async (language) => {
    const elements = document.querySelectorAll("[data-translate]");
    const promises = Array.from(elements).map(async (element) => {
      const originalText = element.dataset.originalText || element.innerText;

      try {
        const response = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: originalText,
            targetLanguage: language,
          }),
        });

        const data = await response.json();
        if (data && data.translatedText) {
          element.innerText = data.translatedText;
          element.dataset.originalText = originalText; // Preserve original text
        }
      } catch (error) {
        console.error("Translation API error:", error);
      }
    });

    // Wait for all translations to complete
    await Promise.all(promises);
    setLoading(false); // Set loading to false after translations are done
  };

  return (
    <div className="bg-gray-800 z-10 w-screen h-[86px] shadow-d">
      {/* Loading Indicator */}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="loader" />{" "}
          {/* Replace with a spinner or loading indicator */}
        </div>
      )}

      {!loading && (
        <Container
          className={`fixed top-2 left-0 right-0 transition-transform transform ${
            isScrolled ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="text-white flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center gap-5">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  alt="NSWCWMA Logo"
                  width="60"
                  height="60"
                />
              </Link>

              <Link href="/">
                <h1 className="text-lg font-basic flex flex-col justify-center items-center">
                  NSW Central West <b></b> Muslims Association
                </h1>
              </Link>
            </div>

            {/* Navigation Links */}
            <ul className="flex text-white text-sm font-normal gap-1">
              <li className="uppercase">
                <Link
                  href="/"
                  className={`outline outline-1 px-3 hover:outline-gray-300 ${
                    activeLink === "/" ? "outline-gray-300" : "outline-gray-800"
                  }`}
                  onClick={() => setActiveLink("/")}
                  data-translate
                  data-original-text="home"
                >
                  home
                </Link>
              </li>
              <li className="uppercase">
                <Link
                  href="/About"
                  className={`outline outline-1 px-3 hover:outline-gray-300 ${
                    activeLink === "/About"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => setActiveLink("/About")}
                  data-translate
                  data-original-text="about"
                >
                  about
                </Link>
              </li>
              <li className="uppercase">
                <Link
                  href="/Services"
                  className={`outline outline-1 px-3 hover:outline-gray-300 ${
                    activeLink === "/Services"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => setActiveLink("/Services")}
                  data-translate
                  data-original-text="services"
                >
                  services
                </Link>
              </li>
              <li className="uppercase">
                <Link
                  href="/Events"
                  className={`outline outline-1 px-3 hover:outline-gray-300 ${
                    activeLink === "/Events"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => setActiveLink("/Events")}
                  data-translate
                  data-original-text="events"
                >
                  events
                </Link>
              </li>
              <li className="uppercase">
                <Link
                  href="/Mosque"
                  className={`outline outline-1 px-3 hover:outline-gray-300 ${
                    activeLink === "/Mosque"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => setActiveLink("/Mosque")}
                  data-translate
                  data-original-text="mosque"
                >
                  mosque
                </Link>
              </li>
              <li className="uppercase">
                <Link
                  href="/Downloads"
                  className={`outline outline-1 px-3 hover:outline-gray-300 ${
                    activeLink === "/Downloads"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => setActiveLink("/Downloads")}
                  data-translate
                  data-original-text="downloads"
                >
                  downloads
                </Link>
              </li>
              <li className="uppercase">
                <Link
                  href="/Careers"
                  className={`outline outline-1 px-3 hover:outline-gray-300 ${
                    activeLink === "/Careers"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => setActiveLink("/Careers")}
                  data-translate
                  data-original-text="careers"
                >
                  careers
                </Link>
              </li>
              <li className="uppercase">
                <Link
                  href="/Contacts"
                  className={`outline outline-1 px-3 hover:outline-gray-300 ${
                    activeLink === "/Contacts"
                      ? "outline-gray-300"
                      : "outline-gray-800"
                  }`}
                  onClick={() => setActiveLink("/Contacts")}
                  data-translate
                  data-original-text="contacts"
                >
                  contacts
                </Link>
              </li>

              {/* Language Selector */}
              <li>
                <Languages />
              </li>
            </ul>
          </div>
        </Container>
      )}
    </div>
  );
};

export default NavMenu;
