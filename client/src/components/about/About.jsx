/** @format */

import "./About.scss";

import React from "react";

import profilePicture from "../../assets/images/about_image.png";

export default function About() {
  return (
    <div id="AboutMe" className="about-container">
      <div className="about">
        <h5 className="about__name">Wahaj Arsal</h5>
        <h2 className="about__title">About Me</h2>
        <div className="about__information">
          <div className="about__picture">
            <img className="about__image" src={profilePicture} alt="profile" />
          </div>
          <div className="about__details">
            <p className="about__text">
              A Full Stack Web Developer with a background in Business Analysis.
              I'm a detail-oriented problem solver with expertise in HTML, CSS,
              JavaScript, and React.
              <br />
              I'm passionate about building user-friendly websites and
              applications that deliver tangible results.
              <br />
            </p>
            <div className="skills-container">
              <h5 className="skills">
                Here are some of the technologies I have worked with
              </h5>
              <ul className="about__tech">
                <li className="about__skill">HTML/HTML5</li>
                <li className="about__skill">CSS/CSS3</li>
                <li className="about__skill">SCSS</li>
                <li className="about__skill">JavaScript</li>
                <li className="about__skill">React.js</li>
                <li className="about__skill">Angular</li>
                <li className="about__skill">Node.js</li>
                <li className="about__skill">Express.js</li>
                <li className="about__skill">MySQL</li>
                <li className="about__skill">PHP</li>
                <li className="about__skill">Stripe</li>
                <li className="about__skill">EmailJS</li>
                <li className="about__skill">MapBox</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
