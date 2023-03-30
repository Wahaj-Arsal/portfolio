/** @format */

import "./About.scss";

import React from "react";

import profilePicture from "../../assets/images/about_image.png";

export default function About() {
  return (
    <div className="about-container">
      <div className="about">
        <h2 className="about__title">About Me</h2>
        <h5 className="about__name">Wahaj Arsal</h5>
        <div className="about__information">
          <img className="about__image" src={profilePicture} alt="profile" />
          <p className="about__text">
            A Full Stack Web Developer with a background in Business Analysis.
            I'm a detail-oriented problem solver with expertise in HTML, CSS,
            JavaScript, and React.
            <br />
            <br />
            I'm passionate about building user-friendly websites and
            applications that deliver tangible results.
          </p>
        </div>
      </div>
    </div>
  );
}
