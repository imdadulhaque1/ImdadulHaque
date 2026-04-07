"use client";

import { useEffect, useState } from "react";
import i18n from "@/lib/i18n";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
    i18n.changeLanguage(savedLang);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`ml-4 p-2 rounded-lg border-2 ${
          language === "bn"
            ? "dark-text dark:light-text"
            : "light-text dark:dark-text"
        } transition-all duration-300 cursor-pointer hover:shadow-lg`}
        style={{
          borderColor: language === "bn" ? "#00004d" : "#e6e6ff",
          backgroundColor:
            language === "bn"
              ? "rgba(230, 230, 255, 0.1)"
              : "rgba(0, 0, 77, 0.1)",
        }}
      >
        {language === "en" ? "🇬🇧 EN" : "🇧🇩 BN"}
      </button>

      {isOpen && (
        <div
          className="absolute top-12 right-0 rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in-up"
          style={{
            backgroundColor:
              language === "bn"
                ? "rgba(0, 0, 77, 0.95)"
                : "rgba(230, 230, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: `2px solid ${language === "bn" ? "#e6e6ff" : "#00004d"}`,
          }}
        >
          <button
            onClick={() => handleLanguageChange("en")}
            className={`block w-full px-6 py-3 text-left transition-colors duration-200 ${
              language === "en" ? "dark-bg" : "hover:opacity-80"
            }`}
            style={{
              color: language === "en" ? "#e6e6ff" : "#00004d",
            }}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => handleLanguageChange("bn")}
            className={`block w-full px-6 py-3 text-left transition-colors duration-200 border-t-2 ${
              language === "bn" ? "light-bg" : "hover:opacity-80"
            }`}
            style={{
              borderColor: language === "bn" ? "#e6e6ff" : "#00004d",
              color: language === "bn" ? "#00004d" : "#e6e6ff",
            }}
          >
            🇧🇩 বাংলা
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
