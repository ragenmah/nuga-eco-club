import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../../content_option";
import Themetoggle from "../themetoggle";

const FooterMain = () => {
  return (
    <>
      <footer className="site__footer">
        <ul>
          <li>Contact</li>
          <li>Created by Team Nuga</li>
          <li>
            <a href="https://khalti.com/" target="_blank">
              Donate
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default FooterMain;
