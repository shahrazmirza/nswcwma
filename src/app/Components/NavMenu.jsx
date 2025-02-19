"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import Languages from "../Components/Languages";
import "animate.css";
import { BiSolidDonateHeart } from "react-icons/bi";

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
    <>
      <div className="bg-gray-800 mt-14 w-screen h-[86px] shadow-d">
        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center h-screen">
            <div className="loader" />{" "}
            {/* Replace with a spinner or loading indicator */}
          </div>
        )}

        {!loading && (
          <div
            className={`fixed top-0 left-0 right-0 transition-transform transform z-50 ${
              isScrolled ? "-translate-y-full" : "translate-y-0"
            }`}
          >
            <div className="flex justify-center items-center bg-black text-xl text-center p-3 text-yellow-500 font-bold tracking-[.25em]">
              <Link
                href="/ZakatCalculator"
                className="flex justify-center items-center gap-3 animate__animated animate__pulse animate__infinite animate__slow"
              >
                <div className="text-3xl text-green-600">
                  <BiSolidDonateHeart />
                </div>
                <p className="text-white">Click Here To</p>
                <p>Pay</p>
                <p className="text-red-500">ZAKAT</p>
                <p>Now!</p>
              </Link>
            </div>
            <Container>
              <div className="navbar text-white">
                <div className="flex-1 px-2 lg:flex-none gap-5">
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
                <div className="flex flex-1 justify-end px-2 uppercase">
                  <div className="flex items-stretch text-sm font-normal gap-1">
                    <div className="justify-center items-center flex gap-1">
                      <Link
                        href="/"
                        className={`outline outline-1 px-3 hover:outline-gray-300 ${
                          activeLink === "/"
                            ? "outline-gray-300"
                            : "outline-gray-800"
                        }`}
                        onClick={() => setActiveLink("/")}
                        data-translate
                        data-original-text="home"
                      >
                        home
                      </Link>
                    </div>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className={`outline outline-1 px-3 hover:outline-gray-300 ${
                          activeLink === "/About" || activeLink === "/Mosque"
                            ? "outline-gray-300"
                            : "outline-gray-800"
                        }`}
                        onClick={() => setActiveLink("/About")}
                        data-translate
                        data-original-text="about"
                      >
                        about
                      </div>

                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-gray-800 rounded-md z-[1] mt-1 w-40 shadow p-0 -ml-1"
                      >
                        <li>
                          <Link
                            href="/About"
                            data-translate
                            data-original-text="about"
                          >
                            Who We Are
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Mosque"
                            data-translate
                            data-original-text="mosque"
                          >
                            mosque
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="justify-center items-center flex gap-1">
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
                    </div>

                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className={`outline outline-1 px-3 hover:outline-gray-300 ${
                          activeLink === "/Events/CurrentEvents" ||
                          activeLink === "/Events/PastEvents" ||
                          activeLink ===
                            "/Events/PastEvents/AutumnHolidayYouthProgram" ||
                          activeLink ===
                            "/Events/PastEvents/CentralWestMuslimAssociationOpenDay" ||
                          activeLink ===
                            "/Events/PastEvents/DubboMultiCulturalGala2024" ||
                          activeLink ===
                            "/Events/PastEvents/DubboMultiCulturalGala22024" ||
                          activeLink === "/Events/PastEvents/GoneFishingDay" ||
                          activeLink ===
                            "/Events/PastEvents/PinkRibbonBreakfast" ||
                          activeLink === "/Events/PastEvents/RaiseMeRight" ||
                          activeLink ===
                            "/Events/PastEvents/StoryNightsDubbo" ||
                          activeLink ===
                            "/Events/PastEvents/SummerHolidayYouthProgram" ||
                          activeLink ===
                            "/Events/CurrentEvents/CyberSafeCommunitiesInitiative"
                            ? "outline-gray-300"
                            : "outline-gray-800"
                        }`}
                        onClick={() => setActiveLink("/Events")}
                        data-translate
                        data-original-text="about"
                      >
                        events
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-gray-800 rounded-md z-[1] mt-1 w-40 shadow p-0 -ml-1"
                      >
                        <li>
                          <Link
                            href="/Events/CurrentEvents/"
                            data-translate
                            data-original-text="current events"
                          >
                            current events
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Events/PastEvents/"
                            data-translate
                            data-original-text="past events"
                          >
                            past events
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className={`outline outline-1 px-3 hover:outline-gray-300 ${
                          activeLink === "/Careers" ||
                          activeLink === "/Downloads"
                            ? "outline-gray-300"
                            : "outline-gray-800"
                        }`}
                        onClick={() => setActiveLink("/Resources")}
                        data-translate
                        data-original-text="about"
                      >
                        resources
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-gray-800 rounded-md z-[1] mt-1 w-40 shadow p-0 -ml-1"
                      >
                        <li>
                          <Link
                            href="/Careers"
                            data-translate
                            data-original-text="careers"
                          >
                            careers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Downloads"
                            data-translate
                            data-original-text="downloads"
                          >
                            downloads
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="justify-center items-center flex gap-1">
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
                    </div>
                    <div className="justify-center items-center flex gap-1">
                      <Languages />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>
    </>
  );
};

export default NavMenu;
