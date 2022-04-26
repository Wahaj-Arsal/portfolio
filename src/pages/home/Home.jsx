/** @format */

import "./Home.scss";

import profiePicture from "../../assets/images/wahaj.jpg";
import openFashion from "../../assets/images/openfashion.jpg";
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
            <img className="about__image" src={profiePicture} />
            <p className="about__text">
              I'm Wahaj, a recent bootcamp graduate with a background in Change
              Management. I have a passion for creating and building things that
              make a difference. <br />I want to combine my skills as a
              developer and change manager to create meaningful solutions which
              are fit for purpose.
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio">
          <h2 className="portfolio__title">Portfolio</h2>
          <div className="card">
            <div className="card__image">
              <img className="card__picture" src={openFashion} />
            </div>
            <div className="card__information">
              <h3 className="card__title">Open Fashion</h3>
              <p className="card__text">Information about the project</p>
              <div className="stack">
                <p className="stack__react">React</p>
                <p className="stack__node">Node.js</p>
                <p className="stack__express">Express</p>
              </div>
              <div className="buttons">
                <button className="buttons__live">Live Site</button>
                <button className="buttons__git">Git Repo</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img className="card__picture" src={openFashion} />
            </div>
            <div className="card__information">
              <h3 className="card__title">NewFlix</h3>
              <p className="card__text">Information about the project</p>
              <div className="stack">
                <p className="stack__react">React</p>
                <p className="stack__node">Node.js</p>
                <p className="stack__express">Express</p>
              </div>
              <div className="buttons">
                <button className="buttons__live">Live Site</button>
                <button className="buttons__git">Git Repo</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img className="card__picture" src={openFashion} />
            </div>
            <div className="card__information">
              <h3 className="card__title">BandSite</h3>
              <p className="card__text">Information about the project</p>
              <div className="stack">
                <p className="stack__react">React</p>
                <p className="stack__node">Node.js</p>
                <p className="stack__express">Express</p>
              </div>
              <div className="buttons">
                <button className="buttons__live">Live Site</button>
                <button className="buttons__git">Git Repo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__images">
            <img className="skills__icon" src={html} />
            <img className="skills__icon" src={javascript} />
            <img className="skills__icon" src={scss} />
            <img className="skills__icon" src={react} />
            <img className="skills__icon" src={node} />
            <img className="skills__icon skills__icon-margin" src={express} />
            <img className="skills__icon" src={github} />
            <img className="skills__icon" src={stripe} />
            <img className="skills__icon skills__icon-margin" src={twilio} />
            <img className="skills__icon skills__icon-margin" src={mapbox} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
