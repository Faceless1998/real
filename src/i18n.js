import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "home",
      about: "about",
      book: "book",
    },
  },
  ge: {
    translation: {
      home: "მთავარი",
      about: "ჩვენს შესახებ",
      book: "წიგნები",
    },
  },
  de: {
    translation: {
      home: "heim",
      about: "uber uns",
      book: "buch",
    },
  },
  jp: {
    translation: {
      home: "家",
      about: "私たちについて",
      book: "本",
    },
  },
};

i18n
    .use(initReactI18next)
    .init(
        {
            resources,
            lng: `${ localStorage.getItem('lang') || "ge" }`,
            interpolation : {
                escapeValue: false
            }
        }
    );

export default i18n;
