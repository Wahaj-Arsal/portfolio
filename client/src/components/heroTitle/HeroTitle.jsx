/** @format */

import "./HeroTitle.scss";

import React from "react";

import heroImg from "../../assets/images/hero_image.png";

export default function HeroTitle() {
  return (
    <div className="hero-container">
      <div className="hero">
        {/* <Header /> */}
        <div className="hero__picture">
          <img className="hero__img" src={heroImg} alt="hero" />
        </div>
        <div className="hero__text">
          <h5 className="hero__name">Wahaj Arsal</h5>
          <h1 className="hero__title">Full Stack Web Developer</h1>
        </div>
      </div>
    </div>
  );
}
