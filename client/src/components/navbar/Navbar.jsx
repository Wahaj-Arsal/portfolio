/** @format */

import "./Navbar.scss";

import logo from "../../assets/icons/logo.svg";
import burgerMenu from "../../assets/icons/burgerMenu.svg";

import React, { useState } from "react";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);
  const hideSideBar = () => setSideBar(false);

  return (
    <>
      <section className="navbar-container">
        <div className="burger-menu">
          <div className="burger-menu__left">
            <img className="burger-menu__logo" src={logo} />
            <p className="burger-menu__text">
              Wahaj <br />
              <span>| Web Developer</span>
            </p>
          </div>
          <div className="burger-menu__right">
            <img
              className="burger-menu__image"
              src={burgerMenu}
              onClick={showSideBar}
            />
          </div>
        </div>
        {/* <div className="menu">
        <ul>
          <li>About Me</li>
          <li>Latest Work</li>
          <li>Contact Me</li>
          <button>Resume</button>
        </ul>
      </div> */}
      </section>
      <section
        className={
          sideBar
            ? "sideBar-container sideBar-container--active"
            : "sideBar-container"
        }
      >
        <div className="sideBar-menu">
          <ul className="sideBar-menu__list">
            <li className="sideBar-menu__item">About Me</li>
            <li className="sideBar-menu__item">Latest Work</li>
            <li className="sideBar-menu__item">Contact Me</li>
            <button className="sideBar-menu__button">Resume</button>
          </ul>
        </div>
      </section>
    </>
  );
}
