import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Home = () => {
  const changeLanguageHandler = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  let langName;

  if (localStorage.getItem("lang") === "en") {
    langName = <p onClick={() => changeLanguageHandler("ge")}>EN</p>;
  } else if (localStorage.getItem("lang") === "ge") {
    langName = <p onClick={() => changeLanguageHandler("jp")}>GE</p>;
  } else if (localStorage.getItem("lang") === "jp") {
    langName = <p onClick={() => changeLanguageHandler("de")}>JP</p>;
  } else {
    langName = <p onClick={() => changeLanguageHandler("en")}>DE</p>;
  }

  const { t } = useTranslation();

  return (
    <>
      {t("home")}
      {t("about")}
      {t("book")}
      <Link to="/login">შესვლა</Link>
      {langName}
    </>
  );
};
