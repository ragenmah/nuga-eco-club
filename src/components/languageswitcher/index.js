import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./style.css";
const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <select
      value={i18n.language}
      className="select-opt"
      onChange={handleLanguageChange}
    >
      <option value="en">
        <img
          src="https://ragenmah.github.io/nuga-eco-club/static/backgrounds/image_1.png"
          alt="en"
        />
        {t("lang.eng")}
      </option>
      <option value="np">
        <img src="static/flags/ne.svg" alt="en" />
        {t("lang.np")}
      </option>
    </select>
  );
};

export default LanguageSwitcher;
