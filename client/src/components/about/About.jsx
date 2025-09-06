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
              Software Developer with a background in business transformation
              with experience in building responsive web applications and
              integrating APIs.
              <br />
              <br />
              Adept at collaborating across teams, gathering requirements, and
              translating business needs into technical solutions.
              <br />
              <br />
              Currently seeking developer roles to apply technical expertise in
              creating modern, user-friendly interfaces.
              <br />
            </p>
            <div className="skills-container">
              <h5 className="skills">
                Here are some of the technologies I have worked with
              </h5>
              <ul className="about__tech">
                <li className="about__skill">HTML5</li>
                <li className="about__skill">CSS/SCSS</li>
                <li className="about__skill">JavaScript</li>
                <li className="about__skill">React</li>
                <li className="about__skill">PHP</li>
                <li className="about__skill">Laravel</li>
                <li className="about__skill">Node.js</li>
                <li className="about__skill">MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
