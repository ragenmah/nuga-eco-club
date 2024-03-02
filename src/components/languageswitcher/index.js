import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { languageSwitcherData } from "../../content_option";

import "./style.css";
const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [langShort, setLangShort] = useState("en");
  const [imgSelected, setImgSelected] = useState(
    "https://ragenmah.github.io/nuga-eco-club/static/flags/en-us.svg"
  );

  const handleLanguageChange = (e) => {
    // const newLang = e.target.value;
    const newLang = e;
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleChangeLanguage = (e) => {
    setSelectedLang(e.value);

    // alert(e);
    i18n.changeLanguage(e.value);
    setLangShort(e.value);
    setImgSelected(e.img);
    setMenuVisible(!isMenuVisible);
  };
  const click = (value) => {
    console.log(value);
  };

  return (
    <div className="langpart">
      <button onClick={toggleMenu}>
        <img src={imgSelected} height={20} alt={langShort}></img>
        <span className="m-2">{langShort}</span>
      </button>

      {isMenuVisible && (
        <div className={`menu ${isMenuVisible ? "visible" : "hidden"}`}>
          <ul>
            {languageSwitcherData.map((value, i) => (
              <li
                onClick={() => handleChangeLanguage(value)}
                // onClick={() => click(value)}

                key={i}
                value={value.value}
              >
                <img src={value.img} height={20} alt="en"></img>
                <span className="m-2"> {value.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
