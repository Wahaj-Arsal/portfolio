/** @format */

import "./Project.scss";

import React from "react";

import openFashion from "../../assets/images/openfashion_v2.jpg";
import playflix from "../../assets/images/playflix.jpg";
import chords from "../../assets/images/chords.jpg";

import gitHub from "../../assets/icons/github_v2.png";
import externalLink from "../../assets/icons/externalLink.png";

export default function Project() {
  return (
    <section className="project-container">
      <div className="project">
        <div className="card">
          {/* <div className="card__left">
          </div> */}
          <img className="card__image" src={openFashion} />
          <div className="card__right">
            <h4 className="card__title">OpenFashion</h4>
            <h5 className="card__name">E-Commerce Website</h5>
            <div className="card__information">
              <p className="card__summary">
                A full-stack e-commerce website I created which allows users to
                browse, review and purchase products.
              </p>
            </div>
            <div className="card__tech-stack">
              <div className="card__tech">React.js</div>
              <div className="card__tech">Node.js</div>
              <div className="card__tech">Stripe</div>
              <div className="card__tech">EmailJS</div>
            </div>
            <div className="card__links">
              <div className="card__github">
                <a
                  href="https://github.com/Wahaj-Arsal/OpenFashion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gitHub} />
                </a>
              </div>
              <div className="card__website">
                <a
                  href="https://openfashion.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={externalLink} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
