/** @format */

import "./Hero.scss";

import React from "react";

import heroImg from "../../assets/images/hero_image.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        {/* <Header /> */}
        <div className="hero__picture">
          <img className="hero__img" src={heroImg} alt="hero" />
        </div>
        <div className="hero__text">
          <h1 className="hero__title">Full Stack Web Developer</h1>
          <h5 className="hero__name">Wahaj Arsal</h5>
        </div>
      </div>
    </div>
  );
}
