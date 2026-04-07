"use client";
import Navbar from "../components/Navbar";
import DynamicContent from "../components/DynamicContent";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <HomeContent />
    </ThemeProvider>
  );
}

function HomeContent() {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "dark-bg" : "light-bg"} transition-colors duration-300`}
    >
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="hireMe"
          className={`min-h-screen flex items-center justify-center px-4 ${theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent"} animate-fade-in-up`}
        >
          <div className="text-center">
            <h1
              className={`text-4xl md:text-6xl font-bold ${theme === "dark" ? "dark-text" : "light-text"} mb-4`}
            >
              {t("hireMe")}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {t("hireMeDesc")}
            </p>
            <DynamicContent
              content="Hello, Imdadul Haque"
              tag="p"
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-2"
            />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`min-h-screen flex items-center justify-center px-4 ${theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent"} animate-fade-in-up`}
        >
          <div className="text-center">
            <h2
              className={`text-3xl md:text-5xl font-bold ${theme === "dark" ? "dark-text" : "light-text"} mb-4`}
            >
              {t("about")}
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t("aboutDesc")}
            </p>
          </div>
        </section>

        {/* Contact Me Section */}
        <section
          id="contactMe"
          className={`min-h-screen flex items-center justify-center px-4 ${theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent"} animate-fade-in-up`}
        >
          <div className="text-center">
            <h2
              className={`text-3xl md:text-5xl font-bold ${theme === "dark" ? "dark-text" : "light-text"} mb-4`}
            >
              {t("contactMe")}
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t("contactMeDesc")}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className={`min-h-screen flex items-center justify-center px-4 ${theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent"} animate-fade-in-up`}
        >
          <div className="text-center">
            <h2
              className={`text-3xl md:text-5xl font-bold ${theme === "dark" ? "dark-text" : "light-text"} mb-4`}
            >
              {t("experience")}
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t("experienceDesc")}
            </p>
          </div>
        </section>

        {/* Publication Section */}
        <section
          id="publication"
          className={`min-h-screen flex items-center justify-center px-4 ${theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent"} animate-fade-in-up`}
        >
          <div className="text-center">
            <h2
              className={`text-3xl md:text-5xl font-bold ${theme === "dark" ? "dark-text" : "light-text"} mb-4`}
            >
              {t("publication")}
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t("publicationDesc")}
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`min-h-screen flex items-center justify-center px-4 ${theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent"} animate-fade-in-up`}
        >
          <div className="text-center">
            <h2
              className={`text-3xl md:text-5xl font-bold ${theme === "dark" ? "dark-text" : "light-text"} mb-4`}
            >
              {t("projects")}
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t("projectsDesc")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
