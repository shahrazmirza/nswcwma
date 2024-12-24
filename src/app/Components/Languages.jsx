"use client";
import React, { useEffect, useState } from "react";
import data from "../Data/Languages.json";

function Languages() {
  const [items, setItems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    if (data && data.length > 0) {
      setItems(data);
    } else {
      console.error("Languages data is not available.");
    }

    // Load saved language from session (localStorage or cookie)
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    setSelectedLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = async (event) => {
    const targetLanguage = event.target.value;
    setSelectedLanguage(targetLanguage);

    // Save selected language for the session
    localStorage.setItem("selectedLanguage", targetLanguage);

    if (targetLanguage === "en") {
      // Refresh the page for English
      window.location.reload();
    } else {
      // Translate the page for other languages
      const elements = document.querySelectorAll("[data-translate]");
      elements.forEach(async (element) => {
        const originalText = element.dataset.originalText || element.innerText;

        try {
          const response = await fetch("/api/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: originalText, targetLanguage }),
          });

          const data = await response.json();
          element.innerText = data.translatedText;
          element.dataset.originalText = originalText; // Store original text for reuse
        } catch (error) {
          console.error("Translation API error:", error);
        }
      });
    }
  };

  return (
    <>
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="hidden md:flex justify-center items-center uppercase bg-red-500 hover:bg-red-600 outline-red-600 outline outline-1 text-white md:w-28 w-[45px] px-3 text-sm"
      >
        {items.map((item, index) => (
          <option key={index} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="block md:hidden justify-center items-center uppercase bg-red-500 hover:bg-red-600 outline-red-600 outline outline-1 text-white w-[70px] px-1 mx-2 text-[11px]"
      >
        {items.map((item, index) => (
          <option key={index} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Languages;
