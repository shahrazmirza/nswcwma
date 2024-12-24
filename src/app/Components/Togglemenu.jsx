"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Languages from "../Components/Languages";

function Togglemenu() {
  const [activeLink, setActiveLink] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);

    // Apply saved language and fetch translations
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    if (savedLanguage !== "en") {
      translateMenuItems(savedLanguage);
    } else {
      setLoading(false); // No translations needed for English
    }
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setShowDiv(false); // Close the menu after a link is clicked
  };

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

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
    <div className="z-10">
      <div className="flex justify-between items-center bg-gray-800 text-white h-[70px] pl-3 gap-2">
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
          <div className="flex flex-col justify-center text-[12px] font-semibold">
            <h1>NSW Central West</h1> <h1>Muslims Association</h1>
          </div>
        </Link>
        {/* Language Selector */}
        <Languages />
        {/* Toggle Button */}
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

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="loader" />{" "}
          {/* Replace with a spinner or loading indicator */}
        </div>
      )}

      {/* Toggle Menu */}
      {!loading && showDiv && (
        <div className="border border-red-500">
          <ul className="flex flex-col">
            {[
              { href: "/", label: "Home" },
              { href: "/About", label: "About" },
              { href: "/Services", label: "Services" },
              { href: "/Events", label: "Events" },
              { href: "/Mosque", label: "Mosque" },
              { href: "/Downloads", label: "Downloads" },
              { href: "/Careers", label: "Careers" },
              { href: "/Contacts", label: "Contacts" },
            ].map((link) => (
              <Link
                key={link.href}
                className={`w-full uppercase text-black border-b-1 px-5 py-2 border-black ${
                  activeLink === link.href
                    ? "bg-neutral-800 text-red-500 font-medium"
                    : "bg-gray-100"
                }`}
                onClick={() => handleLinkClick(link.href)}
                href={link.href}
                data-translate
                data-original-text={link.label}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Togglemenu;
