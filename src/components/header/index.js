import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../../content_option";
import Themetoggle from "../themetoggle";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../languageswitcher";
import SearchBarNav from "../searchbar/searchbar_nav";
import Modal from "../modal";
import { SigIn } from "../../pages/auth/sigin";
import SearchbarTop from "../searchbar/searchbar_top";
import SiginAuth from "../../pages/auth/sigin_auth";

const Headermain = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const { i18n, t } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showSearchTop, setShowSearchTop] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleShowSearchTop = () => {
    setShowSearchTop(true);
  };

  const handleHideSearchTop = () => {
    setShowSearchTop(false);
  };

  const listenScrollEvent = (e) => setIsScrolled(window.scrollY > 400);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      <header className="fixed-top site__header ">
        <SiginAuth show={showModal} handleClose={handleHideModal} />
        {showSearchTop ? (
          <SearchbarTop
            handleHideSearchTop={(event) => handleHideSearchTop(event)}
          />
        ) : (
          <></>
        )}
        {!isScrolled && (
          <div id="header-top" className="header-top">
            <ul>
              <li>
                <div className="header-top-left">
                  <ul>
                    <li className="header-top-contact">
                      <a href="tel:+977 9843914602">+977 9843914602</a>
                    </li>
                    <li className="header-top-contact vertical-line">
                      <a href="mailto:projectnuganepal@gmail.com">
                        projectnuganepal@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="head-responsive-right pull-right">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <LanguageSwitcher />
                    </li>

                    <div onClick={handleShowModal} className="">
                      <li className="header-top-contact vertical-line">
                        {t("auth.SignIn")}
                      </li>
                    </div>

                    <li className="header-top-contact  hide-toggle">
                      <Themetoggle />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        )}

        <div className={"site__header__color"}>
          <nav className={isScrolled && "nav__color"} class="main-nav">
            <Link to="/" className="link">
              <h4 className="logo">
                <h2 className="logo__down">
                  {/* Eco-Club */}
                  {isScrolled ? (
                    <img
                      src="https://ragenmah.github.io/nuga-eco-club/static/images/logo.png"
                      height={90}
                      width={90}
                    ></img>
                  ) : (
                    <img
                      src="https://ragenmah.github.io/nuga-eco-club/static/images/logo.png"
                      height={120}
                      width={120}
                    ></img>
                  )}
                </h2>
              </h4>
            </Link>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <div className="d-flex justify-content-center"></div>
                </li>
                <li>
                  <Link
                    to="/discover"
                    className="link"
                    onClick={handleShowNavbar}
                  >
                    {t("header.Discover")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/heritage-walk"
                    className="link"
                    onClick={handleShowNavbar}
                  >
                    {t("header.Heritage")}
                  </Link>
                </li>
                <li>
                  <Link to="/maps" className="link" onClick={handleShowNavbar}>
                    {t("header.Maps")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/climate-emergency"
                    className="link"
                    onClick={handleShowNavbar}
                  >
                    {t("header.Climate")}
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="link" onClick={handleShowNavbar}>
                    {t("header.AboutUs")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/ContactUs"
                    className="link"
                    onClick={handleShowNavbar}
                  >
                    {t("header.ContactUs")}
                  </Link>
                </li>
                <li>
                  <div className="searchicon" onClick={handleShowSearchTop}>
                    <div className="innersearchicon">
                      <i class="fas fa-search"></i>
                    </div>
                  </div>
                </li>
                <li></li>
                <li>
                  <div className="px-2 pull-right">
                    {isScrolled && <Themetoggle />}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <a
            class={`${showNavbar ? "menu-trigger-close" : "menu-trigger"}`}
            onClick={handleShowNavbar}
          >
            {showNavbar ? <a className=""></a> : <span>Menu</span>}
          </a>
        </div>
      </header>
    </div>
  );
};

export default Headermain;
