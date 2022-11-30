/** @format */

import "./Home.scss";

import profilePicture from "../../assets/images/wahaj.jpg";
import openFashion from "../../assets/images/openfashion.jpg";
import playflix from "../../assets/images/playflix.jpg";
import chords from "../../assets/images/chords.jpg";
import html from "../../assets/images/html5.svg";
import javascript from "../../assets/images/js.svg";
import scss from "../../assets/images/sass.svg";
import react from "../../assets/images/react.svg";
import node from "../../assets/images/node.svg";
import express from "../../assets/images/express.svg";
import github from "../../assets/images/github.svg";
import stripe from "../../assets/images/stripe.svg";
import twilio from "../../assets/images/twilio.svg";
import mapbox from "../../assets/images/mapbox.svg";

function Home() {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          {/* <Header /> */}
          <h1 className="hero__title">Full Stack Web Developer</h1>
          <h5 className="hero__name">Wahaj Arsal</h5>
        </div>
      </div>
      <div className="about-container">
        <div className="about">
          {/* <h5 className="about__name">Wahaj Arsal</h5> */}
          <h2 className="about__title">About Me</h2>
          <div className="about__information">
            <img className="about__image" src={profilePicture} alt="profile" />
            <p className="about__text">
              I'm Wahaj, a recent bootcamp graduate with a background in
              Business Analysis and Projects. I have a passion for creating and
              building things that make a difference. <br />I want to combine my
              skills as a developer and Business Analysis to create meaningful
              solutions which are fit for purpose.
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio">
          <h2 className="portfolio__title">Portfolio</h2>
          <div className="card">
            <div className="card__image">
              <img
                className="card__picture-openfashion"
                src={openFashion}
                alt="website screenshot"
              />
            </div>
            <div className="card__information">
              <h3 className="card__title">E-commerce Website - Open Fashion</h3>
              <p className="card__text">
                Open Fashion is the final project for my Full Stack Web
                Development Bootcamp.
              </p>
              <p className="card__text">
                Open Fashion is a functional e-commerce mobile website which
                allows users to browse, filter, review and purchase clothes. The
                website also has mapbox integration to allow users to locate and
                get directions to their nearest store.
              </p>
              <div className="stack">
                <p className="stack__item">React</p>
                <p className="stack__item">Node.js</p>
                <p className="stack__item">Stripe</p>
                <p className="stack__item">Twilio</p>
                <p className="stack__item">MapBox</p>
              </div>
              <div className="buttons">
                <a
                  href="https://openfashion.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttons__live">Live Site</button>
                </a>
                <a
                  href="https://github.com/Wahaj-Arsal/OpenFashion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttons__git">Git Repo</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                className="card__picture"
                src={playflix}
                alt="website screenshot"
              />
            </div>
            <div className="card__information">
              <h3 className="card__title">Streaming Website - PlayFlix</h3>
              <p className="card__text">
                PlayFlix is a full stack web application with responsive design.
                <br />
                PlayFlix is a demo streaming website which allows users to
                upload videos, create and delete comments.
                <br />
                React Router Dom v5.3 with routes to each page.
              </p>
              <div className="stack">
                <p className="stack__item">HTML</p>
                <p className="stack__item">SASS</p>
                <p className="stack__item">React</p>
                <p className="stack__item">Node.js</p>
                <p className="stack__item">Express</p>
              </div>
              <div className="buttons">
                <a
                  href="https://playflix-6b2a0.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttons__live">Live Site</button>
                </a>
                <a
                  href="https://github.com/Wahaj-Arsal/Play_Flix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttons__git">Git Repo</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                className="card__picture"
                src={chords}
                alt="website screenshot"
              />
            </div>
            <div className="card__information">
              <h3 className="card__title">Music Site - Puddle of Chords</h3>
              <p className="card__text">
                A response react application with mobile first design. <br />
                BEM naming convention. <br />
                Animations to bring the website to life. <br />
                DOM Manipulation to dynamically add, remove and modify elements.
              </p>
              <div className="stack">
                <p className="stack__item">HTML</p>
                <p className="stack__item">SASS</p>
                <p className="stack__item">FlexBox</p>
                <p className="stack__item">JavaScript</p>
                <p className="stack__item">Axios</p>
              </div>
              <div className="buttons">
                <a
                  href="https://puddleofchords.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttons__live">Live Site</button>
                </a>
                <a
                  href="https://github.com/Wahaj-Arsal/Chords"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttons__git">Git Repo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__images">
            <img className="skills__icon" src={html} alt="html icon" />
            <img
              className="skills__icon"
              src={javascript}
              alt="javascript icon"
            />
            <img className="skills__icon" src={scss} alt="sass icon" />
            <img className="skills__icon" src={react} alt="react icon" />
            <img className="skills__icon" src={node} alt="node icon" />
            <img
              className="skills__icon skills__icon-margin"
              src={express}
              alt="express icon"
            />
            <img className="skills__icon" src={github} alt="github icon" />
            <img className="skills__icon" src={stripe} alt="stripe icon" />
            <img
              className="skills__icon skills__icon-margin"
              src={twilio}
              alt="twilio icon"
            />
            <img
              className="skills__icon skills__icon-margin"
              src={mapbox}
              alt="mapbox icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
