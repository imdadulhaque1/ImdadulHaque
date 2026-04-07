import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const baseEnglishResources = {
  name: "Imdadul Haque",
  hireMe: "Hire Me",
  about: "About",
  contactMe: "Contact Me",
  experience: "Experience",
  publication: "Publication",
  projects: "Projects",
  hireMeDesc:
    "I am a passionate developer ready to bring your ideas to life.",
  aboutDesc:
    "Learn more about my background, skills, and what drives me as a developer.",
  contactMeDesc:
    "Get in touch with me for collaborations or opportunities.",
  experienceDesc:
    "Explore my professional journey and the experiences that shaped my career.",
  publicationDesc:
    "Check out my published works and contributions to the field.",
  projectsDesc:
    "Discover the projects I've worked on and the technologies I've used.",
  language: "Language",
};

const banglaTranslations = {
  name: "ইমদাদুল হাক",
  hireMe: "আমাকে নিয়োগ করুন",
  about: "আমার সম্পর্কে",
  contactMe: "যোগাযোগ করুন",
  experience: "অভিজ্ঞতা",
  publication: "প্রকাশনা",
  projects: "প্রকল্প",
  hireMeDesc:
    "আমি একজন আবেগপ্রবণ ডেভেলপার যিনি আপনার ধারণাকে বাস্তবে রূপান্তরিত করতে প্রস্তুত।",
  aboutDesc:
    "আমার পটভূমি, দক্ষতা এবং আমি একজন ডেভেলপার হিসাবে কী করি তা সম্পর্কে আরও জানুন।",
  contactMeDesc: "সহযোগিতা বা সুযোগের জন্য আমার সাথে যোগাযোগ করুন।",
  experienceDesc:
    "আমার পেশাদার যাত্রা এবং আমার ক্যারিয়ারকে গঠন করেছে এমন অভিজ্ঞতাগুলি অন্বেষণ করুন।",
  publicationDesc: "আমার প্রকাশিত কাজ এবং এই ক্ষেত্রে অবদান দেখুন।",
  projectsDesc:
    "আমি যে প্রকল্পগুলিতে কাজ করেছি এবং আমি যে প্রযুক্তিগুলি ব্যবহার করেছি তা আবিষ্কার করুন।",
  language: "ভাষা",
};

const resources = {
  en: {
    common: baseEnglishResources,
  },
  bn: {
    common: banglaTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export { baseEnglishResources };
export default i18n;
