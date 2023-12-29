import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../../content_option";
import Themetoggle from "../themetoggle";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../languageswitcher";
import SearchBarNav from "../searchbar/searchbar_nav";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const { i18n, t } = useTranslation();

  return (
    <div>
      <header className="fixed-top site__header">
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
        <div id="header-top" className="header-top">
          <ul>
            <li>
              <div className="header-top-left">
                <ul>
                  <li className="header-top-contact">+1 234 567 8900</li>
                  <li className="header-top-contact vertical-line">
                    nuga@info.com
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

                  <Link to="/auth/signin" className="">
                    <li className="header-top-contact vertical-line">
                      {t("auth.SignIn")}
                    </li>
                    <li className="header-top-contact vertical-line">
                      {t("auth.SignUp")}
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <nav>
            <Link to="/" className="link">
              <h4 className="logo">
                {/* <img src="/static/images/Nuga.png"></img> */}
                {/* <img src="/static/images/Eco-Club.png"></img> */}
                <h2 className="logo__down">
                  {/* Eco-Club */}
                  <img
                    src="http://localhost:3000/nuga-eco-club/static/images/logo.png"
                    height={120}
                    width={120}
                  ></img>
                </h2>
                {/* <h3 className="logo__top">Nuga</h3> */}
              </h4>
            </Link>

            <ul>
              <li>
                <div className="d-flex justify-content-center">
                  <Col>
                    {/* <Container className="container_search"> */}
                    <SearchBarNav />
                    {/* <h1>{t("hello")}</h1> */}
                    {/* </Container> */}
                  </Col>
                </div>
              </li>
              <li>
                <Link to="/discover" className="link">
                  {t("header.Discover")}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="link">
                  {t("header.Sites")}
                </Link>
              </li>
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
              <li>
                <Link to="/ContactUs" className="link">
                  {t("header.ContactUs")}
                </Link>
              </li>
              <li>
                {/* <Link to="/auth/signin" className="">
                  <h4 className="sign__up">{t("header.Login/Register")}</h4>
                </Link> */}
              </li>
              <li>
                <Col></Col>
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
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
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
