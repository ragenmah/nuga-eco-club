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

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const { i18n, t } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [hideModal, setHideModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const listenScrollEvent = (e) => setIsScrolled(window.scrollY > 400);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      <header className="fixed-top site__header ">
        {/* <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            <img src="/static/images/Nuga.png"></img>
            <br></br>
            <img src="/static/images/Eco-Club.png"></img>
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div> */}

        <Modal show={showModal} handleClose={handleHideModal}>
          <SigIn />
        </Modal>
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
              {/* <div class="search-container">
                <form action="/search" method="get">
                  <input
                    className="search expandright"
                    id="searchright"
                    type="search"
                    name="q"
                    placeholder="Search"
                  />
                  <label className="button searchbutton" for="searchright">
                    <span className="mglass">&#9906;</span>
                  </label>
                </form>
              </div>
              <a href="#" class="button">
                x
              </a> */}
              <Col>{/* <SearchBarNav /> */}</Col>
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
                      {/* <li className="header-top-contact vertical-line">
                        {t("auth.SignUp")}
                      </li> */}
                    </div>
                    <li className="header-top-contact ">
                      <Themetoggle />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        )}
        {/* <div className={isScrolled && "site__header__color"}> */}
        <div className={"site__header__color"}>
          <nav className={isScrolled && "nav__color"}>
            <Link to="/" className="link">
              <h4 className="logo">
                {/* <img src="/static/images/Nuga.png"></img> */}
                {/* <img src="/static/images/Eco-Club.png"></img> */}
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
                {/* <h3 className="logo__top">Nuga</h3> */}
              </h4>
            </Link>

            <ul>
              <li>
                <div className="d-flex justify-content-center"></div>
              </li>
              <li>
                <Link to="/discover" className="link">
                  {t("header.Discover")}
                </Link>
              </li>
              <li>
                <Link to="/heritage-walk" className="link">
                  {t("header.Heritage")}
                </Link>
              </li>
              <li>
                <Link to="/maps" className="link">
                  {t("header.Maps")}
                </Link>
              </li>
              <li>
                <Link to="/climate-emergency" className="link">
                  {t("header.Climate")}
                </Link>
              </li>
              {/* <li>
                <Link to="/maps" className="link">
                  {t("header.Climate")}
                </Link>
              </li> */}
              <li>
                <Link to="/about" className="link">
                  {t("header.AboutUs")}
                </Link>
                {/* <ul>
                  <li>
                    <Link to="/about" className="link">
                      {t("header.AboutUs")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/teams" className="link">
                      {t("header.Team")}
                    </Link>
                  </li>
                </ul> */}
              </li>
              {/* <li>
                <Link to="/teams" className="link">
                  {t("header.Team")}
                </Link>
              </li> */}
              <li>
                <Link to="/ContactUs" className="link">
                  {t("header.ContactUs")}{" "}
                </Link>
              </li>
              <li>
                {isScrolled && (
                  <Link to="/auth/signin" className="">
                    <h4 className="sign__up">{t("header.Login/Register")}</h4>
                  </Link>
                )}
              </li>
              <li>
                {" "}
                <div className="px-2 pull-right">
                  {isScrolled && <Themetoggle />}
                </div>
              </li>
              {/* <li className="menu_item">
                <Link onClick={handleToggle} to="/contact" className="my-3">
                  Sign up
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
        {/* <h1>{t("header.message")}</h1> */}
        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li></li>
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className="my-3"
                    >
                      {" "}
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      {" "}
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.twitter}>Twitter</a>
              <a href={socialprofils.linkedin}>Link</a>
            </div>
            {/* <p className="copyright m-0">copyright __ {logotext}</p> */}
          </div>
        </div>
      </header>
      {/* <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div> */}
    </div>
  );
};

export default Headermain;
