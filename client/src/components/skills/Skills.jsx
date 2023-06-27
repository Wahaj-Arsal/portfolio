/** @format */

import React from "react";

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

export default function Skills() {
  return (
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
  );
}
