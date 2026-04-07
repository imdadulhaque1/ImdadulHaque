"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 w-full ${theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent"} shadow-md z-50 transition-colors duration-300 backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1
              className={`text-xl font-bold ${theme === "dark" ? "dark-text" : "light-text"}`}
            >
              {t("name")}
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              "hireMe",
              "about",
              "contactMe",
              "experience",
              "publication",
              "projects",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${theme === "dark" ? "dark-text" : "light-text"} hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer`}
              >
                {t(section)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-md bg-gray-200 dark:bg-gray-700 ${theme === "dark" ? "dark-text" : "light-text"} transition-colors duration-200 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
