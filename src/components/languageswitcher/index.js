import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">{t("lang.eng")}</option>
      <option value="np">{t("lang.np")}</option>
    </select>
  );
};

export default LanguageSwitcher;
