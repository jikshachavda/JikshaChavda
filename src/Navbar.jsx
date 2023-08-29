import logo from "./image/logo.png";
import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Fiverr from "./image/fiverricon.png";
import insta from "./image/instaicon.png";
import linkedin from "./image/linkedinicon.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <img src={logo} />
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/skill">skill</NavLink>
            </li>
            <li>
              <NavLink to="/project">projects</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.fiverr.com/jikshachavda/front-end-web-development-in-react-js-html-css-javascript-bootstrap-and-sass"
                target="Jiksha chavda"
              >
                <img src={Fiverr} alt="" className="icon fiverr" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jecks_developer/"
                target="Jiksha chavda"
              >
                <img src={insta} alt="" className="icon insta" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jiksha-chavda/"
                target="Jiksha chavda"
              >
                <img src={linkedin} alt="" className="icon linkedin" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
